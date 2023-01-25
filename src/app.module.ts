import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config'

@Module({
    imports: [AuthModule, TasksModule, ConfigModule.forRoot({
        envFilePath: '.env'
    }),],
    controllers: [],
    providers: [],
})
export class AppModule { }
