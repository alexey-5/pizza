import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopUp, setSort } from "../store/sortSlise";

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.sort.sort);
  const popup = useSelector((state) => state.sort.popUp);

  const sortArr: string[] = ["популярности", "цене", "алфавиту"];
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clousePop = (e) => {
      if (!e.path.includes(sortRef.current)) dispatch(setPopUp(false));};
  // Устанавливается прослушка на событие клика вне окна попап      
      //   /* console.log('Klick') */
       // Этот лог для контроля количества прослушек
      //console.log(e)
      //console.log(sortRef.current)
    // эта прослушка вешается на другой компонент, его не получить из useRef
    document.body.addEventListener("click", clousePop);
    return () => {
      //отрабатывает при демонтаже компонента
      document.body.removeEventListener("click", clousePop);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => dispatch(setPopUp(!popup))}>{sortArr[sort]}</span>
      </div>
      {popup && (
        <div className="sort__popup">
          <ul>
            <li
              onClick={() => {
                dispatch(setSort(0));
                dispatch(setPopUp(false));
              }}
              className={sort === 0 ? "active" : ""}
            >
              популярности
            </li>
            <li
              onClick={() => {
                dispatch(setSort(1));
                dispatch(setPopUp(false));
              }}
              className={sort === 1 ? "active" : ""}
            >
              цене
            </li>
            <li
              onClick={() => {
                dispatch(setSort(2));
                dispatch(setPopUp(false));
              }}
              className={sort === 2 ? "active" : ""}
            >
              алфавиту
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default Sort;
