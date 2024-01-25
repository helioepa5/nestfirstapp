import { Injectable } from '@nestjs/common';
import { Tasks,TaskStatus } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasks: Tasks[] = [{
        id: '1',
        title: 'first task',
        description: 'some task',
        status: TaskStatus.PENDING,
    }];

    getAllTasks(){
        return this.tasks;
    }

    createTasks(title: string, description: string){
        const task = {
            id: v4(),
            title,
            description,
            status: TaskStatus.PENDING
        }
        this.tasks.push(task);

        return task;
    }

    deleteTasks(id: string) {
        this.tasks = this.tasks.filter(task =>task.id !==id)
    }

    getTasksbyId(id:string): Tasks {
        return this.tasks.find(task =>task.id === id)
    }

    updateTasks(id: string,updateFields: UpdateTaskDto): Tasks{
       const task = this.getTasksbyId(id);
       const newTask = Object.assign(task,updateFields);
       this.tasks = this.tasks.map(task =>task.id === id ? newTask : task)
       return newTask;
    }

}
