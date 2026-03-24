import { LOJAS } from "../data/mockData";
import { Loja } from "../@types/loja";

export const LojaService = {
    getLojas: async (): Promise<Loja[]> => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(LOJAS), 1000)
        })
    }
}