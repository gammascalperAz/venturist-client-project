import React from "react";
import Button from "../Button/Button";

const LiveRatesItem = (props) => {
  const { flagImg, currency, amount, rate, sendFunction } = props;

  //buttonName, buttonStyle, hasIcon, iconSrc, iconPosition, buttonFunction

  return (
    <tr>
      <td>
        <img src={flagImg} alt={currency} /> {currency}{" "}
      </td>
      <td>{amount}</td>
      <td>
        {rate}{" "}
        <Button
          buttonName="Send"
          hasIcon={false}
          buttonFunction={sendFunction}
        />
      </td>
    </tr>
  );
};

export default LiveRatesItem;
