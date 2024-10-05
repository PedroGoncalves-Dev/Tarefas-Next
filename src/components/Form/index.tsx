import { MdOutlineFileDownloadDone } from "react-icons/md";

export function Form() {
  return (
    <form
      className="bg-white w-2/3 h-52 rounded-xl shadow-lg flex flex-col justify-around
     items-center "
    >
      <div className="flex flex-col w-4/5 ">
        <label htmlFor="tarefa" className="">
          Tarefa:
        </label>
        <input
          type="text"
          id="tarefa"
          placeholder="Nome da tarefa..."
          className=" border-b-[1px] border-gray-500 outline-none"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-700 w-1/2 h-8 flex justify-center items-center rounded-lg
         transition ease-in duration-150 hover:scale-105"
      >
        <MdOutlineFileDownloadDone color="#fff" />
      </button>
    </form>
  );
}
