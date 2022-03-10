import {Prop, TypedModel} from '@orion-js/typed-model'

@TypedModel()
export class JobRecord {
  @Prop()
  _id: string

  @Prop()
  jobName: string

  @Prop()
  priority: number

  @Prop()
  nextRunAt: Date

  @Prop({optional: true})
  lastRunAt: Date

  @Prop({optional: true})
  lockedUntil: Date

  @Prop({optional: true})
  params: any
}