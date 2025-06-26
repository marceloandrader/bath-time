
<script lang="ts">
  import { onDestroy, createEventDispatcher } from 'svelte';

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
    <h2>{step.title}</h2>
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
    transform: scale(1.1); /* Make it bigger */
    opacity: 1; /* Full opacity for active */
  }

  .card.done {
    opacity: 0.1; /* 10% opacity for done steps */
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .card-content {
    padding: 16px;
  }

  h2 {
    margin: 0 0 8px;
  }

  .timer {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
</style>

