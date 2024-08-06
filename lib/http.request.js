import axios from 'axios'
export class ApiCall {
    constructor(url) {
        this.url = url
    }

    async getData(path) {
        try {
            const res = await axios.get(this.url + path)

            if (res.status !== 200) throw new Error('Something went wrong')

            return res.data
        } catch (e) {
            throw new Error(e.message)
        }
    }

    async postData(path, body) {
        try {
            const res = await axios.post(this.url + path, body)

            if (res.status !== 201) throw new Error('Something went wrong')

            return res.data
        } catch (e) {
            throw new Error(e.message)
        }
    }

}