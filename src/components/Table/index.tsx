import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface transactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function Table() {
  const [transactions, setTransactions] = useState<transactions[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
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
          {transactions.map((transactions) => (
            <tr key={transactions.id}>
              <td>{transactions.title}</td>
              <td className={transactions.type}>
                {transactions.amount.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>{transactions.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transactions.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
