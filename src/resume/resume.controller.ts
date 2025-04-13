import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreateResumeDto } from './create-resume.dto';
import { UpdateResumeDto } from './update-resume.dto';
import { timeStamp } from 'console';

@Controller('resumes')
export class ResumeController {
    constructor(private readonly resumeService: ResumeService){}

    @Post()
    create(@Body() dto: CreateResumeDto) {
        return this.resumeService.create(dto);
    }

    @Get()
    findAll(){
        return this.resumeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.resumeService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateResumeDto) {
        return this.resumeService.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.resumeService.remove(+id);
    }

}
