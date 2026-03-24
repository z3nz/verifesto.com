<script setup>
import { ref, computed } from 'vue'
import { useIntakeForm } from '../composables/useIntakeForm.js'

const { formData, errors, next, updateField, countSentences } = useIntakeForm()
const showTooltip = ref(false)

const sentenceCount = computed(() => countSentences(formData.value.vision))
const sentencesNeeded = computed(() => Math.max(0, 3 - sentenceCount.value))
</script>

<template>
  <div class="page-content">
    <div class="animate-fade-in-up">
      <span class="chapter-label">Chapter Three</span>

      <h2 class="font-display text-3xl md:text-4xl font-light text-ink tracking-tight mb-3">
        Tell us about your vision.
      </h2>
      <p class="font-body text-base text-ink-muted mb-8 leading-relaxed max-w-lg">
        In a few sentences, share what you're envisioning. What's the project? What excites you about it?
        There are no wrong answers — we just want to hear what inspires you.
      </p>

      <form @submit.prevent="next()" novalidate class="max-w-lg">
        <!-- Vision textarea -->
        <div class="form-group">
          <textarea
            :value="formData.vision"
            @input="updateField('vision', $event.target.value)"
            placeholder="What's your project about? What inspires you? What would success look like?"
            rows="7"
            class="form-input"
            :class="{ 'form-input-error': errors.vision }"
            aria-label="Your vision"
          />
          <div class="flex justify-between items-start mt-1.5">
            <p v-if="errors.vision" class="form-error" role="alert">{{ errors.vision }}</p>
            <p v-else-if="sentencesNeeded > 0 && formData.vision.length > 0" class="text-xs text-ink-muted mt-0.5">
              {{ sentencesNeeded }} more sentence{{ sentencesNeeded === 1 ? '' : 's' }} to go
            </p>
            <p v-else-if="sentenceCount >= 3 && formData.vision.length > 0" class="text-xs text-success mt-0.5 flex items-center gap-1">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Looks great
            </p>
            <p v-else class="text-xs text-ink-muted mt-0.5">At least 3 sentences</p>
          </div>
        </div>

        <!-- NDA section -->
        <div class="mt-10 pt-8 border-t" style="border-color: var(--color-border);">
          <p class="font-display text-lg font-light text-ink mb-5">
            Your ideas are safe with us.
          </p>

          <label class="flex items-start gap-3 cursor-pointer group">
            <div class="relative mt-0.5 flex-shrink-0">
              <input
                type="checkbox"
                :checked="formData.ndaRequested"
                @change="updateField('ndaRequested', $event.target.checked)"
                class="w-5 h-5 rounded cursor-pointer"
                style="
                  accent-color: var(--color-verity);
                  border: 1.5px solid var(--color-border);
                "
              />
            </div>
            <span class="font-body text-sm text-ink leading-relaxed">
              I'd like both parties to sign a mutual NDA to protect our conversation.
              <!-- Info tooltip button -->
              <span class="relative inline-flex ml-1 align-middle" style="top: -1px;">
                <button
                  type="button"
                  @mouseenter="showTooltip = true"
                  @mouseleave="showTooltip = false"
                  @focus="showTooltip = true"
                  @blur="showTooltip = false"
                  @click.stop="showTooltip = !showTooltip"
                  class="nda-info-btn"
                  aria-label="What is a mutual NDA?"
                >
                  i
                </button>
                <Transition
                  enter-active-class="transition duration-180 ease-out"
                  enter-from-class="opacity-0 translate-y-1 scale-95"
                  enter-to-class="opacity-100 translate-y-0 scale-100"
                  leave-active-class="transition duration-120 ease-in"
                  leave-from-class="opacity-100 translate-y-0 scale-100"
                  leave-to-class="opacity-0 translate-y-1 scale-95"
                >
                  <div v-if="showTooltip" class="nda-tooltip" role="tooltip">
                    <div class="nda-tooltip-arrow" aria-hidden="true" />
                    A mutual NDA means both sides — you and Verifesto Studios — agree to keep everything we discuss confidential.
                    It protects your ideas and our process equally.
                  </div>
                </Transition>
              </span>
            </span>
          </label>
        </div>

        <div class="pt-10">
          <button type="submit" class="btn-primary w-full">
            Review my story
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.nda-info-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: var(--color-surface-2);
  color: var(--color-ink-muted);
  font-size: 10px;
  font-style: italic;
  font-family: var(--font-display);
  font-weight: 700;
  border: none;
  cursor: help;
  transition: background-color 150ms ease, color 150ms ease;
  position: relative;
  flex-shrink: 0;
}

.nda-info-btn:hover,
.nda-info-btn:focus {
  background-color: var(--color-verity);
  color: white;
  outline: none;
}

.nda-tooltip {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 272px;
  padding: 11px 13px;
  background-color: var(--color-ink);
  color: rgba(255, 255, 255, 0.88);
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.55;
  border-radius: 8px;
  z-index: 20;
  pointer-events: none;
  white-space: normal;
  font-style: normal;
  text-align: left;
}

.nda-tooltip-arrow {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid var(--color-ink);
}
</style>
