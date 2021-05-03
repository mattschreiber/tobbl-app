import React, {useState} from 'react';

import DailyScore from './DailyScore';

// Component for entering a new RecordEntry, i.e. a new daily score. This triggers a refresh of the DailyScore component from the handleSubmit function
function RecordEntry() {
    const [period, setPeriod] = useState('');
    const [team1, setTeam1] = useState('Naps');
    const [team2, setTeam2] = useState('Ironmen');
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    const [teamList] = useState(['Ironmen', 'Naps', 'Row']);

    const [scoreObj] = useState([
        {period: 1, team1: "Naps", score1: 50, team2: "Durham Bulls", score2: 40},
        {period: 1, team1: "Cleveland Spiders", score1: 35, team2: "Millionare Row", score2: 57},
        {period: 1, team1: "Social Zeros", score1: 25, team2: "Ironmen", score2:56}
    ])

    const handleSubmit = e => {
        e.preventDefault();

        if (score1 === 0 && score2 === 0){
            return
        }

        scoreObj.unshift({period: parseInt(period), team1: team1, score1: parseInt(score1), team2: team2, score2: parseInt(score2)});
        setScore1(0);
        setScore2(0); 
      }

    return (
        <div className="container-fluid">
        <div className='row'>
            <div className='col-sm-6'>
            <form onSubmit={handleSubmit}>
            <div className='form-row'>
                <div className={'form-group col-lg-6'}>
                    <label htmlFor='period'>Period:</label>
                    <input required type='number' id='period' className={'form-control'} value={period} onChange={e => setPeriod(e.target.value)} />
                </div>
            </div>
                <div className='form-row'>
                    <div className={'form-group col-lg-6'}>
                    <label htmlFor='team1'>Team 1:</label>
                        <select id='team1' className='custom-select' value={team1} onChange={e => setTeam1(e.target.value)}>
                            {teamList.map((team, i)=> (
                                <option key={i} value={team}>{team}</option>
                            ))}
                        </select>
                    </div> 
                    <div className={'form-group col-lg-6'}>
                        <label htmlFor='score1'>Score 1:</label>
                        <input type='number' id='score1' className={'form-control'} value={score1} onChange={e => setScore1(e.target.value)} />
                    </div> 
                </div>
                <div className='form-row'>
                    <div className={'form-group col-lg-6'}>
                    <label htmlFor='team2'>Team 2:</label>
                        <select id='team2' className='custom-select' value={team2} onChange={e => setTeam2(e.target.value)}>
                        {teamList.map((team, i)=> (
                                <option key={i} value={team}>{team}</option>
                            ))}
                        </select>
                    </div> 
                    <div className={'form-group col-lg-6'}>
                        <label htmlFor='score2'>Score 2</label>
                        <input type='number' id='score2' className={'form-control'} value={score2} onChange={e => setScore2(e.target.value)} />
                    </div> 
                </div>
                <div className={'form-group'}>
                <button type="submit" className="btn btn-primary">Submit</button>     
                </div>     
            </form>
            </div>
            <div className='col-sm'></div>
        </div>
        <div className="row">
            <div className="col-lg-6">
                {/* Daily score component. Will update automatically when an new RecordEntry is submitted */}
                <DailyScore props = {scoreObj} />
            </div>
        </div>
        
        </div>
    )
}

export default RecordEntry;
