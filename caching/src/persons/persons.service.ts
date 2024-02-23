import { Injectable } from "@nestjs/common";
import { Person } from "./entities/person.entity";

@Injectable()
export class PersonsService {
    private persons: Person[] = [
        {
            id: 1,
            name: 'Kostet',
            age: 19
        },
        {
            id: 2,
            name: 'Makson',
            age: 19
        },
        {
            id: 3,
            name: 'Petya',
            age: 20
        },
        {
            id: 4,
            name: 'Vlados',
            age: 20
        }
    ]

    findAll(): Person[] {
        console.log('Find all in persons service')
        return this.persons
    }

    
}