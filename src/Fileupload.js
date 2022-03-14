import React from 'react'

function Fileupload() {

    const handleOnchange=(e)=>{
        let file=e.target.files
        console.log(file)

        let reader=new FileReader()
        reader.readAsDataURL(file[0])
       
        reader.onload=(e)=>{
            console.log("result",e.target.result);
        }
    }
  return (
    <div>
        <div style={{margin:"20% 40%",padding:"50px",border:"1px solid black",borderRadius:"6px"}}>
        <input style={{marginBottom:"30px"}} type="file" id="myFile" name="filename" onChange={(e)=>handleOnchange(e)}/><br></br>
         <input type="submit"/>
        </div>
       
    </div>
  )
}

export default Fileupload