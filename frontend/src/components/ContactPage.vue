<script setup>
import { useIntakeForm } from '../composables/useIntakeForm.js'

const { formData, errors, next, updateField } = useIntakeForm()

function handleNext() {
  next()
}
</script>

<template>
  <div class="page-content">
    <div class="animate-fade-in-up">
      <h2 class="font-display text-3xl md:text-4xl font-semibold text-ink mb-2">
        Let's get to know each other.
      </h2>
      <p class="text-ink-muted text-base md:text-lg mb-10">
        We just need a few details to get started.
      </p>

      <form @submit.prevent="handleNext" class="space-y-6 max-w-lg">
        <!-- Full Name -->
        <div class="form-group">
          <label for="fullName" class="form-label">Full Name</label>
          <input
            id="fullName"
            type="text"
            :value="formData.fullName"
            @input="updateField('fullName', $event.target.value)"
            placeholder="First and Last Name"
            autocomplete="name"
            class="form-input"
            :class="{ 'form-input-error': errors.fullName }"
          />
          <p v-if="errors.fullName" class="form-error">{{ errors.fullName }}</p>
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
          <p v-if="errors.email" class="form-error">{{ errors.email }}</p>
        </div>

        <!-- Phone -->
        <div class="form-group">
          <label for="phone" class="form-label">Phone <span class="text-ink-muted font-normal">(optional)</span></label>
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

        <!-- Company -->
        <div class="form-group">
          <label for="company" class="form-label">
            Company or Organization <span class="text-ink-muted font-normal">(if applicable)</span>
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

        <button type="submit" class="btn-primary w-full mt-8">
          Continue
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>
