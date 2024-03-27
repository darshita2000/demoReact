import { useState } from "react"
import issueService from "../../services/IssueService";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function IssueTable({ issuesArray}) {
  
    console.log(issuesArray);
    const navigate = useNavigate();

    const handlePostSolution = (issueId) => {
        navigate(`/postSolution/${issueId}`);
    };
    const handleUpdate = (issueId, solutionDescription) => {
        navigate(`/updateSolution/${issueId}/${solutionDescription}`);
    };

   


    return (
        <div>
            
            <h3> Display Solution</h3>
            <table className="table mt-4">
                <thead>
                    <tr>
                       <th>Issue Id</th>
                       <th>Issue Type</th> 
                       <th>Issue Description</th>
                      <th>Solution Description</th>
                      <th>Solution Date</th>
                      <th>Action</th> 
                    </tr>
                </thead>

                <tbody>
                    {
                        issuesArray.map(
                            (issue) =>
                            (<tr key={issue.issueId}>
                                <td>{issue.issueId}</td>
                                <td>{issue.issueType}</td>
                                <td>{issue.description}</td>
                                <td>{issue.solution && issue.solution.description }</td>
                                <td>{issue.solution && issue.solution.date }</td>
                              
                                <td>
                                {issue.solution ? (
                        <button className="btn btn-warning" onClick={() => handleUpdate(issue.issueId, issue.solution?.description)}>Update</button>
                    ) : (
                        <button className="btn btn-info" onClick={() => handlePostSolution(issue.issueId)}>Post</button>
                    )}
                        </td>
                            </tr>)


                        )
                    }
                </tbody>
            </table>
           
        </div>
    )

}



export default function DisplaySolution(){
    let [issues,setIssues] = useState([]);
   
  
    useEffect(() => {
        //Runs only on the first render
        loadAllData();
    }, []);

    const loadAllData = () => {

       issueService.getAllIssues()
            .then(
                (resp) => {
                    console.log(resp.data);
                    setIssues(resp.data);
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                }
            )
            .finally(
                () => {
                    console.log("Loaded all data from Server");
                }
            )
    }

  
    return(
        <div className="solution-container">
            {
               issues.length > 0 ? <IssueTable issuesArray={issues} /> : <h3>No Solutions Present</h3>
            }
              
        </div>

    )
}
