import React, { useState } from 'react'
import Product from './Product'
import { Link } from "react-router-dom";

export default function Welcom(props) {

    const [products, setProducts] = useState([
        { prodNum: 11122, prodName: 'green Box', needFork: false, inPlace: false },
        { prodNum: 22554, prodName: 'green Box', needFork: false, inPlace: false },
        { prodNum: 66698, prodName: 'blue Box', needFork: true, inPlace: false },
        { prodNum: 78544, prodName: 'red Box', needFork: false, inPlace: false },
        { prodNum: 69875, prodName: 'red Box', needFork: false, inPlace: false }
    ])

    const removeProdFromList = (index,needFork) => {
        if (needFork) {
            if (props.currentWorker.forkLift) {
                setProducts(products.filter((element, i) => (i !== index)));
            }
            else {
                alert('worker need forklift license!')
            }
        }
        else {
            setProducts(products.filter((element, i) => (i !== index)));
        }



    }

    const forkliftLicence = () => {
        if (props.currentWorker.forklift) {
            return 'yes'
        }
        else {
            return 'no'
        }
    }



    return (
        <div>

            <h1>Welcom {props.currentWorker.workerName}</h1>
            <h3>Details:</h3>
            <h3>Full name: {props.currentWorker.workerName}</h3>
            <h3>no. {props.currentWorker.workerNum}</h3>
            <h3>forklift truck license: {forkliftLicence()}</h3>
            <br />
            <h1>List of Products</h1>
            {products.map((e, index) => {
                return (
                    <div>
                        <Product removeProdFromList={removeProdFromList} index={index} key={index} obj={e} />

                    </div>
                )
            })}
            <br />
            <Link to={'/'}><button>Log Out</button></Link>



        </div>
    )
}
