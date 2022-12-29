import { createSortable, Id } from "@thisbeyond/solid-dnd";

const Card = (props: { item: Id }) => {
  const sortable = createSortable(props.item);
  return (
    <div
      use:sortable
      class="text-center"
      classList={{ "opacity-25": sortable.isActiveDraggable }}
    >
      {props.item}
    </div>
  );
};

export default Card;
