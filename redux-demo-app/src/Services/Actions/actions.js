import {Candidate_Data_Type} from '../constants';
const Candidate_Data_Action = (data) =>{
    return {
        type : Candidate_Data_Type,
        data : data
    }
}
export default Candidate_Data_Action;