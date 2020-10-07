import React from 'react'

function ButtonToDo({item,method,method2}) {

    const style={
        height:'70px',
        fontSize:'25px',
        padding:'5px auto',
        width:'515px',
        marginTop:'20px',
        borderRadius:'20px',
        color:'white',
        fontWeight:'bold',
        fontFamily:'ariel',
        background:'red',
    }
    if(item.state===true){
        style.background='green'
    }

    return (
        <div>
            <button style={style} onClick={()=>method2(item.id)}>{item.task} {(item.state===true) ? <span style={{fontSize:'15px' }}>(Completed)</span> : <span style={{fontSize:'15px' }}>(Not Complete)</span>}</button>
            <button style={{
                        height:'40px',
                        fontSize:'20px',
                        padding:'5px auto',
                        width:'100px',
                        marginLeft:'20px',
                        borderRadius:'20px',
                        background:'#FFFF00',
                        border: '5px solid #008080',
                        fontWeight:'bold',
                        fontFamily:'ariel'
                    }}
                    onClick={()=>method(item.id)}>Delete</button>
            
        </div>
    )
}

export default ButtonToDo
