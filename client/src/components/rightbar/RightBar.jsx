import "./RightBar.css";
import {Users} from "../../DynamicData"
import Online from "../online/Online";

export default function RightBar({profile}) {
    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt=""/>
                    <span className="birthdayText">
                        <b>Daniyar Zholkobaev</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.jpg" alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        )
    };

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className='rightbarTitle'> User Information</h4>
                <div className="rightbarInfo">
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>City:</span>
                        <span className='rightbarInfoValue'>Astana</span>
                    </div>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>From:</span>
                        <span className='rightbarInfoValue'>Almaty</span>
                    </div>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>Relationship:</span>
                        <span className='rightbarInfoValue'>Single</span>
                    </div>
                </div>

                <h4 className='rightbarTitle'> User friends</h4>
                <div className='rightbarFollowings'>
                    <div className='rightbarFollowing'>
                        <img className='rightbarFollowingImg' src='/assets/person/1.jpg' alt=''/>
                        <span className="rightbarFollowingName">Lemon Lemonov</span>
                    </div>

                    <div className='rightbarFollowing'>
                        <img className='rightbarFollowingImg' src='/assets/person/2.jpg' alt=''/>
                        <span className="rightbarFollowingName">Lemon Lemonov</span>
                    </div>

                    <div className='rightbarFollowing'>
                        <img className='rightbarFollowingImg' src='/assets/person/3.jpg' alt=''/>
                        <span className="rightbarFollowingName">Lemon Lemonov</span>
                    </div>

                    <div className='rightbarFollowing'>
                        <img className='rightbarFollowingImg' src='/assets/person/4.jpg' alt=''/>
                        <span className="rightbarFollowingName">Lemon Lemonov</span>
                    </div>

                    <div className='rightbarFollowing'>
                        <img className='rightbarFollowingImg' src='/assets/person/5.jpg' alt=''/>
                        <span className="rightbarFollowingName">Lemon Lemonov</span>
                    </div>

                    <div className='rightbarFollowing'>
                        <img className='rightbarFollowingImg' src='/assets/person/1.jpg' alt=''/>
                        <span className="rightbarFollowingName">Lemon Lemonov</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightBar /> : <HomeRightBar/>}
            </div>
        </div>
    );
}
