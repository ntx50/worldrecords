import React, { useRef } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { async } from 'regenerator-runtime';
import './NewPoll.css'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';


const NewPoll = props => {
    const candidateName1 = useRef();
    const candidateName2 = useRef();

    const candidateName1URL = useRef();
    const candidateName2URL = useRef();

    const promptRef = useRef();

    {/****************** 
    * Function onclick
    ********************/}
    const SendToBlockChain = async () => {
        console.log("Please wait!.., Your prompt is processing.!");
        await window.contract.addUrl({
            name: candidateName1.current.value,
            url: candidateName1URL.current.value,
        });
        await window.contract.addCandidatePair({
            prompt: promptRef.current.value,
            name1: candidateName1.current.value,
            name2: candidateName2.current.value,
        })
        await window.contract.addToPromptArray({ prompt: promptRef.current.value })
    }

    return (
        <Container style={{ marginTop: "10px" }} className='NewPoll'>
            <h2> Add New World Record To Blockchain: </h2>

            <Row style={{ marginTop: "5vh" }}>
                <MDBCard background=''>
                    <MDBRow className='g-0' >
                        <MDBCol >
                            <MDBCardBody>

                                <Form.Group className="mb-3">
                                    <Form.Label >Recrod's Name</Form.Label>
                                    <Form.Control ref={promptRef}
                                        placeholder='Add Name'>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label >Record Image URL</Form.Label>
                                    <Form.Control ref={candidateName1URL}
                                        placeholder='Enter Image URL'>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label >Record Break Days:</Form.Label>
                                    <Form.Control ref={candidateName1}
                                        placeholder='Date'>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label >Record Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} ref={candidateName2}
                                        placeholder='Description'>
                                    </Form.Control>
                                </Form.Group>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                    {/* <MDBRow className='g-0' >
                        <Col sm>
                            <MDBCardBody>

                                <Form.Group className="mb-3">
                                    <Form.Label>Candidate 1</Form.Label>
                                    <Form.Control ref={candidateName1}
                                        placeholder='Enter Candidate Name'>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label >Candidate 1 Image URL</Form.Label>
                                    <Form.Control ref={candidateName1URL}
                                        placeholder='Enter Image URL'>
                                    </Form.Control>
                                </Form.Group>
                            </MDBCardBody>
                        </Col>
                        <Col sm>
                            <MDBCardBody>

                                <Form.Group className="mb-3">
                                    <Form.Label>Candidate 2</Form.Label>
                                    <Form.Control ref={candidateName2}
                                        placeholder='Enter Candidate Name'>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label >Candidate 2 Image URL</Form.Label>
                                    <Form.Control ref={candidateName2URL}
                                        placeholder='Enter Image URL'>
                                    </Form.Control>
                                </Form.Group>

                            </MDBCardBody>
                        </Col>
                    </MDBRow> */}
                    <MDBRow className='g-0' style={{ marginBottom: "5vh" }} >

                            <Button variant="primary" onClick={SendToBlockChain}>Submit</Button>

                    </MDBRow>


                </MDBCard>
            </Row>




        </Container>
    );
};



export default NewPoll;