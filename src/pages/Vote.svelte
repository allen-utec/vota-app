<script lang="ts">
  import Button from "../components/Button.svelte";
  import Header from "../components/Header.svelte";

  let poll = {
    id: 1,
    question: "Cual es el proveedor de nube mas usado?",
    options: [
      { id: 1, text: "Microsoft Azure" },
      { id: 2, text: "Amazon Web Services" },
      { id: 3, text: "Google Cloud Platform" },
    ],
  };

  let optionIdSelected = null;

  const handleSelectOption = (option: { id: number }) => {
    optionIdSelected = option.id;
  };
</script>

<div>
  <Header classes="text-4xl">{poll.question}</Header>
  <ol class="space-y-2 font-light mb-4 mx-auto">
    {#each poll.options as option}
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
  <Button>Enviar Voto</Button>
</div>
