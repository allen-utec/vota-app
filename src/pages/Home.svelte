<script lang="ts">
  import Header from "../components/Header.svelte";
  import Button from "../components/Button.svelte";

  const handleNewPoll = () => {
    location.href = "/nueva-votacion";
  };
</script>

<div>
  <Header>Vota!</Header>
  <Button on:click={handleNewPoll}>Crear Una Votación</Button>
</div>
