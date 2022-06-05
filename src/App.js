import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';


 function App() {
  const [recipe, setRecipe] = useState({});

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
  for (let i=1; i<20; i++) {
    const currIng = recipe[`strIngredient${i}`];
    console.log(currIng);
    if (currIng !== "" && currIng !== null) {
      arrIngridients.push([currIng, recipe[`strMeasure${i}`]]);
    }
  } 
  console.log(arrIngridients);
  
  const ingridients = arrIngridients.map(function(item) {
    return (
      <li>
        {item[0]} : {item[1]}
      </li>
    )
  } );
  

  return (
    <div>
      <h2><center>MILC(Mom! I'm a little Cook!)</center></h2>
      <div className='block'>
        <div>
        <img src={recipe.strMealThumb} alt="meal" className="centerImg" width="500" height="600"></img>
        </div>
        <h2><span>{recipe.strMeal}</span></h2>
        <span>{recipe.strInstructions}</span>
        <h3>ingridients:</h3>
        <ul>
          {ingridients}
        </ul>
        
       
        </div>
        
    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
        
    //   </header>
    // </div>
  );
}

export default App;
