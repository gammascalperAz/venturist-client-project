import React, { useState, useEffect } from "react";
import "./ConvertPage.scss";
import userProfile from "../../assets/data/samanthaBrooksProfile";
import liveRatesArr from "../../assets/data/liveRatesExample";
// import Header from "../../components/Header/Header";
import LiveRates from "../LiveRates/LiveRates";

const ConvertPage = () => {
  useEffect(() => {}, userProfile, liveRatesArr);

  const [profile, setProfile] = useState({ ...userProfile });
  const [rates, setRates] = useState([...liveRatesArr]);

  return (
    <section className="convert-page">
      {/* <Header
        title="Convert"
        pageFunctionHeading="Currency Converter"
        textDescription="Buy and exchange currencies with ease"
      /> */}

      <LiveRates />
    </section>
  );
};

export default ConvertPage;
