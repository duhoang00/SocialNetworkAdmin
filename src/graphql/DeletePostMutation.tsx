import { gql, useMutation } from "@apollo/client";

const DELETE_POST = gql`
  mutation ($id: ID!) {
    deletePost(id: $id)
  }
`;

const useDeletePostMutation = () => {
  const [deletePost, deleteStatus] = useMutation(DELETE_POST);

  const mutation = async ({ id }) => {
    await deletePost({
      variables: { id: id },
    });
  };

  return [mutation];
};

export default useDeletePostMutation;
