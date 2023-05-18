import { Router } from 'express';
import { getAllComments } from '../controller/comments.controller';

const commentRoute: Router = Router();

commentRoute.get('/comments', getAllComments);

export default commentRoute;
