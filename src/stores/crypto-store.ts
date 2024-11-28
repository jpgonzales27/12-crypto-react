import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "../schemas/crypto-schema";
import { Cryptocurrency } from "../types";

type CryptoStore = {
  cryptocurrencies: Cryptocurrency[];
  fetchCryptos: () => Promise<void>;
};

async function getCryptos() {
  const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
  const {
    data: { Data },
  } = await axios(url);
  console.log(Data);
  const result = CryptoCurrenciesResponseSchema.safeParse(Data);
  console.log(result);
  if (result.success) {
    return result.data;
  }
}

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    cryptocurrencies: [],
    fetchCryptos: async () => {
      const cryptocurrencies = await getCryptos();
      set(() => ({
        cryptocurrencies,
      }));
    },
  }))
);
