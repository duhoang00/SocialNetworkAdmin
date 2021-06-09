import { gql, useMutation } from "@apollo/client";

// interface UpdatePostInput {
//   id: number;
//   input: {
//     body: string;
//   };
// }

const UPDATE_POST = gql`
  mutation ($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      body
    }
  }
`;

const useUpdatePostMutation = () => {
  const [updatePost, { loading }] = useMutation(UPDATE_POST);

  const mutation = async ({ id, input }) => {
    await updatePost({
      variables: { id, input },
    });
  };

  return [mutation, { loading }];
};

export default useUpdatePostMutation;
