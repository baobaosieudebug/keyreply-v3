const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Button {
    text: String
    event: String
    data: String
  }

  type Condition {
    property: String
    value: String
    operator: String
  }

  type Language {
    lang: String
    buttons: [Button]
    condition: [Condition]
    text: String
    regex: String
  }

  type Node {
    name: String
    language: [Language]
    text: String
    buttons: [Button]
    regex: String
  }

  type Content {
    content: [Node]
    version: String
    description: String
  }

  input ButtonInput {
    text: String
    event: String
    data: String #ButtonDataInput
  }

  input ConditionInput {
    property: String
    value: String
    operator: String
  }

  input LanguageInput {
    lang: String
    buttons: [ButtonInput]
    condition: [ConditionInput]
    text: String
    regex: String
  }

  input NodeInput {
    name: String
    language: [LanguageInput]
    text: String
    regex: String
    buttons: [ButtonInput]
  }

  input ContentInput {
    content: [NodeInput]
  }

  type Notification {
    message: String
  }

  type Query {
    getContentById(id: ID): Content
    getAll: [Content]
  }

  type Mutation {
    createContent(idContent: String, dto: NodeInput): Content
    updateContent(idContent: String, updatedContent: ContentInput): Content
    deleteContent(idContent: String, name: String): Content
  }
`;

module.exports = typeDefs;
