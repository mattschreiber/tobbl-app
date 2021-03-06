import React, { useState } from 'react';

import '../App.css';

// Componet used to diplay Team standings.
// props include division and team records
// example props object ({teamName: 'Naps', teamWins: 5, teamLosses: 2, division: 'Black'}, division = "Red")
function Standings(props) {

    // Used to set color of division name 
    const [styles] = useState([{color: 'black'}, {color: 'red'}]);
    
    return (
        <div className='row mt-5'>
            <div className='col-12'>
                <h3 className={props.division === 'Red' ? styles[1].color : styles[0].color}>{props.division} Division</h3>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>Team Name</th>
                            <th scope='col'>Wins</th>
                            <th scope='col'>Losses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {GetDivision(props.props, props.division).map((team, i) =>
                        <tr key={i}>
                            <td>{team.teamName}</td>
                            <td>{team.teamWins}</td>
                            <td>{team.teamLosses}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className='col'>

            </div>
        </div>
    )
    
    // Function the iterates over each and returns only those matching the division parameter
    function GetDivision(teamObj, division) {
        let newTeamObj=[];
        teamObj.forEach(team => {
            if (team.division === division) {
                newTeamObj.push(team);
            }
        });

        // sort by team with most wins
        newTeamObj.sort((a, b) => {
            return b.teamWins - a.teamWins;
        });

        return newTeamObj;
    }
}

export default Standings;