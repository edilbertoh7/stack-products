import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { endpoint } from './endpoint'

const ShowProducts = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
    }, [])


    const getAllProducts = async () => {
        

        await axios.get(`${endpoint}/products`)
            .then(res => {
              //  console.log(res.data);
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    }

    const deleteProduct = async (id:number) => {
        const ok = await axios.delete(`${endpoint}/product/${id}`)
        getAllProducts()
    }
    return (
        <>
            <div className='d-grid gap-2'>
                <Link to='/create' className='btn btn-primary' type='button'>create</Link>

                <table className='table table-striped'>
                    <thead className='bg-primary text-white'>
                        <tr>
                            <th>ID</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Stock</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product:any) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Link to={`/edit/${product.id}`} className='btn btn-warning'>Edit</Link>
                                    <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        </>
    )
}

export default ShowProducts