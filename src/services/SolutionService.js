import axios from "axios";
import {axiosInstance} from "./axios-http-client"
class SolutionService{
    postSolutionForIssueId(issueId, solutionData){
        return axiosInstance.post(`http://localhost:8090/add/${issueId}`, solutionData);
    }
    updateSolutionForIssueId(issueId,solutionData){
        return axiosInstance.put(`http://localhost:8090/update/${issueId}`,solutionData);
    }
    searchSolution(date){
        return axiosInstance.get(`http://localhost:8090/search/${date}`);
    }
}
export default  new SolutionService();