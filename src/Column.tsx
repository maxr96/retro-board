import {
  createSortable,
  Id,
  maybeTransformStyle,
  SortableProvider,
} from "@thisbeyond/solid-dnd";
import { For } from "solid-js";
import Sortable from "./Sortable";

const Column = (props: { id: Id; items: any[] }) => {
  const sortable = createSortable(props.id);
  return (
    <div
      ref={sortable.ref}
      style={maybeTransformStyle(sortable.transform)}
      classList={{ "opacity-25": sortable.isActiveDraggable }}
      class="grow"
    >
      <div class="column-header" {...sortable.dragActivators}>
        {props.id}
      </div>
      <div class="column bg-blue-100">
        <SortableProvider ids={props.items}>
          <For each={props.items}>{(item) => <Sortable item={item} />}</For>
        </SortableProvider>
      </div>
    </div>
  );
};

export default Column;
