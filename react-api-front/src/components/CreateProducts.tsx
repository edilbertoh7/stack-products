import React, { useState } from 'react'
import axios from 'axios'
import { endpoint } from './endpoint'
import { useNavigate } from 'react-router-dom'
import Form from './partials/Form'

const CreateProducts = () => {

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()

        const payload = {
            description: description,
            price: price,
            stock: stock
        }
        await axios.post(`${endpoint}/product`, 
        payload)
        .then(res => {
            console.log(res.data);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <div>
            <h3>Crear Prductos</h3>
            
            <Form store={store} description={description} setDescription={setDescription} 
            price={price} setPrice={setPrice} stock={stock} setStock={setStock} />
        </div>
    )
}

export default CreateProducts