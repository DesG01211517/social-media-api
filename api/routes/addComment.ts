import { Request, Response, NextFunction } from "express";
import supabase from "../../supabaseInstance";

const addComment = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { PostID, content } = request.body;

    const res = await supabase.post("/comment", {
      PostID: PostID,
      content: content,
    });

    if (res.error) {
      return response.status(500).json({ error: res.error.message });
    }

    response.status(201).json(res.data);
  } catch (error) {
    next(error);
  }
};

export default addComment;
