export type RootStackParamList = {
  Nome: undefined;
  Detalhes: {loja: Loja};
}

export interface Loja {
    id: string;
    nome: string;
    categoria: string;
    imagem: string;
    distancia: string;
    descricao?: string;
}