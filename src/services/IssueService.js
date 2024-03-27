import axios from "axios";
import {axiosInstance} from "./axios-http-client"
class IssueService{
    getAllIssues(){
        return axiosInstance.get('http://localhost:8090/issues');
    }
    
}
export default  new IssueService();