import { Id } from "@thisbeyond/solid-dnd";

const CardOverlay = (props: { item: Id }) => {
  return <div class="bg-blue-300 text-center">{props.item}</div>;
};

export default CardOverlay;
