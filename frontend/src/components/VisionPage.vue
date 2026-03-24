<script setup>
import { ref } from 'vue'
import { useIntakeForm } from '../composables/useIntakeForm.js'

const { formData, errors, next, updateField } = useIntakeForm()
const showTooltip = ref(false)

function handleNext() {
  next()
}
</script>

<template>
  <div class="page-content">
    <div class="animate-fade-in-up">
      <h2 class="font-display text-3xl md:text-4xl font-semibold text-ink mb-2">
        Tell us about your vision.
      </h2>
      <p class="text-ink-muted text-base md:text-lg mb-8 max-w-xl">
        In a few sentences, share what you're envisioning. What's the project?
        What excites you about it? There are no wrong answers — we just want to hear what inspires you.
      </p>

      <form @submit.prevent="handleNext" class="max-w-xl">
        <!-- Vision Textarea -->
        <div class="form-group">
          <textarea
            :value="formData.vision"
            @input="updateField('vision', $event.target.value)"
            placeholder="What's your project about? What inspires you? What would success look like?"
            rows="7"
            class="form-input resize-none"
            :class="{ 'form-input-error': errors.vision }"
          ></textarea>
          <div class="flex justify-between items-start mt-1.5">
            <p v-if="errors.vision" class="form-error">{{ errors.vision }}</p>
            <p v-else class="text-xs text-ink-muted">Please write at least 3 sentences.</p>
          </div>
        </div>

        <!-- NDA Section -->
        <div class="mt-10 pt-8 border-t border-border">
          <p class="font-display text-lg text-ink mb-4">Your ideas are safe with us.</p>

          <label class="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              :checked="formData.ndaRequested"
              @change="updateField('ndaRequested', $event.target.checked)"
              class="mt-1 w-5 h-5 rounded border-border text-verity focus:ring-verity/30 cursor-pointer"
            />
            <span class="text-sm text-ink leading-relaxed">
              I'd like both parties to sign a mutual NDA to protect our conversation.
              <button
                type="button"
                @click.stop="showTooltip = !showTooltip"
                @mouseenter="showTooltip = true"
                @mouseleave="showTooltip = false"
                class="inline-flex items-center justify-center w-4 h-4 ml-1 text-[10px] font-bold text-ink-muted bg-surface-2 rounded-full
                       hover:bg-verity hover:text-white transition-colors duration-200 align-middle"
                aria-label="What is a mutual NDA?"
              >
                ?
              </button>
            </span>
          </label>

          <!-- Tooltip -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
          >
            <div v-if="showTooltip" class="mt-3 p-4 bg-surface-2 rounded-xl text-sm text-ink-muted leading-relaxed">
              A mutual NDA means both sides — you and Verifesto Studios — agree to keep everything we discuss confidential.
              It protects your ideas and our process equally. It's a sign of mutual respect and trust.
            </div>
          </Transition>
        </div>

        <button type="submit" class="btn-primary w-full mt-10">
          Continue
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>
