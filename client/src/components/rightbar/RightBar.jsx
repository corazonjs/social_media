import "./RightBar.css";
import {Users} from "../../DynamicData"
import Online from "../online/Online";

export default function RightBar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt=""/>
                    <span className="birthdayText">
                        <b>Daniyar Zholkobaev</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.jpg" alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=> (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
