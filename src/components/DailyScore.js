import React from 'react';

function DailyScore (props) {

    return (
        <div className='row mt-5'>
            <div className='col-12'>
                <div className="card mb-3">
                    <div className="card-header">
                        Daily Score Log
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Period</th>
                                        <th scope='col'>Team 1</th>
                                        <th scope='col'>Score 1</th>
                                        <th scope='col'>Team 2</th>
                                        <th scope="col">Score 2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.props.map((score, i) =>
                                    <tr key={i}>
                                        <td>{score.period}</td>
                                        <td className={score.score1 > score.score2 ? 'font-weight-bold':'font-weight-normal' }>{score.team1}</td>
                                        <td className={score.score1 > score.score2 ? 'font-weight-bold':'font-weight-normal'}>{score.score1}</td>
                                        <td className={score.score1 < score.score2 ? 'font-weight-bold':'font-weight-normal' }>{score.team2}</td>
                                        <td className={score.score1 < score.score2 ? 'font-weight-bold':'font-weight-normal' }>{score.score2}</td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default DailyScore;