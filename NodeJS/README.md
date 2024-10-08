# YouBook Mini Full-Stack Library Project

Full-Stack library project using React and Express to fetch, display and filter through data from mongoDB. User can view a list of books, filter them based on various criteria, and click on a specific book to view more details.

---

## Steps to Launch the Project

**1. Clone the Repository**

  Clone the repository to your local machine:
  ```bash
  git clone <repository-url>
  cd <repository-directory>
  ```

**2. Set up ENV Variables**

  Create `.env` file in the `server` directory with the following content:
  ```ini
  DB_USER=<your-db-user>
  DB_USER_PASSWORD=<your-db-password>
  DB_CLUSTER_NAME=<your-db-cluster-name>
  DB_CLUSTER_ID=<your-db-cluster-id>
  SERVER_PORT=5500
  FRONT_PORT=5173
  ```

**3. Installing Dependencies**

1. Navigate to `client` directory:
```bash
cd client
```
2. Install dependencies:
```bash
npm install
```
3. Navigate to `server` directory:
```bash
cd server
```
4. Install dependencies:
```bash
npm install
```

## Launching Front-End (Client) 
1. Navigate to `client` directory:
```bash
cd client
```
2. Install dependencies if haven't already:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```
4. By default the app should run at `http://localhost:5173`.

---

## Launching Back-End (Server)

1. Navigate to `server` directory:
```bash
cd server
```
2. Install dependencies if haven't already:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```
4. The back-end server will run on `http://localhost:5500`.

---

## Scripts

### Frontend:

- `npm run dev`: Runs the Vite development server.
- `npm run build`: Builds the production-ready files.

### Backend:

- `npm run dev`: Runs the Express backend server using the `.env` configuration.

---