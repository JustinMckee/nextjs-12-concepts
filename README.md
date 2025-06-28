This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## MongoDB

Running MongoDB locally:

### 1. Install MongoDB

Download and install MongoDB Community Edition from the [official MongoDB website](https://www.mongodb.com/try/download/community).
Follow the installation instructions for your operating system.

### 2. Start MongoDB

Start the MongoDB server by running the following command in your terminal:

```bash
mongod
```

This will start the MongoDB server on the default port (`27017`).

### 3. Create your databse and add a collection

In a different terminal from where you started mongodb, access mongo shell:

```bash
mongosh
```

Then create a database, collection(s), and document(s):

```bash
# Example:
# Create a database
test> use your_database_name
# Create a collection
your_database_name> db.createCollection('your_collection_name')
# Create a document
your_database_name> db.your_database_name.insertOne({_id:ObjectId(),title:"My document"})
```

Check out the [MongoDB cheat sheet](https://www.mongodb.com/developer/products/mongodb/cheat-sheet) for shell commands

### 4. Your MongoDB Connection

This project uses the JavaScript library mongoose to simplify database interactions.
To manage your MongoDB connection, use the configuration file `src/utils/mongodb.ts`

### 5. Add Environment Variables

Create a `.env` file in the root of your project and add the MongoDB connection string:

```bash
MONGODB_URI=mongodb://localhost:27017/your-database-name
```
