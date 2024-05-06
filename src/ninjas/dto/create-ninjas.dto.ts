import { IsEnum, MinLength} from 'class-validator'

export class CreateNinjaDto {
    @MinLength(3)
    name: string;

    @IsEnum(['fire', 'water'], { message: 'Use correct weapon!'})
    weapon: 'fire' | 'water'

}
