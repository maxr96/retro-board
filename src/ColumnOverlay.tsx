import { Id } from "@thisbeyond/solid-dnd";
import { For } from "solid-js";
import SortableOverlay from "./SortableOverlay";

const ColumnOverlay = (props: { id: Id; items: any[] }) => {
  console.log(props);
  return (
    <div class="grow">
      <div class="column-header bg-gray-100">{props.id}</div>
      <div class="bg-gray-100">
        <For each={props.items}>
          {(item) => <SortableOverlay item={item} />}
        </For>
      </div>
    </div>
  );
};

export default ColumnOverlay;
