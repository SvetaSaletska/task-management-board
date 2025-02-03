import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redax/filters/selectors";
import { changeFilter } from "../../redax/filters/slice";
import { useId } from "react";
import css from "../SearchBoard/SearchBoard.module.css";

export const SearchBoard = () => {
  const filterID = useId();

  const dicpatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleSearch = (e) => {
    dicpatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.filter}>
      <input
        id={filterID}
        type="text"
        className={css.searchBoard}
        placeholder="Enter a board ID here..."
        value={filter}
        onChange={handleSearch}
      />
      <button className={css.btn} type="submit">
        Load
      </button>
    </div>
  );
};
