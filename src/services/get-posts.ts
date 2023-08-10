import { Post } from "@/types";
import { INITIAL_CHANNEL } from "@/utils";
import axios from "axios";

export type PostsRawResponse = {
  posts: Array<Post>;
  currentPage: number;
  totalPages: number;
  totalResults: number;
};

export type PostsResponse = {
  data: PostsRawResponse | null;
  error?: boolean;
};

interface IProps {
  pageNo?: number;
  channel?: string;
  pageSize?: number;
  random?: number;
}

const getPosts = async ({
  pageNo = 1,
  channel,
  pageSize = 10,
  random = 10,
}: IProps): Promise<PostsResponse> => {
  try {
    const postsResponse = await axios.post(process.env.API_ENDPOINT!, {
      page: pageNo,
      limit: pageSize,
      channel: channel,
      random: random,
    });

    const posts = postsResponse.data.posts;

    return {
      data: {
        posts: posts,
        currentPage: postsResponse.data.currentPage,
        totalPages: postsResponse.data.totalPages,
        totalResults: postsResponse.data.totalResults,
      },
    };
  } catch (error) {
    console.log(error);

    return {
      data: null,
      error: true,
    };
  }
};

export default getPosts;
