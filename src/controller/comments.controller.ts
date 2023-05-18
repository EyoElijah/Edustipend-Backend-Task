import { Request, Response } from 'express';
import axios from 'axios';

async function fetchCommentData(limit?: number) {
  try {
    let url = 'https://jsonplaceholder.typicode.com/comments';
    if (limit) {
      url += `?_limit=${limit}`;
    }
    return (await axios.get(url)).data;
  } catch (error) {
    console.error(error);
  }
}
const getAllComments = async (req: Request, res: Response) => {
  try {
    const comments = await fetchCommentData(+req.query.limit);
    res.json({
      message: 'success',
      comments,
      count: +req.query.limit || comments.length,
    });
  } catch (error) {
    console.error(error);
  }
};

export { getAllComments };
