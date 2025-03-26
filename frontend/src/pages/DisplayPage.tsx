import AddItemButton from "@/components/buttons/AddItemButton";
import ListItem from "@/components/ui/ListItem";
import { useAppSelector } from "@/redux/hooks";
import { ListTodoIcon } from "lucide-react";

function DisplayPage() {
  const { allList, currentListId } = useAppSelector((state) => state.list);
  const currentList = allList.find((list) => list.id === currentListId);

  if (allList.length <= 0 || !currentList)
    return (
      <section className="flex-1 flex flex-col justify-center items-center gap-4 bg-indigo-400 text-white text-xl p-6">
        <p className="max-w-md text-center">
          {!currentList && allList.length > 0
            ? "Please select a list to see all the tasks!"
            : "No list had been created yet Please Create a list to get started!"}
        </p>
      </section>
    );
  return (
    <section className="flex-1 flex flex-col gap-4 bg-indigo-400 text-xl p-3 md:p-6 pt-14 md:pt-auto">
      <div className="flex text-white gap-4 font-bold">
        <ListTodoIcon size={"1.5em"} />
        <h2>{currentList?.name}</h2>
      </div>
      <ul className="flex-1 flex flex-col gap-1">
        {currentList?.items
          .slice()
          .sort((a, b) => Number(a.completed) - Number(b.completed))
          .map((item) => {
            return <ListItem key={item.id} item={item} />;
          })}
      </ul>
      <AddItemButton />
    </section>
  );
}

export default DisplayPage;
