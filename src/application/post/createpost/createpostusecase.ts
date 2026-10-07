import type { Post } from "../../../domain/post/entities/post";
import type { PostRepository } from "../../../domain/post/repositories/postrepository";

export class CreatePostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

  async execute(post: Post): Promise<Post> {
    return this.postRepository.create(post);
  }
}