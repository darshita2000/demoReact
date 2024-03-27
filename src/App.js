import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Try from './components/Try';
import Layout from './components/Layout';
import DisplaySolution from './components/solution/DisplaySolution';
import PostSolution from './components/solution/PostSolution';
import UpdateSolution from './components/solution/UpdateSolution';
import SearchSolution from './components/solution/SearchSolution';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
      <Route path="/" element={<Layout/>}>
        <Route path="/try" element={<Try/>} ></Route> 
        <Route path="/displaySolution" element={<DisplaySolution/>} ></Route> 
        <Route path="/searchSolution" element={<SearchSolution/>} ></Route> 
        <Route path="/postSolution/:issueId" element={<PostSolution/>} ></Route> 
        <Route path="/updateSolution/:issueId/:solutionDescription" element={<UpdateSolution />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
