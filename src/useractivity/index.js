import React, { useState } from 'react';

import Layout from "../sidebar"
import Userdata from "../userdata";
import Navbar from "../navbar";

import './index.css';

const UserActivity = () => {
    const userdata =
        [
            { "userid": 1, "username": "user1", "name": "Alice Johnson", "email": "alice.johnson@example.com", "active_in_last_24h": "Yes" },
            { "userid": 2, "username": "user2", "name": "Bob Smith", "email": "bob.smith@example.com", "active_in_last_24h": "No" },
            { "userid": 3, "username": "user3", "name": "Carol White", "email": "carol.white@example.com", "active_in_last_24h": "Yes" },
            { "userid": 4, "username": "user4", "name": "Dave Brown", "email": "dave.brown@example.com", "active_in_last_24h": "No" },
            { "userid": 5, "username": "user5", "name": "Eve Davis", "email": "eve.davis@example.com", "active_in_last_24h": "Yes" },
            { "userid": 6, "username": "user6", "name": "Frank Harris", "email": "frank.harris@example.com", "active_in_last_24h": "Yes" },
            { "userid": 7, "username": "user7", "name": "Grace Lee", "email": "grace.lee@example.com", "active_in_last_24h": "No" },
            { "userid": 8, "username": "user8", "name": "Henry Clark", "email": "henry.clark@example.com", "active_in_last_24h": "Yes" },
            { "userid": 9, "username": "user9", "name": "Irene Walker", "email": "irene.walker@example.com", "active_in_last_24h": "No" },
            { "userid": 10, "username": "user10", "name": "Jack Hall", "email": "jack.hall@example.com", "active_in_last_24h": "Yes" },
            { "userid": 11, "username": "user11", "name": "Karen Young", "email": "karen.young@example.com", "active_in_last_24h": "Yes" },
            { "userid": 12, "username": "user12", "name": "Louis King", "email": "louis.king@example.com", "active_in_last_24h": "No" },
            { "userid": 13, "username": "user13", "name": "Mia Scott", "email": "mia.scott@example.com", "active_in_last_24h": "Yes" },
            { "userid": 14, "username": "user14", "name": "Nathan Green", "email": "nathan.green@example.com", "active_in_last_24h": "Yes" },
            { "userid": 15, "username": "user15", "name": "Olivia Baker", "email": "olivia.baker@example.com", "active_in_last_24h": "No" },
            { "userid": 16, "username": "user16", "name": "Paul Adams", "email": "paul.adams@example.com", "active_in_last_24h": "Yes" },
            { "userid": 17, "username": "user17", "name": "Quinn Turner", "email": "quinn.turner@example.com", "active_in_last_24h": "No" },
            { "userid": 18, "username": "user18", "name": "Rachel Hill", "email": "rachel.hill@example.com", "active_in_last_24h": "Yes" },
            { "userid": 19, "username": "user19", "name": "Steve Moore", "email": "steve.moore@example.com", "active_in_last_24h": "No" },
            { "userid": 20, "username": "user20", "name": "Tina Anderson", "email": "tina.anderson@example.com", "active_in_last_24h": "Yes" }
        ]
    const userPost = [
        { "postid": 1, "post_caption": "Enjoying the sunny day!", "media": "image", "dateTime": "2024-08-10 14:23", "media_url": "https://example.com/media1.jpg" },
        { "postid": 2, "post_caption": "My new favorite recipe", "media": "video", "dateTime": "2024-08-10 16:12", "media_url": "https://example.com/media2.mp4" },
        { "postid": 3, "post_caption": "Hiking adventures", "media": "image", "dateTime": "2024-08-10 09:45", "media_url": "https://example.com/media3.jpg" },
        { "postid": 4, "post_caption": "Beach vibes", "media": "image", "dateTime": "2024-08-09 17:32", "media_url": "https://example.com/media4.jpg" },
        { "postid": 5, "post_caption": "Coffee time", "media": "image", "dateTime": "2024-08-10 07:20", "media_url": "https://example.com/media5.jpg" },
        { "postid": 6, "post_caption": "Weekend getaway", "media": "video", "dateTime": "2024-08-10 18:30", "media_url": "https://example.com/media6.mp4" },
        { "postid": 7, "post_caption": "Sunset by the lake", "media": "image", "dateTime": "2024-08-10 19:45", "media_url": "https://example.com/media7.jpg" },
        { "postid": 8, "post_caption": "Exploring the city", "media": "image", "dateTime": "2024-08-09 13:15", "media_url": "https://example.com/media8.jpg" },
        { "postid": 9, "post_caption": "Workout goals", "media": "image", "dateTime": "2024-08-10 06:50", "media_url": "https://example.com/media9.jpg" },
        { "postid": 10, "post_caption": "Movie night", "media": "video", "dateTime": "2024-08-10 22:10", "media_url": "https://example.com/media10.mp4" },
        { "postid": 11, "post_caption": "New book recommendations", "media": "image", "dateTime": "2024-08-09 08:55", "media_url": "https://example.com/media11.jpg" },
        { "postid": 12, "post_caption": "Autumn leaves", "media": "image", "dateTime": "2024-08-10 10:05", "media_url": "https://example.com/media12.jpg" },
        { "postid": 13, "post_caption": "Road trip memories", "media": "image", "dateTime": "2024-08-10 11:30", "media_url": "https://example.com/media13.jpg" },
        { "postid": 14, "post_caption": "Trying out photography", "media": "image", "dateTime": "2024-08-09 12:20", "media_url": "https://example.com/media14.jpg" },
        { "postid": 15, "post_caption": "Festival fun", "media": "video", "dateTime": "2024-08-10 21:00", "media_url": "https://example.com/media15.mp4" },
        { "postid": 16, "post_caption": "Morning run", "media": "image", "dateTime": "2024-08-10 05:45", "media_url": "https://example.com/media16.jpg" },
        { "postid": 17, "post_caption": "Homemade pizza night", "media": "video", "dateTime": "2024-08-09 20:30", "media_url": "https://example.com/media17.mp4" },
        { "postid": 18, "post_caption": "Art gallery visit", "media": "image", "dateTime": "2024-08-10 15:10", "media_url": "https://example.com/media18.jpg" },
        { "postid": 19, "post_caption": "Snowy day walk", "media": "image", "dateTime": "2024-08-09 14:50", "media_url": "https://example.com/media19.jpg" },
        { "postid": 20, "post_caption": "Celebrating with friends", "media": "video", "dateTime": "2024-08-10 23:45", "media_url": "https://example.com/media20.mp4" }
    ]

    let userLen = userdata.length
    const filterUser = userdata.filter(each => each.active_in_last_24h === "Yes")
    let ActiveLength = filterUser.length
    const totalPost = userPost.length

    const now = new Date()
    const recentPosts = userPost.filter(post => {
        const postDate = new Date(post.dateTime);
        const timeDifference = now - postDate;
        return timeDifference <= 24 * 60 * 60 * 1000;
    });

    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;


    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filterUser.slice(indexOfFirstRow, indexOfLastRow);


    const totalPages = Math.ceil(filterUser.length / rowsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <><Navbar />
            <div className="one">
                <div className="sub-two"><Layout /></div>

                <div >
                    <div className="two-sub">
                        <div className="usenlen-div ">
                            <h1 className="heading-one">Total users</h1>
                            <h1>{userLen}</h1>
                        </div>
                        <div className="usenlen-div ">
                            <h1 className="heading-one">Total Active Users</h1>
                            <h1>{ActiveLength}</h1>
                        </div>
                    </div>
                    <div className='two-2'>
                        <h1>Most Recent Posts</h1>

                        <div >
                            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                                <thead style={{ backgroundColor: '#f2f2f2' }}>
                                    <tr>
                                        <th style={{ border: '1px solid black', padding: '8px' }}>User_id</th>
                                        <th style={{ border: '1px solid black', padding: '8px' }}>Username</th>
                                        <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                                        <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentRows.map(user => (
                                        <tr key={user.userId}>
                                            <td style={{ border: '1px solid black', padding: '8px' }}>{user.userid}</td>
                                            <td style={{ border: '1px solid black', padding: '8px' }}>{user.username}</td>
                                            <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
                                            <td style={{ border: '1px solid black', padding: '8px' }}>{user.email}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div style={{ marginTop: '10px' }}>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index + 1}
                                        onClick={() => paginate(index + 1)}
                                        style={{
                                            margin: '5px',
                                            padding: '5px 10px',
                                            backgroundColor: currentPage === index + 1 ? '#4CAF50' : '#f2f2f2',
                                            color: currentPage === index + 1 ? 'white' : 'black',
                                            border: '1px solid #ccc',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>


                    </div>

                </div>



            </div>


        </>

    )
}
export default UserActivity