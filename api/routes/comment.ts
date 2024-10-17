import  { Request, Response, NextFunction } from "express";
import supabase from "../../supabaseInstance"; 

const getAllComments = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
        const postID = request.params.id;
        const res = await supabase.get("/post?id=eq,comments:comment(*)");
        
        response.json(res.data);
    } catch (error){
        next(error);
    }
  };

  const addComment = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { PostID, content } = request.body; 
  
      const res = await supabase.post("/comment", {
        PostID,
        content,
      });
  
      if (res.error) {
        return response.status(500).json({ error: res.error.message });
      }
  
      response.status(201).json(res.data); 
    } catch (error) {
      next(error);
    }
  };
  
  export { getAllComments, addComment };
  

  