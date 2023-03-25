import drug1 from "../../assets/drug1.png";
import drug2 from "../../assets/drug2.png";
import drug3 from "../../assets/drug3.png";
import drug4 from "../../assets/drug4.png";
import { Product } from "../Product";
import { Container } from "./style";

const ListProducts = () => {
  return (
    <Container>
      <h2>SHOP</h2>

      <h2>Most Popular</h2>
      <menu>
        <Product
          src={drug1}
          title="Purple FLower"
          btc="0.0021"
          eth="0.0802"
          mg="70MG OF MDMA PER PILL"
        />
        <Product
          src={drug2}
          title="Green Snowflake"
          btc="0.0045"
          eth="0.1667"
          mg="150MG OF MDMA PER PILL"
        />
        <Product
          src={drug3}
          title="Blue Clover"
          btc="0.0029"
          eth="0.1114"
          mg="100MG OF MDMA PER PILL"
        />
        <Product
          src={drug4}
          title="Red Pill"
          btc="0.0013"
          eth="0.0523"
          mg="90MG OF MDMA PER PILL"
        />
      </menu>
    </Container>
  );
};

export { ListProducts };
