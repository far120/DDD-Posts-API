import { MongoPostRepository } from "../../src/infrastructure/repositories/mongopostrepository";
import { CreatePostUseCase } from "../../src/application/post/createpost/createpostusecase";
import { GetPostUseCase } from "../../src/application/post/getpost/getpostusecase";
import {ListPostsUseCase} from "../../src/application/post/listposts/listpostsusecase";

const postRepository = new MongoPostRepository();

export const createPostUseCase = new CreatePostUseCase(postRepository);
export const getPostUseCase = new GetPostUseCase(postRepository);
export const listPostsUseCase = new ListPostsUseCase(postRepository);