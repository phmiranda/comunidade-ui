import { Curso } from "./curso";
import { Usuario } from "./usuario";
import { Resposta } from "./resposta";

export interface Duvida {
  id: number;
  titulo: string;
  descricao: string;
  situacao: string;
  dataCriacao: string;
  curso: Curso;
  usuario: Usuario;
  resposta: Resposta;

}
