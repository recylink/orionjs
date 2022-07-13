import {GraphQLScalarType} from 'graphql'
import {GraphQLDateTime} from 'graphql-iso-date'

export default new GraphQLScalarType({
  name: 'Date',
  serialize: value => GraphQLDateTime.serialize(value),
  parseValue: value => GraphQLDateTime.parseValue(value),
  parseLiteral: value => GraphQLDateTime.parseLiteral(value)
})
