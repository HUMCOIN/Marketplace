import React, { useState } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { add } from "../../libs/ipfs";
import { createProject } from "../../requests/project";
import Select from "react-select";
import { sdgs } from "../../data/sdgs.data";
import "./main.scss";
import { object } from "prop-types";

export function New() {
  const [file, setFile] = useState();

  const onSubmit = async event => {
    event.preventDefault();
    // create a new project
    // await createProject(['0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1', 1, 1])

    // add hash object
    // const hash = await add(file)
  };

  const options = [
    { value: "VE", label: "Venezuela" },
    { value: "USA", label: "United States" },
    { value: "CO", label: "Colombia" }
  ];

  const formatJson = object => {
    const array = [];
    for (let x in object) {
      let objAux = {};
      objAux.value = x;
      objAux.label = object[x];
      array.push(objAux);
    }
    console.log(array);
    return array;
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

  const show = () => {
    console.log(sdgs);
  };

  return (
    <Container>
      <Row className="justify-content-start titleRow">
        <Col xs="3" className="spanRow">
          <span className="bold fontLarge">Create new proyect</span>
        </Col>
        <Col></Col>
      </Row>
      <Form className="form">
        <Form.Group>
          <Row>
            <Col xs="2"></Col>
            <Col>
              <Form.Label className="formLabel">Title</Form.Label>
              <Form.Control className="formInput"></Form.Control>
            </Col>
            <Col xs="2"></Col>
          </Row>
          <br></br>
          <Row>
            <Col>
              <Form.Label className="formLabel">Location</Form.Label>
              <Select
                options={options}
                styles={{
                  option: (provided, state) => ({
                    ...provided,
                    // color: state.isSelected ? "skyblue" : "black",
                    padding: 20,
                    fontFamily: "Josefin Regular"
                  }),
                  control: (base, state) => ({
                    ...base,
                    "&:hover": { borderColor: "gray" }, // border style on hover
                    border: "1px solid lightgray", // default border color
                    borderRadius: "14px !important",
                    fontFamily: "Josefin Regular",
                    fontWeight: "20px",
                    boxShadow: "none" // no box-shadow
                  })
                }}
                className="formInput react-select__control"
              />
            </Col>
            <Col>
              {/* 
                  SDGS is going to be changes with a dropdown component
                  Check out https://www.notion.so/humcoin/Sustainable-Development-Goals-SDGs-53bfb104055e4995a579198411125e31
                */}
              <Form.Label className="formLabel">SDGS</Form.Label>
              <Select
                isMulti
                options={formatJson(sdgs)}
                styles={{
                  option: (provided, state) => ({
                    ...provided,
                    color: state.isSelected ? "#149DCC" : "black",
                    padding: 20,
                    fontFamily: "Josefin Regular"
                  }),
                  control: (base, state) => ({
                    ...base,
                    "&:hover": { borderColor: "gray" }, // border style on hover
                    border: "1px solid lightgray", // default border color
                    borderRadius: "14px !important",
                    fontFamily: "Josefin Regular",
                    fontWeight: "20px",
                    boxShadow: "none" // no box-shadow
                  })
                }}
                className="formInput react-select__control"
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col>
              <Form.Label className="formLabel">Budget</Form.Label>
              <Form.Control className="formInput" />
            </Col>
            <Col>
              <Form.Label className="formLabel">Duration</Form.Label>
              <Form.Control className="formInput" />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group>
          <Row>
            <Col>
              <Form.Label className="formLabel">Investment Type </Form.Label>
              <Form.Control className="formInput" />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Label className="formLabel">Statement</Form.Label>
          <Form.Control className="formInput" />
        </Form.Group>
        <Button className="formButton" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
