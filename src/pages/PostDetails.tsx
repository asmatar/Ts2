import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import Spinner from "../components/Spinner.tsx";
import { CardProps } from "../components/PostCards.tsx";

const PostDetails = () => {
  const { postid } = useParams();
  const {
    data: post,
    error,
    isLoading,
  } = useQuery<CardProps>(
    {
      queryKey: ["post"],
      queryFn: () =>
        fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`).then(
          (res) => res.json()
        ),
    }
    // Définit la durée de validité des données en cache à 0 pour une mise à jour immédiate
  );

  console.log(post);
  if (isLoading) return <Spinner />;
  return (
    <div className="w-full h-full bg-lime-600 p-4 shadow-md  cursor-pointer hover:bg-lime-500 transition-all ease-in">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">
          {post?.title} - {post?.id}
        </h3>
        <p className="text-gray-600">{post?.body}</p>
      </div>
    </div>
  );
};

export default PostDetails;
