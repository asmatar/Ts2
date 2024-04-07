import { Link } from "react-router-dom";
import { CardProps } from "../components/PostCardList.tsx";
export default function CardComponent({
  id,
  title,
  body: description,
  userId,
}: CardProps) {
  return (
    <Link
      to={`/post/${id}`}
      className="w-full p-4 shadow-md lg:max-w-lg cursor-pointer hover:bg-slate-100 transition-all ease-in"
    >
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold">
          {title} - {id}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
