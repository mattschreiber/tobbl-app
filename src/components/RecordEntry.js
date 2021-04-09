import React, {useState} from 'react';

function RecordEntry() {
    const [period, setPeriod] = useState('');
    const [team1, setTeam1] = useState('Naps');
    const [team2, setTeam2] = useState('Ironmen');
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);

    const [teamList] = useState(['Ironmen', 'Naps', 'Row']);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(team1, team2);
      }

    return (
        <div className='row'>
            <div className='col-sm'></div>
            <div className='col-sm'>
            <form onSubmit={handleSubmit}>
                <div className={'form-group'}>
                    <label htmlFor='period'>Period:</label>
                    <input type='text' id='period' className={'form-control'} value={period} onChange={e => setPeriod(e.target.value)} />
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
                        <input type='text' id='score1' className={'form-control'} value={score1} onChange={e => setScore1(e.target.value)} />
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
                        <input type='text' id='score2' className={'form-control'} value={score2} onChange={e => setScore2(e.target.value)} />
                    </div> 
                </div>
                <div className={'form-group'}>
                <button type="submit" className="btn btn-primary">Submit</button>     
                </div>     
            </form>
            </div>
            <div className='col-sm'></div>
        </div>
    )
}

export default RecordEntry;
