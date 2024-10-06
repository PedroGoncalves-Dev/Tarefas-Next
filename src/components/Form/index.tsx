import { ChangeEvent, FormEvent, SetStateAction, useState } from "react";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { Itarefa } from "@/app/page";

interface Iprops {
  setTarefas: React.Dispatch<SetStateAction<Itarefa[]>>;
}
export function Form({ setTarefas }: Iprops) {
  const [nomeTarefa, setNomeTarefa] = useState<string>("");

  const handleNomeTarefa = (e: ChangeEvent<HTMLInputElement>) => {
    setNomeTarefa(e.target.value);
  };

  const hanldeSubmit = (e: FormEvent) => {
    e.preventDefault();

    //novo objeto pra poder por na lista Itarefa
    const NovaTarefa: Itarefa = { nometarefa: nomeTarefa };

    //pega os obj que ja estao e concatena com o novo obj
    setTarefas((prevTarefas) => [...prevTarefas, NovaTarefa]);

    setNomeTarefa("");
  };
  return (
    <form
      className="bg-white w-2/3 h-52 rounded-xl shadow-lg flex flex-col
       justify-around items-center 
       md:w-2/5 md:flex-row"
      onSubmit={hanldeSubmit}
    >
      <div
        className="flex flex-col w-4/5
      md:flex-row md:items-center  "
      >
        <label htmlFor="tarefa" className="mb-3 md:mr-2 md:mb-0 lg:text-2xl">
          Tarefa:
        </label>
        <input
          type="text"
          id="tarefa"
          placeholder="Nome da tarefa..."
          value={nomeTarefa}
          onChange={handleNomeTarefa}
          className=" border-b-[1px] border-gray-500 outline-none md:flex-1"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-700 w-1/2 h-8 flex justify-center items-center rounded-lg
         transition ease-in duration-150 hover:scale-105 
         md:w-10 "
      >
        <MdOutlineFileDownloadDone color="#fff" />
      </button>
    </form>
  );
}
