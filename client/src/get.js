import axios from "axios";

const get = async (url) => {
    return axios({
        url: url,
        method: 'GET',
    });
}

export default get;