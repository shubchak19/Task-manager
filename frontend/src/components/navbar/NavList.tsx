import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCurrentList } from "@/redux/slices/listSlice";
import { ListTodoIcon, PlusIcon } from "lucide-react";
import DeleteListButton from "../buttons/DeleteListButton";

function NavList() {
  const { allList, currentListId } = useAppSelector((state) => state.list);
  const dispatch = useAppDispatch();
  if (allList.length <= 0)
    return (
      <section className="flex flex-col justify-center items-center gap-4 links p-6 flex-1">
        <p>
          Create a new list by providing a title and clicking on the{" "}
          <PlusIcon className="inline" size={"1.2em"} /> icon.
        </p>
      </section>
    );

  return (
    <ul className={`flex flex-col gap-4 links py-6 flex-1`}>
      {allList.map((list) => {
        return (
          <li
            key={list.id}
            className={`cursor-pointer flex items-center justify-between hover:bg-gray-100 ${
              currentListId === list.id ? "active" : ""
            }`}
          >
            <div
              className="flex items-center flex-1 px-4 py-2"
              onClick={() => dispatch(setCurrentList(list.id))}
            >
              {<ListTodoIcon size={"1.5em"} />}
              <span className="ml-2">{list.name}</span>
            </div>
            <DeleteListButton listId={list.id} />
          </li>
        );
      })}
    </ul>
  );
}

export default NavList;
