import React from 'react'

const Form = ( props:any  ) => {
  const {store,description,setDescription,price,setPrice,stock,setStock} = props

  
  return (
    <>
    <form onSubmit={store}>
                <div className='mb-3'>
                    <label htmlFor='description' className='form-label'>Descripción</label>
                    <input type='text' className='form-control' id='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='price' className='form-label'>Precio</label>
                    <input type='text' className='form-control' id='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='stock' className='form-label'>Stock</label>
                    <input type='text' className='form-control' id='stock' value={stock} onChange={(e) => setStock(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
    </>
  )
}

export default Form