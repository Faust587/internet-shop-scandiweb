import {createContext, Dispatch, SetStateAction} from "react";

type valueType = {
  activeItem: number[];
  setActiveItem: Dispatch<SetStateAction<number[]>>;
}

export default  createContext({} as valueType);
