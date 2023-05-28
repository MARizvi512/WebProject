import {Add_Candidate_Data} from '../constants';
const Add_Candidate_Data_Action = (data) =>{
    return {
        type : Add_Candidate_Data,
        data : data
    }
}
export default Add_Candidate_Data_Action;