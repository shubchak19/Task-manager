import { useAppDispatch } from "@/redux/hooks";
import { updateItem } from "@/redux/slices/listSlice";
import { itemType } from "@/types";
import { DB } from "@/utils/dbMethods";
import { CheckIcon } from "lucide-react";

function UpdateItemButton({
  listId,
  item,
}: {
  listId: string | null;
  item: itemType;
}) {
  const dispatch = useAppDispatch();

  function handleUpdate() {
    if (!listId) return;
    const updatedItem = {
      ...item,
      completed: !item.completed,
    };
    dispatch(updateItem({ listId: listId, updatedItem: updatedItem }));
    DB.updateTask(listId, updatedItem);
  }
  return (
    <div
      onClick={handleUpdate}
      className={`border w-[1em] h-[1em] p-1 rounded-sm flex justify-center items-center ${
        item.completed ? "bg-blue-400 text-white" : ""
      }`}
    >
      {!item.completed || <CheckIcon strokeWidth={4} />}
    </div>
  );
}

export default UpdateItemButton;
