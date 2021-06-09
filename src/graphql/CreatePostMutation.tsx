import { gql, useMutation } from "@apollo/client";

// interface CreatePostInput {
//   title: string;
//   body: string;
// }

const CREATE_POST = gql`
  mutation ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

const useCreatePostMutation = () => {
  const [createPost, isCreatingPost] = useMutation(CREATE_POST);

  const mutation = async (input: { title: string; body: string }) => {
    await createPost({
      variables: {
        input,
      },
    });
  };

  return [mutation];
};

export default useCreatePostMutation;
