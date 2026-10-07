import type { Post } from "../../../domain/post/entities/post";
import type { PostRepository } from "../../../domain/post/repositories/postrepository";

export class GetPostUseCase {
  constructor(private readonly postRepository: PostRepository) {}

    async execute(id: string): Promise<Post | null> {
        return this.postRepository.findById(id);
    }
}