import { Board } from "../Board/Board";
import { AddCardForm } from "../AddCardForm/AddCardForm";
import { SearchBoard } from "../SearchBoard/SearchBoard";

export const App = () => {
  return (
    <div className="App">
      {/* <h1>Task Management Board</h1> */}
      <SearchBoard />
      <Board />
      <AddCardForm column="todo" />
    </div>
  );
};
