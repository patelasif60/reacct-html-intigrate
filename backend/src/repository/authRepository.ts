import { User } from '../models/user';
interface Params {
    [key: string]: number | string;
}

export class AuthRepository {
    public async register(data: Params){
        
        const users = await User.create({
            firstname : data.firstname,
            lastname : data.lastname,
            email : data.email_id,
            mobile : data.mobile,
            password : data.password,
            user_token : 'judvbnbsdvbns',
            user_role_id : 2
        });
        return users;
    }
}