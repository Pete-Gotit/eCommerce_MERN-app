import axios from "axios";

const instance=axios.create({
    baseurl:'http://localhost:8080'
}) 

export default instance;

