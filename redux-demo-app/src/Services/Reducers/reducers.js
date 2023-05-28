import {Add_Candidate_Data} from '../constants';

const initialState = {
    candidateData: []
}

const CandidateState = (state=initialState, action) => {
    switch(action.type)
    {
        case Add_Candidate_Data :
            console.log(state);
            return {
                ...state,
                candidateData: action.data
            }
        default :
            return state;
    }
}

export default CandidateState;
