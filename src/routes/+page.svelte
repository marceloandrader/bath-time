<script lang="ts">
  import Step from '$lib/components/Step.svelte';

  const step = {
    title: 'Wash your hair',
    duration: 30,
    image: '/wash-hair.png'
  };
  const step2 = {
    title: 'Wash Neck',
    duration: 30,
    image: '/wash-neck.png'
  };
  const step3 = {
    title: 'Wash face',
    duration: 30,
    image: '/wash-face.png'
  };
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <Step {step} active={true} />
  <Step step={step2} active={false} />
  <Step step={step3} active={false} />
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
