export interface IPost {
    id: number,
    title: string,
    body: string
}

export interface IPostMutation {
    createPost: IPost
}