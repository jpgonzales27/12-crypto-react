import { currencies } from "../data";
import { useCryptoStore } from "../stores/crypto-store";

export default function CriptoSearchForm() {
  const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies);

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda</label>
        <select name="currency" id="currency">
          <option value="">--- Seleccione ---</option>
          {cryptocurrencies.map((crypto) => (
            <option key={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptocurrency">Criptomoneda</label>
        <select name="criptocurrency" id="criptocurrency">
          <option value="">--- Seleccione ---</option>
          {currencies.map((currency) => (
            <option key={currency.name} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  );
}
