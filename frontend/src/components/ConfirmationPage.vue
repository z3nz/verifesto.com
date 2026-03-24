<script setup>
import { computed } from 'vue'
import { useIntakeForm } from '../composables/useIntakeForm.js'
const { reset, formData } = useIntakeForm()
const firstName = computed(() => formData.value?.fullName?.split(' ')[0] || '')
</script>

<template>
  <div class="page-content">
    <div class="animate-fade-in-up">
      <!-- Success mark -->
      <div class="flex items-center justify-center w-14 h-14 rounded-full mb-8" style="background-color: rgba(5, 150, 105, 0.1);">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 13l4 4L19 7" stroke="#059669" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>

      <h2 class="font-display text-4xl md:text-5xl font-light text-ink tracking-tight leading-tight mb-5">
        Your story<br>has begun.
      </h2>

      <p class="font-body text-base md:text-lg leading-relaxed text-ink-muted max-w-md mb-12">
        Thank you for sharing your vision with us{{ firstName ? `, ${firstName}` : '' }}.
        We'll be in touch within <strong class="text-ink font-medium">2 business days</strong> to schedule
        your free consultation.
      </p>

      <!-- What happens next -->
      <div class="max-w-sm mb-12">
        <h3 class="font-display text-sm font-normal tracking-widest uppercase mb-6" style="color: var(--color-ink-muted); letter-spacing: 0.12em; font-size: 0.7rem;">
          What happens next
        </h3>

        <div class="space-y-5">
          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style="background-color: rgba(37, 99, 235, 0.09);">
              <span class="font-display text-sm font-medium" style="color: var(--color-verity);">1</span>
            </div>
            <p class="font-body text-sm text-ink-muted leading-relaxed pt-1">We review your submission and learn about your vision.</p>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style="background-color: rgba(37, 99, 235, 0.09);">
              <span class="font-display text-sm font-medium" style="color: var(--color-verity);">2</span>
            </div>
            <p class="font-body text-sm text-ink-muted leading-relaxed pt-1">We reach out to schedule your free consultation call.</p>
          </div>

          <div class="flex items-start gap-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style="background-color: rgba(37, 99, 235, 0.09);">
              <span class="font-display text-sm font-medium" style="color: var(--color-verity);">3</span>
            </div>
            <p class="font-body text-sm text-ink-muted leading-relaxed pt-1">Your journey with Verifesto Studios begins.</p>
          </div>
        </div>
      </div>

      <button
        @click="reset()"
        class="font-body text-sm font-medium transition-colors duration-200 flex items-center gap-1.5"
        style="color: var(--color-ink-muted); background: none; border: none; cursor: pointer; padding: 0;"
        type="button"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M9 2L4 7l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Return to cover
      </button>
    </div>
  </div>
</template>
