import {connect} from 'react-redux';
import Home from '../Components/Home/Home';
import Layout from '../Components/Layout/Layout';
import Candidate_Data_Action from '../Services/Actions/actions';

const mapStateToProp = state =>({
    candidate_data : state
})

const mapDispatchToProps = dispatch => ({
    CandidateHandler: data =>dispatch(Candidate_Data_Action(data))
})


export default connect(mapStateToProp, mapDispatchToProps)(Home)