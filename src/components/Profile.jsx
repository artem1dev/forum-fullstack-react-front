import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Post from "./Post.jsx";
import axios from "axios";
import routes from "../routes.js";

export default function Profile() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [userPosts, setUserPosts] = useState(null);
    const { currentUser, token } = JSON.parse(localStorage.getItem("currentUser"));
    useEffect(() => {
        const fetchPostsByUserId = async (userId) => {
            const response = await axios.get(routes.getPostsByUserId(userId));
            return response.data.values;
        };
        fetchPostsByUserId(id).then((data) => {
            setUserPosts(data);
        });
        const fetchUserInfo = async (userId) => {
            const response = await axios.get(routes.getUserById(userId));
            return response.data.values;
        };
        fetchUserInfo(id).then((data) => {
            setUser(data);
        });
    }, []);

    return (
        <>
            <div className="divProfileBlock">
                <div className="ProfileForm">
                    <div>
                        <div className="top-block">
                            <h1>{user?.login}</h1>
                            <span className="roleTitle">{user?.role} </span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>About</span>
                            <div>
                                <div className="profileitem">
                                    Login: <span>{user?.login}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="All_Posts">
                {userPosts?.map((post) => (
                    <Post post={post} />
                ))}
            </div>
        </>
    );
}
