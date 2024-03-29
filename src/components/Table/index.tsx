import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./style";

export function Table() {
  const { transactions } = useTransactions();
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
