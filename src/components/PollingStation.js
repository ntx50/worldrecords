import React, { useEffect, useState } from 'react';
import { Container, Row, Col,  Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { async } from 'regenerator-runtime';
import './PollingStation.css'
// import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
// import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBCardTitle, MDBCardImage, MDBCardBody, MDBCardText } from "mdbreact";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';



const PollingStation = props => {
    const [candidate1Url, changeCandidate1Url] = useState('https://cutewallpaper.org/21/loading-gif-transparent-background/Bee-Hollow-Farm-beekeeping-classes-and-events-near-Schodack-.gif')
    // const [candidate2Url, changeCandidate2Url] = useState('https://cutewallpaper.org/21/loading-gif-transparent-background/Bee-Hollow-Farm-beekeeping-classes-and-events-near-Schodack-.gif')
    const [showresults, changeResultsDisplay] = useState(false);
    const [candidate1, changeCandidate1] = useState('--');
    const [candidate2, changeCandidate2] = useState('--');
    const [promptTitle, changePrompt] = useState('--');
    useEffect(() => {

        const getInfo = async () => {

            //vote count stuff
            // let voteCount = await window.contract.getVotes({ prompt: localStorage.getItem("prompt") });
            // changeVote1(voteCount[0]);
            // changeVote2(voteCount[1]);

            //image stuff
            changeCandidate1Url(
                await window.contract.getUrl({ name: localStorage.getItem("Candidate1") })
            )
            
            // changeCandidate2Url(
            //     await window.contract.getUrl({ name: localStorage.getItem("Candidate2") })
            // )

            //prompt title stuff
            changePrompt(
                localStorage.getItem("prompt")
            )
            changeCandidate1(
                localStorage.getItem("Candidate1")
            )
            changeCandidate2(
                localStorage.getItem("Candidate2")
            )

            //vote checking stuff
            // let didUserVote = await window.contract.didParticipate({
            //     prompt: localStorage.getItem("prompt"),
            //     user: window.accountId
            // })
            // changeResultsDisplay(didUserVote);
        }
        getInfo();
    }, []);

    // const addVote = async (index) => {
    //     await window.contract.addVote({
    //         prompt: localStorage.getItem("prompt"),
    //         index: index
    //     })
    //     await window.contract.recordUser({
    //         prompt: localStorage.getItem("prompt"),
    //         user: accountId
    //     })
    //     changeResultsDisplay(true);
    // }

    return (
        <>

            {/* 
            <Row style={{ marginTop: "5vh" }} >

                <Col fluid="md" className='jutify-content-center d-flex' style={{ marginTop: "5vh" }}>
                    <div>
                        <Row >
                            <MDBCard >
                                <MDBCardImage style={{ marginTop: "5vh" }} src={candidate1Url} position='top' alt='...' />
                                <MDBCardBody>

                                    {showresults ? (
                                        <Row className="justify-content-center d-flex" style={{ marginTop: "5vh" }}>
                                            <div style={{ display: "flex", justifyContent: "center", fontSize: "8vw", padding: "10px", backgroundColor: "#c4c4c4" }}>
                                                {candidate1Votes}</div>
                                        </Row>) : null}


                                   

                                </MDBCardBody>
                            </MDBCard>
                        </Row>
                    </div>
                </Col>

                

            </Row> */}


         

            <div className = 'PollingStation'>
            <MDBRow>
                <MDBCol style={{ maxWidth: "auto", item:'center' }}>
                    <MDBCard >
                        <MDBCardImage  style={{ height: 'auto' }} src={candidate1Url} />
                        <MDBCardBody  className="text-center">
                            <MDBCardTitle>{promptTitle}</MDBCardTitle>
                            <h5 className="indigo-text"><strong>{candidate1}</strong></h5>
                            <MDBCardText>{candidate2}</MDBCardText>
                            <a href="#!" className="icons-sm li-ic ml-1">
                                <MDBIcon fab icon="linkedin-in" /></a>
                            <a href="#!" className="icons-sm tw-ic ml-1">
                                <MDBIcon fab icon="twitter" /></a>
                            <a href="#!" className="icons-sm fb-ic ml-1">
                                <MDBIcon fab icon="facebook-f" /></a>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            </div>
        </>
    );
};



export default PollingStation;