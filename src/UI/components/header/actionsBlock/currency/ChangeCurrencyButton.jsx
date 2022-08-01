import React, {useState} from "react";
import styled from "styled-components";
import closed from "../../../../../assets/images/closed.svg"
import opened from "../../../../../assets/images/opened.svg"
import {useQuery} from "@apollo/client";
import {GET_CURRENCIES_QUERY} from "../../../../../graphQL/Queries";
import {useDispatch} from "react-redux";
import {currencySlice} from "../../../../../store/reducers/currencySlice";

const ChangeCurrencyButton = () => {

  const {setNewCurrency} = currencySlice.actions;
  const dispatch = useDispatch();

  const [status, setStatus] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(0);

  const {data, loading, error} = useQuery(GET_CURRENCIES_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  const selectCurrency = (index) => {
    setSelectedCurrency(index);
    setStatus(false);

    dispatch(setNewCurrency(index));
  }

  return (
    <CurrencyMenuWrapper>
      <ButtonWrapper onClick={() => {setStatus(!status)}}>
        <CurrencySymbol>
          {data["currencies"][selectedCurrency].symbol}
        </CurrencySymbol>
        <DropdownMenuState active={status} />
      </ButtonWrapper>
      <DropdownMenu active={status}>
        {data["currencies"].map((item, index) => {
          const {label, symbol} = item;
          return (selectedCurrency !== index) ?
            <DropdownItem key={index} onClick={() => selectCurrency(index)}>
              {`${symbol} ${label}`}
            </DropdownItem> : null;
        })}
      </DropdownMenu>
    </CurrencyMenuWrapper>
  );
}

const DropdownItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  background-color: #fff;

  :hover {
    background-color: #EEEEEE;
  }
  
  :active {
    background-color: #cccccc;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 75%;
  left: -50%;
  width: 100px;
  display: ${({active}) => active ? "static" : "none"};

  box-shadow: 0 4px 35px rgba(168, 172, 176, 0.19);
`;

const CurrencyMenuWrapper = styled.div`
  display: flex;
  position: relative;
`;

const CurrencySymbol = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  display: flex;
  align-items: center;
`;

const DropdownMenuState = styled.div`
  display: flex;
  align-self: center;
  width: 8px;
  height: 4px;
  background-size: 8px 4px;
  background-image: url(${({active}) => active ? opened : closed});
`;

const ButtonWrapper = styled.div`
  display: flex;
  height: 100%;
`;

export default ChangeCurrencyButton;
