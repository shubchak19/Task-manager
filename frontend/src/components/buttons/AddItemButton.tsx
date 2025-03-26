import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addItem } from "@/redux/slices/listSlice";
import { DB } from "@/utils/dbMethods";
import { PlusIcon } from "lucide-react";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddItemButton() {
  const [text, setText] = useState("");
  const { allList, currentListId } = useAppSelector((state) => state.list);
  const dispatch = useAppDispatch();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value.trimStart());
  }

  function handleAddItem() {
    const item = {
      id: uuidv4(),
      title: text,
      description: "",
      completed: false,
    };
    if (currentListId) {
      dispatch(addItem({ listId: currentListId, item: item }));
      DB.addNewTask(currentListId, item);
    }
    setText("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && text) handleAddItem();
  }

  return (
    <div className="flex rounded-sm items-center hover:bg-gray-100 bg-white w-full">
      <button
        onClick={handleAddItem}
        title="Add a task"
        className={`cursor-pointer disabled:opacity-45 p-3`}
        disabled={!text}
      >
        <PlusIcon />
      </button>
      <input
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="w-full p-3 focus:outline-0"
        disabled={allList.length <= 0}
      />
    </div>
  );
}

export default AddItemButton;
