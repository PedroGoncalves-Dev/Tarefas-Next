import { Itarefa } from "@/app/page";

interface Iprops {
  tarefas: Itarefa[];
}

export function Tarefas({ tarefas }: Iprops) {
  return (
    <section
      className="bg-white w-2/3 py-6  rounded-xl mt-7 grid gap-y-3 items-center justify-center grid-cols-[repeat(1,minmax(0,90%))] 
       shadow-xl 
        md:w-2/5"
    >
      {tarefas.length > 0 ? (
        tarefas.map((task) => (
          <h3 className="border-b-[1px]">{task.nometarefa}</h3>
        ))
      ) : (
        <h3>Nenhuma tarefas adicionada</h3>
      )}
    </section>
  );
}
