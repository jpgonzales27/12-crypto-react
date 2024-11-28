import { z } from "zod";
import { CryptoCurrencyResponseSchema, CurrencySchema, PairSchema } from "../schemas/crypto-schema";

export type Currency = z.infer<typeof CurrencySchema>;
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>;

export type Pair = z.infer<typeof PairSchema>;
