import axios from 'axios'
export class ApiCall {
    constructor(url, apikey) {
        this.url = url
        this.apikey = apikey || null
    }

    async getData(path , params) {
        try {
            const res = await axios.get(this.url + path, {
                headers: {
                    apikey: this.apikey
                },
                params: params
            })

            if (res.status !== 200) throw new Error('Something went wrong')
            return res.data
        } catch (e) {
            Toastify({
                text: e.message,
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #ff0000, #ff3333)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
            throw new Error(e.message)
        }
    }

    async postData(path, body) {
        try {
            const res = await axios.post(this.url + path, body)

            if (res.status !== 201) throw new Error('Something went wrong')
            Toastify({
                text: "Posted successfuly",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
            return res.data
        } catch (e) {
            Toastify({
                text: e.message,
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #ff0000, #ff3333)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
            throw new Error(e.message)
        }
    }

    async patchData(path, body) {
        try {
            const res = await axios.patch(this.url + path, body)

            if (res.status !== 200) throw new Error('Something went wrong');
            Toastify({
                text: "Patched successfuly",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
            return res.data
        } catch (e) {
            Toastify({
                text: e.message,
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #ff0000, #ff3333)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
            throw new Error(e.message);
        }
    }  

}