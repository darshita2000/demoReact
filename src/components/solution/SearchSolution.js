import React, { useState } from 'react';
import solutionService from "../../services/SolutionService";

const SolutionSearchComponent = () => {
  const [date, setDate] = useState('');
  const [solutions, setSolutions] = useState([]);

  const searchSolutions = async () => {
    try {
      const response = await solutionService.searchSolution(date);
      setSolutions(response.data);
    } catch (error) {
      console.error('Error searching solutions:', error);
    }
  };

  return (
    <div className="solution-container">
    <h3>Search Solution</h3>
      <div className="d-flex justify-content-center mt-4 ">
     <div className="card " style={{ width: '25%', maxWidth: '800px' }}>
      <div className="card-body">
        <h5>Search Solution</h5>
       
          <form  onSubmit={(e) => { e.preventDefault(); searchSolutions(); }}>
            <div className="form-group text-start">
              <label>Enter Date:</label>
              <input
                type="date"
                className="form-control"
                id="searchDate"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3 text-start">Search Solutions</button>
          </form>
        
      </div>
    </div>
    </div> 
    
        <table className='table mt-3'>
          <thead>
            <tr>
              <th>Solution ID</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {solutions.map(solution => (
              <tr key={solution.solutionId}>
                <td>{solution.solutionId}</td>
                <td>{solution.description}</td>
                <td>{solution.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
  );
};

export default SolutionSearchComponent;
