import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { endpoint } from './endpoint'
import { useNavigate, useParams } from 'react-router-dom'
import Form from './partials/Form'

const EditProducts = () => {

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e:any) => {
        e.preventDefault()
        const payload = {
            description: description,
            price: price,
            stock: stock
        }
        await axios.put(`${endpoint}/product/${id}`,
            payload)
            .then(res => {
                console.log(res.data);
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}/product/${id}`)
            console.log(response.data);
            setDescription(response.data.description)
            setPrice(response.data.price)
            setStock(response.data.stock)
        }
        getProductById()

    }, [])

    return (
        <div>
            <h3>editar Prductos</h3>
            <Form store={update} description={description} setDescription={setDescription}
                price={price} setPrice={setPrice} stock={stock} setStock={setStock} />
        </div>
    )

}
export default EditProducts