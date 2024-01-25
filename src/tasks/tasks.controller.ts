import { Body, Controller,Delete,Get, Param, Patch, Post, Put} from '@nestjs/common';
import { get } from 'http';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService){}

    @Get()
    getAllTasks(){
        return this.taskService.getAllTasks();
    }

    @Post()
    createTasks(@Body() newTasks: CreateTaskDto){
     return  this.taskService.createTasks(newTasks.title, newTasks.description);
    }

    @Delete(':id')
    deleteTasks(@Param('id') id: string){
        this.taskService.deleteTasks(id);
    }

    @Patch(':id')
    updateTasks(@Param('id') id: string, @Body() updateFields: UpdateTaskDto){
        return this.taskService.updateTasks(id, updateFields)
    }
}
