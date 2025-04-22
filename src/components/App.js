import React from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isDarkMode: false,
    };
  }

  handleDarkModeClick = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const appClass = this.state.isDarkMode ? "App dark" : "App light";

    return (
      <div className={appClass}>
        <header>
          <h2>Shopster</h2>
          <button onClick={this.handleDarkModeClick}>
            {this.state.isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        <ShoppingList items={items} />
      </div>
    );
  }
}

export default App;
