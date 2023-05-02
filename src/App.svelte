<script lang="ts">
  import { validateId } from "./lib/nanoid";
  import New from "./pages/New.svelte";
  import Vote from "./pages/Vote.svelte";
  import Home from "./pages/Home.svelte";

  const route = location.pathname.toLowerCase();
  console.log("route", route);
</script>

<main class="text-center p-4 mx-auto max-w-screen-sm">
  {#if route === "/nueva-votacion"}
    <New />
  {:else if validateId(route.substring(1))}
    <Vote />
  {:else}
    <Home />
  {/if}
</main>
