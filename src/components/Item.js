import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInCart: false,
    };
  }

  handleAddToCartClick = () => {
    this.setState((prevState) => ({
      isInCart: !prevState.isInCart,
    }));
  };

  render() {
    const { name, category } = this.props;
    const itemClass = this.state.isInCart ? "in-cart" : "";

    return (
      <li className={itemClass}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button onClick={this.handleAddToCartClick}>
          {this.state.isInCart ? "Remove From Cart" : "Add to Cart"}
        </button>
      </li>
    );
  }
}

export default Item;
