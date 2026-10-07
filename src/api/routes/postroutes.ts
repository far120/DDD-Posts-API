import express from "express";
import { PostController } from "../controllers/postcontroller";
import {postSchema} from "../validate/postschema";
import {validate} from "../middlewares/validate.middleware";

const router = express.Router();
const postController = new PostController();
router.post("/", validate(postSchema), (req, res) => postController.createPost(req, res));
router.get("/", (req, res) => postController.listPosts(req, res));
router.get("/:id", (req, res) => postController.getPost(req, res));

module.exports = router;