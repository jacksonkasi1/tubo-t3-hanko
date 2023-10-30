"use client";

import { CreateTodo } from "@/components/CreateTodo";
import Todos from "@/components/Todos";


export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">Turbo Hanko</span> App
        </h1>
        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  return (
    <div className="w-full max-w-xs">
      <Todos />
      <hr className="my-5" />
      <CreateTodo />
    </div>
  );
}
