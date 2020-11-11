import axios from "axios";

const instance = axios.create({
    baseURL:
        "https://us-central1-clone-c18a0.cloudfunctions.net/api"
    // 'http://localhost:5001/clone-c18a0/us-central1/api'
});

export default instance;