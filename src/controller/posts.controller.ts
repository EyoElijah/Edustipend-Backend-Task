import { Response, Request } from 'express';
import axios from 'axios';

async function fetchPostData(limit?: number) {
  try {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    if (limit) {
      url += `?_limit=${limit}`;
    }
    return (await axios.get(url)).data;
  } catch (error) {
    console.error(error);
  }
}

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await fetchPostData(+req.query.limit);
    res.json({
      message: 'success',
      posts,
      count: +req.query.limit || posts.length,
    });
  } catch (error) {
    console.error(error);
  }
};

export { getAllPosts };
