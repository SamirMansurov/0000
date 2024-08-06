import { ApiCall } from "../../lib/http.request";

const form = document.forms.namedItem('registration-form')

const apiCall = new ApiCall("http://localhost:8080")

form.onsubmit = async (e) => {
    e.preventDefault();

    const fm = new FormData(e.target)

    const user = {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    fm.forEach((val, key) => user[key] = val)

    const users = await apiCall.getData('/users?email=' + user.email)

    if(users.length > 0) {
        alert('User already registered!')
        return
    }

    const res = await apiCall.postData('/users', user)

    if(res.status === 201) {
        form.reset()
        location.assign('/pages/signin/')   
    }
}