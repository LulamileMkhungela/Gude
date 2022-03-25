import axios from "axios";

const post = async (url,data) => {
    return axios({
        url: url,
        method: 'POST',
        data : data
    });
}

export default post;