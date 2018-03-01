import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const addNew = async (blog, user) => {
    const config = {
        headers: {
            'authorization': 'bearer ' + user.token 
        }
    }
    const res = await axios.post(baseUrl, { blog }, config)
    return res.data
}

export default {
    getAll,
    addNew
}