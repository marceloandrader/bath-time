<script lang="ts">
  import Step from '$lib/components/Step.svelte';
  import type { PageData } from './$types';
  import { writable } from 'svelte/store';

  export let data: PageData;

  const currentStepIndex = writable(0);

  function nextStep() {
    currentStepIndex.update(n => Math.min(n + 1, data.steps.length - 1));
  }

  function prevStep() {
    currentStepIndex.update(n => Math.max(n - 1, 0));
  }

  function restart() {
    currentStepIndex.set(0);
  }
</script>

<svelte:head>
	<title>Bath Time Helper</title>
	<meta name="description" content="A step-by-step timer for bath time" />
</svelte:head>

<div class="page-container">
  <div class="main-step-container">
    {#if data.steps[$currentStepIndex]}
      <Step
        step={data.steps[$currentStepIndex]}
        isActive={true}
        isDone={false}
        on:stepComplete={nextStep}
      />
    {/if}
  </div>

  <div class="navigation-buttons">
    <button on:click={restart}>Reiniciar</button>
    <button on:click={prevStep} disabled={$currentStepIndex === 0}>Anterior</button>
    <button on:click={nextStep} disabled={$currentStepIndex === data.steps.length - 1}>Siguiente</button>
  </div>

  <div class="steps-carousel">
    {#each data.steps as step, i}
      <div class="carousel-item" class:active={$currentStepIndex === i} class:done={$currentStepIndex > i}>
        <Step
          {step}
          isActive={$currentStepIndex === i}
          isDone={$currentStepIndex > i}
          hideInfoWhenActive={true}
          on:stepComplete={nextStep}
        />
      </div>
    {/each}
  </div>
</div>

<style>
  .page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh; /* Full viewport height */
    padding: 20px;
    box-sizing: border-box;
  }

  .main-step-container {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px; /* Adjust as needed */
  }

  .main-step-container .card {
    width: 100%;
    height: 100%; /* Make the card fill the height of its container */
  }

  .main-step-container .card img {
    flex-grow: 1; /* Allow image to take available space */
    height: auto; /* Override fixed height */
  }

  .main-step-container .card .card-content {
    flex-shrink: 0; /* Prevent content from shrinking */
  }

  .navigation-buttons {
    margin: 20px 0;
    display: flex;
    gap: 10px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

  .steps-carousel {
    display: flex;
    overflow-x: auto; /* Enable horizontal scrolling */
    gap: 10px;
    padding-bottom: 10px; /* Space for scrollbar */
    width: 100%;
    justify-content: center; /* Center items if they don't fill the width */
  }

  .carousel-item {
    flex-shrink: 0; /* Prevent items from shrinking */
    width: 150px; /* Fixed width for carousel items */
    height: auto;
    opacity: 0.7; /* Default opacity for future steps */
    transition: opacity 0.3s ease;
  }

  .carousel-item.active {
    opacity: 1; /* Full opacity for active item in carousel */
  }

  .carousel-item.done {
    opacity: 0.3; /* 30% opacity for done items in carousel */
  }

  .carousel-item .card {
    width: 100%;
    height: 100%;
  }
</style>
