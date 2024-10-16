
import  { Request, Response, NextFunction } from "express";
import supabase from "../../supabaseInstance"; 
  
  
 const addPost = (request: Request, response: Response, next: NextFunction) => {
    const { data } = request.body;
  
    try {
      const { data, error } = supabase.post("post");
  
      if (error) {
        response.status(500).json({ error });
      }
  
      response.status(201).json(data);
    } catch (error) {
      next(error);
    }
  };


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
  

 export { getAllPosts, addPost };