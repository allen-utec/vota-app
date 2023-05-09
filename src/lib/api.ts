export async function getNickname() {
  return fetch("http://127.0.0.1:9090/nicknames")
      .then((o) => o.json());
}

export async function createUser(user: {nickname: string}) {
  return fetch("http://127.0.0.1:8080/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json());
}

export async function createPoll(poll: {question: string, alternatives: {text:string}[], user_id: string}) {
  return fetch("http://127.0.0.1:8080/polls", {
      method: "POST",
      body: JSON.stringify(poll),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json());
}