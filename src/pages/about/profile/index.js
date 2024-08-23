import React from "react";
import "./profile.scss";
import profile1 from "../../../assets/images/image 46.png";
import profile2 from '../../../assets/images/image 51.png';
import profile3 from '../../../assets/images/image 47.png';
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";


export default function Profile() {
    const Profile = [
        {
            img: profile1,
            name: 'Tom Cruise',
            field: 'Founder & Chairman',
        },
        {
            img: profile2,
            name: 'Emma Watson',
            field: 'Managing Director'
        },
        {
            img: profile3,
            name:'Will Smith',
            field:'Product Designer',
        }
    ];
    return (
        <div className="profile_main">
            <div className="container">
                <div className="profile_aligment">
                    {Profile.map((el) => {
                        return (
                            <div className="main_profile">
                                <div className="profile">
                                    <img src={el.img} alt="" />
                                </div>
                                <div className="profile_text">
                                    <h1>{el.name}</h1>
                                    <p>{el.field}</p>
                                    <div className="icon_profile">
                                        <TfiTwitter />
                                        <FaInstagram />
                                        <FaLinkedinIn />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
