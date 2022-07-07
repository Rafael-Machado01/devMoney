import { Container } from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useContext, useState } from "react";
import { TransactionsContext } from "../../TransactionsContext";
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAT: string;
}
export function Summary() {
  const data = useContext(TransactionsContext);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>R$500</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$500</strong>
      </div>
    </Container>
  );
}
