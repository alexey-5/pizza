import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {setCategories} from '../store/sortSlise'

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state:RootState)=>state.sort.categories)

   const arr=['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']
  return (
    <div className="categories">
      <ul>
          {
          arr.map((val,index)=><li key={index} onClick={()=>dispatch(setCategories(index))} className={categories === index ? "active" : ""}>{val}</li>)
          }
      </ul>
    </div>
  );
}
export default Categories;
