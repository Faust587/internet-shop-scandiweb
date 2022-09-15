import React, {FC} from "react";
import Header from "../components/header/Header";

const MainLayout: FC<{children: JSX.Element}> = ({children}) => {

  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default MainLayout;
