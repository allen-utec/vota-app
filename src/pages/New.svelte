<script lang="ts">
  import Question from "../components/Question.svelte";
  import Alternatives from "../components/Alternatives.svelte";
  import Button from "../components/Button.svelte";
  import Header from "../components/Header.svelte";
  import { createPoll } from "../lib/api";
  import type { IPoll } from "../lib/types";

  let question = "";
  let alternatives = [];
  let user = JSON.parse(localStorage.getItem("user"));

  let poll: IPoll = null;
  let shareLink = "";
  let linkCopied = false;

  const handleCreatePoll = () => {
    createPoll({ question, alternatives, user_id: user.id })
      .then((o) => {
        poll = o;
        shareLink = `${location.hostname}/${poll.code}`;
      })
      .catch(console.log);
  };

  const handleCopy = () => {
    if (shareLink && document.execCommand) {
      const input = document.getElementById("input-share");
      input.focus();
      input.select();
      document.execCommand('copy');
      linkCopied = true;
    }
  };
</script>

<div>
  {#if !poll}
    <Header>Nueva Votación</Header>

    <Question on:change={(e) => (question = e.detail.value)} />

    <Alternatives on:change={(e) => (alternatives = e.detail.value)} />

    <Button
      on:click={handleCreatePoll}
      classes="text-xl font-light"
      disabled={!question || !alternatives.length}>Crear y Compartir!</Button
    >
  {:else}
    <Header classes="text-4xl">
      Comparte el siguiente enlace con tus amigos y voten!
    </Header>

    <div class="flex">
      <input
        id="input-share"
        placeholder="Ingresa una alternativa a votar"
        class="flex-1 border-b px-4 py-2 text-md font-light"
        readonly
        value={shareLink}
      />
      <Button on:click={handleCopy} classes="active:bg-green-500">
        <i class="fa fa-copy" />
      </Button>
    </div>
  {/if}
</div>
