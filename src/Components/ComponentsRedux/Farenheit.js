import React from 'react'

const Farenheit = ({method,valueCel,valueFar,state}) => {

    const style={
        marginTop:"20px",
        height:'40px',
        fontSize:'30px'
    }
    const values=(state=='c' && valueCel!=='')? valueCel*(9/5)+32 : valueFar
    return (
        <div>
            <input style={style}  placeholder='Enter temp in Fareheit' onChange={method} value={values}/>
        </div>
    )
}

export default Farenheit
