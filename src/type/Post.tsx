export interface IPost {
    id: number,
    title: string,
    body: string
}

export interface CreatePostInput {
    title: string,
    body: string
}