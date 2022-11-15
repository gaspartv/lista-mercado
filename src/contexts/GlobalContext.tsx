import { createContext, useEffect, useState } from "react";

interface iGlobalProps {
  children?: JSX.Element;
}

export interface iMyList {
  product: string;
  price: number;
  bg: string;
}

interface iGlobalContext {
  myList: iMyList[];
  setMyList: React.Dispatch<React.SetStateAction<iMyList[]>>;
  addProduct: (data: iMyList) => void;
  removeProduct: () => void;
  backgroundC: (ind: number) => void;
}

export const GlobalContext = createContext({} as iGlobalContext);

const GlobalProvider = ({ children }: iGlobalProps) => {
  const [myList, setMyList] = useState<iMyList[]>([]);
  const [render, setRender] = useState("");

  useEffect(() => {}, [render]);

  useEffect(() => {
    const list = () => {
      const list = localStorage.getItem("myList");
      if (list) {
        setMyList(JSON.parse(list));
      }
    };
    list();
  }, []);

  const addProduct = (data: iMyList) => {
    const myItem = {
      product: data.product,
      price: data.price,
      bg: "",
    };
    setMyList([...myList, myItem]);
    localStorage.setItem("myList", JSON.stringify([...myList, myItem]));
  };

  const removeProduct = () => {
    const result = myList.filter((product) => product.bg === "");
    setMyList(result);
    localStorage.setItem("myList", JSON.stringify(result));
    setRender("s");
  };

  const backgroundC = (ind: number) => {
    myList.forEach((product, index) => {
      if (Number(index) === Number(ind)) {
        if (product.bg === "") {
          product.bg = "red";
          const result = ind + "red";
          setRender(result);
        } else {
          product.bg = "";
          const result = ind + "";
          setRender(result);
        }
      }
    });
  };

  return (
    <GlobalContext.Provider
      value={{ myList, setMyList, addProduct, removeProduct, backgroundC }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
