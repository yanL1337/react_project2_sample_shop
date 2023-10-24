import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ShopItem = () => {
  const url = "https://fakestoreapi.com/products";
  const [items, setItems] = useState([]);
  const itemID = useParams();

  useEffect(() => {
    fetch(url)
      .then((req) => req.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Ein Fehler ist Yan unterlaufen", err));
  }, []);

  const item = items?.filter((item) => item.id.toString() === itemID.id);

  return (
    <section className="itemWrapper">
      <Link to="/shop">back to shop</Link>
      <Link to="/">back to home</Link>

      <article className="item">
        <div className="imageWrapper">
          <img src={item[0]?.image} alt="" />
          <p>{item[0]?.price}€</p>
        </div>
        <h2>{item[0]?.title}</h2>
        <p>{item[0]?.description}</p>
      </article>
    </section>
  );
};

export default ShopItem;
