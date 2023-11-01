"use client";

import React, { useState, useRef, useEffect } from "react";
import { trpc } from "@/trpc/react";
import { ZodError } from "zod";

export function CreateTodo() {
  const [todo, setTodo] = useState("");
  const createPost = trpc.todo.createTodo.useMutation();
  const utils = trpc.useContext();

  const inputRef = useRef<HTMLInputElement>(null);

  // Function to automatically focus on the input element
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Use useEffect to automatically focus when the component mounts
  useEffect(() => {
    focusInput();
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      // Trigger the createTodo mutation
      await createPost.mutate(
        { text: todo },
        {
          onError: (error, newTodo, context) => {
            console.log({ newTodo, context });
            console.log("Input is invalid:", error.message);
            setTodo("");
            // utils.todo.all.setData(undefined, () => context.previousTodos);
          },
          onSuccess() {
            utils.todo.all.invalidate();
            setTodo(""); // Clear the input field on success
          },
        },
      );
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        console.error("Input is invalid:", error.message);
        focusInput(); // Focus the input field after an error
      }
    } finally {
      focusInput();
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
      <input
        type="text"
        placeholder="Title"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={inputRef} // Assign the ref to the input element
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createPost.isLoading}
      >
        {createPost.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
