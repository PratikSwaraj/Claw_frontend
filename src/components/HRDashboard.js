import React, { useEffect, useState } from "react";
import axios from "axios";

const HRDashboard = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        const fetchRequests = async () => {
            const { data } = await axios.get("http://localhost:8080/api/resignation/all");
            setRequests(data);
        };
        fetchRequests();
    }, []);

    return (
        <div>
            <ul>
                {requests.map((req, index) => (
                    <li key={index}>{req.employeeName} -{req.reason}- {req.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default HRDashboard;
