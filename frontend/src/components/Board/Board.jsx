// import { FaPhone, FaUser } from "react-icons/fa6";
// import { useEffect } from "react";
// import css from "../Board/Board.module.css";
// import { useDispatch } from "react-redux";
// import { fetchBoards } from "../../redax/boardsOps";
// import { deleteBoard } from "../../redax/boardsOps";

// export const Board = ({ items: { name, number, id } }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchBoards());
//   }, [dispatch]);

//   const handleDelete = () => dispatch(deleteBoard(id));

//   return (
//     <div className={css.item}>
//       <div className={css.text}>
//         <p>
//           <FaUser className={css.icon} />
//           <span className={css.description}>{name}</span>
//         </p>
//         <p>
//           <FaPhone className={css.icon} />
//           <span className={css.description}>{number}</span>
//         </p>
//       </div>
//       <button className={css.button} onClick={handleDelete}>
//         Delete
//       </button>
//     </div>
//   );
// };

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
