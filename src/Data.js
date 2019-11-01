import React,{useState,useEffect} from "react";
import axios from "axios";
 const Data=()=>{
     const[Name,setName]=useState('');
     const[Num,setNum]=useState(+91 );
     const[Nick,setNick]=useState('');
    //  const[Pic,setPic]=useState();
     const[Print,setPrint]=useState([]);
     
     const getName=(data)=>{
         setName(data.target.value);
     }
useEffect(()=>{
     fun();
    },[])

const fun=()=> {
    axios.get("http://localhost:7070/data").then(result=>{
        setPrint(result.data)
})
} 
 const getNum=(data)=>{
         setNum(data.target.value);

     }
     const getMail=(data)=>{
         setNick(data.target.value);

      }
   
    var abs={
        Name,Num,Nick
    }
    
     const putValue=(a)=>{
        axios.post("http://localhost:7070/data",{name:Name ,num:Num,nick:Nick}).then(res=>{
            fun();
if(res.State===200 && res.Text==="OK")
{ 
   
    if(Name='')
    {
        alert("Fill empy text");
    }
    else{
       
    setPrint([...Print,res.data])
    setName("");
    setNum("");
    setNick("");
    console.log(res)
    }
}
})
     }
     const del=(e)=>{
         axios.delete("http://localhost:7070/data/"+e).then(succes=>{
             fun();
            

            if(succes.State===200 && succes.Text==="OK"){
             setPrint(Print.filter(i=>i.id !== e));
            }
         })
     }
     const update=(u,name,num,nick)=>{
         const upName=prompt("Enter Name",name);
         const upNum=prompt("Enter Number",num);
         const upNick=prompt("ENter NickName",nick);
         axios.put("http://localhost:7070/data/"+u,{name:upName,num:upNum,nick:upNick}).then(succes=>{
         fun()
         setPrint([...Print,succes.data]);
     }
         )
     }



     return(
     <div className="container-fluid">
        <h1 className="text-decoration-none text-white bg-dark col-sm"  align="center">Contact List</h1>
         <p className="progress-bar col-sm-4">Name:<input id="name" type="text" className="form-control " value={Name} onChange={getName}></input></p>
         <p className="progress-bar col-sm-4">Mobile Number:<input id="age" type="Number" className="form-control" value={Num} onChange={getNum}></input></p>
         <p className="progress-bar col-sm-4">Nick Name:<input id="mail" type="text" className="form-control" value={Nick}onChange={getMail}></input></p>
           <input type="button" id="submit" className="btn btn-primary" onClick={()=>{putValue(abs)}} value="Post"></input> 
            {
                Print.map(i=>{
                    return(<div>
                        <ul key={i.id}>
                    <li className="list-group-item-primary col-sm-4" >Contact Name: {i.name}</li>
                    <li  className="list-group-item-primary col-sm-4" >Mobile_Number: {i.num}</li>
                    <li  className="list-group-item-primary col-sm-4" >Pet@Name: {i.nick}</li>
                    </ul>
                    <button onClick={del.bind(this,i.id)}>Delete</button>
                    <button onClick={update.bind(this,i.id,i.name,i.num,i.nick)}>update</button>
                    
                    </div>)
                })
            
            }
         

         
     </div>
     )
 }
 export default Data;