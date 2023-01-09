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
      placeholder="Start typing..."
      class="w-full resize-none text-center overflow-hidden min-h-1 max-h-52 bg-transparent p-2 hover:cursor-pointer hover:bg-blue-50 hover:rounded-lg focus:bg-blue-50 focus:border-blue-300 focus:rounded-lg"
    />
  );
};

export default InlineEdit;
