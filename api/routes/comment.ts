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

  export { getAllComments };