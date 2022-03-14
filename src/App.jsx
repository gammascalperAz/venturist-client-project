import "./App.scss";
import NavBar from "./containers/NavBar/NavBar";
import ConvertPage from "./containers/ConvertPage/ConvertPage";
import UserProfile from "./components/UserProfile/UserProfile";
import MakeTransferPage from "./containers/MakeTransferPage/MakeTransferPage";
import WalletPage from "./containers/WalletPage/WalletPage";
import LiveRatesPage from "./containers/LiveRatesPage/LiveRatesPage";
import ContactsPage from "./containers/ContactsPage/ContactsPage";
import DepositPage from "./containers/DepositPage/DepositPage";
import WithdrawPage from "./containers/WithdrawPage/WithdrawPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import liveRateData from "./assets/data/liveRatesExample";
import userProfile from "./assets/data/samanthaBrooksProfile";
import contactData from "./assets/data/contactExample";
import { useState } from "react";

const App = () => {

  const [profileData,setProfileData] = useState({...userProfile});
  const updateProfileData = (newData) => {
    setProfileData(newData);
  }


  return (
    <div className="App">
      <Router>
        <NavBar />
        <UserProfile />
        <Routes>
          <Route path="/wallet" element={<WalletPage profileData={profileData} liveRateData={liveRateData} />}></Route>
          <Route path="/liverates" element={<LiveRatesPage />}></Route>
          <Route path="/convert" element={<ConvertPage liveRateData={liveRateData} profileData={profileData} updateProfileData={updateProfileData} />}></Route>
          <Route path="/transfer" element={<MakeTransferPage liveRateData={liveRateData} profileData={profileData} contactData={contactData} />}></Route>
          <Route path="/contacts" element={<ContactsPage />}></Route>
          <Route path="/deposit" element={<DepositPage />}></Route>
          <Route path="/withdraw" element={<WithdrawPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
