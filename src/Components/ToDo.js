import React ,{useState} from 'react'
import ButtonToDo from './ButtonToDo'

function ToDo() {


    const [item, setItem] = useState({})
    const [array, setArray] = useState([])
    const [ID, setID] = useState(0)
    const [error, setError] = useState(false)
    const [deleteState, setDeleteState] = useState(false)
    const [deletedItem, setDeletedItem] = useState({})
    const [value, setValue] = useState('')
    const [summaryState, setSummaryState] = useState(false)
    const [completedTask, setCompletedTask] = useState(0)
    const [activeTask, setActiveTask] = useState(0)

    function inputHandler (e) {
        setError(false)
        setID(ID+1)
        setValue(e.target.value)
        setItem({
            task:e.target.value,
            id:ID+1,
            state:false
        })
        setSummaryState(false)
    }
        
    
    function add () { 
        if (value===''){
            setError(true) 
            setTimeout(()=>setError(false),1500)   
        }  
        else{
            setArray([item,...array])
            setDeleteState(false)
            setError(false)
            setValue('')      
        }  
        setSummaryState(false)
    }
    

    function deleted (key) {
        const arr=array.filter(el=>el.id!==key)
        const arr2=array.filter(el=>el.id===key)
        setArray(arr)
        setDeletedItem(...arr2)
        setDeleteState(true)
        setError(false) 
    }

    function statusChange (key) {
        const arr=array.map(el=>{
            if(el.id===key){
                el.state=!el.state
            }
            return el
        })
        setArray(arr)
    }

    function undoDelete () {
        const arr=[deletedItem,...array]
        setArray(arr)
        setDeleteState(false)
        setError(false)
        setSummaryState(false)
    }

    function clearAll () {
        setArray([])
        setError(false)
    }
    function summary () {
        setSummaryState(true)
        let activeTask=array.length
        let completedTask=0;
        array.forEach(el=>{
            if (el.state===true){
                completedTask++
            }
        })
        setCompletedTask(completedTask)
        setActiveTask(activeTask)
        setError(false)
    }
    function disableSummary () {
        setSummaryState(false)
    }
    const list = array.map(el=><ButtonToDo  key={el.id} 
                                            item={el}
                                            method={deleted} 
                                            method2={statusChange}/>)

    return (
 
        <div>
            <input  style={{
                        height:'50px',
                        width:'700px',
                        fontSize:'25px',
                        paddingTop:"5px",
                        borderRadius:'20px',
                        background:"#40E0D0",
                        border: '10px solid #008080',
                        color:"#2F4F4F",
                        fontWeight:'bold',
                        fontFamily:'ariel',
                        margin:'none',
                        marginTop:'70px'
                    }}
                    value={value}
                    type='text'    
                    placeholder="Enter Todo Item"
                    onChange={inputHandler}/>
            <button style={{
                        height:'40px',
                        fontSize:'20px',
                        padding:'5px auto',
                        width:'100px',
                        marginLeft:'10px',
                        borderRadius:'20px',
                        background:"yellow",
                        border: '5px solid #008080',
                        fontWeight:'bold',
                        fontFamily:'ariel',
                    }}
                    onClick={add}>Add</button>
            <button  style={{
                        height:'40px',
                        fontSize:'20px',
                        padding:'5px auto',
                        width:'100px',
                        marginLeft:'10px',
                        borderRadius:'20px',
                        background:"yellow",
                        border: '5px solid #008080',
                        fontWeight:'bold',
                        fontFamily:'ariel'
                    }}
                    onClick={clearAll}>Clear all</button>
                     <button  style={{
                        height:'40px',
                        fontSize:'20px',
                        padding:'5px auto',
                        width:'100px',
                        marginLeft:'10px',
                        borderRadius:'20px',
                        background:"yellow",
                        border: '5px solid #008080',
                        fontWeight:'bold',
                        fontFamily:'ariel'
                    }}
                    onClick={summary}>Summary</button>
            {(summaryState===true) ? <div style={{
                        color:'#191970',
                        fontSize:'25px',
                        fontWeight:'bold',
                        padding:'10px',
                        marginRight:'400px',
                        marginTop:'30px',
                        marginLeft:'400px',
                        fontFamily:'ariel',
                        background:'orange',
                        border: '5px solid #008080'
            }}><div> Total Activities : {activeTask}</div><div> Completed tasks : {completedTask} </div><div> Incomplete Tasks : {activeTask-completedTask} </div><div><button style={{
                        height:'40px',
                        fontSize:'20px',
                        width:'100px',
                        marginLeft:'10px',
                        marginTop:"20px",
                        marginBottom:'20px',
                        borderRadius:'20px',
                        background:"yellow",
                        border: '5px solid #008080',
                        fontWeight:'bold',
                        fontFamily:'ariel'
            }} onClick={disableSummary}>ok</button></div></div> :
            <div>{list} </div>}
            {(error===true) && <div style={{
                         color:'#191970',
                         fontSize:'25px',
                         fontWeight:'bold',
                         paddingTop:'20px',
                         paddingBottom:'20px',
                         marginRight:'400px',
                         marginTop:'30px',
                         marginLeft:'400px',
                         fontFamily:'ariel',
                         background:'orange',
                         border: '5px solid #008080'
            }}>Can't Add Blank Item</div>}
            {(deleteState===true) && <div> <button style={{
                        height:'40px',
                        fontSize:'20px',
                        padding:'5px auto',
                        width:'100px',
                        marginRight:'100px',
                        borderRadius:'20px',
                        background:'#FFFF00',
                        border: '5px solid #008080',
                        fontWeight:'bold',
                        fontFamily:'ariel',
                        marginTop:'30px'

            }}onClick={undoDelete}>Undo</button></div>}
        </div>
    )
} 

export default ToDo
