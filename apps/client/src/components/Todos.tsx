"use client";

import React from "react";
import { trpc } from "@/trpc/react";

import Todo from "./Todo";

const Todos = () => {


  const { data: todoList = [], isLoading, error } = trpc.todo.all.useQuery();


  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      {todoList.length ? (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        todoList.map((todo: any) => {
          return <Todo key={todo.id} todo={todo} />;
        })
      ) : (
        <p>Create a todo.</p>
      )}
    </div>
  );
};

export default Todos;
