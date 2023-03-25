import { Carroussel } from "../../components/Carroussel";
import { Header } from "../../components/Header";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Header />
      <Carroussel />
    </Container>
  );
};

export { Home };
