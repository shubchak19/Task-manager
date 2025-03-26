import { useAppDispatch } from "@/redux/hooks";
import { removeItem } from "@/redux/slices/listSlice";
import { DB } from "@/utils/dbMethods";
import { Trash2Icon } from "lucide-react";

function DeleteItemButton({
  listId,
  itemId,
}: {
  listId: string | null;
  itemId: string;
}) {
  const dispatch = useAppDispatch();

  function handleDelete() {
    if (!listId) return;
    dispatch(removeItem({ listId: listId, itemId: itemId }));
    DB.deleteTask(listId, itemId);
  }
  return (
    <button className="cursor-pointer" onClick={handleDelete}>
      <Trash2Icon className="text-red-400" />
    </button>
  );
}

export default DeleteItemButton;
