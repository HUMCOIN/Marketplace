import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import { add } from "../../libs/ipfs";
import { getAllProjects, createProject } from "../../Requests/project";
import NavigationBar from "../NavigationBar";
import ProjectCard from "../ProjectCard";

import "./main.css";

// Projects Mock Data

const projects = [
  {
    id: 1,
    name: "Africa Project",
    photoURL: "https://www.borgenmagazine.com/wp-content/uploads/2015/03/Africa-Poverty.jpg",
    statement: "Statement example # 1",
    implementer: "John Doe",
    region: "Africa",
    sdgs: ["No poverty", "Zero hunger"],
    budget: 1000000,
    currency: "EUR",
    duration: 120,
    timeUnit: "Days",
    revenueModality: "Donation"
  },
  {
    id: 2,
    name: "East Asia Project",
    photoURL: "https://www.economist.com/img/b/1000/563/85/sites/default/files/images/print-edition/20171125_ASP002_0.jpg",
    statement: "Statement example # 2",
    implementer: "Jane Doe",
    region: "East Asia",
    sdgs: ["Reduced inequalities"],
    budget: 2500000,
    currency: "JPY",
    duration: 20,
    timeUnit: "Months",
    revenueModality: "Donation"
  },
  {
    id: 3,
    name: "Latin America Project",
    photoURL: "https://www.thedialogue.org/wp-content/uploads/2019/05/Argentina-Pobreza-LAA190207.png",
    statement: "Statement example # 3",
    implementer: "John Smith",
    region: "Latin America",
    sdgs: ["Clean water and sanitation", "Decent work and economic growth"],
    budget: 300000,
    currency: "USD",
    duration: 3,
    timeUnit: "Years",
    revenueModality: "Donation"
  }
]

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
      <Container>
        <Row>
          {
            projects.map(project =>
              <Col>
                <ProjectCard
                  key={project.id}
                  name={project.name}
                  photoURL={project.photoURL}
                  statement={project.statement}
                  implementer={project.implementer}
                  region={project.region}
                  sdgs={project.sdgs}
                  budget={project.budget}
                  currency={project.currency}
                  duration={project.duration}
                  timeUnit={project.timeUnit}
                  revenueModality={project.revenueModality}
                ></ProjectCard>
              </Col>
            )
          }
        </Row>
      </Container>

      <header>
        <h1> Ethereum and IPFS with Create React App</h1>
      </header>
      <h3> Choose file to send to IPFS </h3>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={captureFile} />
        <button type="submit">
          Send it
        </button>
      </form>
    </div>
  );
}

export default Marketplace;
