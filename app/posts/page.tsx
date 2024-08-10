"use client";
import Card from "@/components/Card";
import { trpc } from "@/server/client";
import React from "react";

const Posts = () => {
  const getUsers = trpc.user.getUsers.useQuery();
  return <Card />;
};

export default Posts;
