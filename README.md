# A Turborepo with Vite, GraphQL, and React

A basic Turborepo that demonstrates how to configure a fullstack app using GraphQL + Prisma as the data layer and render data with a simple React app.

## Stack

- GraphQL + Prisma for the backend in `packages/gql`
- A React app with Relay in `apps/myApp`
- Tailwind for styles
- Shared tailwind, typescript, and eslint configs

## Requirements

- node >= 18.0.0
- yarn >= 3.0.0
- postgres installed and configured

## Usage

1. Create a local Postgres database to use for your users data: `createdb myproject`.
2. Pull down this repo, then run `yarn`.
3. Open a terminal and cd to `packages/gql`.
4. In `packages/gql`, create a `.env` file with an entry for your database. For example, `DATABASE_URL=postgres://postgres:yourPassword@localhost:5432/projectName`.
5. Run `yarn prisma migrate dev` to generate your database.
6. Run `yarn prisma studio` to open Prisma Studio and create a few User records with names.
7. In the terminal, cd to `apps/myApp` and run `yarn relay` to generate your query.
8. In a terminal, go to the monorepo root and run `yarn turbo dev`.
9. In your browser, open `localhost:7475` to see the Apollo playground. Open `localhost:4200` to see your app.
10. Click the **Users** link to route to `localhost:4200/Users`. You should see you users and their names printed.
