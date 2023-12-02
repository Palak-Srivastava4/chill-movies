import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';
import movie from './movie.json';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main">
        {
          movie.map((element,index) =>{
            return ( 
          <Movies
          key={index}
          title={element.Title}
          year={element.Year}
          poster={element.Poster}
          />
            )
          } )
        }
    
  
    </div>
    </div>
  );
}

export default App;
