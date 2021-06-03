export interface User {
    id: number,
    username: string,
    email: string,
    address: {
        get: {
            lat: number,
            lng: number
        }
    }
}

export interface UserPost {
    posts: [
        data: {
            id: number,
            title: string
        }
    ]
}

export interface PhotoAlbum {
    album: {
        id: number,
        title: string,
        user: {
            id: number
        }
    }
}