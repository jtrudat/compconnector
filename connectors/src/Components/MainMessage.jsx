import { useState } from 'react'


export let MainMessage = (props)=>{



let [mention, setMention] = useState('bear')

let onChangeHandler = (evt)=>{
     
    setMention(evt.target.value)
    
    console.log(evt.target.value)
    console.log(mention)
     
     
}

let submitHandler = (evt)=>{
    evt.preventDefault();
    let newWord = mention
    props.onDateChangeUp(newWord)
    console.log(newWord)
    
}

let StatusHandler = ()=>{
    console.log(mention)
    
}
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type='date' onChange={onChangeHandler}></input>
                <button type='submit'>change the date</button>
            </form>
            <button onClick={StatusHandler}>status</button>
        </div>
    )
}