
import PostCard from '../PostCard';

import {useContext}  from 'react'; 
import PostCardContext from "../Providers/Provider";

function PostCardList({darks}) {

  const {post,setPost} = useContext(PostCardContext)

    return (
    <>
    {(post.length==0)?"Loading.....": post.map((item)=><PostCard darkss={darks} likes={item.likes} check={true} key={item.id} image={item.image} text={item.text} picture={item.owner.picture} firstName={item.owner.firstName} lastName={item.owner.lastName}/>)}
   
  
   </>
  )
}

export default PostCardList
