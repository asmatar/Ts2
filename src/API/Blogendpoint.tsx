import { CardProps } from "../components/PostCardList.tsx";

export const getPost = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addPost = async (post: CardProps) => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(post),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id: number) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (post: CardProps) => {
  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(post),
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
