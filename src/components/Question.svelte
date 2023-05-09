<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleChange(e: Event) {
    dispatch("change", {
      value: (e.target as HTMLTextAreaElement).value.trim(),
    });
  }
</script>

<!-- svelte-ignore a11y-autofocus -->
<textarea
  placeholder="Ingresa el enunciado de tu votación"
  class="border rounded-lg px-4 py-2 text-2xl w-full font-light mb-4"
  on:change={handleChange}
  autofocus
/>
