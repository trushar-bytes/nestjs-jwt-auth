import { Injectable } from '@nestjs/common';
import { TaskResponseDto } from './dto/task-response.dto';

@Injectable()
export class TasksService {

    /**
     * 
     * @returns TaskResponseDto[]
     */
    async getAllTasks(): Promise<TaskResponseDto[]> {
        // we have just implement jwt check and return 2 static data in response. when we have typeOrm integration we will create database schema in entity file and get data from table
        const testTask: TaskResponseDto[] = [{
            title: 'test1'
        }, {
            title: 'test2'
        }]

        return testTask
    }

}
