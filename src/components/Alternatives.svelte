<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Button from "./Button.svelte";

  const dispatch = createEventDispatcher();

  let data: string[] = ["", ""];

  const handleAddOne = () => {
    data = data.concat("");
  };

  const handleDelete = (i: number) => {
    data = data.slice(0, i).concat(data.slice(i + 1));

    dispatch("change", {
      value: data.filter((o) => !!o).map((o) => ({ text: o })),
    });
  };

  const handleChangeInput = (i: number, e: Event) => {
    data[i] = (e.target as HTMLInputElement).value;
    data = data;

    dispatch("change", {
      value: data.filter((o) => !!o).map((o) => ({ text: o })),
    });
  };
</script>

<ol class="space-y-2 font-light mb-4">
  {#each data as o, i}
    <li class="flex items-center gap-1">
      <span class="min-w-[20px] text-right">{i + 1}.</span>
      <input
        placeholder="Ingresa una opción a votar"
        class="flex-1 border-b px-4 py-2 text-md font-light"
        on:input={handleChangeInput.bind(null, i)}
      />
      {#if i > 1}
        <button on:click={handleDelete.bind(null, i)} class="text-red-500 px-1">
          <i class="fa fa-trash-o fa-lg" />
        </button>
      {/if}
    </li>
  {/each}
  <li class="text-right">
    <Button on:click={handleAddOne} classes="font-light" secondary>
      Agregar alternativa
    </Button>
  </li>
</ol>
