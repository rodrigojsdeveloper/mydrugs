import { Container } from "./style";

interface IProduct {
  src: string;
  title: string;
  btc: string;
  eth: string;
  mg: string;
}

const Product = ({ src, title, btc, eth, mg }: IProduct) => {
  return (
    <Container>
      <figure>
        <img src={src} alt={title} />
      </figure>

      <div>
        <h3>{title}</h3>

        <div>
          <div>
            <p>{btc} BTC</p>
            <p>{eth} ETH</p>
          </div>

          <p>{mg}</p>
        </div>
      </div>
    </Container>
  );
};

export { Product };
