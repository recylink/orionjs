import 'reflect-metadata'
import {sleep} from '@orion-js/helpers'
import {defineJob, scheduleJob, startWorkers} from '.'

describe('Global tests', () => {
  it('Should run a recurrent job', async () => {
    let ran = false
    const job1 = defineJob({
      type: 'recurrent',
      runEvery: 1000,
      async resolve() {
        ran = true
      }
    })

    const instance = startWorkers({
      jobs: {job1},
      workersCount: 1,
      pollInterval: 100,
      cooldownPeriod: 100,
      logLevel: 'info'
    })

    await sleep(500)
    await instance.stop()

    expect(ran).toBe(true)
  })

  it('Should run a recurrent job 3 times', async () => {
    let count = 0
    const job2 = defineJob({
      type: 'recurrent',
      runEvery: 20,
      async resolve() {
        count++
      }
    })

    const instance = startWorkers({
      jobs: {job2},
      workersCount: 1,
      pollInterval: 10,
      cooldownPeriod: 10,
      logLevel: 'info'
    })

    await sleep(200)
    await instance.stop()

    expect(count).toBeGreaterThanOrEqual(3)
  })

  it('Should run an event job', async () => {
    let count = 0
    const job3 = defineJob({
      type: 'event',
      async resolve(params) {
        count += params.add
      }
    })

    const instance = startWorkers({
      jobs: {job3},
      workersCount: 1,
      pollInterval: 10,
      cooldownPeriod: 10,
      logLevel: 'info'
    })

    expect(count).toBe(0)

    await scheduleJob({
      name: 'job3',
      params: {add: 5},
      runIn: 1
    })

    await scheduleJob({
      name: 'job3',
      params: {add: 25},
      runIn: 1
    })

    await sleep(100)
    await instance.stop()

    expect(count).toBe(30)
  })
})
