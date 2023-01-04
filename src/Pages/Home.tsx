import {useEffect} from "react";
import Categories from "../components/Categories";
import Skeleton from "../components/Skeleton";
import Sort from "../components/Sort";
import Pizza from "../components/Pizza";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizza } from "../store/pizzaSlise";
import { RootState } from "../store";

function Home() {
   const dispatch = useDispatch();
  //const [sort, setSort] = useState(0);
  //const [categories, setСategories] = useState(0);
  const categories = useSelector((state:RootState) => state.sort.categories);
  const search = useSelector((state:RootState)=>state.pizza.search)

  //const categories = useSelector (selectSort)

  const sort = useSelector((state:RootState) => state.sort.sort);
  const pizzaBaza = useSelector((state:RootState) => state.pizza.items);
  const isLoading = useSelector((state:RootState) => state.pizza.loading);
  //console.log('  Данные',pizzaBaza)
  const sortProperty = ["rating", "price", "name"];
  const sortText = sortProperty[sort];
  
  useEffect(() => {
    //setIsLoading(true);
    const sortCategory = categories !== 0 ? `&category=${categories}` : "";
    const searchFetch = search ? `&search=${search}` : ""; //поиск по бекенду
        
        dispatch(fetchPizza({
          sortText,
          sortCategory,
          searchFetch,
        }));
       // setIsLoading(false);
      //}).catch((err)=>{console.log(err,"  ошибка");// получение объекта ошибки промиса
      //setIsLoading(false);})
    window.scrollTo(0, 0); //скролл на верх при первом запросе
  }, [sort, categories, search]);
  
  //console.log(categories)
  const pizzaSort = pizzaBaza //ниже фильтрация по загруженным пицам
    //.filter((val) => val.name.toLowerCase().includes(search.toLowerCase()))
    .map((elem) => (
      <Pizza
        key={elem.id}
        {...elem}
      />
    ));
   
  return (
    <div className="container">
      <div  className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2  className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          // здесь фейковый массив для отображения скелетонов
          // нижнее подчёркивание - нет элементов в массиве
          (isLoading==='pending')
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : pizzaSort
        }
      </div>
    </div>
  );
}
export default Home;
// @ts-ignore  - временная отмена типизации 
