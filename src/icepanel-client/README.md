# IcePanel Client

Almost everything in this directory is generated.

## Tasks

### Download the latest OpenAPI Specification

```sh
npm run fetch-oas
```

### Generate the types

```sh
npm run generate:types
```

### Generate a client

```sh
npm run generate:client
```

## Adding a new operation

To generate the types and a request method for a new operation, add the
operation id to [`/scripts/operation-ids.mjs`](../../scripts/operation-ids.mjs)
and generate the types and the client again.
