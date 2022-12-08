import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

const posts = [
  {
    id: 1,
    title: "My first post...",
    createdAt: "2021",
    content: "content is empty",
    published: true
  },
  {
    id: 2,
    title: "My second post...",
    createdAt: "2022",
    content: "content is empty",
    published: true
  },
];

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const resolvers = {
  Query: {
    posts: () => posts,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);