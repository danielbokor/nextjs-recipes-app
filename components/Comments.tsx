import { getComments } from "@/utils/getComments";
import { Comment } from "@/utils/types";

export default async function Comments({ recipeId }: { recipeId: string }) {
  let comments: Comment[] | null = null;
  try {
    comments = await getComments(recipeId, { delay: 2500 });
  } catch (e) {
    console.error(e);
  }

  if (!comments) {
    return <div>No comments found!</div>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-2">Comments</h2>
      {comments.map((comment) => (
        <div key={comment.id} className="mb-4">
          <p className="font-semibold text-gray-200">{comment.name}</p>{" "}
          <p className="text-gray-400">{comment.comment}</p>
          <p className="text-gray-600 text-sm">{comment.createdAt}</p>
        </div>
      ))}
    </div>
  );
}
