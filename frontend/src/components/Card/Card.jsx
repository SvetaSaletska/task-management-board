import { Draggable } from "react-beautiful-dnd";

export const Card = ({ card, index }) => (
  <Draggable draggableId={card.id} index={index}>
    {(provided) => (
      <div
        className="card"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
    )}
  </Draggable>
);

export default Card;
