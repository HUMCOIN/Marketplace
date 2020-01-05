import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import { add } from "../../libs/ipfs";
import { getAllProjects, createProject } from "../../requests/project";
import NavigationBar from "../NavigationBar";
import { ProjectCard } from "../Project";

import "./main.css";
import { projects } from '../../data/projects.data'
// import Statistics from "../Statistics";

// Projects Mock Data

function Marketplace() {
  const [file, setFile] = useState();

  const onSubmit = async event => {
    event.preventDefault();
    // get projects array
    //await getAllProjects()

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

    await new Promise(
      (resolve, _) => (fileReader.onloadend = () => resolve())
    );

    //file is converted to a buffer for upload to IPFS
    const buffer = await Buffer.from(fileReader.result);
    //set this buffer -using es6 syntax
    setFile(buffer)
  };

  return (
    // this is going to be moved to a new component
    <div className="App">
      <NavigationBar></NavigationBar>
      {/* <Statistics projects={projects}></Statistics> */}
      <Container>
        <Row>
          {
            projects.map(project =>
              <Col>
                <ProjectCard info={project} />
              </Col>
            )
          }
        </Row>
      </Container>

      {/* <header>
        <h1> Ethereum and IPFS with Create React App</h1>
      </header>
      <h3> Choose file to send to IPFS </h3>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={captureFile} />
        <button type="submit">
          Send it
        </button>
      </form> */}
    </div>
  );
}

export default Marketplace;
