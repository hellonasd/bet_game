import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setBudget, setCurrentProfit } from './userSlice';
import { useEffect } from 'react';

export const BtnSubmitBet = () => {
  const dispatch = useDispatch();
  const userBet = useSelector(state => state.user.currentBet); // Получаем ставку, которую сделал пользователь
  const selectedIvent = useSelector(state => state.user.selectedIvent); // Получаем событие, выбранное пользователем
  const currentProfit = useSelector(state => state.user.currentProfit); // Получаем текущий выйгрыш пользователя


  const onSubmitUserBet = () => {
    if (userBet && selectedIvent) {
      const gameResult = Math.random();
      
      dispatch(setCurrentProfit(userBet * selectedIvent.percent / 100)); // Текущий выйгрыш

      if (gameResult <= selectedIvent.percent / 100) {
        dispatch(setBudget(currentProfit));
      } else {
        dispatch(setBudget(-currentProfit));
      }
    }
  };

  return (
    <button
      onClick={() => onSubmitUserBet()}
    >
      Сделать ставку
    </button>
  );
};