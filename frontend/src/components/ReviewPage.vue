<script setup>
import { useIntakeForm } from '../composables/useIntakeForm.js'
const { formData, isSubmitting, submitError, submit, goTo } = useIntakeForm()
</script>

<template>
  <div class="page-content">
    <div class="animate-fade-in-up">
      <span class="chapter-label">Final Chapter</span>

      <h2 class="font-display text-3xl md:text-4xl font-light text-ink tracking-tight mb-2">
        Let's make sure everything looks right.
      </h2>
      <p class="font-body text-base text-ink-muted mb-10 leading-relaxed">
        Take a moment to review what you've shared. You can edit anything before submitting.
      </p>

      <div class="max-w-lg space-y-4">
        <!-- Contact Information -->
        <div class="review-card">
          <div class="flex items-start justify-between mb-3">
            <h3 class="font-display text-base font-normal text-ink">Contact Information</h3>
            <button @click="goTo('contact')" class="review-edit-btn" type="button">Edit</button>
          </div>
          <dl class="space-y-2">
            <div class="flex gap-3 text-sm">
              <dt class="text-ink-muted w-20 shrink-0">Name</dt>
              <dd class="text-ink">{{ formData.fullName }}</dd>
            </div>
            <div class="flex gap-3 text-sm">
              <dt class="text-ink-muted w-20 shrink-0">Email</dt>
              <dd class="text-ink break-all">{{ formData.email }}</dd>
            </div>
            <div v-if="formData.phone" class="flex gap-3 text-sm">
              <dt class="text-ink-muted w-20 shrink-0">Phone</dt>
              <dd class="text-ink">{{ formData.phone }}</dd>
            </div>
            <div v-if="formData.company" class="flex gap-3 text-sm">
              <dt class="text-ink-muted w-20 shrink-0">Company</dt>
              <dd class="text-ink">{{ formData.company }}</dd>
            </div>
          </dl>
        </div>

        <!-- Vision -->
        <div class="review-card">
          <div class="flex items-start justify-between mb-3">
            <h3 class="font-display text-base font-normal text-ink">Your Vision</h3>
            <button @click="goTo('vision')" class="review-edit-btn" type="button">Edit</button>
          </div>
          <p class="text-sm text-ink leading-relaxed whitespace-pre-wrap">{{ formData.vision }}</p>

          <div v-if="formData.ndaRequested" class="mt-3 pt-3 border-t flex items-center gap-1.5" style="border-color: var(--color-border);">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM4.5 7l2 2 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" style="color: var(--color-verity);"/>
            </svg>
            <p class="text-xs font-body" style="color: var(--color-verity);">Mutual NDA requested</p>
          </div>
        </div>

        <!-- Submission error -->
        <div
          v-if="submitError"
          class="text-sm text-center px-4 py-3 rounded-xl font-body leading-relaxed"
          role="alert"
          style="color: #8b3232; background-color: rgba(196, 80, 80, 0.07); border: 1px solid rgba(196, 80, 80, 0.15);"
        >
          {{ submitError }}
        </div>

        <!-- Submit -->
        <div class="pt-2">
          <button
            @click="submit()"
            :disabled="isSubmitting"
            class="btn-primary w-full"
            type="button"
          >
            <template v-if="isSubmitting">
              <svg class="w-5 h-5 animate-spin shrink-0" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-dasharray="40" stroke-dashoffset="15" stroke-linecap="round"/>
              </svg>
              Submitting…
            </template>
            <template v-else>
              Submit — Let's Begin Our Story
            </template>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
