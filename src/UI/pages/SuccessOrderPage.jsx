import styled from "styled-components";
import logo from "../../assets/images/a-logo.svg"
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {useCart} from "../../hooks/useCart";

const SuccessOrderPage = () => {

  const navigate = useNavigate();
  const {clearProductCart} = useCart();

  useEffect(() => {
    clearProductCart();
  }, []);

  return (
    <Wrapper>
      <InfoWrapper>
        <Logo image={logo} />
        SUCCESS
      </InfoWrapper>
      <BackButton onClick={() => navigate("/")}>GO BACK</BackButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BackButton = styled.div`
  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 299px;
  height: 63px;
  background: #5ECE7B;
  color: #fff;
`;

const Logo = styled.div`
  width: 200px;
  height: 200px;
  background-size: 100%;
  background-image: url(${({image}) => image});
`;

export default SuccessOrderPage;
