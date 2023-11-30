import React from 'react';
import './HomeCalendar.css'

const HomeCalendar = () => {
    return (
        <div className='container-fluid p-5' style={{ backgroundColor: 'lavender' }}>
            <div className="container py-2" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
                <div className="row">

                    {/* Birthday Column */}
                    <div className="col-sm-4">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th colSpan={2}>
                                        <h4>
                                            Birthdays
                                        </h4>
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{width: '80%', verticalAlign: 'middle'}}>

                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <div style={{fontWeight: '500'}}>

                                        </div>
                                        <small>
                                            <span>
                                                <div className="float-end">

                                                </div>
                                            </span>
                                        </small>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Anniversary Column */}
                    <div className="col-sm-4">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th colSpan={2}>
                                        <h4>
                                            Anniversaries
                                        </h4>
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '165px', verticalAlign: 'middle' }}>

                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <div style={{ fontWeight: '500' }}>

                                        </div>
                                        <small>

                                        </small>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Commemoration Column */}
                    <div className="col-sm-4">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th colSpan={2}>
                                        <h4>
                                            Commemorations
                                        </h4>
                                        
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ width: '80px', verticalAlign: 'middle' }}>

                                    </td>
                                    <td style={{ verticalAlign: 'middle' }}>
                                        <div style={{ fontWeight: '500' }}>

                                        </div>
                                        <small>
                                            <span>
                                                <div className="float-end">

                                                </div>
                                            </span>
                                        </small>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCalendar