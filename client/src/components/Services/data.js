import * as service from '../Services/voucherService';

const host = 'http://localhost:5000';
// const host = 'https://server-massages.herokuapp.com';
service.settings.host = host;

export const login = service.login;
// export const register = service.register;
export const logout = service.logout;


export async function getAll(){
    let vouchers = await service.get(host + '/vouchers');
    let result = Object.values(vouchers);
    return result;
};

export async function getOneVoucher(id){
    let result = await service.get(host + `/vouchers/${id}`);
    return result;
};

export async function editVoucher(id, data){
    const response = await service.put(host + `/vouchers/${id}`, data);
    return response;
};


