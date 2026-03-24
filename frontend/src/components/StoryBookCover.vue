<script setup>
defineEmits(['open'])
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-6 text-center">
    <div class="animate-fade-in-up">
      <!-- Logo Mark -->
      <div class="mb-8">
        <div class="w-20 h-20 mx-auto rounded-2xl bg-verity/10 flex items-center justify-center mb-6">
          <span class="text-verity font-display text-4xl font-semibold">V</span>
        </div>
      </div>

      <!-- Studio Name -->
      <h1 class="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-ink tracking-tight mb-4">
        Verifesto Studios
      </h1>

      <p class="text-ink-muted text-lg md:text-xl font-body max-w-md mx-auto mb-12 leading-relaxed">
        Creative development studio
      </p>

      <!-- CTA Button -->
      <button
        @click="$emit('open')"
        class="group inline-flex items-center gap-3 px-8 py-4 bg-ink text-surface font-display text-lg font-medium rounded-xl
               hover:bg-verity-deep transition-all duration-300 ease-out
               hover:shadow-lg hover:shadow-verity/20 hover:-translate-y-0.5
               focus:outline-none focus:ring-2 focus:ring-verity focus:ring-offset-2 focus:ring-offset-surface"
      >
        Begin Your Story
        <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  </div>
</template>
