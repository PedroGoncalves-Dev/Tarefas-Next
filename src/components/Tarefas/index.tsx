import { Itarefa } from "@/app/page";
import { useEffect, useRef } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";

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
          <div
            key={task.idTarefa}
            className="flex flex-row items-center justify-between  border-b-[1px]"
          >
            <h3 ref={ultimoItem}>
              id: {task.idTarefa} {task.nometarefa}
            </h3>

            <div className="transition ease-in duration-150 hover:scale-110 cursor-pointer">
              <RiDeleteBack2Line color="blue" />
            </div>
          </div>
        ))
      ) : (
        <h3>Nenhuma tarefas adicionada</h3>
      )}
    </section>
  );
}
