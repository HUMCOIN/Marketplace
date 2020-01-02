import { ipfsCon } from './config'

export const add = file => {
  new Promise( async (resolve, reject) => {
    try {
      const hash = await ipfsCon.add(file)
      resolve(hash)
    } catch(error) {
      reject(error)
    }
  })
};

// export const get;