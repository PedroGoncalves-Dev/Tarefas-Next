import { Itarefa } from "@/app/page";
import { useEffect, useRef } from "react";

interface Iprops {
  tarefas: Itarefa[];
}

export function Tarefas({ tarefas }: Iprops) {
  const ultimoItem = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ultimoItem.current) {
      ultimoItem.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [tarefas]);
  return (
    <section
      className="bg-white w-2/3 py-6  rounded-xl my-7 grid gap-y-3 
      items-center justify-center grid-cols-[repeat(1,minmax(0,90%))] 
       shadow-xl 
        md:w-2/5"
    >
      {tarefas.length > 0 ? (
        tarefas.map((task) => (
          <h3 className="border-b-[1px]" ref={ultimoItem}>
            {task.nometarefa}
          </h3>
        ))
      ) : (
        <h3>Nenhuma tarefas adicionada</h3>
      )}
    </section>
  );
}
