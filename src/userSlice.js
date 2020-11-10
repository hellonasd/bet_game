//Подключаем createSlice - создает срез хранилища (отдельную часть хранилища отвечающую за определенную логику приложения)
import { createSlice } from "@reduxjs/toolkit";

// Инициализируем начальное состояние хранилища
const initialState = {
  name: `Иван Дурак`,
  budget: 100,
  currentProfit: 0,
  currentBet: 0,
  selectedIvent: {},
  betResult : '',
  flag : -1,
  statusBet : ''
};

// Определяем Срез хранилища, который отвечает за логику игрока
const userSlice = createSlice({
  name: `user`, // Имя Slice
  initialState, // Начальное состояние хранилища
  reducers: { //  Методы, которые изменяют часть хранилища, отвечающего за пользователя
    setUserBet: { // Метод, который устанавливает ставку, которую сделал пользователь
      reducer(state, action) { // reducer принимает state и action
        state.currentBet = action.payload;
      }
    },
    setSelectedIvent(state, action) { // Метод, который устанвливает событие, выбранное пользователем
    // action.type === имя метода (reducer)
      state.selectedIvent = action.payload;
    },
    setBudget(state, action) { 
      // Метод, который меняет бюджет пользователя
      state.budget = state.budget + action.payload;
    },
    setCurrentProfit(state, action) { // Метод, который устанавливает результат сделанной ставки
      state.currentProfit = action.payload;
    },
    setMessages(state, action) {
      state.betResult = action.payload;
    },
    changeFlag(state, action){
      state.flag = action.payload;
    },
    setStatusBet(state, action){
      state.statusBet = action.payload;
    }
  }
});

export default userSlice.reducer;

export const { setUserBet, setSelectedIvent, setBudget, setCurrentProfit ,setMessages, changeFlag, setStatusBet} = userSlice.actions; // Экспортируем методы (reducers) для изменения хранилища

export const getName = (state) => {
  return state.user.name;
};

export const getBudget = (state) => {
  return state.user.budget;
};
