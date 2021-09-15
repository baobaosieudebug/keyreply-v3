const { ApolloServer, gql } = require('apollo-server-express');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
require('dotenv').config();
const express = require('express');
const http = require('http');
const db = require('./config/database.ts');
const typeDefs = require('./types/typeDefs');
const resolvers = require('./resolvers/resolvers');
const cors = require('cors');
// JWT
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
//
const { audience, domain, port } = process.env;

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${domain}/.well-known/jwks.json`,
  }),

  audience,
  issuer: `https://${domain}/`,
  algorithms: ['RS256'],
});
// Connect database
db.connect();

const app = express();
const httpServer = http.createServer(app);

app.use(cors());

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });
}
startApolloServer();

app.get('/test', checkJwt, (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'welcome to my channel',
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
