import { Id } from "@thisbeyond/solid-dnd";
import { createStore } from "solid-js/store";
import { BoardItem } from "../types/BoardItem";

const [containers, setContainers] = createStore<{
  [key: string]: BoardItem[];
}>({
  //This data should all come from the backend, for now this is hardcoded
  Start: [
    { id: 1, text: "A team" },
    { id: 2, text: "Be proactive" },
    { id: 4, text: "Knowldegesharing" },
    { id: 5, text: "" },
  ],
  Stop: [
    { id: 6, text: "Too much time in meetings" },
    { id: 7, text: "" },
  ],
  Continue: [
    { id: 8, text: "Firefighting" },
    { id: 9, text: "Callouts" },
    { id: 10, text: "" },
  ],
});

export const addBoardItemAtIndex = (
  container: Id,
  boardItem: BoardItem,
  index: number
) => {
  setContainers(container, (items) => [
    ...items.slice(0, index),
    boardItem,
    ...items.slice(index),
  ]);
};

export const updateBoardItem = (container: Id, boardItem: BoardItem) => {
  setContainers(container, (items) => {
    let index = items.findIndex((it) => boardItem.id === it.id);
    return [...items.slice(0, index), boardItem, ...items.slice(index + 1)];
  });
};

export const removeBoardItem = (container: Id, boardItemId: Id) => {
  setContainers(container, (items) =>
    items.filter((item) => item.id !== boardItemId)
  );
};

export { containers };
