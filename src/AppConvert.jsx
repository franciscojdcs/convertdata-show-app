import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TableObj } from './components/tableobj'

export const AppConvert = () => {
  const initState ="[{ \"es\": \"Hola\", \"en\": 5}]";
  const [myData, setMyData] = useState(initState);
  const [myFinal, setMyFinal] = useState();


  useEffect(() => {

    const jsonData = JSON.parse(myData);
  
    setMyFinal(jsonData);
  }, []);

  const onConvert =() =>{
    
    const jsonData = JSON.parse(myData);
    setMyFinal(jsonData);
    console.log(jsonData);

  }



  return (
    <>
      
      <div>
          <nav className="navbar sticky-top bg-body-tertiary">
              <div className="container-fluid ">
                <div className="container text-center">
                    <div className='col'>
                      <a className="navbar-brand" href="#"> <h1>Convert json to table</h1></a>
                    </div>
                    <div className='col'>
                      <div className="card">
                        <textarea rows="5 " name="dataAdapt" defaultValue={myData} onChange={e => setMyData(e.target.value)}  />
                      </div>
                    </div>
                    <div className='col'>
                      <button className='btn btn-success m-1' onClick= {onConvert }>
                        convert
                      </button>
                    </div>

                </div>
              </div>
          </nav>
          <hr/>

        <div className='row'>
          <div className='col'>
            <TableObj key={"t1"} jsonData={myFinal} />              
          </div>
        </div>
      </div>
      


        <hr/>
        

      <p className="read-the-docs">
        https://github.com/franciscojdcs
      </p>
    </>
  )
}


