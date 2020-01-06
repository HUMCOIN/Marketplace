import React, { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { add } from "../../libs/ipfs";
import { createProject } from "../../requests/project";

export function New() {
  const [file, setFile] = useState();

  const onSubmit = async event => {
    event.preventDefault();
    // create a new project
    // await createProject(['0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1', 1, 1])

    // add hash object
    // const hash = await add(file)
  };

  const captureFile = async event => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    await new Promise((resolve, _) => (fileReader.onloadend = () => resolve()));

    //file is converted to a buffer for upload to IPFS
    const buffer = await Buffer.from(fileReader.result);
    //set this buffer -using es6 syntax
    setFile(buffer);
  };

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Statement</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Region</Form.Label>
              <Form.Control />
            </Col>
            <Col>
              {
                /* 
                  SDGS is going to be changes with a dropdown component
                  Check out https://www.notion.so/humcoin/Sustainable-Development-Goals-SDGs-53bfb104055e4995a579198411125e31
                */
              }
              <Form.Label>SDGS</Form.Label>
              <Form.Control />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Budget</Form.Label>
              <Form.Control />
            </Col>
            <Col>
              <Form.Label>Duration</Form.Label>
              <Form.Control />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col>
              <Form.Label>Revenue</Form.Label>
              <Form.Control />
            </Col>
          </Row>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
