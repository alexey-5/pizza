import { useCallback, useRef, useState } from "react";
import style from "./Search.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../store/pizzaSlise";
import debounce from 'lodash.debounce'

function Search() {
  const [search2, setSearch2] = useState('')
  const inputRef = useRef();
  const dispatch = useDispatch();
  //const search = useSelector((state)=>state.pizza.search);
  const onClickClear = (()=>{
    dispatch(setSearch(""));
    setSearch2 ("") //После очистки фокус на поиске 
    //document.querySelector('input').focus()-Это нежелательный вариант
    inputRef.current.focus();
  })
  const updateSearch = useCallback(// сохраняет ссылку на функцию
    debounce((str)=>dispatch(setSearch(str.target.value)),1000)
  ,[])
  const searchDelay = (e)=>{
    updateSearch(e); 
    setSearch2(e.target.value)
  }
  return (
    <div className={style.search}>
      <input
        onChange={(e) => searchDelay(e) }
        className={style.input}
        placeholder="Поиск..."
        value={search2}
        ref={inputRef}
      />
      {
        search2 &&
      <svg onClick={()=>onClickClear()}
        className={style.clouse}
        fill="none"
        height="20"
        viewBox="0 0 20 20"
        width="20"
      >
        <path
          d="M3.89705 4.05379L3.96967 3.96967C4.23594 3.7034 4.6526 3.6792 4.94621 3.89705L5.03033 3.96967L10 8.939L14.9697 3.96967C15.2359 3.7034 15.6526 3.6792 15.9462 3.89705L16.0303 3.96967C16.2966 4.23594 16.3208 4.6526 16.1029 4.94621L16.0303 5.03033L11.061 10L16.0303 14.9697C16.2966 15.2359 16.3208 15.6526 16.1029 15.9462L16.0303 16.0303C15.7641 16.2966 15.3474 16.3208 15.0538 16.1029L14.9697 16.0303L10 11.061L5.03033 16.0303C4.76406 16.2966 4.3474 16.3208 4.05379 16.1029L3.96967 16.0303C3.7034 15.7641 3.6792 15.3474 3.89705 15.0538L3.96967 14.9697L8.939 10L3.96967 5.03033C3.7034 4.76406 3.6792 4.3474 3.89705 4.05379L3.96967 3.96967L3.89705 4.05379Z"
          fill="#212121"
        />
      </svg>
      }

    </div>
  );
}
export default Search;
