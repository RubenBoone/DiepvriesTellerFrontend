import axios from 'axios';
require('dotenv').config();

const url = process.env.API_LINK;

class API
{
    static getAllPrograms()
    {
        return axios.get(url + "/programs")
    }

    static postProgram(program)
    {
       return axios.post(url + "/program", program);
    }

    static deleteProgram(id)
    {
        return axios.delete(url + "/program/" + id);
    }

    static getProductsByProgramId(programID)
    {
        return axios.get(url + "/product/" + programID);
    }

    static postProduct(product)
    {
        return axios.post(url + "/product", product);
    }

    static updateProductAmount(productId, amount)
    {
        return axios.put(url  + "/product/" + productId + "/" + amount);
    }
}

export default API;