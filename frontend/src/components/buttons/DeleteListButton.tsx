import { useAppDispatch } from "@/redux/hooks";
import { removeList } from "@/redux/slices/listSlice";
import { DB } from "@/utils/dbMethods";
import { PlusIcon } from "lucide-react";

function DeleteListButton({ listId }: { listId: string }) {
  const dispatch = useAppDispatch();
  function handleDelete() {
    dispatch(removeList(listId));
    DB.deleteList(listId);
  }
  return (
    <button className={`cursor-pointer`} onClick={handleDelete}>
      <PlusIcon className="rotate-45 text-gray-500" />
    </button>
  );
}

export default DeleteListButton;
