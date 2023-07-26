import { AuthRepository } from '../repository/authRepository';
interface Params {
    [key: string]: number | string;
}

export class AuthService {
  private authRepository: AuthRepository;

  public constructor() {
    this.authRepository = new AuthRepository();
  }
  public async register(data : Params){
    const users = await this.authRepository.register(data);
    return users;
  }
}