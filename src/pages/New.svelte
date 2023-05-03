<script lang="ts">
  import Button from "../components/Button.svelte";
  import Header from "../components/Header.svelte";
  import { createPoll } from "../lib/api";

  let pollQuestion = "";

  let pollOptions = ["", ""];

  const handleNewPollOption = () => {
    pollOptions = pollOptions.concat("");
  };

  const handleDeletePollOption = (idx: number) => {
    pollOptions = pollOptions.slice(0, idx).concat(pollOptions.slice(idx + 1));
  };

  const handleNewPoll = () => {
    createPoll({
      question: pollQuestion,
      options: pollOptions.map((o) => ({ text: o })),
    })
      .then(console.log)
      .catch(console.log);
  };
</script>

<div>
  <Header>Nueva Votación</Header>
  <!-- svelte-ignore a11y-autofocus -->
  <textarea
    placeholder="Ingresa el enunciado de tu votación"
    class="border rounded-lg px-4 py-2 text-2xl w-full font-light mb-4"
    bind:value={pollQuestion}
    autofocus
  />

  <ol class="space-y-2 font-light mb-4">
    {#each pollOptions as option, i}
      <li class="flex items-center gap-1">
        <span class="min-w-[20px] text-right">{i + 1}.</span>
        <input
          placeholder="Ingresa una opción a votar"
          class="flex-1 border rounded-md px-4 py-2 text-md font-light"
          bind:value={option}
        />
        {#if i > 1}
          <button
            on:click={handleDeletePollOption.bind(null, i)}
            class="text-red-500 px-1"
          >
            <i class="fa fa-trash-o fa-lg" />
          </button>
        {/if}
      </li>
    {/each}
    <li class="text-left ml-6">
      <Button on:click={handleNewPollOption} secondary>
        Agregar otra opción a votar
      </Button>
    </li>
  </ol>

  <Button on:click={handleNewPoll}>Crear Votación</Button>
</div>
