import { useAppSelector } from "@/redux/hooks";
import { itemType } from "@/types";
import DeleteItemButton from "../buttons/DeleteItemButton";
import UpdateItemButton from "../buttons/UpdateItemButton";

function ListItem({ item }: { item: itemType }) {
  const { title, completed } = item;
  const { currentListId } = useAppSelector((state) => state.list);

  return (
    <li className="w-full bg-white flex justify-between rounded-sm items-center gap-3 p-4">
      <div className="flex gap-3 items-center">
        <UpdateItemButton listId={currentListId} item={item} />
        <p className={`${completed ? "line-through" : ""}`}>{title}</p>
      </div>
      <DeleteItemButton listId={currentListId} itemId={item.id} />
    </li>
  );
}

export default ListItem;
