const { GraphQLServer } = require("graphql-yoga");

let links = [{
  id: 'link-0',
  url: 'www.someUrl.com',
  description: 'some fake website URL'
}]
let idCount = links.length

const resolvers = {
  Query: {
    info: () => `This is the API of a Hacker News clone`,
    feed: () => links
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      }
      links.push(link)
      return link
    }
  },
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url
  }
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
})

server.start(() => console.log(`Server is running at http://localhost:4000`))
