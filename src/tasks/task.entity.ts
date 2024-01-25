export enum TaskStatus{
    PENDING = 'PENDING',
    IN_PROGRESS = 'PENDING',
    DONE = 'DONE',
}

export class Tasks {
id: string
title: string
description: string
status: TaskStatus
}

const task = new Tasks()
