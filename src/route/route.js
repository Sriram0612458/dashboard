import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../auth';
import Data from '../data';
import UserActivity from '../useractivity';
import PostActivity from '../postActivity';
function Routerapp() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={< Data />} />
                <Route path="/activity" element={<UserActivity />} />
                <Route path="/postactivity" element={<PostActivity />} />
            </Routes>
        </Router>
    );
}

export default Routerapp;