<script lang="ts">
  import Question from "../components/Question.svelte";
  import Alternatives from "../components/Alternatives.svelte";
  import Button from "../components/Button.svelte";
  import Header from "../components/Header.svelte";
  import { createPoll } from "../lib/api";

  let question = "";
  let alternatives = [];
  let user = JSON.parse(localStorage.getItem("user"));

  const handleCreatePoll = () => {
    createPoll({ question, alternatives, user_id: user.id })
      .then(console.log)
      .catch(console.log);
  };
</script>

<div>
  <Header>Nueva Votación</Header>

  <Question on:change={(e) => (question = e.detail.value)} />

  <Alternatives on:change={(e) => (alternatives = e.detail.value)} />

  <Button
    on:click={handleCreatePoll}
    classes="text-xl font-light"
    disabled={!question || !alternatives.length}>CREAR</Button
  >
</div>
