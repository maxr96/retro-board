import {
  createSortable,
  Id,
  maybeTransformStyle,
  SortableProvider,
} from "@thisbeyond/solid-dnd";
import { For } from "solid-js";
import Card from "../card/Card";
import ColumnHeader from "./ColumnHeader";

const Column = (props: { id: Id; items: Id[] }) => {
  const sortable = createSortable(props.id);
  return (
    <div
      ref={sortable.ref}
      style={maybeTransformStyle(sortable.transform)}
      classList={{ "opacity-25": sortable.isActiveDraggable }}
      class="grow"
    >
      <ColumnHeader id={props.id} dragActivators={sortable.dragActivators} />
      <div class="bg-blue-100 flex flex-col gap-y-2">
        <SortableProvider ids={props.items}>
          <For each={props.items}>{(item) => <Card item={item} />}</For>
        </SortableProvider>
      </div>
    </div>
  );
};

export default Column;
