import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { setBudget, setCurrentProfit, setMessages, changeFlag, setStatusBet } from './userSlice';
import { useEffect } from 'react';

export const BtnSubmitBet = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const userBet = useSelector(state => state.user.currentBet); // Получаем ставку, которую сделал пользователь
  const selectedIvent = useSelector(state => state.user.selectedIvent); // Получаем событие, выбранное пользователем
  const currentProfit = useSelector(state => state.user.currentProfit); // Получаем текущий выйгрыш пользователя
  const onSubmitUserBet = () => {
    dispatch(changeFlag(1))
    dispatch(setCurrentProfit(userBet * selectedIvent.percent / 100)); // Текущий выйгрыш
    if (userBet && selectedIvent) {
      const gameResult = Math.random();
      
      if (gameResult.toFixed(2) <= selectedIvent.percent / 100) {
        
        dispatch(setBudget(userBet * selectedIvent.percent / 100));
        dispatch(setMessages('поздравляем ты выйграл'));
        dispatch(setStatusBet(`Размер выйграша : ${userBet * selectedIvent.percent / 100} руб`))

        
      } else {
        dispatch(setBudget(-(userBet * selectedIvent.percent / 100)));
        dispatch(setMessages('к сожелению ты проиграл'));
        dispatch(setStatusBet(`Размер проигрыша : ${-(userBet * selectedIvent.percent / 100)} руб`))
        
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
