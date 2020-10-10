import React, { useState } from 'react';
import './Dashboard.css'
import {db} from '../firebase/firebase'
import { useStateValue } from '../context/StateProvider';

function Dashboard(props) {

    const [{ products }, dispatch] = useStateValue()

    const [id, setId] = useState('')
    const [upId, setUpId] = useState('')
    const [upQuantity, setUpQuantity] = useState(null)
    const [quantity, setQuantity] = useState(null)
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState(null)
    const [rating, setRating] = useState(null)

    const clearForm = () => {
        setId('')
        setUpId('')
        setUpQuantity(null)
        setQuantity(null)
        setName('')
        setImage('')
        setPrice(null)
        setRating(null)
    }

    const addProduct = (e) => {
        e.preventDefault()
        db.collection("products").doc(id).set({
            name,
            QOH: quantity,
            img: image,
            price,
            rating,
        }).then(() => {
            console.log("document written")
            clearForm()
        })
        .catch(error => alert(error))
        
    }

    const updateQuantity = (e) => {
        e.preventDefault()
        db.collection("products").doc(upId).set({
            QOH: upQuantity
        }, {merge: true})
        .then(() => {
            console.log("QOH Updated")
            clearForm()
        })
        .catch(error => alert(error))
    } 
    return (
        <div className="dashboard">
            <form 
            className="dashboard__addForm"
            action="Add Product">
                <h3>Add Product to Database</h3>
                <div className="dashbord__input">
                <h5>Product Id:</h5>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <div className="dashbord__input">
                <h5>Quantity on hand:</h5>
                <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                </div>
                <div className="dashbord__input">
                <h5>Name:</h5>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="dashbord__input">
                <h5>Image:</h5>
                <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
                </div>
                <div className="dashbord__input">
                <h5>Price:</h5>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div className="dashbord__input">
                <h5>Rating:</h5>
                <input type="number" value={rating} onChange={(e) => setRating(e.target.value)}/>
                </div>
                <button type="submit" onClick={addProduct}>Add Product</button>
            </form>
            <form
            className="dashboard__modifyForm" 
            action="Modify Inventory">
                <h3>Modify Quantity on hand</h3>
                <div className="dashbord__input">
                <h5>Product Id:</h5>
                <input type="text" value={upId} onChange={(e) => setUpId(e.target.value)}/>
                </div>
                <div className="dashbord__input">
                <h5>New QOH:</h5>
                <input type="number" value={upQuantity} onChange={(e) => setUpQuantity(e.target.value)}/>
                </div>
                <button type="submit" onClick={updateQuantity}>Update Quantity</button>
            </form>
            <div className="dashboard__inventory">
                {
                    products?.map(product => 
                         (
                            <div 
                            key={product.id}
                            calssName="dashboard__product">
                                <h4>{product.name}</h4>
                                <p>{product.id}</p>
                                <p>{product.QOH}</p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Dashboard;