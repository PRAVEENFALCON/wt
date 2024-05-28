import React from "react";
class Timetable extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>CSE-5 (SEM-IV) TIME TABLE</h1>
                <table align="center" border="5" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Day/Period</th>
                            <th>I <br />9:10-10:10 AM</th>
                            <th>II <br />10:10-11:10 AM</th>
                            <th>III <br />11:15 AM-12:15 PM</th>
                            <th><br />12:15-01:00 PM</th>
                            <th>IV <br />01:00-02:00 PM</th>
                            <th>V <br />02:00-03:00 PM</th>
                            <th>VI <br />03:05-04:05 PM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td align="center"><b>Monday</b></td>
                            <td align="center">WT</td>
                            <td align="center" colSpan="2">AI TOOLS LAB</td>
                            <td align="center" rowSpan="6">
                                <h2>L <br />U <br />N <br />C <br />H </h2>
                            </td>
                            <td align="center">MFDS</td>
                            <td align="center">BE&S</td>
                            <td align="center">SPORTS</td>
                        </tr>
                        <tr>
                            <td align="center"><b>Tuesday</b></td>
                            <td align="center">AI TOOLS</td>
                            <td align="center">BE&S</td>
                            <td align="center">EEA</td>
                            <td align="center">MFDS</td>
                            <td align="center" colSpan="2">
                                DAA LAB = (B1) <br />IT LAB = (B2) <br />BE&S LAB = (B3)
                            </td>
                        </tr>
                        <tr>
                            <td align="center"><b>Wednesday</b></td>
                            <td align="center">WT</td>
                            <td align="center">MFDS</td>
                            <td align="center">BE&S</td>
                            <td align="center">DAA</td>
                            <td align="center">EEA</td>
                            <td align="center">MENTORING</td>
                        </tr>
                        <tr>
                            <td align="center"><b>Thursday</b></td>
                            <td align="center">EEA</td>
                            <td align="center">AI TOOLS</td>
                            <td align="center">DAA</td>
                            <td align="center">WT</td>
                            <td align="center" colSpan="2">
                                DAA LAB = (B2) <br />IT LAB = (B3) <br />BE&S LAB = (B1)
                            </td>
                        </tr>
                        <tr>
                            <td align="center"><b>Friday</b></td>
                            <td align="center">DAA</td>
                            <td align="center" colSpan="2">
                                DAA LAB = (B3) <br />IT LAB = (B1) <br />BE&S LAB = (B2)
                            </td>
                            <td align="center">AI TOOLS</td>
                            <td align="center">EEA</td>
                            <td align="center">LIBRARY</td>
                        </tr>
                        <tr>
                            <td align="center"><b>Saturday</b></td>
                            <td align="center">DAA</td>
                            <td align="center">AI TOOLS</td>
                            <td align="center">MFDS</td>
                            <td align="center">WT</td>
                            <td align="center">BE&S</td>
                            <td align="center"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Timetable;
