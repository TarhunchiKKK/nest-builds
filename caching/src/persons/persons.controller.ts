import { Controller, Get, Inject } from "@nestjs/common";
import { PersonsService } from "./persons.service";
import { Person } from "./entities/person.entity";
import { CACHE_MANAGER } from "@nestjs/cache-manager";
import { Cache } from 'cache-manager'

@Controller('persons')
export class PersonsController {
    constructor(
        private readonly personsService: PersonsService,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
    ) {}

    @Get()
    async findAll(): Promise<Person[]> {
        let persons: Person[] = await this.cacheManager.get('all')
        if (!persons) {
            persons = this.personsService.findAll()
            await this.cacheManager.set('all', persons, 0)
            return persons
        }
        return persons
    }
}