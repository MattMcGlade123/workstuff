# Backend Learning Project - Roadmap & Tickets

This roadmap is designed for a frontend engineer transitioning into backend development, starting from ground zero and building a **Mini E-Commerce & Order Management Platform**.

---

## Phase 0: Ground Zero – Project & Server Setup

### Ticket 0.1: Initialize Project Directory & TypeScript Environment 
#### DONE
* **Goal**: Create the project structure and configure Node + TypeScript from scratch.
* **Tasks**:
  1. Create a project directory (`complete-app`).
  2. Run `npm init -y` (or `yarn init -y`) to generate `package.json`.
  3. Install dev dependencies: `typescript`, `tsx` (for dev running/watching), and `@types/node`.
  4. Run `npx tsc --init` to generate `tsconfig.json`.
  5. Create a `.gitignore` file excluding `node_modules`, `.env`, and `dist`.
* **Acceptance Criteria**:
  * Running `npx tsc` executes without errors.
  * Project has a clean `package.json` and `tsconfig.json`.



---

### Ticket 0.2: Build a Barebones Express "Hello World"
#### DONE
* **Goal**: Get a basic HTTP server running locally.
* **Tasks**:
  1. Install `express` and `@types/express`.
  2. Create file `src/index.ts`.
  3. Instantiate an Express app and define a basic health-check endpoint: `GET /healthz` returning status `200`.
  4. Have the app listen on port `4000`.
  5. Add a `"dev": "tsx watch src/index.ts"` script to `package.json`.
* **Acceptance Criteria**:
  * Running `yarn dev` starts the server on port 4000.
  * Visiting `http://localhost:4000/healthz` in browser or cURL/Postman returns status `200`.

---

### Ticket 0.3: Environment Variables & Basic Middleware
#### DONE
* **Goal**: Configure environment variable loading and handle JSON request bodies safely.
* **Tasks**:
  1. Install `dotenv`.
  2. Create a `.env` file (containing `PORT=4000`) and a `.env.sample` file for reference.
  3. Update `src/index.ts` to load `dotenv/config` and read `process.env.PORT`.
  4. Enable `express.json()` middleware so your API can parse incoming JSON bodies.
  5. Add a global 404 handler for unknown routes.
* **Acceptance Criteria**:
  * Server port changes dynamically if modified in `.env`.
  * `POST` requests sending JSON payloads are properly parsed by `req.body`.

---

## Phase 1: Database Setup (MongoDB & Mongoose)

### Ticket 1.1: Provision MongoDB Atlas Cluster (Cloud Database)
#### DONE
* **Goal**: Set up a free hosted MongoDB database in the cloud.
* **Tasks**:
  1. Sign up for a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
  2. Create a free **M0 Cluster**.
  3. Create a Database User with username and password.
  4. In Network Access, add IP whitelist entry (`0.0.0.0/0` allows connections from anywhere during dev).
  5. Copy the driver connection string (URI) and add it to `.env` as `MONGO_URI`.
* **Acceptance Criteria**:
  * Connection string is safely stored in `.env` (and NOT committed to git).

---

### Ticket 1.2: Connect Express to MongoDB via Mongoose
#### DONE
* **Goal**: Connect your running Node app to MongoDB on startup.
* **Tasks**:
  1. Install `mongoose`.
  2. Create `src/config/db.ts` with a `connectDB()` function using `mongoose.connect(process.env.MONGO_URI!)`.
  3. Call `connectDB()` in `src/index.ts` before starting the server listener.
  4. Log successful connection or exit process on database connection failure.
* **Acceptance Criteria**:
  * Console logs `MongoDB connected successfully` when starting `yarn dev`.

---

### Ticket 1.3: Create Mongoose Schemas (User, Product, Order)
#### DONE
* **Goal**: Define the data structure for database documents.
* **Tasks**:
  1. Create `src/models/User.ts`: `name`, `email` (unique index), `password` (string), `role` (`'customer' | 'admin'`).
  2. Create `src/models/Product.ts`: `title`, `description`, `price` (number), `stockQuantity` (number), `category`.
  3. Create `src/models/Order.ts`: `userId` (ref: `'User'`), `items` (`productId` ref: `'Product'`, `quantity`, `unitPrice`), `totalAmount`, `status`.
* **Acceptance Criteria**:
  * Schemas are exported as Mongoose Models (`User`, `Product`, `Order`).

---

## Phase 2: REST API & Business Logic

### Ticket 2.1: User Signup Route & Password Hashing
#### DONE
* **Goal**: Save users securely to MongoDB.
* **Tasks**:
  1. Install `bcryptjs` and `@types/bcryptjs`.
  2. Create `POST /api/auth/register` route.
  3. Check if email already exists in DB (`400 Bad Request`).
  4. Hash password with `bcrypt.hash(password, 10)` before saving.
  5. Save user to MongoDB and return user info (excluding password).
* **Acceptance Criteria**:
  * New users saved to MongoDB Atlas with hashed passwords.
  * Duplicate registrations with same email are rejected with clean error message.

---

### Ticket 2.2: User Login & JWT Token Generation
#### DONE
* **Goal**: Authenticate users and issue JSON Web Tokens.
* **Tasks**:
  1. Install `jsonwebtoken` and `@types/jsonwebtoken`. Add `JWT_SECRET` to `.env`.
  2. Create `POST /api/auth/login` route.
  3. Find user by email; compare submitted password using `bcrypt.compare()`.
  4. If valid, generate JWT (`jwt.sign({ userId, role }, JWT_SECRET, { expiresIn: '1d' })`).
* **Acceptance Criteria**:
  * Valid credentials return `{ token: "..." }`.
  * Invalid credentials return `401 Unauthorized`.

---

### Ticket 2.3: Express Auth Middleware
#### DONE
* **Goal**: Protect API endpoints using HTTP Bearer headers.
* **Tasks**:
  1. Create `src/middleware/auth.ts`.
  2. Read `Authorization: Bearer <token>` header from incoming request.
  3. Verify token with `jwt.verify()`. Attach decoded user payload to `req.user`.
  4. Create `requireRole('admin')` middleware for admin-only routes.
* **Acceptance Criteria**:
  * Unauthenticated requests to protected routes return `401`.

---

### Ticket 2.4: Product Management REST Endpoints
* **Goal**: CRUD endpoints for product catalog.
* **Tasks**:
  1. `GET /api/products` (public, list products with search filter).
  2. `GET /api/products/:id` (public, single product).
  3. `POST /api/products` (admin only, create product).
  4. `PUT /api/products/:id` & `DELETE /api/products/:id` (admin only).
* **Acceptance Criteria**:
  * Admins can create/edit products; public users can view products.

---

### Ticket 2.5: Order Placement with Database Transactions
* **Goal**: Prevent race conditions when stock is low (e.g. 2 people buying last item at same time).
* **Tasks**:
  1. Create `POST /api/orders` (protected).
  2. Start Mongoose session (`await mongoose.startSession()`) and transaction.
  3. For each item in order, verify `stockQuantity >= quantity`.
  4. Decrement stock atomically: `Product.updateOne({ _id: id }, { $inc: { stockQuantity: -qty } })`.
  5. Create `Order` document. Commit transaction.
  6. Abort transaction if stock is insufficient.
* **Acceptance Criteria**:
  * Insufficient stock cancels the whole order and rolls back changes.

---

## Phase 3: GraphQL Gateway (Apollo Server)

### Ticket 3.1: Mount Apollo Server onto Express App
* **Goal**: Combine REST API and GraphQL on the same server.
* **Tasks**:
  1. Install `@apollo/server`, `graphql`, `cors`.
  2. Define minimal typedefs (`type Query { ping: String }`) and resolvers.
  3. Initialize `ApolloServer` and attach it to `/graphql` path using `@apollo/server/express4`.
* **Acceptance Criteria**:
  * Opening `http://localhost:4000/graphql` opens Apollo Sandbox interface.

---

### Ticket 3.2: Pass Auth Context to Apollo Resolvers
* **Goal**: Share authentication logic between Express and GraphQL.
* **Tasks**:
  1. Configure Apollo context function to read request headers.
  2. Verify JWT token and inject `currentUser` object into GraphQL context.
* **Acceptance Criteria**:
  * Resolvers can access `context.currentUser`.

---

### Ticket 3.3: Implement Product & Order GraphQL Resolvers
* **Goal**: Recreate query and mutation features in GraphQL.
* **Tasks**:
  1. Write Schema SDL for `User`, `Product`, `Order`, `OrderInput`.
  2. Implement `Query.products`, `Query.product(id)`, `Query.myOrders`.
  3. Implement `Mutation.createOrder(input)`.
* **Acceptance Criteria**:
  * Querying `myOrders` returns user's order history via GraphQL.

---

### Ticket 3.4: Solve N+1 Query Problem using DataLoader
* **Goal**: Batch nested database queries for performance.
* **Tasks**:
  1. Install `dataloader`.
  2. Create field resolver `Order.items -> product`.
  3. Implement `productLoader` to batch multiple product ID lookups into a single `Product.find({ _id: { $in: ids } })` query.
* **Acceptance Criteria**:
  * Fetching 20 orders with nested products triggers only 2 database queries instead of 21.

---

### Ticket 3.5: MongoDB Aggregation Pipeline for Analytics
* **Goal**: Learn complex MongoDB data processing.
* **Tasks**:
  1. Add `Query.salesAnalytics` (Admin only) to GraphQL schema.
  2. Write MongoDB `$group`, `$match`, and `$lookup` pipeline to compute total revenue, total orders count, and top-selling product.
* **Acceptance Criteria**:
  * Admin query returns summary statistics computed inside database engine.

---

## Phase 4: Frontend App (React / Next.js + Apollo Client)

### Ticket 4.1: Create Frontend App & Setup Apollo Client
* **Goal**: Initialize frontend project and configure GraphQL client.
* **Tasks**:
  1. Initialize Next.js / Vite React app in `client/` folder.
  2. Install `@apollo/client` and `graphql`.
  3. Configure `ApolloClient` with `HttpLink` to `http://localhost:4000/graphql`.
  4. Pass `Authorization` header containing token from local storage.
* **Acceptance Criteria**:
  * Frontend can make GraphQL queries to local backend.

---

### Ticket 4.2: Auth UI (Login & Register)
* **Goal**: Allow users to log in and store JWT locally.
* **Tasks**:
  1. Build Login & Signup pages.
  2. Call REST auth endpoints (or GraphQL mutations).
  3. Save received JWT in `localStorage` / cookies.
* **Acceptance Criteria**:
  * User can log in, receive token, and persist login session across page refreshes.

---

### Ticket 4.3: Product Catalog & Cart Checkout UI
* **Goal**: Display products and allow placing orders.
* **Tasks**:
  1. Build Product List page using `useQuery(GET_PRODUCTS)`.
  2. Build Shopping Cart state.
  3. Implement Checkout button calling `useMutation(CREATE_ORDER)`.
* **Acceptance Criteria**:
  * Placing order creates record in MongoDB Atlas and updates UI stock.

---

## Phase 5: Free Remote Deployment (Zero Cost)

### Ticket 5.1: Deploy Backend to Render.com
* **Goal**: Put Express/Apollo API live on public web for free.
* **Tasks**:
  1. Push project code to GitHub.
  2. Create free Web Service on [Render.com](https://render.com).
  3. Configure env vars (`MONGO_URI`, `JWT_SECRET`, `NODE_ENV`).
* **Acceptance Criteria**:
  * Public HTTPS URL (`https://your-api.onrender.com/graphql`) works live.

---

### Ticket 5.2: Deploy Frontend to Vercel
* **Goal**: Live full-stack deployment.
* **Tasks**:
  1. Deploy frontend repository to Vercel.
  2. Set `NEXT_PUBLIC_GRAPHQL_URL` env var pointing to live Render server URL.
* **Acceptance Criteria**:
  * Live application works end-to-end: Register -> Browse Products -> Checkout Order -> Persisted in MongoDB Atlas.
