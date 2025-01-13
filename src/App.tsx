import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './components/Home';
import { RecipesDetail } from './components/Recipes-detail';
import { FavoriteProvider } from './context/favorite';

function App() {

  return (
    <Router>
      <FavoriteProvider>
        <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/detail/:id' Component={RecipesDetail}></Route>
        </Routes>
      </FavoriteProvider>
    </Router>
  )
}

export default App
