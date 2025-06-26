
<script lang="ts">
  export let step: { title: string; duration: number; image: string };
  export let active = false;

  let remaining = step.duration;
  let interval: NodeJS.Timeout;

  $: {
    if (active) {
      remaining = step.duration;
      interval = setInterval(() => {
        remaining -= 1;
        if (remaining === 0) {
          clearInterval(interval);
        }
      }, 1000);
    } else {
      if (interval) {
        clearInterval(interval);
      }
    }
  }
</script>

<div class="card {active ? 'active' : ''}">
  <img src={step.image} alt={step.title} />
  <div class="card-content">
    <h2>{step.title}</h2>
    {#if active}
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
  }

  .card.active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
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
