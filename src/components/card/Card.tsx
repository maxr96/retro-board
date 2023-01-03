import { createSortable } from "@thisbeyond/solid-dnd";
import { BoardItem } from "../../types/BoardItem";

const Card = (props: { item: BoardItem }) => {
  const sortable = createSortable(props.item.id, [props.item.text]);
  return (
    <div
      use:sortable
      class="text-center"
      classList={{ "opacity-25": sortable.isActiveDraggable }}
    >
      {props.item.text}
    </div>
  );
};

export default Card;
