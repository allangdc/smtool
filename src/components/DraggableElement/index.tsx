import React from "react";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot
} from "react-beautiful-dnd";

interface DropObjectProps {
  children: React.ReactNode;
  id: string;
}

export const DropObject: React.FC<DropObjectProps> = (
  props: DropObjectProps
) => {
  const { children, id } = props;

  return (
    <Droppable droppableId={id}>
      {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={{
            backgroundColor: snapshot.isDraggingOver ? "#FFFF0040" : undefined
          }}
        >
          {children}
        </div>
      )}
    </Droppable>
  );
};

interface DragObjectProps {
  children: React.ReactNode;
  id: string;
  index: number;
}

export const DragObject: React.FC<DragObjectProps> = (
  props: DragObjectProps
) => {
  const { children, id, index } = props;

  return (
    <Draggable draggableId={id} index={index}>
      {(
        dragProvided: DraggableProvided,
        // eslint-disable-next-line no-unused-vars
        dragSnapshot: DraggableStateSnapshot
      ) => (
        <div
          ref={dragProvided.innerRef}
          {...dragProvided.draggableProps}
          {...dragProvided.dragHandleProps}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};
