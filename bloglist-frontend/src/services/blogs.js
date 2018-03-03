import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
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

const update = async (blog, id) => {
    const url = baseUrl + '/' + id
    const res = await axios.put(url, { blog })
    return res.data
}

export default {
    getAll,
    addNew,
    update
}