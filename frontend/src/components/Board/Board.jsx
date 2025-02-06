import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBoards } from "../../redax/boardsOps"; // Ваші асинхронні операції
import { Column } from "../Column/Column";

export const Board = () => {
  const dispatch = useDispatch();
  const {
    items: boards = [],
    loading,
    error,
  } = useSelector((state) => state.boards || {});

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong!</div>;

  if (boards.length === 0) return <div>No boards available</div>;

  const board = boards[0];

  return (
    <div className="board">
      {Object.keys(board.columns).map((columnKey) => (
        <Column
          key={columnKey}
          column={columnKey}
          cards={board.columns[columnKey]}
        />
      ))}
    </div>
  );
};
