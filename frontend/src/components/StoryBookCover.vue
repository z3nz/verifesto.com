<script setup>
import { useIntakeForm } from '../composables/useIntakeForm.js'
const { beginStory } = useIntakeForm()
</script>

<template>
  <div class="cover-root">
    <!-- Decorative inner border frame -->
    <div class="cover-frame" aria-hidden="true" />

    <!-- Radial glow behind content -->
    <div class="cover-glow" aria-hidden="true" />

    <!-- Main content -->
    <div class="cover-content">
      <!-- Monogram -->
      <p class="cover-mark">VS</p>

      <!-- Studio name -->
      <h1 class="cover-title">
        Verifesto<br>Studios
      </h1>

      <!-- Gold rule -->
      <div class="cover-rule" aria-hidden="true" />

      <!-- Tagline -->
      <p class="cover-tagline">Creative development for bold visions.</p>

      <!-- CTA -->
      <button @click="beginStory" class="cover-btn" type="button">
        Begin Your Story
        <svg class="cover-btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.cover-root {
  min-height: 100vh;
  background-color: var(--color-ink);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

/* Subtle blue glow behind the content */
.cover-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse 90% 65% at 50% 46%,
    rgba(37, 99, 235, 0.09) 0%,
    transparent 68%
  );
  pointer-events: none;
}

/* Elegant inner frame — like a book's decorative border */
.cover-frame {
  position: absolute;
  inset: 28px;
  border: 1px solid rgba(184, 134, 11, 0.16);
  border-radius: 2px;
  pointer-events: none;
}

.cover-content {
  text-align: center;
  padding: 2.5rem 2rem;
  position: relative;
  z-index: 1;
  animation: coverEntrance 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: 120ms;
}

@keyframes coverEntrance {
  from { transform: translateY(22px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* VS monogram */
.cover-mark {
  font-family: var(--font-body);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin: 0 0 2.25rem;
  opacity: 0.8;
}

/* Display title */
.cover-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 13vw, 5.5rem);
  font-weight: 300;
  line-height: 1.05;
  color: white;
  letter-spacing: -0.03em;
  margin: 0 0 2rem;
}

/* Gold divider rule */
.cover-rule {
  width: 36px;
  height: 1px;
  background-color: var(--color-gold);
  margin: 0 auto 1.75rem;
  opacity: 0.5;
}

/* Tagline */
.cover-tagline {
  font-family: var(--font-body);
  font-size: 0.725rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  margin: 0 0 2.75rem;
}

/* CTA Button */
.cover-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 15px 36px;
  background-color: transparent;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  border-radius: 10px;
  cursor: pointer;
  min-height: 54px;
  transition: background-color 280ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
              border-color 280ms ease,
              color 280ms ease,
              transform 200ms ease,
              box-shadow 280ms ease;
}

.cover-btn:hover {
  background-color: var(--color-verity);
  border-color: var(--color-verity);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(37, 99, 235, 0.4);
}

.cover-btn:active {
  transform: translateY(0);
  box-shadow: none;
}

.cover-btn:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.6);
  outline-offset: 3px;
}

.cover-btn-arrow {
  transition: transform 250ms ease;
}

.cover-btn:hover .cover-btn-arrow {
  transform: translateX(4px);
}
</style>
