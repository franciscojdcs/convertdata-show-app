import React from 'react'
import { RowObj } from './rowobj';

export const TableObj = ({jsonData}) => {

    if (jsonData === undefined){
        return <>Sin Data</>;
    }
    //const strData = JSON.stringify(data);

    try{


    const headers = Object.keys(jsonData[0]);
    const rows = jsonData.map(item => Object.values(item));
    return (
        <>
            <div className="table-responsive">
                <table className='table ' > 
                    <thead className=''>
                        <tr>
                            {headers.map(header => <th key={header}>{header}</th>)}
                        </tr>           
                    </thead>
                    <tbody>

                    {rows.map((row, index) => (
                        <tr key={index}>
                            {row.map((cell, index) => <td key={index}>{cell}</td>)}
                        </tr>
                    ))}
                                    

                    </tbody>
                </table>
            </div>
        </>
    )
    }catch(error){
        console.error(error.message);
        return <>{error.message}</>
    }
}
