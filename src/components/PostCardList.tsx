import PostCards from "../components/PostCards.tsx";
import { useQuery } from "@tanstack/react-query";
import Spinner from "./Spinner.tsx";

/* interface PostCardListProps {
  posts: CardProps[];
} */

/* type Posts = {
  AllPosts: CardProps[];
}; */

export interface CardProps {
  id: string;
  title: string;
  body: string;
  userId: string;
}

const PostCardList = () => {
  const {
    data: AllPost,
    isLoading,
    error,
  } = useQuery<CardProps[]>({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <Spinner />;
  if (error) return <div>A error occur, please check your code</div>;
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {AllPost?.map((post: CardProps) => <PostCards key={post.id} {...post} />)}
    </ul>
  );
};

export default PostCardList;
