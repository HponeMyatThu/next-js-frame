import { createContextMutation } from "@/context/MutationProvider";
import { useMutation } from "react-query";

const myMutationFunction = async (data: { title: string; body: string }) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error("Failed to create post");
    }
  
    return response.json();
  };
  
  const [MyMutationProvider, useMyMutation] = createContextMutation(() => {
    return useMutation(myMutationFunction);
  });
  
  export { MyMutationProvider, useMyMutation };