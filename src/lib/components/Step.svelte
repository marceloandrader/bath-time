
<script lang="ts">
  import { onDestroy, createEventDispatcher, onMount } from 'svelte';

  let utterance: SpeechSynthesisUtterance;

  onMount(() => {
    utterance = new SpeechSynthesisUtterance();
    utterance.voice = window.speechSynthesis.getVoices().filter((v) => v.lang === "es").find((v) => v.name === "Spanish (Spain)+Andrea")
    utterance.pitch = 0;
    utterance.rate = 0.5;
    utterance.lang = 'es-EC'; // Set default language
  });

  const dispatch = createEventDispatcher();

  export let step: { title: string; duration: number; image: string };
  export let isActive = false;
  export let isDone = false;

  let remaining = step.duration;
  let interval: NodeJS.Timeout;

  $: remaining = step.duration;

  $: {
    if (isActive) {
      if (interval) {
        clearInterval(interval);
      }
      // Speak the step title
      if (utterance) {
        utterance.text = step.title;
        // speechSynthesis.speak(utterance);
      }
      interval = setInterval(() => {
        remaining = remaining - 1;
        if (remaining <= 0) {
          clearInterval(interval);
          remaining = 0;
          dispatch('stepComplete');
        }
      }, 1000);
    } else {
      if (interval) {
        clearInterval(interval);
      }
    }
  }

  onDestroy(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
</script>

<div class="card" class:active={isActive} class:done={isDone}>
  <img src={step.image} alt={step.title} />
  <div class="card-content">
    <h2 class:active={isActive}>{step.title}</h2>
    {#if isActive}
      <p class="timer">{remaining}s</p>
    {/if}
  </div>
</div>

<style>
  .card {
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.3s ease;
    opacity: 0.5; /* Default for future steps */
  }

  .card.active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    
    opacity: 1; /* Full opacity for active */
  }

  .card.done {
    opacity: 0.1; /* 10% opacity for done steps */
  }

  img {
    width: 100%;
    height: auto; /* Allow image to take available space */
    object-fit: contain; /* Ensure image fits within bounds */
    flex-grow: 1; /* Allow image to grow */
  }

  .card-content {
    padding: 16px;
  }

  h2.active {
    margin: 0 0 8px;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  }

  h2:not(.active) {
    font-size: 10px;
  }

  .timer {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
</style>

