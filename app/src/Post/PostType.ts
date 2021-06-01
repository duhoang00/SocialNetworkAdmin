export interface Post {
    id: number,
    title: string,
    body: string
}

export interface Posts {
    getPosts: Post[]
}

export interface PostMutation {
    addPost: Post
}