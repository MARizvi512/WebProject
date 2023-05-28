import {connect} from 'react-redux';
import Home from '../Components/Home/Home';
import Add_Candidate_Data_Action from '../Services/Actions/actions';

const mapStateToProp = state =>({

})

const mapDispatchToProps = dispatch => ({
    addCandidateHandler: data =>dispatch(Add_Candidate_Data_Action(data))
})


export default connect(mapStateToProp, mapDispatchToProps)(Home)