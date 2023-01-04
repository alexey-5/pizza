import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPizzaMore } from "../store/pizzaSlise";
import { RootState } from "../store";

const PizzaMore: React.FC = () => {
  //const [pizza,setPizza] = useState();
  const { id } = useParams();
  const navig = useNavigate();
  const dispatch = useDispatch();
  const pizza = useSelector((state:RootState)=>state.pizza.pizzaMore);
  
  // console.log("Параметр  ",id);
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63271534ba4a9c47533059e2.mockapi.io/pizzabaza/" + id
        );
       // console.log("Параметр  ",data);
        dispatch(setPizzaMore(data));
       // console.log(data);
      } catch (err) {
      //  console.log("Ошибка  ", err);
        navig('/');
      }
    }
    fetchPizza();
  }, []);
  
  if (!pizza[0]) return <>  " Загрузка...."</>
  const {imageUrl, name, price} = pizza[0];
  return (
    <div className="container">
      <img className="pizzamore_img" src={imageUrl} alt="img"></img>
      <h1 >Pizza</h1>
      <p>{name}</p>
      <h4>{price}</h4>
    </div>
  );
};
export default PizzaMore;
