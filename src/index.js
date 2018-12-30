const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const resolvers = {
  Query: {
    info: () => `This is the API of a Hacker News clone`,
    // getLink: (parent, args, context, info) => {
    //   let link = null
    //   let links = context.prisma.links()
    //   console.log(links)
    //   // links.map(node => {
    //   //   if (node.id === args.id){
    //   //     link = node
    //   //   }
    //   // })
    //   // if (!link){
    //   //   return `link-${args.id} does not exist`
    //   // } else {
    //   //   return link
    //   // }
    // }
  },
  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description
      })
    },
    // updateLink: (parent, args) => {
    //   let updatedLink

    //   links.map((link, index) => {
    //     if (link.id === args.id) {
    //       if (args.description) {
    //         links[index].description = args.description
    //       }
    //       if (args.url) {
    //         links[index].url = args.url
    //       }
    //       updatedLink = links[index]
    //     }
    //   })
    //   return updatedLink
    // },
    // deleteLink: (parent,args) => {
    //   let deletedLink,
    //       indexToDelete

    //   links.map((link, index) => {
    //     if (link.id === args.id) {
    //       indexToDelete = index
    //     }
    //   })

    //   if (typeof indexToDelete !== "undefined"){
    //     deletedLink = links.splice(indexToDelete, 1)
    //   }

    //   if (deletedLink.length) {
    //     return deletedLink[0]
    //   }
    //   return
    // }
  },
  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url
  }
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma },
})

server.start(() => console.log(`Server is running at http://localhost:4000`))
