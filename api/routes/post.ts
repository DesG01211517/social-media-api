
import  { Request, Response, NextFunction } from "express";
import supabase from "../../supabaseInstance"; 

//Get all Posts
  const getAllPosts = async (
    request: Request,
    response: Response,
    next: NextFunction
    ) => {
    try {
        const res = await supabase.get('post?select=*,comments:comment(*),likes:postlike(*)');
        
        response.json(res.data);
    } catch (error){
        next(error);
    }
  };
  

 export { getAllPosts };