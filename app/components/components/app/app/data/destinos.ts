
export interface Destino {
  id: number;
  nome: string;
  imagem: string;
  descricao: string;
}

export const destinos: Destino[] = [
  {
    id: 1,
    nome: "Rio de Janeiro",
    imagem: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
    descricao:
      "Conheça as praias, o Cristo Redentor e as paisagens maravilhosas do Rio de Janeiro."
  },
  {
    id: 2,
    nome: "Paris",
    imagem: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
    descricao:
      "Explore a Torre Eiffel, os museus e toda a beleza da capital francesa."
  },
  {
    id: 3,
    nome: "Nova York",
    imagem: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800",
    descricao:
      "Descubra a Times Square, o Central Park e os arranha-céus de Nova York."
  },
  {
    id: 4,
    nome: "Tóquio",
    imagem: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    descricao:
      "Conheça a cultura japonesa, a tecnologia e os incríveis pontos turísticos de Tóquio."
  }
];
