import { Id } from "@thisbeyond/solid-dnd";
import { For } from "solid-js";
import { BoardItem } from "../../types/BoardItem";
import SortableOverlay from "../card/CardOverlay";

const ColumnOverlay = (props: { id: Id; items: BoardItem[] }) => {
  return (
    <div class="grow">
      <div class="column-header bg-gray-100">{props.id}</div>
      <div class="bg-gray-100">
        <For each={props.items}>
          {(item) => <SortableOverlay text={item.text} />}
        </For>
      </div>
    </div>
  );
};

export default ColumnOverlay;
