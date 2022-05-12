import { React, useState, useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import CardMovie from './components/CardMovie';
import { movies$ } from './components/react-interview/movies.js'
import Filter from './components/Filter';
import PaginationFooter from './components/PaginationFooter';


function App() {
  const [result, setResult] = useState([])
  const [filters, setFilters] = useState([])
  const [activeFilters, setActiveFilters] = useState([])
  const [sizePage, setSizePage] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [concated, setConcated] = useState(false)

  useEffect(() => {
    movies$.then((value) => { setResult(value) })
  }, [])

  useEffect(() => {
    setFilters([...new Set(result.map(movie => movie.category))]);
    if(result[0] && concated == false){
      let tempResult=[];
      result.forEach(r=>{
        let same= false
        tempResult.forEach(tR=>{
          if(tR.title==r.title){
            const index = tempResult.indexOf(tR)
            let Obj = Object.assign({},tempResult[index])
            Obj.dislikes = Obj.dislikes+r.dislikes
            Obj.likes = Obj.likes+r.likes
            tempResult=tempResult.slice(0, index).concat(Obj)
            same = true
          }})
        if(!same){
          tempResult.push(r)
          same=false
        }
      })
      setResult(tempResult)
      setConcated(true)
    }
  }, [result])

  return (
    <div className="App">
      <header className="header">
        <span className="title">React-Interview</span>
        <Filter
          handleFilter={setActiveFilters}
          filters={filters}
          activeFilters={activeFilters}
        ></Filter>
      </header>
      <div className="cards">
        {result.filter(m => activeFilters.includes(m.category)).map(movie => {
          if (result.filter(m => activeFilters.includes(m.category)).indexOf(movie) >= (sizePage * (currentPage - 1)) && result.filter(m => activeFilters.includes(m.category)).indexOf(movie) < (currentPage * sizePage)) {
            return <CardMovie
              handleDelete={(e) => setResult(result.filter(m => m.id != movie.id))}
              handleThumbUp={(e) => {
                const index = result.indexOf(movie)
                let ObjUp = Object.assign({}, result[index])
                ObjUp.likes = ObjUp.likes + 1;
                setResult(result.slice(0, index).concat(ObjUp).concat(result.slice(index + 1)))
              }}
              handleThumbDown={(e) => {
                const index = result.indexOf(movie)
                let ObjUp = Object.assign({}, result[index])
                ObjUp.dislikes = ObjUp.dislikes + 1;
                setResult(result.slice(0, index).concat(ObjUp).concat(result.slice(index + 1)))
              }}
              movies={result}
              id={movie.id}
              title={movie.title}
              category={movie.category}
              likes={movie.likes}
              dislikes={movie.dislikes}
            >
            </CardMovie>
          }
        })}
      </div>
      <footer>
        <PaginationFooter
          size={result.filter(m => activeFilters.includes(m.category)).length}
          handleChangeSize={setSizePage}
          handleChangePage={setCurrentPage}
        >
        </PaginationFooter>
      </footer>
    </div>
  );
}

export default App;
