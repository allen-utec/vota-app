<script lang="ts">
  export let classes: string = "";
  export let secondary: boolean = false;
  export let disabled: boolean = false;
</script>

<button
  on:click
  class={`rounded-lg ${
    secondary
      ? `${
          disabled
            ? "bg-gray-100/50 cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-200 active:bg-gray-100"
        } text-gray-600`
      : `${
          disabled
            ? "bg-blue-600/50 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
        } text-white`
  } font-normal py-2 px-4 ${classes}`}
  {disabled}
>
  <slot />
</button>
