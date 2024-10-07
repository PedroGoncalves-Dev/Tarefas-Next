import { Itarefa } from "@/app/page";
import { SetStateAction, useEffect, useRef } from "react";
import { RiDeleteBack2Line } from "react-icons/ri";

interface Iprops {
  tarefas: Itarefa[];
  setTarefa: React.Dispatch<SetStateAction<Itarefa[]>>;
}

export function Tarefas({ tarefas, setTarefa }: Iprops) {
  const ultimoItem = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ultimoItem.current) {
      ultimoItem.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [tarefas]);

  const DeletarTarefa = (id: number) => {
    setTarefa((prevTarefas) =>
      prevTarefas.filter((tarefa) => tarefa.idTarefa !== id)
    );
  };
  return (
    <section
      className="animate-in fade-in zoom-in bg-white w-2/3 py-6  rounded-xl my-7 grid gap-y-3 
      items-center justify-center grid-cols-[repeat(1,minmax(0,90%))] 
       shadow-xl 
        md:w-2/5 animate-rotate-x animate-once animate-ease-out"
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

            <div
              className="transition ease-in duration-150 hover:scale-110 
            cursor-pointer"
              onClick={() => DeletarTarefa(task.idTarefa)}
            >
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
