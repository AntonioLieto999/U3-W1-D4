import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleSelect = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book, addToCart } = this.props;
    const { selected } = this.state;

    return (
      <Card
        onClick={this.handleSelect}
        style={{
          margin: "1rem",
          cursor: "pointer",
          border: selected ? "3px solid red" : "1px solid #ddd",
          transition: "border 0.2s",
        }}
      >
        <Card.Img variant="top" src={book.img} alt={book.title} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <strong>Prezzo:</strong> {book.price}€
          </Card.Text>
          <Button
            variant="success"
            onClick={(e) => {
              e.stopPropagation();
              addToCart();
            }}
          >
            Acquista
          </Button>

          {selected && <CommentArea asin={book.asin} />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
