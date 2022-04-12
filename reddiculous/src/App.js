
import './App.css';
import './Components/card.css';
import ReddiculousLogo from './logoReddiculous.svg';
import {Card} from './Components/card';
import { SearchBar } from './Components/searchbar';
import {BrowserRouter as Router, Route, Link, NavLink, Routes} from 'react-router-dom'; 


function App() {
  return (
  
          <Router>


              <nav>
                <div class='logo'>
                  <img src={ReddiculousLogo} alt='Reddiculous Logo' />
                </div>

                    <NavLink to='/'>
                      <SearchBar />
                    </NavLink>

                  

               </nav>


               <div class='sidebar-con'>
                        
                      <div class='sidebar'>
                      <NavLink to='/' class='button'>Button</NavLink>
                      <NavLink to='/' class='button'>Button</NavLink>
                      <NavLink to='/' class='button'>Button</NavLink>
                      <NavLink to='/' class='button'>Button</NavLink>
                      <NavLink to='/' class='button'>Button</NavLink>
                      <NavLink to='/' class='button'>Button</NavLink>
                 
                  </div>


               </div>

                <div class='content'>
                  
             
                  <div class='cards' id='cards'>
                    <Card></Card>


                  </div>


              

                </div>

             
            <main></main>
               

          </Router>
         


 

  );
}



export default App;
