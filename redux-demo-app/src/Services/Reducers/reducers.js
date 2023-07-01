import {Candidate_Data_Type} from '../constants';

const initialState = {
    candidateData: []
}

const CandidateState = (state=initialState, action) => {
    
    switch(action.type)
    {
        case Candidate_Data_Type :
            return {
                candidateData:  action.data
            }
        default :
            return state;
    }
}

export default CandidateState;
