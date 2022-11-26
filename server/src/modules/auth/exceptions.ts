import { BadRequestException } from '@nestjs/common';

export class AlreadyExistUserExeption extends BadRequestException {}
export class IncorrectPasswordException extends BadRequestException {}
