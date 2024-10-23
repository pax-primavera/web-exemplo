import httpsInstance from "../url";

export const login = async (cpf, senha) => {
    const https = httpsInstance();
    //const response = await https.post('/login', cpf, senha);
    if (cpf === '012.345.678-90') {
        return true;
    } else {
        return false;
    }
};
