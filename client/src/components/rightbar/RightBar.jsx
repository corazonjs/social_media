import "./RightBar.css";
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
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/3.jpg" alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Meirlan Erezhepov</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/3.jpg" alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Meirlan Erezhepov</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/3.jpg" alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Meirlan Erezhepov</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="/assets/person/3.jpg" alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Meirlan Erezhepov</span>
                    </li>

                </ul>
            </div>
        </div>
    );
}
