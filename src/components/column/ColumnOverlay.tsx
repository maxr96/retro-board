import { Id } from "@thisbeyond/solid-dnd";
import { For } from "solid-js";
import { BoardItem } from "../../types/BoardItem";
import SortableOverlay from "../card/CardOverlay";

const ColumnOverlay = (props: { id: Id; items: BoardItem[] }) => {
  return (
    <div class="grow">
      <div class="column-header bg-blue-200">{props.id}</div>
      <div class="flex flex-col gap-y-2 rounded-b-lg">
        <For each={props.items}>
          {(item) => <SortableOverlay text={item.text} />}
        </For>
      </div>
    </div>
  );
};

export default ColumnOverlay;
