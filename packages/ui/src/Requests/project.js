import { callContract, instanceContract, tryContract, projectFactoryAddress, sendContract } from '../libs/web3'

export const getAllProjects = async () => {
  const contract = await instanceContract('ProjectFactory')
  contract.options.address = projectFactoryAddress
  const gasConfig = await tryContract(contract, 'getProjects')
  const projects = await callContract(contract, 'getProjects', gasConfig)
  return projects;
}

export const createProject = async projectParams => {
  const contract = await instanceContract('ProjectFactory')
  contract.options.address = projectFactoryAddress
  const gasConfig = await tryContract(contract, 'createProject', ...projectParams)
  const newProject = await sendContract(contract, 'createProject', gasConfig, ...projectParams)
  return newProject;
}