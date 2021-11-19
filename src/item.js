import React,{useState,useEffect,useRef} from 'react'

export const Item = ({data,handlechangeInfor,handleRemove,index,productOption}) => {
	const [data1, setData] = useState({name:'',sku:''})
	const [status, setstatus] = useState(false)
	const [check, setcheck] = useState(false)
	const handleChangeValue=(index,value,term)=>{
		setData({...data,sku:value})
		handlechangeInfor(index,value,term)
	}
	function setAgainData(){
		// console.log(data);
		setData(data)
	}
	
	useEffect(() => {
		setAgainData()	
			//setstatus(!status)
	})
	return (
		<tr>
    <td>{ data1 &&data1.name}</td>
    <td >
  <input type="text"   value={data1.sku?data1.sku : ''} onChange={(e)=>handleChangeValue(index,e.target.value,'sku')} />
	</td>
	{/* <td >
	<button onClick={()=>setData({...data,sku:111})}>change</button>
	</td> */}
    <td><button onClick={()=>handleRemove(index)}>remove</button></td>
  </tr>
	)
}
