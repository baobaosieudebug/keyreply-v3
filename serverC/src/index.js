const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const route = require('./routes');
const http = require('http');
const socket = require('./socket/socket')
require('dotenv').config();

const app = express();
const server = http.Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: '*',
  },
})

socket(io);
app.use(express.json());

const port = process.env.PORT;

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { setUserStatus } = require('./middlewares/chatbot');

//connect db
db.connect();

//Swagger UI
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Chat Bot API',
      version: '1.0.0',
      description: 'API document',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsDoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use(express.json());
app.use(cors());

route(app);

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
