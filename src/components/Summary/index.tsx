import { Container } from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useContext, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAT: string;
}
export function Summary() {
  const { transactions } = useTransactions();
  const summary = transactions.reduce(
    (acc, transaction) => {
      console.log(transactions);
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.whitedraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      whitedraws: 0,
      total: 0,
    }
  );
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {summary.deposits.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          {" "}
          {summary.whitedraws.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {" "}
          {summary.total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </div>
    </Container>
  );
}
