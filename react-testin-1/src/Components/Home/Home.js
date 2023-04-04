import * as BIconName from "react-icons/bi";
import * as FCIconName from "react-icons/fc";
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { Progress } from 'reactstrap';

const PageUpdates = () => {
    return (
        <div className="row mr-2 mt-2">
            <div className="col-md-4">
                <Card>
                    <CardBody>
                        <div className="row">
                            <div className="col-md-6"><lable style={{ cursor: "pointer" }}><FCIconName.FcBookmark style={{ fontSize: "1.7em", marginRight: "20px" }} /></lable></div>
                            <div className="col-md-6">
                                <CardText><p className="m-0">Booking</p><p><b>281</b></p></CardText>
                            </div>
                            <CardText><b style={{ color: 'green' }}>+55%</b> than last week</CardText>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="col-md-4">
                <Card>
                    <CardBody>
                        <div className="row">
                            <div className="col-md-6"><lable style={{ cursor: "pointer" }}><FCIconName.FcBarChart style={{ fontSize: "1.7em", marginRight: "20px" }} /></lable></div>
                            <div className="col-md-6">
                                <CardText><p className="m-0">Today's Users</p><p><b>2,300</b></p></CardText>
                            </div>
                            <CardText><b style={{ color: 'green' }}>+3%</b> than last month</CardText>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="col-md-4">
                <Card>
                    <CardBody>
                        <div className="row">
                            <div className="col-md-6"><lable style={{ cursor: "pointer" }}><FCIconName.FcShop style={{ fontSize: "1.7em", marginRight: "20px" }} /></lable></div>
                            <div className="col-md-6">
                                <CardText><p className="m-0">Revenue</p><p><b>34k</b></p></CardText>
                            </div>
                            <CardText><b style={{ color: 'green' }}>+1%</b> than yesterday</CardText>
                        </div>
                        <div className="row">
                            <button type='button' className='btn btn-success' data-bs-toggle="collapse" href="#demo_tin">Just Do It!</button>
                            <div id="demo_tin" className='collapse'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

const ChartsDetail = () => {
    return (
        <div className="row mr-2 mt-2">
            <div className="col-md-4">
                <Card>
                    <CardBody>
                        <CardTitle><b>Website Views</b></CardTitle>
                        <CardText>Last Campaign Performance</CardText>
                        <div className="row">
                            <CardText><BIconName.BiAlarm className="mb-1"/> Campaign sent 2 days ago</CardText>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="col-md-4">
                <Card>
                    <CardBody>
                        <CardTitle><b>Daily Sales</b></CardTitle>
                        <CardText>(+15%) increase in today's sales</CardText>
                        <div className="row">
                            <CardText><BIconName.BiAlarm className="mb-1"/> updated 4 min ago</CardText>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="col-md-4">
                <Card>
                    <CardBody>
                        <CardTitle><b>Completed Tasks</b></CardTitle>
                        <CardText>Last Campaign Performance</CardText>
                        <div className="row">
                            <CardText><BIconName.BiAlarm className="mb-1"/> Last updated</CardText>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

const RenderProject = () => {
    return (
        <tr>
            <td>Demo</td>
            <td>Member</td>
            <td>$4500</td>
            <td><Progress color="info" value={25}><b>25%</b></Progress></td>
        </tr>
    )
}
const ProjectList = () => {
    return (
        <div className="row mr-2 mt-2">
            <div className="col-md-8">
                <Card>
                    <CardBody>
                        <CardTitle><b>Projects</b></CardTitle>
                        <CardText><FCIconName.FcCheckmark className="mb-1" /> <b style={{ color: 'gray' }}>30 done</b> this month</CardText>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Companies</th>
                                    <th>Members</th>
                                    <th>Budget</th>
                                    <th>Completion</th>
                                </tr>
                            </thead>
                            <tbody>
                                <RenderProject />
                            </tbody>

                        </table>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}



const HomePage = () => {
    return (
        <>
            <div className="row mr-0">
                <div className="col-md-8 col-sm-12">
                    <h3>Dashboard</h3>
                </div>
                <div className="col-md-2 col-sm-12" >
                    <input type="text" className="form-control mr-2" placeholder='Search' />
                </div>
                <div className="col-md-2 col-sm-12">
                    <lable style={{ cursor: "pointer" }}><BIconName.BiCog style={{ fontSize: "1.7em", marginRight: "10px" }} /></lable>
                    <lable style={{ cursor: "pointer" }}><BIconName.BiBell style={{ fontSize: "1.7em", marginRight: "10px" }} /></lable>
                    <lable style={{ cursor: "pointer" }}><BIconName.BiKey style={{ fontSize: "1.7em" }} /></lable>
                </div>
            </div>
            <PageUpdates />
            <ChartsDetail />
            <ProjectList />
        </>
    );
}

const Home = () => {
    return (

        <div className="row">
            <div className="col-1 col-md-1 col-sm-1"></div>
            <div className="col-11 col-md-11 col-sm-11">
                <HomePage />
            </div>
        </div>

    );
}
export default Home;