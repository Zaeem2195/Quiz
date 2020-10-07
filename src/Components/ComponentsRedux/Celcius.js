import React from 'react'

const Celcius = ({method,valueFar,valueCel,state}) => {
    const style={
        marginTop:"100px",
        height:'40px',
        fontSize:'30px'
    }

    const value=(state=='f' && valueFar!=='')?(valueFar-32)*(5/9):valueCel
  
    return (
        <div>
            <input style={style} placeholder='Enter temp in Celcius' onChange={method} value={value}/>
        </div>
    )
}

export default Celcius
