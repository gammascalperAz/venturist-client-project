import React, { useState } from "react";
import Header from "../../components/Header/Header";
import MakeTransferConfirmAccount from "../../components/MakeTransferPages/MakeTransferConfirmAccount/MakeTransferConfirmAccount";
import MakeTransferForm from "../../components/MakeTransferPages/MakeTransferForm/MakeTransferForm";
import MakeTransferChooseCurrency from "./../../components/MakeTransferPages/MakeTransferChooseCurrency/MakeTransferChooseCurrency";
import "./MakeTransferPage.scss";

const MakeTransferPage = props => {
  const { liveRateData, profileData, contactData } = props;

  const [showCurrencyModal, setShowCurrencyModal] = useState(false);
  const [currencyFrom, setCurrencyFrom] = useState(liveRateData[0]);
  const [currencyTo, setCurrencyTo] = useState(liveRateData[1]);
  const [changingCurrency, setChangingCurrency] = useState("to");
  const [showInitialForm, setShowInitialForm] = useState(true);
  const [showConfirmAccount, setShowConfirmAccount] = useState(false);
  const [transferAmount, setTransferAmount] = useState(0);

  const handleShowCurrencyModal = () => {
    setShowCurrencyModal(!showCurrencyModal);
  };

  const handleAddRecipient = () => {
    
  }

  
  const handleShowForm = event => {
    const amountInput = document.getElementById("amountInput").value;
    if (amountInput.match(/^\d*(\.\d{0,2})?$/) && amountInput > 0) {
      event.preventDefault(); 
      setTransferAmount(amountInput);
      setShowInitialForm(!showInitialForm);
      setShowConfirmAccount(!showConfirmAccount);
    }
  };

  const handleChangingCurrency = (event) => {
    if (event.target.classList.contains("transfer-form-bar__currency-to")) {
      setChangingCurrency("to");
    } else if (event.target.classList.contains("transfer-form-bar__currency-from")) {
      setChangingCurrency("from");
    }
    handleShowCurrencyModal();
  };

  const handleCurrency = (event) => {
    const chosenCurrencyCode = event.target.id.slice(21,24);
    const chosenCurrencyObj = liveRateData.filter(currency => currency.currencyCode === chosenCurrencyCode)[0];
    if(changingCurrency==="to") {
      setCurrencyTo(chosenCurrencyObj);
    } else if(changingCurrency==="from"){
      setCurrencyFrom(chosenCurrencyObj);
    }
    handleShowCurrencyModal();
  }

  return (
    <div className="make-transfer" data-testid="make-transfer">
      <Header
        title="Transfer"
        pageFunctionHeading="Make Transfer"
        textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus."
      />

      {showInitialForm && (
        <MakeTransferForm
          exchangeFrom={currencyFrom}
          exchangeTo={currencyTo}
          handleChangingCurrency={handleChangingCurrency}
          handleShowForm={handleShowForm}
        />
      )}

      {showCurrencyModal && (
        <MakeTransferChooseCurrency
          currencyData={liveRateData}
          handleCurrency={handleCurrency}
          handleShowCurrencyModal={handleShowCurrencyModal}
          handleSearch={()=>alert("Searching")}
        />
      )}

      {showConfirmAccount && (
        <MakeTransferConfirmAccount profileData={profileData} data={contactData} transferAmount={transferAmount} handleAddRecipient={handleAddRecipient} currencySymbol={currencyFrom.currencySymbol} currencyCode={currencyFrom.currencyCode} />
      )}
    </div>
  );
};

export default MakeTransferPage;