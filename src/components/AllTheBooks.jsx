import MyNav from "./MyNav";
import { useState } from "react";
import { Card, Button, Container, Row, Col, Badge } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import history from "../data/history.json";
import BookList from "./BookList";

const AllTheBooks = function () {
  const [books, setBooks] = useState(fantasy);
  const [category, setCategory] = useState("Fantasy");
  const [cartCount, setCart] = useState(0);

  const BookSelected = (newBooks, newCategory) => {
    setBooks(newBooks);
    setCategory(newCategory);
  };

  const addToCart = () => {
    setCart(cartCount + 1);
  };

  return (
    <>
      <MyNav category={category} />
      <Container className="my-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-center mb-0">Libri-{category}</h2>
          <div>
            <Button variant="warning" className="position-relative">
              Carrello{" "}
              <Badge
                bg="danger"
                className="position-absolute top-0 border border-radius rounded-circle"
              >
                {cartCount}
              </Badge>
            </Button>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <Button className="mx-2" onClick={() => BookSelected(history, "History")}>
            History
          </Button>
          <Button className="mx-2" onClick={() => BookSelected(scifi, "Sci-Fi")}>
            Sci-Fi
          </Button>
          <Button className="mx-2" onClick={() => BookSelected(fantasy, "Fantasy")}>
            Fantasy
          </Button>
          <Button className="mx-2" onClick={() => BookSelected(horror, "Horror")}>
            Horror
          </Button>
          <Button className="mx-2" onClick={() => BookSelected(romance, "Romance")}>
            Romance
          </Button>
        </div>

        <BookList books={books} addToCart={addToCart} />
      </Container>
    </>
  );
};

export default AllTheBooks;
