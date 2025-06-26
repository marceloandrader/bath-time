<script lang="ts">
  import Step from '$lib/components/Step.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
	<title>Bath Time Helper</title>
	<meta name="description" content="A step-by-step timer for bath time" />
</svelte:head>

<section>
  {#each data.steps as step}
    <Step {step} active={false} />
  {/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>