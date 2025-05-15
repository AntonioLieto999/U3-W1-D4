import { Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books, addToCart, selectedBookAsin, setSelectedBookAsin }) => (
  <Row>
    {books.map((book) => (
      <Col xs={12} md={4} lg={3} key={book.asin} className="mb-4">
        <SingleBook
          book={book}
          selected={selectedBookAsin === book.asin}
          onSelect={() => setSelectedBookAsin(book.asin)}
          addToCart={addToCart}
        />
      </Col>
    ))}
  </Row>
);

export default BookList;
