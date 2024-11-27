import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm";
import { useCryptoStore } from "./stores/crypto-store";

function App() {
  const fetchCrypto = useCryptoStore((state) => state.fetchCryptos);

  useEffect(() => {
    fetchCrypto();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>
        <div className="content">
          <CriptoSearchForm />
        </div>
      </div>
    </>
  );
}

export default App;
