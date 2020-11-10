import React, { useState } from "react";

import { Header } from "./Header";
import { IventList } from "./IventsList";
import { UserChoice } from "./userChoice";
import { UserBet } from './UserBet';
import { BtnSubmitBet } from './BtnSubmitBet';
import {Popap} from './Popap';

import "./styles.css";
import { useSelector } from "react-redux";

export default function App() {

  const [message, setMessage] = useState(`Вы еще не сыграли ни разу`);
  const flag = useSelector(state => state.user.flag);

  function test(){
    if(flag === 1){
      return <Popap/>
    }else if(flag === 0){
      return ''
    }else {
      return ''
    }
  }
  
  return (
    <div className="App">
      <Header />
      <IventList />
      <UserBet />
      <UserChoice />
      <BtnSubmitBet />
      {test()}
      <h1>{message}</h1>
    </div>
  );
}
