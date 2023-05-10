<script lang="ts">
  import Button from "../components/Button.svelte";
  import Header from "../components/Header.svelte";
  import { getPollByCode } from "../lib/api";

  export let code: string;

  let poll: any;
  let optionIdSelected = null;

  if (code) {
    getPollByCode(code)
      .then((o) => (poll = o))
      .catch(console.log);
  }

  const handleSelectOption = (option: { id: number }) => {
    optionIdSelected = option.id;
  };

  const handleSend = () => {
    // TODO: show a modal with a share button
  };

  const handleNewPoll = () => {
    location.href = "/nueva-votacion";
  };
</script>

<div>
  {#if !poll}
    <Header classes="text-4xl">Votación No Encontrada!</Header>
    <Button on:click={handleNewPoll}>Crear Una Nueva Votación!</Button>
  {:else}
    <p class="text-xs text-gray-500/80 font-light mb-2">Pregunta:</p>
    <Header classes="text-4xl">{poll.question}</Header>
    <p class="text-xs text-gray-500/80 font-light mb-2">
      Alternativas a votar:
    </p>
    <ol class="space-y-2 font-light mb-4 mx-auto">
      {#each poll.alternatives as option}
        <li
          class={`flex items-center gap-1 rounded-md p-4 cursor-pointer border ${
            option.id === optionIdSelected
              ? "bg-green-50 border-green-500"
              : "border-gray-300"
          }`}
          on:click={handleSelectOption.bind(null, option)}
        >
          {option.text}
        </li>
      {/each}
    </ol>
    <Button on:click={handleSend} disabled={!poll.alternatives.length}>
      Enviar Mi Voto!
    </Button>
  {/if}
</div>
