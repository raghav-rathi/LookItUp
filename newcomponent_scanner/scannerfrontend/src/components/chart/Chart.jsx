import React, { useEffect, useState } from 'react';
import './Chart.css';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell, Tooltip } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';



function Chart(props) {
    const [chartData, setChartData] = useState([])


    useEffect(() => {
        if (props.data !== undefined) {
            console.log(props.data);
            let d = Object.entries(props.data).map(([key, value]) => {
                return {
                    name: key,
                    value: value,
                    color: key === 'Poor' ? '#EDAD9D' : key === "Average" ? '#FF5902' : key === 'Best' ? '#94D879' : key === "Good" ? '#73CDB2' : key === 'NA' ? 'rgb(156, 134, 255)' : null
                }
            })
            console.log(d);
            setChartData(d);
        }
    }, [props.data])

    return (
        <div className='popup-wrapper'>
            <div className='popup-wrapper-dark' onClick={props.closePopup} ></div>
            <div className='popup-container'>
                <div className='popup-header'>
                    <div className='cross-close' style={{ visibility: 'hidden' }}><FontAwesomeIcon icon={faTimes} /></div>
                    <div className='popup-heading'>
                        Pie Chart
                    </div>
                    <div className='cross-close' onClick={props.closePopup}><FontAwesomeIcon icon={faTimes} /></div>
                </div>
                <div className='ingredient-heading'>
                    Ingredient Composition
                </div>
                <div className='piechart-section'>
                    {chartData.length > 0 ?
                        <PieChart width={300} height={300} >
                            {/* <Legend /> */}
                            <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '5px', color: 'white' }} />
                            <Pie data={chartData} dataKey="value" dataName="name" cx="50%" cy="50%" outerRadius={100} label >
                                {
                                    chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))
                                }
                            </Pie>
                        </PieChart>
                        : null}
                    <ul className='legend'>
                        <li>
                            <div className='legend-dot bg-average'></div>
                            <div className='legend-text color-average'>
                                Average
                            </div>
                        </li>
                        <li>
                            <div className='legend-dot bg-best'></div>
                            <div className='legend-text color-best'>
                                Best
                            </div>
                        </li>
                        <li>
                            <div className='legend-dot bg-good'></div>
                            <div className='legend-text color-good'>
                                Good
                            </div>
                        </li>
                        <li>
                            <div className='legend-dot bg-na'></div>
                            <div className='legend-text color-na'>
                                NA
                            </div>
                        </li>
                        <li>
                            <div className='legend-dot bg-poor'></div>
                            <div className='legend-text color-poor'>
                                Poor
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='close-section'>
                    <div className='close-btn' onClick={props.closePopup}>Close</div>
                </div>
            </div>
        </div>
    )
}

export default Chart