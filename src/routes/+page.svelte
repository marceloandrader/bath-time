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
</script>

<svelte:head>
	<title>Bath Time Helper</title>
	<meta name="description" content="A step-by-step timer for bath time" />
</svelte:head>

<section>
  {#each data.steps as step, i}
    <Step
      {step}
      isActive={$currentStepIndex === i}
      isDone={$currentStepIndex > i}
    />
  {/each}

  <div class="navigation-buttons">
    <button on:click={prevStep} disabled={$currentStepIndex === 0}>Previous</button>
    <button on:click={nextStep} disabled={$currentStepIndex === data.steps.length - 1}>Next</button>
  </div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

  .navigation-buttons {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
