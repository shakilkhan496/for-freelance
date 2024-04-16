import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PaymentForm } from "./PaymentForm";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AngleLeft from "../../../assets/angle-left.svg";
import "./Checkout.css";

const Checkout = () => {
  const [clientToken, setClientToken] = useState(null);

  const initialOptions = {
    "client-id": "AaqyQtJR6QjVlOrUIPw2hDOxQyHWFftcDPFf8Dgfl1gZwgUtWy71nj2p3jZXIKzUorf0_XaACQsb_gWx",
    "data-client-token": clientToken,
    components: "hosted-fields,buttons",
    "enable-funding": "paylater",
    "disable-funding": "venmo",
    "data-sdk-integration-source": "integrationbuilder_ac",
    currency: "EUR",
    locale: "fr_FR",
    "buyer-country": "FR",

  };

  useEffect(() => {
    (async () => {
      const response = await fetch("https://backend-jokair.vercel.app/api/token", {
        method: "POST",
      });
      const { client_token } = await response.json();
      setClientToken(client_token);
    })();
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
          <span>|</span> Paiement
        </h1>
      </div>
      <div className="container-paymentForm">
        {clientToken ? (
          <div>
            <PayPalScriptProvider options={initialOptions}>
              <PaymentForm />
            </PayPalScriptProvider>
          </div>
        ) : (
          <h1 className="check">Chargement</h1>
          // <PayPalCheckoutButton />
        )}
      </div>
    </div>
  );
};

export default Checkout;
