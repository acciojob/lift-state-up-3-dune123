import React from 'react'

const ChildComponent1 = (props) => {
  return (
    <div style={{backgroundColor:"brown",width:"70vw",padding:"3vh",display:"flex",flexDirection:"column",gap:"2vh"}}>
        <h1>Child Component 1</h1>
        <button style={{width:"10vw",cursor:"pointer"}} onClick={()=>props.setSelectedOption("Option 1")}>Option 1</button>
    </div>
  )
}

export default ChildComponent1