import  { Request, Response, NextFunction } from "express";
import supabase from "../../supabaseInstance"; 

const getAllComments = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
        const postId = request.params.id;
        const res = await supabase.get(`/comment?PostID=eq.${postId}`);
       if (res.error) throw res.error;

        response.json(res.data);
    } catch (error){
        next(error);
    }
  };
  
  export default getAllComments
