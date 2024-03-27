// UpdateSolution.jsx
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import solutionService from "../../services/SolutionService";

function UpdateSolution() {
    const { issueId, solutionDescription } = useParams();
    const [updatedSolutionDescription, setUpdatedSolutionDescription] = useState(solutionDescription);
    const [updatedSolutionDate, setUpdatedSolutionDate] = useState(""); // State for date
    const [error, setError] = useState(null);
    

    const handleUpdateSolution = (event) => {
        event.preventDefault(); // Prevent default form submission

        if (updatedSolutionDescription.length < 5) {
            setError("Solution Description must be at least 5 characters.");
            return;
        }
        const updatedSolution = {
            description: updatedSolutionDescription,
            date: updatedSolutionDate
        };

        solutionService.updateSolutionForIssueId(issueId, updatedSolution)
            .then(resp => {
                console.log("Solution updated successfully!",resp);
            })
            .catch(error => {
                console.error("Error updating solution:", error);
            });
    };

    return (
        <div className="solution-container">
            <h3>Update Solution</h3>
            <div className="d-flex justify-content-center mt-4">
            <div className="card"  style={{ width: '25%', maxWidth: '800px' }}>
            <div className="card-body">
                    <h5>Update Solution</h5>
                    <form onSubmit={handleUpdateSolution}>
                        <div className="form-group text-start mb-2">
                            <label>Issue ID:</label>
                            <input type="text" value={issueId} className="form-control" disabled />
                        </div>
                        <div className="form-group text-start mb-2">
                            <label>Solution Description:</label>
                            <textarea value={updatedSolutionDescription} onChange={(e) => setUpdatedSolutionDescription(e.target.value)} className="form-control" rows="4" required minLength={5}></textarea>
                            {error && <small className="text-danger">{error}</small>}
                        </div>
                        <div className="form-group text-start mb-2">
                            <label>Solution Date:</label>
                            <input type="date" value={updatedSolutionDate} onChange={(e) => setUpdatedSolutionDate(e.target.value)} className="form-control" required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Update Solution</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
}

export default UpdateSolution;
