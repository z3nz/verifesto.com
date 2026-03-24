<script setup>
import { useIntakeForm } from '../composables/useIntakeForm.js'
const { next } = useIntakeForm()
</script>

<template>
  <div class="page-content">
    <div class="animate-fade-in-up flex flex-col h-full">
      <span class="chapter-label">Chapter One</span>

      <h2 class="font-display text-4xl md:text-5xl font-light text-ink leading-tight tracking-tight mb-7">
        Every great project<br>starts with a story.
        <br><em class="not-italic" style="color: var(--color-verity);">Let's hear yours.</em>
      </h2>

      <div class="w-8 h-0.5 rounded-full mb-8" style="background-color: var(--color-verity);" aria-hidden="true" />

      <p class="font-body text-base md:text-lg leading-relaxed text-ink-muted max-w-lg mb-auto">
        Verifesto Studios is a creative development studio that turns bold visions into reality.
        We build with purpose, integrity, and heart — partnering with you every step of the way.
        Your story matters to us, and we're here to help you tell it.
      </p>

      <div class="pt-12">
        <button @click="next()" class="btn-primary w-full" type="button">
          Turn the page
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
