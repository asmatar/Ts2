import { useRef } from "react";
import { CardProps } from "../components/PostCardList.tsx";
import { addPost } from "../API/Blogendpoint.tsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const FormPost = () => {
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const enteredTitle = title.current?.value;
  const enteredDescription = description.current?.value;
  const queryClient = useQueryClient();

  const data: CardProps = {
    id: Math.ceil(Math.random() * 1000)!,
    title: enteredTitle,
    body: enteredDescription,
    userId: 1,
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addPostMutation();
  };

  const { mutate: addPostMutation } = useMutation({
    mutationFn: () => addPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[70vh]"
      onSubmit={handleSubmit}
    >
      {/*     <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[70vh]"
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(), addPostMutation();
      }}
    > */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Post title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          name="title"
          placeholder="Enter the post title"
          ref={title}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          post description
        </label>
        <input
          className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          name="description"
          placeholder="Enter a description"
          ref={description}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Post
        </button>
      </div>
    </form>
  );
};

export default FormPost;
