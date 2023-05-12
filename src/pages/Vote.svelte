<script lang="ts">
  import Button from "../components/Button.svelte";
  import Header from "../components/Header.svelte";
  import { getPollByCode, sendMyVote } from "../lib/api";

  export let code: string;

  let poll: { id: number; question: string; alternatives: any[] };
  let alternativeIdSelected = null;

  let results: Record<number, number> = null;
  let totalVotes: number = 0;

  if (code) {
    getPollByCode(code)
      .then((o) => (poll = o))
      .catch(console.log);
  }

  const handleSelectOption = (alternative: { id: number }) => {
    alternativeIdSelected = alternative.id;
  };

  const handleSend = () => {
    sendMyVote(poll.id, alternativeIdSelected)
      .then((o: { votes: number[] }) => {
        totalVotes = o.votes.length;

        results = o.votes.reduce((acc, val) => {
          acc[val] = (acc[val] || 0) + 1;
          return acc;
        }, {} as Record<number, number>);
      })
      .catch(console.log);
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
      {#each poll.alternatives as alternative}
        <li
          class={`relative flex items-center gap-1 rounded-md p-4 border ${
            results ? "cursor-not-allowed" : "cursor-pointer"
          } ${
            !results && alternative.id === alternativeIdSelected
              ? "bg-green-50 border-green-500"
              : "border-gray-300"
          }`}
          on:click={!results && handleSelectOption.bind(null, alternative)}
        >
          {#if results}
            <span
              class="absolute flex items-center p-4 left-0 top-0 h-full rounded-md border bg-blue-100 border-blue-500"
              style={`width: ${(results[alternative.id] / totalVotes) * 100}%`}
            />
          {/if}
          <span class="z-10">
            {alternative.text}
            {#if results}
              <span class="ml-2 font-bold">
                [ {((results[alternative.id] / totalVotes) * 100).toFixed(2)}% ]
              </span>
            {/if}
          </span>
        </li>
      {/each}
    </ol>
    {#if !results}
      <Button on:click={handleSend} disabled={!poll.alternatives.length}>
        Enviar Mi Voto!
      </Button>
    {/if}
  {/if}
</div>
