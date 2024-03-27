import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import solutionService from "../../services/SolutionService";

function PostSolution() {
    const { issueId } = useParams();
    const [solutionDescription, setSolutionDescription] = useState("");
    const [solutionDate, setSolutionDate] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch additional data for the issueId if needed
    }, [issueId]);
    const handlePostSolution = (e) => {
        e.preventDefault();

        if (solutionDescription.length < 5) {
          setError("Solution Description must be at least 5 characters.");
          return;
        }
        // Call the SolutionService to post the solution
        solutionService.postSolutionForIssueId(issueId, { description: solutionDescription, date: solutionDate })
            .then((resp) => {
                console.log("Solution posted successfully:", resp);
             
            })
            .catch((err) => {
                console.error("Error posting solution:", err);
               
            })
            .finally(
                () => {
                    console.log("Loaded all data from Server");
                }
            );
    };
    return (
        <div className="solution-container">
            
            <h3>Post Solution</h3>
     <div className="d-flex justify-content-center mt-4">
      <div className="card" style={{ width: '25%', maxWidth: '800px' }} >
        <div className="card-body">
          <h5>Post Solution</h5>
          <form onSubmit={handlePostSolution}>
            <div className="form-group text-start mb-2">
              <label>Issue ID:</label>
              <input type="text" value={issueId} className="form-control" disabled />
            </div>
            <div className="form-group text-start mb-2">
              <label>Solution Description:</label>
              <textarea value={solutionDescription} onChange={(e) => setSolutionDescription(e.target.value)} className="form-control" rows="4"></textarea>
              {error && <small className="text-danger">{error}</small>}
            </div>
            <div className="form-group text-start mb-2">
              <label>Solution Date:</label>
              <input type="date" value={solutionDate} onChange={(e) => setSolutionDate(e.target.value)} className="form-control" required />
            </div>
          
            <button type="submit" className="btn btn-primary">Post Solution</button>
          </form>
        </div>
      </div>
    </div>
       </div>
    );
}

export default PostSolution;
