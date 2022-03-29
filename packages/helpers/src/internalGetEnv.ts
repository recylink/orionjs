import {env} from '@orion-js/env'

export const internalGetEnv = (orionEnvName: string, processEnvName: string): any => {
  if (env[orionEnvName]) {
    return env[orionEnvName]
  }

  if (process.env[processEnvName]) {
    return process.env[processEnvName]
  }

  return null
}
