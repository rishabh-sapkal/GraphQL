export const typeDefs = ` #grapghQLComments

type Author {
    id: ID!,
    name: String!,
    books: [Book]
}

type Book {
    id: ID!,
    name: String!,
    publishedYear: Int,
    author: Author
}

type Query {
    books: [Book],
    authors: [Author]
}

`