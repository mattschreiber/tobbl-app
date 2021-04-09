import React, {useState} from 'react';
import Standings from '../components/Standings';

// home page
function Home() {
    const [teamObj] = useState([
        {teamName: 'Naps', teamWins: 5, teamLosses: 2, division: 'Black'}, {teamName: 'Ironmen', teamWins: 6, teamLosses: 1, division: 'Red'}, {teamName: 'Social Zeros', teamWins: 1, teamLosses: 6, division: 'Red'}, {teamName: 'Millionare Row', teamWins: 3, teamLosses: 4, division: 'Red'},
        {teamName: 'Cleveland Spiders', teamWins: 2, teamLosses: 5, division: 'Black'}, {teamName: 'Durham Bulls', teamWins: 6, teamLosses: 1, division: 'Black'}
    ]);

    // const [division] = useState('');

    return (
        <div className="container-fluid">
        <div className='row'>
            <div className='col-lg'>
                <Standings props = {teamObj} division = "Black" />
            </div>
            <div className='col-lg'>
                <Standings props = {teamObj} division = "Red" />
            </div>
        </div>
        </div>
    )
}

export default Home;