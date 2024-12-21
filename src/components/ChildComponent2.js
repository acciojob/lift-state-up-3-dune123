import React from 'react'

const ChildComponent2 = (props) => {
  return (
    <div style={{backgroundColor:"yellow",width:"70vw",padding:"3vh",display:"flex",flexDirection:"column",gap:"2vh"}}>
    <h1>Child Component 2</h1>
    <button style={{width:"10vw",cursor:"pointer"}}  onClick={()=>props.setSelectedOption("Option 2")}>Option 2</button>
</div>
  )
}

export default ChildComponent2