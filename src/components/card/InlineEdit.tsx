import { JSX } from "solid-js";
import { BoardItem } from "../../types/BoardItem";

const InlineEdit = (props: {
  item: BoardItem;
  setItem: (item: BoardItem) => void;
}) => {
  //   let textarea: HTMLTextAreaElement | undefined;
  const onChange: JSX.EventHandler<HTMLTextAreaElement, InputEvent> = (
    event
  ) => {
    props.setItem({ id: props.item.id, text: event.currentTarget.value });
  };
  // TODO: Impelement working auto resizing of the text area
  //   const onInput: JSX.EventHandler<HTMLTextAreaElement, InputEvent> = (
  //     event
  //   ) => {
  //     if (textarea) {
  //       textarea.style.height = "auto";
  //       textarea.style.height = `${event.currentTarget.scrollHeight - 16}px`;
  //     }
  //   };
  const onKeyDown: JSX.EventHandler<HTMLTextAreaElement, KeyboardEvent> = (
    event
  ) => {
    if (event.key === "Escape") {
      event.currentTarget.blur();
    }
  };
  return (
    <textarea
      //   ref={textarea}
      aria-label="Card Item"
      value={props.item.text}
      onChange={onChange}
      onKeyDown={onKeyDown}
      class="resize-none overflow-hidden min-h-1 max-h-52 bg-transparent hover:cursor-pointer hover:bg-blue-100 hover:rounded-lg p-2"
    />
  );
};

export default InlineEdit;
