import React from 'react'
import "./ConvertPage.scss";
// import userProfile from "../../assets/data/samanthaBrooksProfile";
// import liveRatesArr from "../../assets/data/liveRatesExample";
import Header from '../../components/Header/Header'
import DropDown from '../../components/DropDown/DropDown';
const testoptions = ["GBP", "YEN", "USD"];

const ConvertPage = () => {


 
  // useEffect(() => {},userProfile,liveRatesArr)

  // const [profile,setProfile] = useState({...userProfile});
  // const [rates,setRates] = useState([...liveRatesArr]);
  

  
  return (
    <section className='convert-page'>
      <Header title="Convert" pageFunctionHeading="Currency Converter" textDescription="Buy and exchange currencies with ease" />
      <DropDown options={testoptions} />
    </section>
  )
}

export default ConvertPage;