export interface IPost {
    id: number,
    title: string,
    body: string
}

// export interface IAllPosts {
//     data: {
//         id: number,
//         title: string
//     },
//     meta: {
//         totalCount: number
//     }
// }

export interface IPostMutation {
    addPost: IPost
}