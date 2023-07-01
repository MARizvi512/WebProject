import {useState} from 'react'
import {FormFeedback, FormGroup, Input, Label} from 'reactstrap'
import {useNavigate} from 'react-router-dom';

const EditCandidate = (props) => {

    const [editMode, setEditMode] = useState(false); 
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [university, setUniversity] = useState('');
    const [experience, setExperience] = useState('');
    const [lastname, setLastName] = useState('');
    const [shortListedBy, setShortListedBy] = useState('');
    const navigate = useNavigate();

    const FieldInput = (fieldName, fieldNamefor,FormFeedBack, fieldValue, fieldMethod) => {
        return (
            <>
                <Label for={fieldNamefor}><b>{fieldName}</b></Label>
                <Input  invalid={fieldValue === '' ? true : false } valid={fieldValue !== '' ? true : false } onChange={(e) => {fieldMethod(e.target.value)}}/>
                <FormFeedback invalid={fieldValue === '' ? true : false} valid={fieldValue !== '' ? true : false}>
                    { fieldValue === '' ? FormFeedBack : 'Successfull fill'}
                    
                </FormFeedback>
            </>
        );
    }
    const RouteBack = () =>{
        navigate('/');
    }

    const checkValidation = () => {
        if(contact !== '' && firstName !== '' && lastname !== '' && email !== '' && university !== '' && experience !== '' && shortListedBy !== '' )
        {
            return true;
        }
        else 
        {
            return false;
        }

    }
    const SubmitData = () => {
        console.log('yes i got '+ props.Passid)
        if(checkValidation())
        {
            console.log('submit data Successfully');
        }
    }

    return (
        <>
        
        <div className='row mt-4'>
            <div className='col-md-2'></div>
            <div className='col-md-4'>
                <FormGroup>
                    {FieldInput("First Name", "firstname", "Please fill this field", firstName, setFirstName)}
                    {FieldInput("Email", "email", "Please fill this field", email, setEmail)}
                    {FieldInput("Experience", "experience", "Please fill this field", experience, setExperience)}
                    {FieldInput("ShortListedBy", "shortlistedby", "Please fill this field", shortListedBy, setShortListedBy)}

                </FormGroup>
            </div>
            <div className='col-md-4'>
                <FormGroup>
                    {FieldInput("Last Name", "lastname", "Please fill this field", lastname, setLastName)}
                    {FieldInput("Contact", "contact", "Please fill this field", contact, setContact)}
                    {FieldInput("University", "university", "Please fill this field", university, setUniversity)}
                
                </FormGroup>
                <button className='btn btn-success mt-3 mr-3' onClick={(e)=>{SubmitData()}}>Submit</button>
                <button className='btn btn-dark mt-3' style={{marginLeft:"10px"}} onClick={(e)=>{RouteBack()}}>Cancel</button>
        
            </div>
        </div>
        
        </>

    );
} 

export default EditCandidate;