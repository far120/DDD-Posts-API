import type { Request, Response } from "express";
import { createPostUseCase, getPostUseCase,listPostsUseCase } from "../../app/container";

export class PostController {
  async createPost(req: Request, res: Response) {
    const post = await createPostUseCase.execute(req.body);
    return res.status(201).json({
      status: "success",
      data: post,
    });
  }
  
    async listPosts(req: Request, res: Response) {
    const posts = await listPostsUseCase.execute();
    return res.status(200).json({
      status: "success",
      data: posts,
    });
  }

  async getPost(req: Request, res: Response) {
    const post = await getPostUseCase.execute(req.params.id as string);
    if (!post) {
      return res.status(404).json({
        status: "fail",
        message: "Post not found",
      });
    }

    return res.status(200).json({
      status: "success",
      data: post,
    });
  }
}