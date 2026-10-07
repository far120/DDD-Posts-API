import type { Post } from "../../domain/post/entities/post";
import type { PostRepository } from "../../domain/post/repositories/postrepository";
import {PostModel}  from "../database/models/postmodel";

export class MongoPostRepository implements PostRepository {
  async create(post:Post):Promise<Post>{
    const createdPost = await PostModel.create(post);
    return {
      id: createdPost._id.toString(),
      title: createdPost.title,
      content: createdPost.content,
      createdAt: createdPost.createdAt,
      updatedAt: createdPost.updatedAt,
    };
  }

  async findById(id:string):Promise<Post | null> {
    const post = await PostModel.findById(id);
    if (!post) {
      return null;
    }
    return {
      id: post._id.toString(),
      title: post.title,
      content: post.content,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };
  }

  async findAll(): Promise<Post[]> {
    const posts = await PostModel.find();
    return posts.map((post) => ({
      id: post._id.toString(),
      title: post.title,
      content: post.content,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    }));
  }
}