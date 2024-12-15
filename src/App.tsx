import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './components/Home';
import { RecipesDetail } from './components/Recipes-detail';

function App() {

  return (
    <Router>
      <section>
        <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/detail/:id' Component={RecipesDetail}></Route>
        </Routes>
      </section>
    </Router>
  )
}

export default App
