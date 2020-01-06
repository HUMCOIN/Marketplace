import React from 'react'
import { useRouteMatch } from "react-router-dom";

import { mockProjects } from "../../data/projects.data";

export function Details() {
  const { hash } = useRouteMatch().params
  // this is going to be changed - we are going to retrieve the
  // project information from a store - or a get call to ipfs
  const project = mockProjects.filter(p => p.id == hash).pop()
  console.log(project)
  return(
    <div>
      <h1> go to src/components/Project/details.js</h1>
      <h2> To start editing this view </h2>
    </div>
  )
}