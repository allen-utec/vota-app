<script lang="ts">
  export let classes: string = "";
</script>

<h1 class={`text-6xl font-thin leading-tight mb-8 mx-auto ${classes}`}>
  <slot />
</h1>
