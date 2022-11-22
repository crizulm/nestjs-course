import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  findAll(): any {
    return 'findAll is working well !';
  }

  find(dogId: string) {
    return `find is working, and the dogId parameter is ${dogId}`;
  }
}
