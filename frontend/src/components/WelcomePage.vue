<script setup>
defineEmits(['next'])
</script>

<template>
  <div class="page-content">
    <div class="animate-fade-in-up">
      <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-ink leading-tight mb-8">
        Every great project starts with a story.
        <span class="text-verity">Let's hear yours.</span>
      </h2>

      <p class="text-ink-muted text-base md:text-lg leading-relaxed max-w-xl mb-12">
        Verifesto Studios is a creative development studio that turns bold visions into reality.
        We build with purpose, integrity, and heart — partnering with you every step of the way.
        Your story matters to us, and we're here to help you tell it.
      </p>

      <button
        @click="$emit('next')"
        class="btn-primary"
      >
        Let's Get Started
        <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  </div>
</template>
