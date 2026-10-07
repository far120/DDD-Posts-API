import { Post } from "../entities/post";

export interface PostRepository {
  create(post: Post): Promise<Post>;

  findById(id: string): Promise<Post | null>;

  findAll(): Promise<Post[]>;
}