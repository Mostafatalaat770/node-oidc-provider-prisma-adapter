# Node OIDC Provider Prisma Adapter

This is a Prisma adapter for the [OIDC Provider](https://github.com/panva/node-oidc-provider/).

## Usage

This repo uses the oidc-provider app with ExpressJS as an example. You can use it with any other framework.

The database schema is defined in `prisma/schema.prisma`.

in order to get started, you need to copy the `.env.example` file to `.env` and fill in DATABASE_URL with your database connection string.

```bash
cp .env.example .env
```

change the DATABASE_URL in the .env file to your database connection string.

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/database?schema=public"
```

Then run the following commands to start the app.

```bash

pnpm install # or npm install or yarn install

pnpm db:migrate # or npm run migrate or yarn migrate

pnpm dev # or npm run dev or yarn dev

pnpm db:studio # or npm run studio or yarn studio
```

## Configuration

This adapter uses cockroachdb as the default database. You can change the default database by changing the `provider` in `prisma/schema.prisma`.

```prisma
datasource db {
provider = "cockroachdb" # change this to your database provider
url      = env("DATABASE_URL")
}
```

The Prisma adapter supports the following databases:

- PostgreSQL
- MySQL
- SQLite
- SQL Server
- MongoDB
- CockroachDB

You can find more information about the database connection string in the [Prisma docs](https://www.prisma.io/docs/concepts/database-connectors/).

## Testing

This repo uses [jest](https://jestjs.io/) for testing. You can run the tests with the following command.

```bash

pnpm test # or npm run test or yarn test

```

## License

[MIT](LICENSE)

## Author

[Mostafa Abouzeid](https://github.com/mostafatalaat770)
