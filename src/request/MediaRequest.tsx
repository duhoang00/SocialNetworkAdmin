import { DocumentNode, useQuery } from "@apollo/client"

export function useGetPhotoAlbumQuery(gqlQuery: DocumentNode, id: number) {
    const { loading, error, data } = useQuery(gqlQuery, { variables: { id } });
    return { loading, error, data };
}