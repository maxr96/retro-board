import { createStore } from "solid-js/store";
import { BoardItem } from "../types/BoardItem";

export const [containers, setContainers] = createStore<{
  [key: string]: BoardItem[];
}>({
  //This data should all come from the backend, for now this is hardcoded
  Start: [
    { id: 1, text: "A team" },
    { id: 2, text: "Be proactive" },
    { id: 4, text: "Knowldegesharing" },
    { id: 5, text: "Start typing.." },
  ],
  Stop: [
    { id: 6, text: "Too much time in meetings" },
    { id: 7, text: "Start typing..." },
  ],
  Continue: [
    { id: 8, text: "Firefighting" },
    { id: 9, text: "Callouts" },
    { id: 10, text: "Start typing..." },
  ],
});
