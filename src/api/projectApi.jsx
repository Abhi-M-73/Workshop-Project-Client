import axiosInstance from "../utils/axiosInstance";


export const createProject = async (projectName) => {
    try {
        const response = await axiosInstance.post('/create', { projectName });
        return response.data;
    } catch (error) {
        console.log(error.response?.data?.message || error.message);
        throw error;
    }
}

export const getAllProjects = async () => {
    try {
        const response = await axiosInstance.get('/all');
        return response.data;
    } catch (error) {
        console.log(error.response?.data?.message || error.message);
        throw error;
    }
}