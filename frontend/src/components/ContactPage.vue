<script setup>
import { useIntakeForm } from '../composables/useIntakeForm.js'
const { formData, errors, next, updateField } = useIntakeForm()
</script>

<template>
  <div class="page-content">
    <div class="animate-fade-in-up">
      <span class="chapter-label">Chapter Two</span>

      <h2 class="font-display text-3xl md:text-4xl font-light text-ink tracking-tight mb-2">
        Let's get to know each other.
      </h2>
      <p class="font-body text-base text-ink-muted mb-10 leading-relaxed">
        Just a few details — no forms feel, promise.
      </p>

      <form @submit.prevent="next()" novalidate class="space-y-6 max-w-lg">
        <!-- Full Name -->
        <div class="form-group">
          <label for="fullName" class="form-label">Full Name</label>
          <input
            id="fullName"
            type="text"
            :value="formData.fullName"
            @input="updateField('fullName', $event.target.value)"
            placeholder="Your first and last name"
            autocomplete="name"
            class="form-input"
            :class="{ 'form-input-error': errors.fullName }"
          />
          <p v-if="errors.fullName" class="form-error" role="alert">{{ errors.fullName }}</p>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input
            id="email"
            type="email"
            :value="formData.email"
            @input="updateField('email', $event.target.value)"
            placeholder="you@example.com"
            autocomplete="email"
            class="form-input"
            :class="{ 'form-input-error': errors.email }"
          />
          <p v-if="errors.email" class="form-error" role="alert">{{ errors.email }}</p>
        </div>

        <!-- Phone (optional) -->
        <div class="form-group">
          <label for="phone" class="form-label">
            Phone
            <span class="font-normal text-ink-muted ml-1">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            :value="formData.phone"
            @input="updateField('phone', $event.target.value)"
            placeholder="(555) 555-5555"
            autocomplete="tel"
            class="form-input"
          />
        </div>

        <!-- Company (optional) -->
        <div class="form-group">
          <label for="company" class="form-label">
            Company or Organization
            <span class="font-normal text-ink-muted ml-1">(if applicable)</span>
          </label>
          <input
            id="company"
            type="text"
            :value="formData.company"
            @input="updateField('company', $event.target.value)"
            placeholder="Your company name, or leave blank"
            autocomplete="organization"
            class="form-input"
          />
        </div>

        <div class="pt-4">
          <button type="submit" class="btn-primary w-full">
            Next chapter
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
