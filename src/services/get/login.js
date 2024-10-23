import httpsInstance from "../url";

export const getLoginData = async () => {
    const https = httpsInstance();
    const response = await https.get('/login');
    return response.data;
};
