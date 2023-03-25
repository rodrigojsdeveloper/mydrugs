import { ListProducts } from "../../components/ListProducts";
import { Header } from "../../components/Header";
import { Container } from "./style";

const Shop = () => {
  return (
    <Container>
      <Header />
      <ListProducts />
    </Container>
  );
};

export { Shop };
