import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBoard } from "../../redax/boardsOps";
import css from "../AddCardForm/AddCardForm.module.css";

export const AddCardForm = ({ column }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id: Date.now().toString(),
      title,
      description,
    };

    dispatch(addBoard({ boardId: "1", column, card: newCard }));
    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
    </div>
  );
};
