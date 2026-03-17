export interface Loja {
    id: string;
    nome: string;
    categoria: string;
    imagem: string;
    distancia: string;
    descricao?: string;
}

export type RootStackParamList = {
  Detalhes: {loja: Loja}
};