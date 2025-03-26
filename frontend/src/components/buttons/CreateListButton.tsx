import { useAppDispatch } from "@/redux/hooks";
import { addList, setCurrentList } from "@/redux/slices/listSlice";
import { DB } from "@/utils/dbMethods";
import { PlusIcon } from "lucide-react";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateListButton() {
  const [text, setText] = useState("");
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value.trimStart());
  }
  const dispatch = useAppDispatch();

  function handleAddList() {
    const newList = { id: uuidv4(), name: text, items: [] };
    dispatch(addList(newList));
    dispatch(setCurrentList(newList.id));
    DB.createNewList(newList);
    setText("");
  }
  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && text) handleAddList();
  }
  return (
    <div className="flex rounded-sm items-center bg-gray-200 w-full">
      <button
        onClick={handleAddList}
        title="Create New List"
        className={`cursor-pointer disabled:opacity-45 p-3`}
        disabled={!text}
      >
        <PlusIcon />
      </button>
      <input
        type="text"
        placeholder="Create a new list"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full p-1 focus:outline-0"
      />
    </div>
  );
}

export default CreateListButton;
