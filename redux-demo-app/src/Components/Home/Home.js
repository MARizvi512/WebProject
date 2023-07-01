import { Button, ButtonGroup, Offcanvas, OffcanvasBody, OffcanvasHeader, Table } from 'reactstrap';
import { useEffect, useState } from 'react';
import PaginationComponent from '../Utility/PaginationComponent';
import { useNavigate } from 'react-router-dom';

const Data = [
    {
        Name: "Haleem",
        Phone: "033453",
        University: "Kiet",
        Experience: "24",
        Batch: "180",
        FileName: "Haleem's_Cv.pdf",
        ShortListedBy: "MA"
    },
    {
        Name: "Hamza",
        Phone: "03157",
        University: "Bahria",
        Experience: "24",
        Batch: "180",
        FileName: "Hamza's CV",
        ShortListedBy: "MA"
    },
    {
        Name: "Zaid",
        Phone: "0335",
        University: "KU",
        Experience: "35",
        Batch: "185",
        FileName: "Zaid's CV",
        ShortListedBy: "MA"
    },
    {
        Name: "Danial",
        Phone: "034215",
        University: "Kiet",
        Experience: "30",
        Batch: "181",
        FileName: "Danial's CV",
        ShortListedBy: "MA"
    },
    {
        Name: "Arif",
        Phone: "0325",
        University: "KU",
        Experience: "",
        Batch: "185",
        FileName: "Arif's CV",
        ShortListedBy: "MA"
    },
    {
        Name: "Jeorge",
        Phone: "0325",
        University: "KU",
        Experience: "",
        Batch: "181",
        FileName: "Jeorge's CV",
        ShortListedBy: "MA"
    },
    {
        Name: "Denise",
        Phone: "0325",
        University: "KU",
        Experience: "",
        Batch: "182",
        FileName: "Denise's CV",
        ShortListedBy: "MA"
    },
    {
        Name: "Reshma",
        Phone: "0325",
        University: "KU",
        Experience: "",
        Batch: "182",
        FileName: "Reshma's CV",
        ShortListedBy: "MA"
    },
    {
        Name: "Josh",
        Phone: "0325",
        University: "KU",
        Experience: "",
        Batch: "183",
        FileName: "Josh's CV",
        ShortListedBy: "MA"
    },
    {
        Name: "Keith",
        Phone: "0325",
        University: "KU",
        Experience: "",
        Batch: "183",
        FileName: "Keith's CV",
        ShortListedBy: "MA"
    }


];


const Home = (props) => {

    const [toggleFlag, setToggleFlag] = useState(false);
    const [detail, setDetail] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [DotPage, setDotPage] = useState(1);
    const navigate = useNavigate();

    const LikeComponentDidMount = () => {
        console.log("start");
        console.warn(props);
    }

    useEffect(() => {
        LikeComponentDidMount();
    }, []);

    const ShowData = () => {

        return (
            Data.slice((currentPage - 1) * 5, currentPage * 5).map((record, index) => {

                const { Name, Phone, University, Experience } = record
                let Exp = Experience;
                if (Experience !== '' || parseInt(Exp) > 4) {
                    Exp = parseInt(Experience / 12) + ' Year ' + (Experience % 12 == 0 ? '' : Experience % 12 + ' Month');
                }
                else {
                    Exp = 'Fresh';
                }
                return (
                    <tr>
                        <td>{Name}</td>
                        <td>{Exp}</td>
                        <td>{Phone}</td>
                        <td>{University}</td>
                        <td>
                            <ButtonGroup>
                                <Button color='dark' onClick={(e) => { CandidatesDetail(record, Exp); toggleDetail() }}>Detail</Button>
                                <Button color='dark' onClick={(e) => { EditPageCall({ Name, Exp, Phone, University }) }}>Edit</Button>
                                <Button color='danger'>Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                )

            })
        );

    }

    const EditPageCall = (propsPass) => {

        props.CandidateHandler(propsPass);
        navigate('/EditCandidate');
    }

    const toggleDetail = () => {
        setToggleFlag(!toggleFlag);
    }

    const CandidatesDetail = ({ Name, FileName, University, Phone, Batch, ShortListedBy }, Experience) => {

        setDetail({ Name, FileName, University, Experience, Phone, Batch, ShortListedBy });
    }

    const PageSet = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const PageDotSet = (pageNumber) => {
        setDotPage(pageNumber);
        setCurrentPage(pageNumber);
    }

    return (
        <div className='m-2'>
            <h1>Candidates</h1>
            <div className="row m-2" >

                <Table hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Experience</th>
                            <th>Phone</th>
                            <th>University</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ShowData()}
                    </tbody>

                </Table>

                <Offcanvas direction='end' isOpen={toggleFlag} toggle={(e) => toggleDetail()}>
                    <OffcanvasHeader isOpen={toggleFlag} toggle={(e) => toggleDetail()}>
                        {detail.Name}
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <p><b>Batch # {detail.Batch}</b></p>
                        <p>Resume : {detail.FileName}</p>
                        <p>University : {detail.University}</p>
                        <p>Experience : {detail.Experience}</p>
                        <p>Phone : {detail.Phone}</p>
                        <hr />
                        <p>Short Listed By : {detail.ShortListedBy}</p>
                    </OffcanvasBody>
                </Offcanvas>
            </div>
            <div className='row'>
                <div className='col-6 m-0'>
                    <PaginationComponent page={currentPage} data={Data} pageSize={5} methodPageSet={PageSet} methodPageDotSet={PageDotSet} />
                </div>
                <div className='col-6 m-0' >
                    <button className='btn btn-primary m-2 mt-0' style={{float:"right"}} onClick={(e) => EditPageCall({currentPage})}>Add</button>
                </div>
                
            </div>
            
        </div>
    );

}

export default Home;