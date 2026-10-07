import type { Post } from "../../../domain/post/entities/post";
import type { PostRepository } from "../../../domain/post/repositories/postrepository";
import type { EventPublisher } from "../../../domain/post/events/eventpublisher";

export class CreatePostUseCase {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly eventPublisher: EventPublisher
  ) {}

  async execute(post: Post): Promise<Post> {
    const createdPost = await this.postRepository.create(post);

    await this.eventPublisher.publish("posts", "post.created", createdPost );

    return createdPost;
  }
}