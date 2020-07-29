import React from 'react'

export default function Product(props) {

let needForkLift = ()=>{
    if (props.obj.needFork) {
        return 'yes'
    }
    else{
        return 'no'
    }
}



    return (
        <div>
            <h3>
            No. {props.obj.prodNum}
            <br/>
            name: {props.obj.prodName}
            <br/>
            need forklift truck: {needForkLift()}
            <br/>
            <button onClick={()=>{props.removeProdFromList(props.index, props.obj.needFork,)}}>update</button>

            </h3>
        </div>
    )
}
