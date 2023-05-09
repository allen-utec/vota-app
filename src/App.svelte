<script lang="ts">
  import New from "./pages/New.svelte";
  import Vote from "./pages/Vote.svelte";
  import Home from "./pages/Home.svelte";
  import { createUser, getNickname } from "./lib/api";

  const route = location.pathname.toLowerCase();

  let user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    getNickname()
      .then(createUser)
      .then((data) => {
        user = data;
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch(console.log);
  }

  function validateId(id: string) {
    return id.length === 10 && /[a-z0-9]{10}/g.test(id);
  }
</script>

<main class="text-center p-2 mx-auto max-w-screen-sm">
  <div class="text-sm font-light text-right px-4 mb-4">
    Usuario: {user?.nickname || "???"}
  </div>
  {#if route === "/nueva-votacion"}
    <New />
  {:else if validateId(route.substring(1))}
    <Vote />
  {:else}
    <Home />
  {/if}
</main>
