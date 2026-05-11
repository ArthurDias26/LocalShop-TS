import { Loja } from './@types/loja';

export type RootStackParamList = {
    Nome: undefined;
  Home: undefined;
  Detalhes: { loja: Loja };
 Cadastro: undefined;
};