import { defineStore } from 'pinia';

export interface Lesson {
  id: number;
  title: string;
  subtitle: string;
  video_url: string;
  video_time: number;
  description: string;
  status: string;
}

export const useLessonStore = defineStore('lesson', {
  state: () => ({
    lessons: [
      {
        id: 0,
        title: 'Урок 1',
        subtitle: 'Подзаголовок 1',
        video_url: 'FUKmyRLOlAA',
        video_time: 10,
        description: 'Описание урока 1',
        status: 'Current',
      },
      {
        id: 1,
        title: 'Урок 2',
        subtitle: 'Подзаголовок 2',
        video_url: 'xDFWLudn5WY',
        video_time: 10,
        description: 'Описание урока 2',
        status: 'Disabled',
      },
      {
        id: 2,
        title: 'Урок 3',
        subtitle: 'Подзаголовок 3',
        video_url: 'FUKmyRLOlAA',
        video_time: 10,
        description: 'Описание урока 3',
        status: 'Disabled',
      },
      {
        id: 3,
        title: 'Урок 4',
        subtitle: 'Подзаголовок 4',
        video_url: 'xDFWLudn5WY',
        video_time: 10,
        description: 'Описание урока 4',
        status: 'Disabled',
      },
      {
        id: 4,
        title: 'Урок 5',
        subtitle: 'Подзаголовок 5',
        video_url: 'FUKmyRLOlAA',
        video_time: 10,
        description: 'Описание урока 5',
        status: 'Disabled',
      },
      {
        id: 5,
        title: 'Урок 6',
        subtitle: 'Подзаголовок 5',
        video_url: 'xDFWLudn5WY',
        video_time: 10,
        description: 'Описание урока 5',
        status: 'Disabled',
      },
      {
        id: 6,
        title: 'Урок 7',
        subtitle: 'Подзаголовок 5',
        video_url: 'FUKmyRLOlAA',
        video_time: 10,
        description: 'Описание урока 5',
        status: 'Disabled',
      },
    ] as Lesson[],
    currentLesson: {} as Lesson,
  }),
  getters: {
    isLastLesson(): boolean {
      return this.lessons[this.lessons.length - 1].id === this.currentLesson.id;
    },
  },
  actions: {
    setCurrentLesson(id: number, status: string) {
      if (status === 'Disabled') {
        return;
      }
      this.currentLesson =
        this.lessons.find((item) => item.id === id) || ({} as Lesson);
    },

    setCurrentLessonOnMounted() {
      this.currentLesson =
        this.lessons.find((item) => item.status === 'Current') ||
        ({} as Lesson);
    },

    enableNext(id: number) {
      const index = this.lessons.findIndex((item) => item.id === id);
      this.lessons[index].status = 'Completed';

      if (index !== this.lessons.length - 1)
        this.lessons[index + 1].status = 'Current';
    },

    moveToNextLesson(id: number) {
      const index = this.lessons.findIndex((item) => item.id === id);

      this.setCurrentLesson(
        this.lessons[index + 1].id,
        this.lessons[index + 1].status
      );
    },
  },
});
