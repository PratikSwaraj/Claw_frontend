import React, { useState } from "react";
import axios from "axios";

const ResignationForm = () => {
    const [employeeName, setEmployeeName] = useState("");
    const [lastWorkingDay, setLastWorkingDay] = useState("");
    const [reason, setReason] = useState("");

    const handleSubmit = async () => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/resignation/submit`, { employeeName, lastWorkingDay, reason });
            alert("Resignation submitted!");
        } catch (error) {
            alert("Error submitting resignation");
        }
    };

    return (
        <div>
            <h2>Submit Resignation</h2>
            <input type="text" placeholder="Employee Name" onChange={(e) => setEmployeeName(e.target.value)} />
            <input type="date" onChange={(e) => setLastWorkingDay(e.target.value)} />
            <textarea placeholder="Reason" onChange={(e) => setReason(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default ResignationForm;
