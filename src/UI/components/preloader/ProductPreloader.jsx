import styled from "styled-components";

const ProductPreloader = () => {

  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(100% - 200px);
  margin: 20px 100px 0;
  border-radius: 20px;
  height: 20px;
  background-color: #5ECE7B;
  position: relative;
  overflow: hidden;
`;

const Loader = styled.div`
  border-radius: 20px;
  width: 200px;
  height: 100%; 
  animation: loader 2s infinite;
  background-color: #1EA896;
  position: absolute;
  left: -200px;
  
  @keyframes loader {
    to {
      left: calc(100%);
    }
  }
`;

export default ProductPreloader;
