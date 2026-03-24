<script setup>
import { computed } from 'vue'
import { useIntakeForm } from './composables/useIntakeForm.js'
import StoryBookCover from './components/StoryBookCover.vue'
import WelcomePage from './components/WelcomePage.vue'
import ContactPage from './components/ContactPage.vue'
import VisionPage from './components/VisionPage.vue'
import ReviewPage from './components/ReviewPage.vue'
import ConfirmationPage from './components/ConfirmationPage.vue'

const { currentPage, direction, back, formPageIndex, totalFormPages } = useIntakeForm()

const showBackButton = computed(() =>
  !['cover', 'confirmation'].includes(currentPage.value)
)
const showProgress = computed(() =>
  ['welcome', 'contact', 'vision', 'review'].includes(currentPage.value)
)
const showHeader = computed(() => showBackButton.value || showProgress.value)

const transitionName = computed(() => {
  if (direction.value === 'book-open') return 'book-open'
  return direction.value === 'forward' ? 'page-forward' : 'page-back'
})
</script>

<template>
  <div class="min-h-screen bg-surface relative overflow-x-hidden">

    <!-- Sticky Header: back button + progress -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <header
        v-if="showHeader"
        class="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-md border-b border-border/40"
      >
        <div class="max-w-2xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <button
            v-if="showBackButton"
            @click="back()"
            class="flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors duration-200 py-1 min-h-[44px]"
            aria-label="Go back"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <span class="font-body">Back</span>
          </button>
          <div v-else />

          <!-- Progress dots -->
          <div v-if="showProgress" class="flex items-center gap-2" role="progressbar" :aria-valuenow="formPageIndex + 1" :aria-valuemax="totalFormPages">
            <div
              v-for="i in totalFormPages"
              :key="i"
              class="rounded-full transition-all duration-300"
              :class="[
                i - 1 === formPageIndex
                  ? 'w-5 h-2 bg-verity'
                  : i - 1 < formPageIndex
                  ? 'w-2 h-2 bg-verity/40'
                  : 'w-2 h-2 bg-border'
              ]"
            />
          </div>
          <div v-else />
        </div>
      </header>
    </Transition>

    <!-- Page transitions -->
    <Transition :name="transitionName" mode="out-in">
      <StoryBookCover    v-if="currentPage === 'cover'"        key="cover" />
      <WelcomePage       v-else-if="currentPage === 'welcome'"  key="welcome" />
      <ContactPage       v-else-if="currentPage === 'contact'"  key="contact" />
      <VisionPage        v-else-if="currentPage === 'vision'"   key="vision" />
      <ReviewPage        v-else-if="currentPage === 'review'"   key="review" />
      <ConfirmationPage  v-else-if="currentPage === 'confirmation'" key="confirmation" />
    </Transition>

  </div>
</template>
