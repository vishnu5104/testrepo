"use client";

import { trpc } from "@/server/client";
import { useState } from "react";

export default function Home() {
  // for geting some this use query like get req
  // for post somethign use mutatioon like post req
  const getUsers = trpc.user.getUsers.useQuery();
  const addUsers = trpc.user.addUsers.useMutation({
    onSettled: () => {
      getUsers.refetch();
    },
  });
  // for insta geting use onsetiled
  const [name, setName] = useState("");

  const [race, setRace] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(getUsers.data)}
      <div>
        Name:{" "}
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
        Race:{" "}
        <input
          value={race}
          onChange={(e) => {
            setRace(e.target.value);
          }}
          type="text"
        />
        <button
          onClick={() => {
            addUsers.mutate({ name, race });
          }}
        >
          Add
        </button>
      </div>
    </main>
  );
}
