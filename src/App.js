import './App.css';
import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';
import TagBadge from './TagBadge';
import { Button } from 'bootstrap';

 function App() {
  const [recipe, setRecipe] = useState({"strTags":null});

  // const response = axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
  //   .then(function(response){
  //    console.log(response.data.meals[0]);
  //   });
  useEffect(function() {
    const fetchRecipe = async function () {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      // console.log(response.data.meals[0]);
      setRecipe(response.data.meals[0]);
      
    };
     fetchRecipe();
  },[]);
  
  let arrIngridients = [];
  let i = 0;
  while (i++ < 20) {
    const currIng = recipe[`strIngredient${i}`];
    if (currIng !== "" && currIng !== null) {
      arrIngridients.push([currIng, recipe[`strMeasure${i}`]]);
    }
  } 
  
  const ingridients = arrIngridients.map(function(item) {
    return (
      <li>{item[0]} : {item[1]}</li>
    )
  } );

  

  // let recipeText = recipe.strInstructions(function() {
  //   if (recipe.strInstructions.lenght > 250) {
  //     return (
  //     recipeText = recipe.strInstructions.substring(0, 249) + "..."
  //     )};
  // });

  // console.log(recipeText);
  

  return (
    <div>
      <h2><center>MILC(Mom! I'm a little Cook!)</center></h2>
      <div className='block'>
        <div className='imgHolder'>
        {recipe.strTags !== null && <TagBadge tags={recipe.strTags}/>}
        <img src={recipe.strMealThumb} alt="meal" className="centerImg" width="500" height="400"></img>
        <button>refresh</button>
        </div>
        <h2><span>{recipe.strMeal}</span></h2>
        <span className='recipeText'>{recipe.strInstructions}</span>
        
        <h3>ingridients:</h3>
        <ul>{ ingridients }</ul>
        </div>
        
        {/* <>
          <Button variant="success">Success</Button>{' '}
          </> */}
        
    </div>
    
  );
}

export default App;
