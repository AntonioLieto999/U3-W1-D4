import { Card, Button, Row, Col } from "react-bootstrap";

const BookList = ({ books, addToCart }) => (
  <Row>
    {books.map((book) => (
      <Col xs={12} md={4} lg={3} key={book.asin} className="mb-4">
        <Card>
          <Card.Img variant="top" src={book.img} style={{ height: "300px", objectFit: "cover" }} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              <strong>Prezzo:</strong> {book.price}€
            </Card.Text>
            <Button variant="success" onClick={addToCart}>
              Acquista
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default BookList;
