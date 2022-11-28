import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPizzaMore } from "../store/pizzaSlise";

const PizzaMore = () => {
  //const [pizza,setPizza] = useState();
  const { id } = useParams();
  const navig = useNavigate();
  const dispatch = useDispatch();
  const pizza = useSelector((state)=>state.pizza.pizzaMore)
  // console.log("Параметр  ",id);
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63271534ba4a9c47533059e2.mockapi.io/pizzabaza/" + id
        );
       // console.log("Параметр  ",data);
        dispatch(setPizzaMore(data));
      } catch (err) {
      //  console.log("Ошибка  ", err);
        navig('/');
      }
    }
    fetchPizza();
  }, []);
  
  if (!pizza) return " Загрузка....";
  return (
    <div className="container">
      <img className="pizzamore_img" src={pizza.imageUrl}></img>
      <h1 >Pizza</h1>
      <p>{pizza.name}</p>
      <h4>{pizza.price}</h4>
    </div>
  );
};
export default PizzaMore;
