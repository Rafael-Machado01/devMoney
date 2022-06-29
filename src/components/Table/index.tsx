import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function Table() {
  useEffect(() => {
    api.get("transactions") 
    .then((response) => console.log(response.data)); 
  }, []); 
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>FreeLance</td>
            <td>29/06/22</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>23/06/22</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
function then(arg0: (response: any) => any) {
  throw new Error("Function not implemented.");
}
