import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninjas.dto';
import { UpdateNinjaDto } from './dto/update-ninjas.dto';

@Injectable()
export class NinjasService {
    private ninjas = [
        { id: 0, name: 'Success', weapon: 'fire'},
        { id: 1, name: 'tobias', weapon: 'water'},
    ];

    getNinjas(weapon?: 'fire' | 'water'){
        if(weapon){
            return this.ninjas.filter((ninja) => ninja.weapon === weapon);
        }

        return this.ninjas
    }

    getNinja(id : number){
        const ninja = this.ninjas.find((ninja) => ninja.id === id);

        if(!ninja){
            throw new Error('Ninja not found')
        }
        return ninja
    }

    createNinja(createNinjaDto: CreateNinjaDto){
        const newNinja = {
            ...createNinjaDto,
            id: Date.now()
        };
        this.ninjas.push(newNinja);

        return newNinja;
    }

    updateNinja(id: number, updateNinjaDto: UpdateNinjaDto){
        this.ninjas = this.ninjas.map((ninja) => {
            if(ninja.id === id){
                return { ...ninja, ...updateNinjaDto };
            }

            return ninja;
        })
    }

    removeNinja(id: number){
        const toBeRemoved = this.getNinja(id);

        this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);

        return toBeRemoved
    }
}
