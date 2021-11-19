import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { isEqual } from 'lodash';
import {Item} from "./item"
function App() {
	const [variation, setVariation] = useState([])
    const [productOption, setProductOption] = useState([])
const loopOver = (originalArray,arr, str = '', final = []) => {
		if(originalArray.length>0){
			let newarr=[]
			originalArray.map((v,i)=>{
				newarr.push(v.values)
			})
			
			loopOver([],newarr,str,final)
		}
		else{
		if (arr.length > 1) {
			// console.log(1);
		
		arr[0].forEach((v,i) => 
		{
			let newstr={name:null,indexes:[i],values:[v]}
			
			if(str){
				  if(str.indexes.length>1){
					str.indexes.pop()
				  }
				  if(str.values.length>1){
					str.values.pop()
				  }
				str.indexes.push(i)
				str.values.push(v)
				newstr.indexes=str.indexes
				newstr.values=str.values
				newstr.name=str.name + `${v}-`
			}else{
				newstr.name=str + `${v}-`
				newstr.indexes=[i]
				newstr.values=[v]
			}
			// console.log('newstr',newstr);
			loopOver([],arr.slice(1), newstr, final)
		}
		)
	  } else {
		//    console.log(2);
		arr[0].forEach((v,i) => {
			let newindexes=[]
		let newValues=[]
		if(str){
		 newindexes=str.indexes
		 newValues=str.values
		}
		// console.log('aaaa');
		const a=newindexes.concat(i)
		const b=newValues.concat(v)
		final.push({
			name:str ?str.name +v :v,
			indexes:a,
			values:b
		})
		})
		//  console.log("aa",final);
	  }
	}
	  return final
	}


const setTempData=(listData)=>{
	  listData.map((v,i)=>{
	  // tim giá trị đấy return về rồi gán lại   
    var value = productOption.find((el)=>isEqual(el.indexes,v.indexes) && el.name===v.name)
	if(value){
		//console.log('moe',productOption[indexOf]);
		listData[i]=value
	}
return null
  })
  return listData;
}
const handleChangeVariation=(value,index, childIndex)=>{
    if(childIndex==null){
		variation[index]=variation[index]? variation[index]:{}
		variation[index].name=value
		variation[index].values=[]
	}else{
		if(!value){
			const filter=variation[index].values.filter((e,i)=> i !==childIndex)
			variation[index].values=filter
		
		}else{
		variation[index].values[childIndex]=value
		}

		let listProductOption=loopOver(variation,[])
	
		listProductOption=setTempData(listProductOption)
		
	   setProductOption(listProductOption)
	console.log(listProductOption);
	}
 
	
	setVariation(variation)
	
}

const handlechangeInfor=(index,value,key)=>{
productOption[index][key]=value
// console.log(index,value);
// console.log(productOption);
setProductOption(productOption)

}

function revert(listData){
	let orginial_array=[]
listData.map((v,i)=>{
	v.values.map((value,i)=>{
		//console.log(value);
		if(!orginial_array[i]){
			orginial_array[i]=[]
		}
		orginial_array[i][v.indexes[i]]=(value)
	})
	//console.log(orginial_array);
})
return orginial_array
}
const handleRemove=(i)=>{
let newProductOption =productOption.filter((x,index)=>i !== index)
let array=revert(newProductOption)
console.log(array);
array.map((v,i)=>{
	variation[i].values=v
})
setVariation(variation)
setProductOption(newProductOption)
}
  return (
    <div className="App">
		<div className="form">

		
       <form>
    <label for="email">tên  </label>
    <input type="text" name="email" placeholder="tên" autofocus/>
	<br/>
	<label for="sku">sku  </label>
    <input type="text" name="sku" placeholder="sku" />
	<div>

	<input type="text" name="sku" placeholder="tên thuộc tính 1" onChange={(e)=>handleChangeVariation(e.target.value,0,null)}/>
	<input type="text" name="sku" placeholder="tên" value={variation[0] && variation[0].values[0]?variation[0].values[0]:""} onChange={(e)=>handleChangeVariation(e.target.value,0,0)} />
	<input type="text" name="sku" placeholder="tên" value={variation[0] && variation[0].values[1]?variation[0].values[1]:""} onChange={(e)=>handleChangeVariation(e.target.value,0,1)} />
	<input type="text" name="sku" placeholder="tên" value={variation[0] && variation[0].values[2]?variation[0].values[2]:""} onChange={(e)=>handleChangeVariation(e.target.value,0,2)} />
	<input type="text" name="sku" placeholder="tên" value={variation[0] && variation[0].values[3]?variation[0].values[3]:""} onChange={(e)=>handleChangeVariation(e.target.value,0,3)}  />
	</div>

	<div>
	<input type="text" name="sku" placeholder="tên thuộc tính 1" onChange={(e)=>handleChangeVariation(e.target.value,1,null)}/>
	<input type="text" name="sku" placeholder="tên"  value={variation[1] && variation[1].values[0]?variation[1].values[0]:""} onChange={(e)=>handleChangeVariation(e.target.value,1,0)} />
	<input type="text" name="sku" placeholder="tên"  value={variation[1] && variation[1].values[1]?variation[1].values[1]:""}  onChange={(e)=>handleChangeVariation(e.target.value,1,1)} />
	<input type="text" name="sku" placeholder="tên" value={variation[1] && variation[1].values[2]?variation[1].values[2]:""}  onChange={(e)=>handleChangeVariation(e.target.value,1,2)} />
	<input type="text" name="sku" placeholder="tên" value={variation[1] && variation[1].values[3]?variation[1].values[3]:""} onChange={(e)=>handleChangeVariation(e.target.value,1,3)}  />
	</div>

	<div>
	<input type="text" name="sku" placeholder="tên thuộc tính 1" onChange={(e)=>handleChangeVariation(e.target.value,2,null)}/>
	<input type="text" name="sku" placeholder="tên" onChange={(e)=>handleChangeVariation(e.target.value,2,0)} />
	<input type="text" name="sku" placeholder="tên"  onChange={(e)=>handleChangeVariation(e.target.value,2,1)} />
	<input type="text" name="sku" placeholder="tên" onChange={(e)=>handleChangeVariation(e.target.value,2,2)} />
	<input type="text" name="sku" placeholder="tên"onChange={(e)=>handleChangeVariation(e.target.value,2,3)}  />
	</div>
</form>
</div>
<div className="productOption" >
<table>
  <tr>
    <th>name</th>
    <th>sku</th>
    <th>delete</th>
  </tr>
  {
productOption.length>0  &&
productOption.map((v,i)=>{
	return (
		<Item data={v} key={i} handlechangeInfor={handlechangeInfor} handleRemove={handleRemove} index={i} productOption={productOption}/>
// 	<tr>
//     <td>{v.name}</td>
//     <td >
// 		<input type="text"  value={v.sku} onChange={(e)=>handlechangeInfor(i,e.target.value,'sku')} />
// 	</td>
//     <td><button onClick={()=>handleRemove(i)}>remove</button></td>
//   </tr>
	)
})
	}
</table>
	
</div>
    </div>
  );
}

export default App;
