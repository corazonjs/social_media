import "./Post.css";
import {MoreVert, Favorite} from "@mui/icons-material";
import { Users } from "../../DynamicData"

export default function Post({post}) {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={Users.filter(u=> u.id === post.userId)[0].profilePicture} alt=""/>
                        <span className="postUsername">{Users.filter(u=> u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />

                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <Favorite className="likeIcon"/>
                        <span className="postLikeCounter">{post.like} people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
