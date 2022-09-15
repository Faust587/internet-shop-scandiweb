import {createContext, Dispatch, SetStateAction} from "react";

type valueType = {
  activeItems: number[];
  setActiveItems: Dispatch<SetStateAction<number[]>>;
}

export default  createContext({} as valueType);
