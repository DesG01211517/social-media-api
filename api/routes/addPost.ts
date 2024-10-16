import  { Request, Response, NextFunction } from "express";
import supabase from "../../supabaseInstance"; 


const addPost = async (request: Request, response: Response, next: NextFunction) => {
  try { 
  const { content, media_url, comment, like } = request.body;
  
  const postResponse = await supabase.post("/post", {
    content,
    media_url,
  });

  const postId = postResponse.data[0];
  
  if (comment) {
    await supabase.post("/post/:id/comment", {
      PostID: postId,
      content: comment,
    });
  }

  if (like) {
    await supabase.post("/post/:id/postLike", {
      PostID: postId,
      CommentID: null, // or specify a comment ID if needed
    });
  }
  
      response.status(201).json(postResponse.data);
    } catch (error) {
      next(error);
    }
  };


  export { addPost };