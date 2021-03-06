import React, {useState} from 'react';
import DailyScore from '../components/DailyScore';
import Standings from '../components/Standings';

// home page (i.e. landing page). Includes 2 standings components and a daily score component
function Home() {
    const [teamObj] = useState([
        {teamName: 'Naps', teamWins: 5, teamLosses: 2, division: 'Black'}, {teamName: 'Ironmen', teamWins: 6, teamLosses: 1, division: 'Red'}, {teamName: 'Social Zeros', teamWins: 1, teamLosses: 6, division: 'Red'}, {teamName: 'Millionare Row', teamWins: 3, teamLosses: 4, division: 'Red'},
        {teamName: 'Cleveland Spiders', teamWins: 2, teamLosses: 5, division: 'Black'}, {teamName: 'Durham Bulls', teamWins: 6, teamLosses: 1, division: 'Black'}
    ]);

    const [scoreObj] = useState([
        {period: 1, team1: "Naps", score1: 50, team2: "Durham Bulls", score2: 40},
        {period: 1, team1: "Cleveland Spiders", score1: 35, team2: "Millionare Row", score2: 57},
        {period: 1, team1: "Social Zeros", score1: 25, team2: "Ironmen", score2:56}
    ])

    return (
        <div className="container-fluid">
            <h1 className="text-center mt-3">Current Standings</h1>
        <div className='row'>
            <div className='col-lg'>
                <Standings props = {teamObj} division = "Black" />
            </div>
            <div className='col-lg'>
                <Standings props = {teamObj} division = "Red" />
            </div>
        </div>
        <div className="row">
            <div className="mx-auto col-lg-12">
                <DailyScore props = {scoreObj} />
            </div>
        </div>
        </div>
    )
}

export default Home;