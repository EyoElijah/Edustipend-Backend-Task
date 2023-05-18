import { Router } from 'express';
import { getAllPosts } from '../controller/posts.controller';

const postRoute: Router = Router();

postRoute.get('/posts', getAllPosts);

export default postRoute;
