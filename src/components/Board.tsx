import {
  DragDropProvider,
  DragDropSensors,
  DragOverlay,
  SortableProvider,
  closestCenter,
  Draggable,
  Droppable,
  Id,
} from "@thisbeyond/solid-dnd";
import { batch, createSignal, For } from "solid-js";
import Column from "./column/Column";
import ColumnOverlay from "./column/ColumnOverlay";
import CardOverlay from "./card/CardOverlay";
import {
  addBoardItemAtIndex,
  containers,
  removeBoardItem,
} from "../store/Containers";

export const Board = () => {
  // TODO: make all ids a unique string or number
  const containerIds = () => Object.keys(containers);
  const [containerOrder, setContainerOrder] = createSignal(containerIds());

  const isContainer = (id: Id) => containerIds().includes(id as string);

  const getContainer = (id: Id) => {
    for (const [key, items] of Object.entries(containers)) {
      if (items.some((item) => item.id === id)) {
        return key;
      }
    }
  };

  const closestContainerOrItem = (
    draggable: Draggable,
    droppables: Droppable[],
    context: {
      activeDroppableId: Id | null;
    }
  ) => {
    const closestContainer = closestCenter(
      draggable,
      droppables.filter((droppable) => isContainer(droppable.id)),
      context
    );
    if (isContainer(draggable.id)) {
      return closestContainer;
    } else if (closestContainer) {
      const containerItemIds = containers[closestContainer.id];
      const closestItem = closestCenter(
        draggable,
        droppables.filter((droppable) =>
          containerItemIds.map((it) => it.id).includes(droppable.id)
        ),
        context
      );
      if (!closestItem) {
        return closestContainer;
      }

      if (getContainer(draggable.id) !== closestContainer.id) {
        const isLastItem =
          containerItemIds.map((it) => it.id).indexOf(closestItem.id) ===
          containerItemIds.length - 1;

        if (isLastItem) {
          const belowLastItem =
            draggable.transformed.center.y > closestItem.transformed.center.y;

          if (belowLastItem) {
            return closestContainer;
          }
        }
      }
      return closestItem;
    }
  };

  const move = (
    draggable: Draggable,
    droppable: Droppable,
    onlyWhenChangingContainer = true
  ) => {
    const draggableIsContainer = isContainer(draggable.id);
    const draggableContainer = draggableIsContainer
      ? draggable.id
      : getContainer(draggable.id);
    const droppableContainer = isContainer(droppable.id)
      ? droppable.id
      : getContainer(droppable.id);

    if (
      draggableContainer != droppableContainer ||
      !onlyWhenChangingContainer
    ) {
      if (draggableIsContainer) {
        const fromIndex: number = containerOrder().indexOf(
          draggable.id as string
        );
        const toIndex = containerOrder().indexOf(droppable.id as string);
        const updatedOrder = containerOrder().slice();
        updatedOrder.splice(toIndex, 0, ...updatedOrder.splice(fromIndex, 1));
        setContainerOrder(updatedOrder);
      } else {
        const containerItems = containers[droppableContainer];
        let index = containerItems.findIndex((it) => it.id === droppable.id);
        if (index === -1) index = containerItems.length;
        let item = containers[draggableContainer].find(
          (it) => draggable.id === it.id
        );

        batch(() => {
          removeBoardItem(draggableContainer, draggable.id);
          addBoardItemAtIndex(droppableContainer, item, index);
        });
      }
    }
  };

  const onDragOver = ({ draggable, droppable }) => {
    if (draggable && droppable && !isContainer(draggable.id)) {
      move(draggable, droppable);
    }
  };

  const onDragEnd = ({ draggable, droppable }) => {
    if (draggable && droppable) {
      move(draggable, droppable, false);
    }
  };

  return (
    <DragDropProvider
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      collisionDetector={closestContainerOrItem}
    >
      <DragDropSensors />
      <div class="flex flex-row gap-x-5 justify-center items-stretch">
        <SortableProvider ids={containerOrder()}>
          <For each={containerOrder()}>
            {(key) => <Column id={key} items={containers[key]} />}
          </For>
        </SortableProvider>
      </div>
      <DragOverlay>
        {
          /* @ts-ignore */
          (draggable) => {
            const id = draggable.id;
            return isContainer(id) ? (
              <ColumnOverlay id={id} items={containers[id]} />
            ) : (
              <CardOverlay text={draggable.data[0]} />
            );
          }
        }
      </DragOverlay>
    </DragDropProvider>
  );
};

export default Board;
