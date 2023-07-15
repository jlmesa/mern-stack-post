import {Router} from 'express';
import { createPost, getPosts, updatePost, deletePost, getPost } from '../controllers/posts.controllers.js';
const router = Router();

router.get('/posts/:id', getPost);

router.get('/posts', getPosts);

router.post('/posts', createPost);

router.put('/posts/:id', updatePost);

router.delete('/posts/:id', deletePost);

export default router;