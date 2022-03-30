import { render, screen } from "@testing-library/react";
import Wallet from "./Wallet";
import { BrowserRouter as Router } from "react-router-dom";

const userHoldings = [
  {
    "id": 1,
    "userID": "OVhSjdW8chfg67ljJOOBaoKf61A2",
    "currencyName": "British Pound",
    "amount": 3751.59,
    "currencyCode": "GBP",
    "currencySymbol": "£"
},
{
    "id": 2,
    "userID": "OVhSjdW8chfg67ljJOOBaoKf61A2",
    "currencyName": "US Dollar",
    "amount": 1000.0,
    "currencyCode": "USD",
    "currencySymbol": "$"
}
]

describe("Testing the wallet", () => {
  test("Check to see if wallet renders", () => {
    render(<Wallet userHoldings={userHoldings} />)

    expect(screen.getByTestId("wallet")).toBeInTheDocument();
  });

  test("Check for correct number for tiles", () => {
    render(<Wallet userHoldings={userHoldings} />)

    expect(screen.getAllByTestId("tiles").length).toBe(2);
  });
});
