import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Timer from './components/timer/Timer';
import Weekly from './components/weekly/Weekly';
import Favorite from './components/favorite/Favorite';
import FavoriteItem from './components/favorite/FavoriteItem';
import FavoriteNutrients from './components/favorite/FavoriteNutrients';
import ShareFood from './components/favorite/ShareFood';
import Recipe from './components/recipe/Recipe';
import SearchFood from './components/searchFood/SearchFood';
import SearchVideo from './components/searchVideo/searchVideo';
import ShoppingCart from './components/shoppingCart/ShoppingCart';
import Ingredients from './components/ingredients/Ingredients';
import Item from './components/item/Item';
import Daily from './components/weekly/Daily';
import DailyNutrients from './components/weekly/DailyNutrients';
import QuickPicker from './components/quickPicker/QuickPicker';
import MyRecipe from './components/myRecipe/MyRecipe';

export default (
  <Switch>
    <Route exact path="/" component={ Login } />
    <Route path="/home" component={ Home } />
    <Route path="/timer" component={ Timer } />
    <Route path="/weekly" component={ Weekly } />
    <Route path="/daily/di/:id" component={ DailyNutrients } />
    <Route path="/daily/:id" component={ Daily } /> 
    <Route path="/favorite/FavoriteNutrients/:userid/:id" component={ FavoriteNutrients } /> {/* added userid*/}
    <Route path="/favorite/:userid/:id" component={ FavoriteItem } /> {/* added userid*/}
    <Route path="/sharefood/:userid/:id" component={ ShareFood } /> 
    <Route path="/favorite" component={ Favorite } />
    <Route path="/myrecipe" component={ MyRecipe } />

    <Route path="/recipe/:id" component={ Recipe } />
    <Route path="/searchFood" component={ SearchFood } />
    <Route path="/item" component={ Item } />
    <Route path="/ingredients/:id" component={ Ingredients } />
    <Route path="/searchVideo" component={ SearchVideo } />
    <Route path="/shoppingCart" component={ ShoppingCart } />
    <Route path="/quickPicker" component={ QuickPicker } />
  </Switch>
)