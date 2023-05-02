<script lang="ts">
  export let classes: string = "";
  export let secondary: boolean = false;
</script>

<button
  on:click
  class={`rounded-lg ${
    secondary
      ? "bg-gray-100 hover:bg-gray-200 active:bg-gray-100 text-gray-600"
      : "bg-blue-600 hover:bg-blue-700 active:bg-blue-600 text-white"
  } font-normal py-2 px-4 ${classes}`}
>
  <slot />
</button>
