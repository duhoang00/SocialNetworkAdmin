export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PageQueryOptions {
  options: {
    paginate: {
      page: number;
      limit: number;
    };
  };
}

export interface CreatePostInput {
  input: {
    title: string;
    body: string;
  };
}

export interface UpdatePostInput {
  id: number;
  input: {
    body: string;
  };
}
