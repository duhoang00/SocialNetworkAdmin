export interface User {
  id: number;
  username: string;
  email: string;
  address: {
    geo: {
      lat: number;
      lng: number;
    };
  };
}

export interface UserPost {
  user: {
    posts: [
      data: {
        id: number;
        title: string;
      }
    ];
  };
}

export interface PhotoAlbum {
  album: {
    id: number;
    title: string;
    user: {
      id: number;
    };
  };
}
