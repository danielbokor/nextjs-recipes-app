import { getComments } from "@/utils/getComments";

export async function Comments({ recipeId }: { recipeId: string }) {
  const comments = await getComments(recipeId, {
    delay: 0,
  });

  if (!comments || comments.length === 0) {
    return (
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-2">No comments found!</h2>
      </div>
    );
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

export function CommentsSkeleton() {
  return (
    <div className="mt-6">
      <div className="h-6 bg-gray-700 rounded w-1/4 mb-4 animate-pulse"></div>
      {[...Array(3)].map((_, index) => (
        <div key={index} className="mb-4 animate-pulse">
          <div className="h-5 bg-gray-700 rounded w-1/3 mb-2"></div>
          <div className="h-4 bg-gray-600 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-600 rounded w-1/4"></div>
        </div>
      ))}
    </div>
  );
}
