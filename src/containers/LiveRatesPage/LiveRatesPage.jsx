import React from "react";
import Header from "../../components/Header/Header";
import "./LiveRatesPage.scss";
import LiveRates from "../LiveRates/LiveRates";

export const LiveRatesPage = () => {
  return (
    <div className="live-rates-page">
      <Header
        title="Live Rates"
        pageFunctionHeading="Live Conversion Rates"
        textDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh sit eu sagittis. Integer amet, donec massa fermentum nunc eget netus."
      />
      <LiveRates />
    </div>
  );
};

export default LiveRatesPage;
