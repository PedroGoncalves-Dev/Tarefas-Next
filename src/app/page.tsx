"use client";
import { Form } from "@/components/Form";
import { Tarefas } from "@/components/Tarefas";

import { useState } from "react";

export interface Itarefa {
  idTarefa: number;
  nometarefa: string;
}

export default function Home() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);
  return (
    <main className="flex flex-col justify-center items-center">
      <Form setTarefas={setTarefas} />

      <Tarefas tarefas={tarefas} setTarefa={setTarefas} />
    </main>
  );
}
