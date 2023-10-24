import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const url = "https://fakestoreapi.com/products";
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(url)
      .then((req) => req.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Ein Fehler ist Yan unterlaufen", err));
  }, []);

  console.log(items);

  return (
    <main className="shop">
      <h2>Willkommen</h2>
      <Link to="/">back to home</Link>
      <section className="shopItems">
        {items?.map((item, index) => (
          <article className="shopItem" key={index}>
            <div className="imageWrapper">
              <img src={item.image} alt="" />
            </div>

            <p>{item.title}</p>
            <p>{item.price}€</p>
            <Link to={`/shop-item/${item.id}`}>Show more</Link>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Shop;
