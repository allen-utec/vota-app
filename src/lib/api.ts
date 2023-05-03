export async function getNickname() {
  return fetch("http://127.0.0.1:9090/nicknames")
      .then((o) => o.json())
      .then(({ nickname }) => nickname)
      .catch(console.log);
}

export async function createPoll(poll: {question: string, options: {text:string}[]}) {
  return fetch("http://localhost:8080/polls", {
      method: "POST",
      body: JSON.stringify(poll),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch(console.log);
}