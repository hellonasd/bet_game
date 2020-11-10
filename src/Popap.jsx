import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeFlag} from './userSlice';


export const Popap = () => {
    const dispatch = useDispatch();
    let currentProfit = useSelector(state => state.user.currentProfit);
    let result = useSelector(state => state.user.betResult);


  
    

    return (
        <div className='message'>
            <h3 className='result'>{result}</h3>
            <p className='currentbet'>{currentProfit}</p>
            <button onClick={()=> dispatch(changeFlag(0))} className='btnOk'>OKAY</button>
        </div>
    )
}