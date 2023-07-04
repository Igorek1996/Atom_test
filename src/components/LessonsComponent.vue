<template>
  <q-list bordered class="lessons__list col-md-4 col-xs-12 text-left">
    <q-item
      clickable
      v-for="lesson in lessons"
      :key="lesson.id"
      :class="{ 'cursor-not-allowed': lesson.status == 'Disabled' }"
      @click="setLessonCurrent(lesson.id, lesson.status)"
    >
      <q-item-section class="no-margin" thumbnail>
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />
      </q-item-section>
      <q-item-section>{{ lesson.title }}</q-item-section>
    </q-item>
  </q-list>
</template>

<script setup lang="ts">
import { useLessonStore } from '../stores/store';

const lessonsStore = useLessonStore();

const lessons = lessonsStore.lessons;

const setLessonCurrent = (id: number, status: string) => {
  lessonsStore.setCurrentLesson(id, status);
};
</script>
