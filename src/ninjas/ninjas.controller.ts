import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninjas.dto';
import { UpdateNinjaDto } from './dto/update-ninjas.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
export class NinjasController {
    constructor(private readonly ninjasService: NinjasService){}
// GET /ninjas  --> []
@Get()
getNinjas(@Query('weapon') weapon: 'fire' | 'water' ){
    //const service = new NinjasService();
return this.ninjasService.getNinjas(weapon);
}
// GET / ninjas/:id { ... }
@Get (':id')
getOneNinja(@Param('id', ParseIntPipe) id: number){
    try {
        return this.ninjasService.getNinja(id); // pipes are used to transform or validate data
    } catch (error) {
        throw new NotFoundException(); 
    }
}
// POST / ninjas 
@Post ()
@UseGuards(BeltGuard)
createNinja(@Body( new ValidationPipe()) createNinjaDto: CreateNinjaDto ){
    return this.ninjasService.createNinja(createNinjaDto);
}
// PUT / ninjas/:id { ... }
@Put (':id')
updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto){
    return this.ninjasService.updateNinja(+id, updateNinjaDto);
}
// DELETE /ninjas/:id
@Delete (':id')
removeNinja(@Param('id') id: string) {
    return this.ninjasService.removeNinja(+id);
}
}
