import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from './state';
import { bindActionCreators } from 'redux';

const Shop = () => {
    const balance = useSelector(state => state.amount);
    const dispatch = useDispatch();
    // const actions= bindActionCreators(actionCreators,dispatch)
    const {withdrawmoney,depositMoney}= bindActionCreators(actionCreators,dispatch)

  return (
    <div>
       {/* <button className="btn btn-primary" onClick={()=>{dispatch(actionCreators.withdrawmoney(100))}}>-</button>
      Update balance {balance}
      <button className="btn btn-primary" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
          {/* <button className="btn btn-primary" onClick={()=>{actions.withdrawmoney(100)s}}>-</button> - without destructuring */}
          <button className="btn btn-primary" onClick={()=>{withdrawmoney(100)}}>-</button>
      Update balance {balance}
      <button className="btn btn-primary" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
