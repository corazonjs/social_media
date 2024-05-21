import './Profile.css'
import TopBar from "../../components/topbar/TopBar";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";



export default function Profile() {
    return (
        <>
            <TopBar />
            <div className="profile">
                <SideBar />
                <div className='profileRight'>
                    <div className='profileRightTop'>

                        <div className='profileCover'>
                            <img className='profileCoverImg' src='/assets/post/5.jpg' alt=""/>
                            <img className='profileUserImg' src='/assets/person/3.jpg' alt=""/>
                        </div>

                        <div className='profileInfo'>
                            <h4 className='profileInfoName'> Daniyar Zholkobaev</h4>
                            <span className='profileInfoDesc'> Hello World!</span>
                        </div>

                    </div>
                    <div className='profileRightBottom'>
                        <Feed/>
                        <RightBar profile/>
                    </div>

                </div>
            </div>
        </>
    );
}
