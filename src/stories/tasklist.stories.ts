import { moduleMetadata, Story, Meta, componentWrapperDecorator } from '@storybook/angular';

import { CommonModule } from '@angular/common';

import { TaskListComponent } from '../app/task-list/task-list.component';
import { TaskComponent } from '../app/task/task.component';

//menage action of other stories
import * as TaskStories from './task.stories';

export default {
    component: TaskListComponent,
    decorators: [
        moduleMetadata({
            declarations: [TaskListComponent, TaskComponent],
            imports: [CommonModule],
        }),
        //👇 Wraps our stories with a decorator
        componentWrapperDecorator(story => `<div class="m-3">${story}</div>`),
    ],
    title: 'StorybookWebSiteExample/TaskListProva',
} as Meta;

const Template: Story<TaskListComponent> = args => ({
    props: {
        ...args,
        onPinTask: TaskStories.actionsData.onPinTask,
        onArchiveTask: TaskStories.actionsData.onArchiveTask,
    },
});

export const Default = Template.bind({});
Default.args = {
    tasks: [
        { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
        { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
        { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
        { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
        { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
        { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
    ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [
        ...Default.args.tasks.slice(0, 4),
        { id: '5', title: 'Task 5 (pinned)', state: 'TASK_PINNED' , background : "rgba(0, 100 , 150 , 0.5)",  color: 'Blue' },
        { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' , background : "rgba(0, 100 , 150 , 0.5)",  color: 'Blue' },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
};

