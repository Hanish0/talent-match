import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateResumeDto } from './create-resume.dto';
import { UpdateResumeDto } from './update-resume.dto';

@Injectable()
export class ResumeService {
    private prisma = new PrismaClient();

    create (data: CreateResumeDto) {
        return this.prisma.resume.create({ data });
    }

    findAll(){
        return this.prisma.resume.findMany();
    }

    findOne(id: number) {
        return this.prisma.resume.findUnique({ where: {id}});
    }

    update(id: number, data: UpdateResumeDto){
        return this.prisma.resume.update({ where: {id}, data});
    }

    remove(id: number){
        return this.prisma.resume.delete({ where: {id}});
    }
}
