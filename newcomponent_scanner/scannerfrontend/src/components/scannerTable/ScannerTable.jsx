import React, { useEffect, useState } from 'react'
import Chart from '../chart/Chart.jsx';
import './ScannerTable.css';

function ScannerTable(props) {
    const [dataToShow, setDataToShow] = useState([]);
    const [showChart, setShowChart] = useState(false);

    const closePopup = () => {
        setShowChart(false);
    }

    useEffect(() => {
        let d = Object.entries(props.data.result).map(([key, value], i) => {
            return {
                index: i + 1,
                name: key,
                description: value[1],
                rating: value[0]
            }
        })
        setDataToShow(d);
    }, [props.data.result])

    return (
        <div className='container-table'>
            <div className='chart-btn-wrapper'>
                <div className='chart-btn' onClick={() => setShowChart(true)}>Chart</div>
            </div>
            {showChart === true ? <Chart data={props.data.data} closePopup={closePopup} /> : null}
            <div className='wrapper-table' id='piechart'>
                <table className='table'>
                    <thead className=''>
                        <tr className=''>
                            <th className='table-head'>No.</th>
                            <th className='table-head'>Name</th>
                            <th className='table-head'>Description</th>
                            <th className='table-head' style={{ paddingRight: '2.3rem' }}>Rating</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {dataToShow.map(e => {
                            let color = e.rating === 'Poor' ? '#EDAD9D' : e.rating === "Average" ? '#FF5902' : e.rating === 'Best' ? '#94D879' : e.rating === "Good" ? '#73CDB2' : e.rating === 'NA' ? 'rgb(156, 134, 255)' : null;
                            return <tr key={e.index} className='' style={{ backgroundColor: color }}>
                                <td className='table-data' data-label="No." ><div className={`${e.index === '' ? 'invisible' : ''}`}>{e.index !== '' ? e.index : 'ghost'}</div></td>
                                <td className='table-data' data-label="Name" ><div className={`${e.name === '' ? 'invisible' : ''}`}>{e.name !== '' ? e.name : 'ghost'}</div></td>
                                <td className='table-data' data-label="Description" style={{ lineHeight: '1.7rem' }} ><div className={`${e.description === '' ? 'invisible' : ''}`}>{e.description !== '' ? e.description : 'ghost'}</div></td>
                                <td className='table-data' data-label="Rating" ><div className={`${e.rating === '' ? 'invisible' : ''}`}>{e.rating !== '' ? e.rating : 'ghost'}</div></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ScannerTable