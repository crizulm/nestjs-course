import { Controller, Get, Param } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
  constructor(private dogService: DogService) {}

  @Get()
  findAll() {
    return this.dogService.findAll();
  }

  @Get(':dogId')
  findDog(@Param('dogId') dogId: string) {
    return this.dogService.find(dogId);
  }
}
