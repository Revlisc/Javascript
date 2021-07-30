
import './App.css';
import React, { Component } from 'react';
import Recipe from './Components/Recipe';
import MakeButton from './Components/MakeButton';
import { getRecipe } from './Components/utils';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentRecipe: getRecipe(),
            isClicked: false

        }
        this.getNewRecipe = this.getNewRecipe.bind(this);
    }

    getNewRecipe = () => {
      this.setState({
        currentRecipe: getRecipe(),
        isClicked: true
      });
    }

    render() {
      const { currentRecipe } = this.state;
      const isClicked = this.state.isClicked;
      let displayed;
      if (isClicked) {
        displayed = currentRecipe && <Recipe recipeChoice={currentRecipe}/>;
      } else {
        displayed = <div></div>;
      }
      return (
        <div className="container">
          <h1 className="title">Recipe Idea Generator</h1>
          <div className="display-box">
            {displayed}
          </div>
          <div className="btn">
            <MakeButton handleClick={this.getNewRecipe}/>
          </div>
        </div>
      );
    }
}

export default App;
