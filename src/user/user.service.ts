import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/createUserDto';

@Injectable()
export class UserService {

    findOne(id: string) {
        return ({
            id: id,
        })
    }

    create(createUserDto: CreateUserDto) {
        return 'This user is created';
    }
}
