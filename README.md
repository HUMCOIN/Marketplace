# Installation
RUN THESE COMMAND IN ROOT PATH

Install packages in multiple projects
`npm i`

Run react app:
`npm run start`

In another tab of the cmd, run ganache locally, compile and migrate contracts
`npm run migrate`

You must create a `.env` file in `/packages/eth` with the following variables:
```
MNEMONIC=
INFURA_API_KEY=
```
