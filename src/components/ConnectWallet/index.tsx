import { useEffect } from "react";
import React from "react";
import { setWallet } from "../../utils/actions";
import { useSelector, useDispatch } from "react-redux";
import { Wallet } from "blog";
import "./styles.scss";
import { toast } from "react-toastify";
// checar se tem a extensão

//onclick: injetar trownWeb

const newWindow: any = window;

const ConnectWallet = () => {
  const wallet = useSelector((state: Storage) => state.wallet);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(wallet);

    const tronWatcher = setInterval(() => {
      if (!!newWindow.tronWeb) {
        console.log("Instalado");
        dispatch(
          setWallet({
            ...wallet,
            isInstalled: !!newWindow.tronWeb,
          })
        );
        clearInterval(tronWatcher);
      } else {
        console.log("Não Instalado");
      }
    }, 500);
    return () => {
      clearInterval(tronWatcher);
    };
  }, []);

  const handleButton = () => {
    if (newWindow.tronWeb && newWindow.tronWeb.ready) {
      dispatch(
        setWallet({
          ...wallet,
          isLoggedIn: newWindow.tronWeb && newWindow.tronWeb.ready,
          address: newWindow.tronWeb.defaultAddress.base58,
        })
      );
    } else {
      toast.error("Please install TRON wallet");
    }
  };

  return (
    <>
      {!wallet.isLoggedIn ? (
        <button type="button" onClick={handleButton} id="connect-wallet">
          Conectar Cateira
        </button>
      ) : (
        <span className="wallet-connected">
          {`${
            newWindow.tronWeb.defaultAddress.name
          } - ${newWindow.tronWeb.defaultAddress.base58.slice(
            0,
            8
          )}...${newWindow.tronWeb.defaultAddress.base58.slice(-8)}`}
        </span>
      )}
    </>
  );
};

export default ConnectWallet;
