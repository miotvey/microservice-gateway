import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ValidateResponse } from '../shared/validator';

export class CreateTournamentResponse {
  @IsString()
  @ApiProperty({
    description: 'Uniq id for tournament',
  })
  id: string;

  @IsString()
  @ApiProperty({
    description: 'Uniq id for tournament',
  })
  name: string;

  @IsString()
  @ApiProperty({
    description: 'tournament name',
  })
  type: string;

  @IsString()
  @ApiProperty({
    description: 'tournament name',
  })
  gameList: number[];

  @IsString()
  @ApiProperty({
    description: 'tournament name',
  })
  prizePool: number[];

  @IsString()
  @ApiProperty({
    description: 'tournament name',
  })
  status: number;

  @IsString()
  @ApiProperty({
    description: 'tournament name',
  })
  image: string;

  @IsString()
  @ApiProperty({
    description: 'tournament name',
  })
  startDate: Date;

  @IsString()
  @ApiProperty({
    description: 'tournament name',
  })
  endDate: Date;
}

export class ValidateCreateTournamentResponse extends ValidateResponse {
  public static schema = CreateTournamentResponse;
}
