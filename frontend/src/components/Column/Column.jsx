import { useDispatch } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { deleteBoard } from "../../redax/boardsOps";
import { Card } from "../Card/Card";

export const Column = ({ column, cards }) => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    dispatch(
      deleteBoard({
        boardId: "1",
        fromColumn: source.droppableId,
        toColumn: destination.droppableId,
        cardId: cards[source.index].id,
      })
    );
  };

  return (
    <div className="column">
      <h2>{column}</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={column}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {cards.map((card, index) => (
                <Card key={card.id} card={card} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
