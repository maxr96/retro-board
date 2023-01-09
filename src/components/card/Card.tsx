import { createSortable } from "@thisbeyond/solid-dnd";
import { BoardItem } from "../../types/BoardItem";
import InlineEdit from "./InlineEdit";

const Card = (props: {
  item: BoardItem;
  setItem: (item: BoardItem) => void;
}) => {
  const sortable = createSortable(props.item.id, [props.item.text]);
  return (
    <div
      use:sortable
      class="text-center bg-blue-100 rounded-lg drop-shadow-md"
      classList={{ "opacity-25": sortable.isActiveDraggable }}
    >
      <InlineEdit item={props.item} setItem={props.setItem} />
    </div>
  );
};

export default Card;
