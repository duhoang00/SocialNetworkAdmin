export interface IPost {
    id: number,
    title: string,
    body: string
}

export interface IPosts {
    getPosts: IPost[]
}

export interface IPostMutation {
    addPost: IPost
}