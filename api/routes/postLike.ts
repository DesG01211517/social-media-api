import  { Request, Response, NextFunction } from "express";
import supabase from "../../supabaseInstance"; 


const getLikeById = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
        const postId = request.params.id;
        const { data } = await supabase.get(
            `/postLike?PostId=eq.${postId}`);
        if (!data || data.length === 0) {
             response.status(404).json({ message: "No Likes Yet" });
        }
         response.status(200).json(data);
    } catch (error){
        next(error);
    }
  };

  export { getLikeById };