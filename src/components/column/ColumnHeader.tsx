import { Id } from "@thisbeyond/solid-dnd";
import { Listeners } from "@thisbeyond/solid-dnd/dist/types/drag-drop-context";

const ColumnHeader = (props: { id: Id; dragActivators: Listeners }) => {
  return (
    <div class="column-header" {...props.dragActivators}>
      {props.id}
    </div>
  );
};

export default ColumnHeader;
