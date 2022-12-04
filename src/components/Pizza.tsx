import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../store/cartSlise";

function Pizza({ id,name, imageUrl, price, sizes, types }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(sizes[0]);
  const cartArr = useSelector((state)=>state.cart.item)//получаем массив пиц из корзины
  let countPizza = 0;
    const objPizza=cartArr.find((elem)=>elem.id===id);//ищем объект с этой пицей
      if(objPizza)countPizza = objPizza.count//если он есть, считываем количество
  const dispatch = useDispatch();//создание функции для передачи данных в реьюсер
  //const number = useState((state)=>state.item.length)
  const addPizza = ()=>{
    const pizza = {
      id,
      name, 
      imageUrl,
      price,
      sizes: activeSize,
      types: activeType
    }
    dispatch(addItem(pizza))
  }
  return (
    <div className="pizza_centr">
      <div className="pizza-block">
        <Link to={`./p-uno/${id}`}>
        <img className="pizza-block__image" src={imageUrl} />
        </Link>
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((val) => (
              <li
                key={val}
                className={val === activeType ? "active" : ""}
                onClick={() => setActiveType(val)}
              >
                {val ? "традиционное" : "тонкое "}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((val) => (
              <li
                key={val}
                className={val === activeSize ? "active" : ""}
                onClick={() => setActiveSize(val)}
              >
                {val} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span onClick={addPizza}>Добавить</span>
            <i>{countPizza}</i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pizza;
