import React, { useState } from "react";
import { add } from "../../Libs/ipfs";
import { getAllProjects, createProject } from "../../Requests/project";

import "./main.css";

function Marketplace() {
  const [file, setFile] = useState();

  const onSubmit = async event => {
    event.preventDefault();
    // console.log(await getAllProjects())
    await createProject(['0x90F8bf6A479f320ead074411a4B0e7944Ea8c9C1', 1, 1])
    // const hash = await add(file)
    // console.log(hash)
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
