import ipfsClient from 'ipfs-http-client'

const connectionOptions = {
  host: 'localhost',
  port: 5001,
  protocol: 'http'
}

export const ipfsCon = ipfsClient(connectionOptions);