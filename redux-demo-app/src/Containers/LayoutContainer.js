import {connect} from 'react-redux';
import Layout from '../Components/Layout/Layout';
import Candidate_Data_Action from '../Services/Actions/actions';

const mapStateToProp = state =>({
    candidate_data : state?.CandidateState?.candidateData
})

const mapDispatchToProps = dispatch => ({
    
})


export default connect(mapStateToProp, mapDispatchToProps)(Layout)