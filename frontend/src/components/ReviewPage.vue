<script setup>
import { useIntakeForm } from '../composables/useIntakeForm.js'

const { formData, submit, isSubmitting, submitError, goTo } = useIntakeForm()
</script>

<template>
  <div class="page-content">
    <div class="animate-fade-in-up">
      <h2 class="font-display text-3xl md:text-4xl font-semibold text-ink mb-2">
        Let's make sure everything looks right.
      </h2>
      <p class="text-ink-muted text-base md:text-lg mb-10">
        Take a moment to review what you've shared. You can go back and edit anything before submitting.
      </p>

      <div class="max-w-xl space-y-6">
        <!-- Contact Info -->
        <div class="review-card">
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-display text-lg font-semibold text-ink">Contact Information</h3>
            <button @click="goTo('contact')" class="review-edit-btn">Edit</button>
          </div>
          <dl class="space-y-2 text-sm">
            <div class="flex gap-2">
              <dt class="text-ink-muted w-24 shrink-0">Name</dt>
              <dd class="text-ink">{{ formData.fullName }}</dd>
            </div>
            <div class="flex gap-2">
              <dt class="text-ink-muted w-24 shrink-0">Email</dt>
              <dd class="text-ink">{{ formData.email }}</dd>
            </div>
            <div class="flex gap-2">
              <dt class="text-ink-muted w-24 shrink-0">Phone</dt>
              <dd class="text-ink">{{ formData.phone || 'Not provided' }}</dd>
            </div>
            <div class="flex gap-2">
              <dt class="text-ink-muted w-24 shrink-0">Company</dt>
              <dd class="text-ink">{{ formData.company || 'Not provided' }}</dd>
            </div>
          </dl>
        </div>

        <!-- Vision -->
        <div class="review-card">
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-display text-lg font-semibold text-ink">Your Vision</h3>
            <button @click="goTo('vision')" class="review-edit-btn">Edit</button>
          </div>
          <p class="text-sm text-ink leading-relaxed whitespace-pre-line">{{ formData.vision }}</p>
          <div v-if="formData.ndaRequested" class="mt-3 pt-3 border-t border-border">
            <p class="text-sm text-verity flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Mutual NDA requested
            </p>
          </div>
        </div>

        <!-- Error -->
        <p v-if="submitError" class="text-sm text-error text-center p-3 bg-error/5 rounded-xl">
          {{ submitError }}
        </p>

        <!-- Submit Button -->
        <button
          @click="submit"
          :disabled="isSubmitting"
          class="btn-primary w-full mt-4"
          :class="{ 'opacity-70 cursor-not-allowed': isSubmitting }"
        >
          <template v-if="isSubmitting">
            <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </template>
          <template v-else>
            Submit — Let's Begin Our Story
          </template>
        </button>
      </div>
    </div>
  </div>
</template>
