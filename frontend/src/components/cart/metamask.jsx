import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { toast } from 'sonner';
import { Link } from "react-router-dom";
import Recap from "./recap"
import EthLogo from '../../assets/eth-logo.svg'
import MetaLogo from '../../assets/metamask-fox.svg'
import AngleLeft from "../../assets/angle-left.svg"
import '../../styles/components/cart/metamask.css'

const CryptoPaymentPage = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [cart, setCart] = useState([]);
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [ethToEurRate, setEthToEurRate] = useState(null);
  const promo = localStorage.getItem("promo");
  const truncatedAccount = account ? `${account.substring(0, 6)}...${account.slice(-4)}` : '';

  // Récupérer le panier depuis le local storage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Calculer le prix total de tous les articles dans le panier
  useEffect(() => {
    const newTotalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const roundedTotalPrice =
      Math.round(newTotalPrice * 100 + Number.EPSILON) / 100;
    setTotalPrice(roundedTotalPrice.toFixed(2));
  }, [cart]);

  // Calculer le prix total avec la réduction
  useEffect(() => {
    if (promo) {
      const discountedPrice = totalPrice - totalPrice * (promo * 0.01);
      const roundedDiscountedPrice =
        Math.round(discountedPrice * 100 + Number.EPSILON) / 100;
      setDiscountedPrice(roundedDiscountedPrice.toFixed(2));
    }
  }, [totalPrice, promo]);

  // Vérifier si MetaMask est déjà connecté au chargement de la page
  useEffect(() => {
    const checkMetaMaskConnection = async () => {
      if (window.ethereum) {
        try {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          // Vérifier si l'utilisateur est déjà connecté
          const accounts = await web3Instance.eth.getAccounts();
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }

          // Écouter les changements de compte
          window.ethereum.on('accountsChanged', (newAccounts) => {
            setAccount(newAccounts[0]);
          });
        } catch (error) {
          toast.error('Erreur lors de la vérification de la connexion MetaMask:', error);
        }
      }
    };

    checkMetaMaskConnection();
  }, []);

  // Fonction pour gérer la connexion à MetaMask
  const handleConnect = async () => {

    if (account !== null) {
      console.log("Btn disabled");
      return;
    }

    if (window.ethereum) {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);

        // Get the current account
        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
        toast.success('Portefeuille connecté avec succès.');

        // Listen for account changes
        window.ethereum.on('accountsChanged', (newAccounts) => {
          setAccount(newAccounts[0]);
        });
      } catch (error) {
        toast.error('Erreur de connexion à MetaMask', error);
      }
    } else {
      toast.error('MetaMask non détecté');
      window.open('https://metamask.io/download.html', '_blank');
      alert('Veuillez recharger la page après avoir installé MetaMask.');
    }
  };

  const handleBuyCrypto = async () => {
    try {

      const data = await response.json();
      
      const ethAmount = promo ? discountedPrice / ethToEurRate : totalPrice / ethToEurRate;
      console.log('ethAmount:', ethAmount);
  
      // Vérifiez que la propriété existe avant de l'utiliser
      if (data && ethAmount) {
        // Effectuer l'opération ethToEuroRate divisé par totalPrice
        const wei = web3.utils.toWei(ethAmount, "ether");
        console.log(wei)
        const weiHex = Math.round(wei).toString(16).padStart(14, '0');
        console.log(weiHex);
  
        if (web3 && account) {
          // Envoyer la transaction avec la nouvelle opération
          window.ethereum.sendAsync({
            method: 'eth_sendTransaction',
            params: [
              {
                from: account,
                to: '0x671d28288939551E746d6963129d83DDa273ee27',
                value: weiHex,
              },
            ],
            id: 1,
          });
        }
      } 
    } catch (error) {
      toast.error(`Erreur lors de la récupération du solde ou de la convetion de l'etherium`, error);
    }
  };

  const handleDisabledButtonClick = () => {
    toast.error("Bouton désactivé");
  };
  

  const handleCopyToClipboardAddres = () => {
    if (account) {
      navigator.clipboard.writeText(account)
        .then(() => {
          toast.success("Adresse copié");
        })
        .catch((error) => {
          toast.error("Erreur lors de la copie de l'Adresse", error);
        });
    }
  };

useEffect(() => {
  const fetchEthToEurRate = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur');

      if (!response.ok) {
        toast.error(`La requête a échoué avec le statut ${response.status}`, {
          description: "Nous n'avons pas pu accéder au cours actuel de l'Etherium",
        });
        return;
      }

      const data = await response.json();
      setEthToEurRate(data.ethereum.eur);
    } catch (error) {
      toast.error(`Erreur lors de la récupération du taux ETH en EUR`, error);
    }
  };

  fetchEthToEurRate();
}, []);

  return (
    <div>
      <Link to="/" className="header-back-home">
        <img src={AngleLeft} alt="icon back to home" className="back-home-icon" />
        <div className="back-home">
          <h3 className="back-home-h3">Retour à la boutique </h3>
          <div className="line-back-home"></div>
        </div>
      </Link>
      <div className="product-title">
        <h1>
          <span>|</span> Paiement Crypto
        </h1>
      </div>
      <div className="meta">
        <button 
        onClick={account === null ? handleConnect : handleDisabledButtonClick}
        className={account === null ? 'btn-connectAccountMeta' : 'btn-connectAccountMetaDisabled'}
        >
          {account ? 'Votre Portefeuille MétaMask est connecté' : 'Connecter votre Portefeuille MétaMask'}
        </button>
        <div className="meta-adresse-cour">
          {account && 
          <button onClick={handleCopyToClipboardAddres} className="content-metalogo-account">
            <img src={MetaLogo} alt="Métamask logo" className='metaLogo' />
            <p className='p-accountCrypto'>{truncatedAccount}</p>
          </button>}
          <p>{ethToEurRate}</p>
        </div>
        <div className="meta-pay">
          <Recap />
          <button onClick={handleBuyCrypto} className='btn-buyCrypto'>Payer <img src={EthLogo} alt="Etherium logo" /></button>
        </div>
        <img src="https://ethereum.org/_ipx/w_750,q_75/%2F_next%2Fstatic%2Fmedia%2Fhackathon_transparent.0818b178.png?url=%2F_next%2Fstatic%2Fmedia%2Fhackathon_transparent.0818b178.png&w=750&q=75" alt="" />
        <img src="https://ethereum.org/_ipx/w_750,q_75/%2F_next%2Fstatic%2Fmedia%2Fimpact_transparent.7420c423.png?url=%2F_next%2Fstatic%2Fmedia%2Fimpact_transparent.7420c423.png&w=750&q=75" alt="" />
        <img src="https://ethereum.org/_ipx/w_750,q_75/%2F_next%2Fstatic%2Fmedia%2Finfrastructure_transparent.8849e91b.png?url=%2F_next%2Fstatic%2Fmedia%2Finfrastructure_transparent.8849e91b.png&w=750&q=75" alt="" />
        <p>Cours ETH/EUR : {discountedPrice}</p>
      </div>
    </div>
  );
};

export default CryptoPaymentPage;
