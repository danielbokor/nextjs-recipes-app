"use client";

import { useRef } from "react";
import { createComment } from "../actions/comments";

interface NewCommentFormProps {
  recipeId: string;
}

export function NewCommentForm({ recipeId }: NewCommentFormProps) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="mt-6 w-1/3">
      <h2 className="text-2xl font-bold mb-2">Leave a comment</h2>
      <form
        action={async (formData: FormData) => {
          createComment(formData);
          formRef.current?.reset();
        }}
        ref={formRef}
      >
        <input type="hidden" id="recipeId" name="recipeId" value={recipeId} />
        <label htmlFor="name" className="block mt-6">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-2 border border-gray-400 text-gray-900 rounded"
        />
        <label htmlFor="email" className="block mt-6">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className="w-full p-2 border border-gray-400 text-gray-900 rounded"
        />
        <label htmlFor="comment" className="block mt-6">
          Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          className="w-full p-2 border border-gray-400 text-gray-900 rounded"
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
