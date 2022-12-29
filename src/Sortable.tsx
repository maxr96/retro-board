import { createSortable } from "@thisbeyond/solid-dnd";

const Sortable = (props: { item: any }) => {
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

export default Sortable;
