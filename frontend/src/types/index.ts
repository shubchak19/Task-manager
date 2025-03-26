export type itemType = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export type ListType = {
  id: string;
  name: string;
  items: itemType[] | [];
};