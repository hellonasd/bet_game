import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeFlag, setStatusBet} from './userSlice';


export const Popap = () => {
    const dispatch = useDispatch();
    let result = useSelector(state => state.user.betResult);
    let statusBet = useSelector(state => state.user.statusBet)
    return (
        <div className='message'>
            <h3 className='result'>{result}</h3>
             <p className='currentbet'>{statusBet}</p>
            <button onClick={()=> dispatch(changeFlag(0))} className='btnOk'>OK</button>
        </div>
    )
}