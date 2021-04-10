import React from 'react';

function DailyScore (props) {
    return (
        <div className='row mt-5'>
            <div className='col-12'>
                <h3>Daily Score</h3>
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
                            <td>{score.team1}</td>
                            <td>{score.score1}</td>
                            <td>{score.team2}</td>
                            <td>{score.score2}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DailyScore;