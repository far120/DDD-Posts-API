// import { MongoPostRepository } from "../../src/infrastructure/repositories/mongopostrepository";
// import { CreatePostUseCase } from "../../src/application/post/createpost/createpostusecase";
// import { GetPostUseCase } from "../../src/application/post/getpost/getpostusecase";
// import {ListPostsUseCase} from "../../src/application/post/listposts/listpostsusecase";
// import { KafkaEventPublisher } from "../infrastructure/kafka/kafkaproducer";

import { MongoPostRepository } from "../infrastructure/repositories/mongopostrepository";
import { CreatePostUseCase } from "../application/post/createpost/createpostusecase";
import { GetPostUseCase } from "../application/post/getpost/getpostusecase";
import { ListPostsUseCase } from "../application/post/listposts/listpostsusecase";
import { KafkaEventPublisher } from "../infrastructure/kafka/kafkaproducer";

const postRepository = new MongoPostRepository();
const eventPublisher = new KafkaEventPublisher();


export const createPostUseCase = new CreatePostUseCase(postRepository, eventPublisher);
export const getPostUseCase = new GetPostUseCase(postRepository);
export const listPostsUseCase = new ListPostsUseCase(postRepository);