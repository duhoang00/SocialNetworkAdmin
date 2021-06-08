export interface IUser {
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

export interface IUserPost {
  user: {
    posts: [
      data: {
        id: number;
        title: string;
      }
    ];
  };
}

export interface IPhotoAlbum {
  album: {
    id: number;
    title: string;
    user: {
      id: number;
    };
  };
}
