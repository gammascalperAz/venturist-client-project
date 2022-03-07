import React from 'react'
import "./TransactionForm.scss"
import Button from '../Button/Button';

const TransactionForm = (props) => {
  const {
    formTitle,
    firstName,
    lastName,
    accountNumber,
    sortCode,
    fundsRemaining
  } = props;


  return (
    <section className="deposit-form">
      <p className="deposit-form__title">Deposit Form</p>
      <div className="deposit-form__table">
        <table>
          <h5 className="deposit-form__table__user-name">Sam Brooks</h5>
          <tr>
            <td id="account-details" colspan="2">Account Number:</td>
            <td></td>
            <td className="deposit-form__table__user-details">10840366</td>
          </tr>
          <tr>
            <td id="account-details" colspan="2">Sort Code:</td>
            <td></td>
            <td className="deposit-form__table__user-details">110053</td>
          </tr>
        </table>
        <p id="border"></p>  
        <form className="transaction" action="">
          <label htmlFor="amount" id="amount">Amount</label>
          <input type="text" name="amount" id="amount-input"/>
        </form>
        <table className="funds-table">
          <tr>
            <td>
            Funds remaining:
            </td>
            <td></td>
            <td id="funds-remaining"  className="deposit-form__table__user-details">{fundsRemaining}</td>
          </tr>
        </table>
      </div>
      <div className="button">
        <Button buttonName="Add Funds" />
      </div>
      <p id="box-border"></p>  
  </section>
  )
}

export default TransactionForm