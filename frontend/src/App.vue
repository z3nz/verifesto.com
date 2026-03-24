<script setup>
import { computed } from 'vue'
import { useIntakeForm } from './composables/useIntakeForm.js'
import StoryBookCover from './components/StoryBookCover.vue'
import WelcomePage from './components/WelcomePage.vue'
import ContactPage from './components/ContactPage.vue'
import VisionPage from './components/VisionPage.vue'
import ReviewPage from './components/ReviewPage.vue'
import ConfirmationPage from './components/ConfirmationPage.vue'

const { currentPage, direction, goTo, next, back, formPageIndex, totalFormPages } = useIntakeForm()

const showBackButton = computed(() => {
  return !['cover', 'confirmation'].includes(currentPage.value)
})

const showProgress = computed(() => {
  return ['welcome', 'contact', 'vision', 'review'].includes(currentPage.value)
})

const transitionName = computed(() => {
  return direction.value === 'forward' ? 'page-forward' : 'page-back'
})
</script>

<template>
  <div class="min-h-screen bg-surface relative overflow-hidden">
    <!-- Header Bar (back + progress) -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <header v-if="showBackButton || showProgress" class="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-sm border-b border-border/50">
        <div class="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <!-- Back Button -->
          <button
            v-if="showBackButton"
            @click="back()"
            class="flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors duration-200"
          >
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back
          </button>
          <div v-else></div>

          <!-- Progress Dots -->
          <div v-if="showProgress" class="flex items-center gap-2">
            <div
              v-for="i in totalFormPages"
              :key="i"
              class="transition-all duration-300 rounded-full"
              :class="[
                i - 1 <= formPageIndex
                  ? 'bg-verity w-2 h-2'
                  : 'bg-border w-1.5 h-1.5'
              ]"
            />
          </div>
          <div v-else></div>
        </div>
      </header>
    </Transition>

    <!-- Page Content -->
    <Transition
      :name="transitionName"
      mode="out-in"
    >
      <StoryBookCover v-if="currentPage === 'cover'" key="cover" @open="next()" />
      <WelcomePage v-else-if="currentPage === 'welcome'" key="welcome" @next="next()" />
      <ContactPage v-else-if="currentPage === 'contact'" key="contact" />
      <VisionPage v-else-if="currentPage === 'vision'" key="vision" />
      <ReviewPage v-else-if="currentPage === 'review'" key="review" />
      <ConfirmationPage v-else-if="currentPage === 'confirmation'" key="confirmation" />
    </Transition>
  </div>
</template>
