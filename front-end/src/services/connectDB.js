import { baseURL } from '../utilities/constant'

export async function getProducts (stopLoading) {
  try {
    const response = await fetch(`${baseURL}/product/`, {
      method: 'GET'

    })
    const { result } = await response.json()
    stopLoading()
    return await result
  } catch (err) {
    console.error(err)
    throw new Error('Error al obtener los productos: ', err)
  } finally {
    stopLoading()
  }
}

export async function filterProducts (category, stopLoading) {
  try {
    const response = await fetch(`${baseURL}/product/filter-product?category=${category}`, {
      method: 'GET'
    })
    const { products } = await response.json()
    stopLoading()
    return await products
  } catch (err) {
    console.error(err)
    throw new Error('Error al filtrar los productos: ', err)
  } finally {
    stopLoading()
  }
}

export async function getOrders () {
  try {
    const response = await fetch(`${baseURL}/orders/`, {
      method: 'GET',
      credentials: 'include'
    })
    const result = await response.json()
    return await result
  } catch (err) {
    throw new Error('Error al obtener las ordenes: ', err)
  }
}
