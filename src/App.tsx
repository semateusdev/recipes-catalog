import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './components/Home';
import { RecipesDetail } from './components/Recipes-detail';
import { Header } from './components/Header';

function App() {

  return (
    <Router>
      <Header></Header>
        <section className='h-withoutheader bg-[#f4f8ff] rounded-xl my-4 mx-6 overflow-hidden'>
          <Routes>
            <Route path='/' Component={Home}></Route>
            <Route path='/detail/:id' Component={RecipesDetail}></Route>
          </Routes>
        </section>
    </Router>
  )
}

export default App
