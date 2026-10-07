import type { Post } from "../../../domain/post/entities/post";
import type { PostRepository } from "../../../domain/post/repositories/postrepository";

export class ListPostsUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(): Promise<Post[]> {
    return this.postRepository.findAll();
  }
}