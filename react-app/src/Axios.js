import Axios from 'axios';

export async function postMethod (values) {
    await Axios({
            method: "POST",
            url: "http://localhost:5000/add/createForm",
            data: values
            }) 
            .catch(error => {
                console.log('Error: '+ error)
            })
    }

export async function getMethod () {
    return Axios({
                method: "GET",
                url: "http://localhost:5000/add/createForm"
                })
                .catch((error) => console.log('Error: '+ error))
    }

