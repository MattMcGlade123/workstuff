import express, { type Express, type Request, type Response } from 'express';
import 'dotenv/config'
import { connectDB } from './config/db.ts';
import { registerRoute, loginRoute } from './routes/auth/index.ts';
import { authenticate } from './middleware/auth.ts';
import { requireRole } from './middleware/requireRole.ts';
import { addSingleProduct, deleteSingleProduct, getProducts, getSingleProduct, updateSingleProduct } from './routes/products/index.ts';
import { placeOrder } from './routes/orders/index.ts';

import http from 'http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { resolvers } from './graphql/resolvers/index.ts';
import { typeDefs } from './graphql/typedefs/index.ts';
import { expressMiddleware } from '@as-integrations/express5';
import cors from 'cors';

const app: Express = express();
const httpServer = http.createServer(app);

try {
  await connectDB()
} catch (error) {
  console.error('Database connection error:', error)
  process.exit(1)
}

app.use(express.json());

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(
  '/graphql',
  cors(),
  expressMiddleware(server),
);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send("WELCOME");
});

app.post('/api/auth/register', registerRoute);
app.post('/api/auth/login', loginRoute);

app.get('/api/products', getProducts)
app.post('/api/products', authenticate, requireRole('admin'), addSingleProduct)
app.get('/api/products/:id', getSingleProduct)
app.put('/api/products/:id', authenticate, requireRole('admin'), updateSingleProduct)
app.delete('/api/products/:id', authenticate, requireRole('admin'), deleteSingleProduct)
app.post('/api/orders', authenticate, placeOrder)


app.get('/healthz', (req: Request, res: Response) => {
  res.sendStatus(200)
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

await new Promise<void>((resolve) => {
  httpServer.listen({ port: process.env.PORT }, resolve);
});
console.log(`🥳 Server running on port ${process.env.PORT}`);
console.log(`GraphQL at http://localhost:${process.env.PORT}/graphql`);