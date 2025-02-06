import { useSelector } from "react-redux";
import { Board } from "../Board/Board";
import css from "../BoardsList/BoardsList.module.css";

export const BoardsList = () => {
  const boards = useSelector((state) => state.boards.items);

  if (!boards) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={css.boards_list}>
      {boards.map((item) => (
        <li key={item.id}>
          <Board items={item} />
        </li>
      ))}
    </ul>
  );
};
