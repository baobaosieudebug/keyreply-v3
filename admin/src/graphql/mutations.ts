import gql from 'graphql-tag';

export const createNodeQuery = gql`
  mutation Mutation($createContentIdContent: String, $createContentDto: NodeInput) {
    createContent(idContent: $createContentIdContent, dto: $createContentDto) {
      content {
        name
        language {
          lang
          buttons {
            event
            text
            data
          }
          condition {
            property
            value
            operator
          }
          text
          regex
        }
        text
        buttons {
          text
          event
          data
        }
        regex
      }
    }
  }
`;

export const deleteNodeQuery = gql`
  mutation DeleteContentMutation($deleteContentIdContent: String, $deleteContentName: String) {
    deleteContent(idContent: $deleteContentIdContent, name: $deleteContentName) {
      content {
        name
        language {
          condition {
            property
            value
            operator
          }
          buttons {
            text
            event
            data
          }
          lang
          text
          regex
        }
      }
    }
  }
`;
