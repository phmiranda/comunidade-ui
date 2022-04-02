import { Usuario } from "./usuario";
import { Duvida } from "./duvida";

export interface Resposta {
  id: number;
  descricao: string;
  dataCriacao: string;
  situacao: string;
  usuario: Usuario;
  duvida: Duvida;
}
