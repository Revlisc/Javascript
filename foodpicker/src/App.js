
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

        }
        this.getNewRecipe = this.getNewRecipe.bind(this);
    }
    
    getNewRecipe = () => {
      this.setState = {
        currentRecipe: getRecipe(),
      }
    }

    render() {
      const { currentRecipe } = this.state;
      return (
        <div className="container">
          <div className="display-box">
            <Recipe recipeChoice={currentRecipe}/>
          </div>
          <div className="btn">
            <MakeButton handleClick={this.getNewRecipe}/>
          </div>
        </div>
      );
    }
}

export default App;
