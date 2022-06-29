import { Container } from "./style";
import { Summary } from "../Summary";
import { Table } from "../Table";
export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Table />
    </Container>
  );
}
