import rp from 'request-promise'

export default async function () {
  try {
    const url = 'https://registry.npmjs.org/@recylink/orion-js-cli'
    const response = await rp({
      uri: url,
      method: 'GET',
      json: true,
      timeout: 2000
    })
    const pjson = require('../../package.json')

    const latestVersion = response['dist-tags'].latest
    const currentVersion = pjson.version

    console.log(`You are running version ${currentVersion} of RECYLINK Orion js Framework`)

    if (currentVersion !== latestVersion) {
      console.log(`You are running an outdated version of RECYLINK Orion js Framework`)
    }
  } catch (error) {}
}
