---
title: "Remote Procedure Calls: Introduction to tRPC"
subheading: "Building Efficient and Type-Safe Web APIs with tRPC Remote Procedure Calls"
excerpt: "tRPC is a powerful remote procedure call (RPC) framework that simplifies the process of building web APIs. It is particularly useful for TypeScript developers because it allows for type-safe communication between the client and server. In this post, we'll dive into the details of tRPC and explore how it can be used to build efficient, type-safe APIs."
status: "published"
author: "Paul Serban"
date: "February 01, 2023"
tags:
  - "Web Development"
  - "Remote Procedure Calls"
  - "tRPC"
  - "TypeScript"
---

## What is a remote procedure call?

A remote procedure call is a protocol that allows a computer program to request a service from another program located on a different machine. This can be useful in a client-server architecture where a client needs to request data or perform an operation on the server. RPC allows for this communication to occur in a standardized, efficient manner.

## Introducing tRPC

tRPC is a modern RPC framework that allows developers to build type-safe APIs. Type safety is an important feature of tRPC because it helps catch errors earlier in the development process. When using tRPC, developers can define the types of the inputs and outputs of the remote procedure calls, providing more accurate error messages and preventing common mistakes.

tRPC is designed to work with TypeScript, a typed superset of JavaScript. This means that developers can take advantage of TypeScript's powerful type system to write code that is more maintainable and less error-prone. tRPC also provides built-in support for HTTP/2, a protocol that allows for efficient, low-latency communication between the client and server.

## Building a tRPC API

To build a tRPC API, you'll need to define your remote procedure calls using a special syntax. Here's an example of what a tRPC definition might look like:

```typescript
import { createTRPCClient } from "@trpc/client";
import * as trpc from "@trpc/server";

interface User {
	id: number;
	name: string;
}

export const appRouter = trpc.router().query("getUser", {
	input: trpc.shape({
		id: trpc.number(),
	}),
	output: trpc.type<User>(),
	async resolve({ input }) {
		const { id } = input;
		const user = await getUserById(id);
		if (!user) {
			throw new trpc.http.NotFoundError(`User with ID ${id} not found`);
		}
		return user;
	},
});
```

This code defines a `getUser query` that takes an id parameter and returns a `User` object. The `async resolve` function is where you would implement the logic to fetch the user from your data store.

Once you have defined your tRPC API, you can create a client to interact with it:

```typescript
const client = createTRPCClient({
	url: "/api/trpc",
});

const user = await client.query("getUser", { id: 1 });
console.log(user.name); // logs the name of the user with ID 1
```

In this example, we create a tRPC client and use it to query the `getUser` API. The `client.query` method takes the name of the query and an object containing the input parameters.

## Conclusion

tRPC is a powerful and efficient way to build web APIs. By providing type-safe communication between the client and server, it can help catch errors earlier and improve developer productivity. If you're looking to build a modern, scalable web application, tRPC is definitely worth considering.