<script setup>
import { computed } from 'vue'
import { useIntakeForm } from '../composables/useIntakeForm.js'

const { reset, formData } = useIntakeForm()

const firstName = computed(() => formData.value?.fullName?.split(' ')[0] || '')
</script>

<template>
  <div class="page-content">
    <div class="animate-fade-in-up text-center">
      <!-- Success Icon -->
      <div class="w-16 h-16 mx-auto mb-8 rounded-full bg-success/10 flex items-center justify-center">
        <svg class="w-8 h-8 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ink mb-4">
        Your story has begun.
      </h2>

      <p class="text-ink-muted text-base md:text-lg leading-relaxed max-w-md mx-auto mb-12">
        Thank you for sharing your vision with us{{ firstName ? `, ${firstName}` : '' }}.
        We'll be in touch within <strong class="text-ink">2 business days</strong> to schedule your free consultation.
      </p>

      <!-- What Happens Next -->
      <div class="max-w-sm mx-auto text-left space-y-4 mb-12">
        <h3 class="font-display text-lg font-semibold text-ink text-center mb-6">What happens next</h3>

        <div class="flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-verity/10 flex items-center justify-center shrink-0 mt-0.5">
            <span class="text-verity font-display text-sm font-semibold">1</span>
          </div>
          <p class="text-sm text-ink-muted leading-relaxed">We review your submission and learn about your vision.</p>
        </div>

        <div class="flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-verity/10 flex items-center justify-center shrink-0 mt-0.5">
            <span class="text-verity font-display text-sm font-semibold">2</span>
          </div>
          <p class="text-sm text-ink-muted leading-relaxed">We reach out to schedule a free consultation call.</p>
        </div>

        <div class="flex items-start gap-4">
          <div class="w-8 h-8 rounded-full bg-verity/10 flex items-center justify-center shrink-0 mt-0.5">
            <span class="text-verity font-display text-sm font-semibold">3</span>
          </div>
          <p class="text-sm text-ink-muted leading-relaxed">Your journey with Verifesto Studios begins.</p>
        </div>
      </div>

      <button
        @click="reset()"
        class="text-verity hover:text-verity-deep font-medium text-sm transition-colors duration-200"
      >
        ← Return to cover
      </button>
    </div>
  </div>
</template>
