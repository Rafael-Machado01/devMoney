import Modal from "react-modal";
import { TransactionsProvider } from "./hooks/useTransactions";
import { GlobalStyle } from "./assets/styles/global";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
Modal.setAppElement("#root");
export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] =
    useState(false);

  function HandleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true);
  }

  function HandleCloseNewTransactionModal() {
    setNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={HandleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={HandleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
