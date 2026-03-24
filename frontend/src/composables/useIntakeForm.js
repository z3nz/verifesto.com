import { reactive, computed, ref } from 'vue'
import { submitInquiry } from '../services/api.js'

const PAGES = ['cover', 'welcome', 'contact', 'vision', 'review', 'confirmation']

const state = reactive({
  currentPage: 'cover',
  formData: {
    fullName: '',
    email: '',
    phone: '',
    company: '',
    vision: '',
    ndaRequested: false,
  },
  errors: {},
  isSubmitting: false,
  submitError: '',
  direction: 'forward', // 'forward' | 'back'
})

function countSentences(text) {
  const trimmed = text.trim()
  if (!trimmed) return 0
  const endings = trimmed.match(/[.!?]+/g)
  return endings ? endings.length : 0
}

function validateContact() {
  const errors = {}
  const { fullName, email } = state.formData

  if (!fullName || fullName.trim().length < 2) {
    errors.fullName = 'Please enter your name (at least 2 characters).'
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  return errors
}

function validateVision() {
  const errors = {}
  const { vision } = state.formData

  if (!vision || vision.trim().length === 0) {
    errors.vision = 'Please share your vision with us.'
  } else if (countSentences(vision) < 3) {
    errors.vision = 'We\'d love to hear a bit more — please write at least 3 sentences.'
  }

  return errors
}

export function useIntakeForm() {
  const currentPage = computed(() => state.currentPage)
  const formData = computed(() => state.formData)
  const errors = computed(() => state.errors)
  const isSubmitting = computed(() => state.isSubmitting)
  const submitError = computed(() => state.submitError)
  const direction = computed(() => state.direction)

  const currentPageIndex = computed(() => PAGES.indexOf(state.currentPage))
  const totalFormPages = 4 // welcome, contact, vision, review
  const formPageIndex = computed(() => {
    const map = { welcome: 0, contact: 1, vision: 2, review: 3 }
    return map[state.currentPage] ?? -1
  })

  function goTo(page) {
    const fromIndex = PAGES.indexOf(state.currentPage)
    const toIndex = PAGES.indexOf(page)
    state.direction = toIndex > fromIndex ? 'forward' : 'back'
    state.errors = {}
    state.submitError = ''
    state.currentPage = page
  }

  function next() {
    const idx = PAGES.indexOf(state.currentPage)
    if (state.currentPage === 'contact') {
      const errs = validateContact()
      if (Object.keys(errs).length) {
        state.errors = errs
        return
      }
    }
    if (state.currentPage === 'vision') {
      const errs = validateVision()
      if (Object.keys(errs).length) {
        state.errors = errs
        return
      }
    }
    if (idx < PAGES.length - 1) {
      goTo(PAGES[idx + 1])
    }
  }

  function back() {
    const idx = PAGES.indexOf(state.currentPage)
    if (idx > 0) {
      goTo(PAGES[idx - 1])
    }
  }

  async function submit() {
    state.isSubmitting = true
    state.submitError = ''
    try {
      await submitInquiry(state.formData)
      goTo('confirmation')
    } catch (err) {
      state.submitError = err.message || 'Something went wrong. Please try again.'
    } finally {
      state.isSubmitting = false
    }
  }

  function reset() {
    state.currentPage = 'cover'
    state.formData = {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      vision: '',
      ndaRequested: false,
    }
    state.errors = {}
    state.submitError = ''
    state.isSubmitting = false
    state.direction = 'forward'
  }

  function updateField(field, value) {
    state.formData[field] = value
    if (state.errors[field]) {
      const newErrors = { ...state.errors }
      delete newErrors[field]
      state.errors = newErrors
    }
  }

  return {
    currentPage,
    formData,
    errors,
    isSubmitting,
    submitError,
    direction,
    currentPageIndex,
    totalFormPages,
    formPageIndex,
    goTo,
    next,
    back,
    submit,
    reset,
    updateField,
  }
}
