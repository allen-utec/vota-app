<script lang="ts">
  import { validateId } from "./lib/nanoid";
  import New from "./pages/New.svelte";
  import Vote from "./pages/Vote.svelte";
  import Home from "./pages/Home.svelte";
  import { getNickname } from "./lib/api";

  const route = location.pathname.toLowerCase();

  let username = localStorage.getItem("username");
  if (!username) {
    getNickname()
      .then((nickname) => {
        username = nickname;
        localStorage.setItem("username", nickname);
      })
      .catch(console.log);
  }
</script>

<main class="text-center p-2 mx-auto max-w-screen-sm">
  <div class="text-sm font-light text-right px-4 mb-4">
    Usuario: {username}
  </div>
  {#if route === "/nueva-votacion"}
    <New />
  {:else if validateId(route.substring(1))}
    <Vote />
  {:else}
    <Home />
  {/if}
</main>
