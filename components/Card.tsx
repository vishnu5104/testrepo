// Card.tsx or your component file
"use client";
import { trpc } from "@/server/client";
import React from "react";

const Card = () => {
  const { data, isLoading, error } = trpc.user.getUsers.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data || data.length === 0) return <div>No users found.</div>;

  return (
    <>
      <div>Posts</div>

      {data.map((user, index: number) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Race: {user.race}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
