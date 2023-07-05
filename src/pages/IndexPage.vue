<template>
  <q-page class="text-center">
    <div class="q-pa-md q-gutter-sm">
      <q-avatar rounded>
        <img src="../assets/logo.svg" />
      </q-avatar>
    </div>
    <h1 class="text-h4">
      Як заробляти <span class="mark">від 100$</span> на день на налаштуванні
      рекламних компаній Facebook+Instagram
    </h1>
    <h2 class="text-h5">
      <span class="mark"
        >Епізод <span>{{ currentLesson.id + 1 }}</span
        >.
      </span>
      <span>
        {{ currentLesson.title }}
      </span>
    </h2>

    <div class="row justify-between items-center">
      <div class="col-md-7 col-xs-12">
        <video
          :src="currentLesson.video_url"
          controls
          @ended="onVideoEnded(currentLesson.id)"
        ></video>
      </div>
      <LessonsComponent />
    </div>
    <div class="row justify-between text-left">
      <div class="col-md-7 col-xs-12">
        <h3 class="text-h5 mark">У цьому епізоді ви дізнаєтесь:</h3>
        <ol>
          <li>{{ currentLesson.subtitle }}</li>
          <li>{{ currentLesson.description }}</li>
        </ol>
      </div>
      <div class="col-md-4 col-xs-12">
        <h3 class="text-h5">
          Вже переглянули? Отримайте доступ до наступного:
        </h3>
        <q-btn
          v-if="!isLastLesson"
          class="glossy"
          rounded
          color="deep-orange"
          :disable="currentLesson.status === 'Current'"
          label="Наступний урок"
          @click="moveToNextLesson(currentLesson.id)"
        ></q-btn>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import LessonsComponent from '../components/LessonsComponent.vue';
import { useLessonStore } from '../stores/store';
import { computed } from 'vue';

const lessonsStore = useLessonStore();

lessonsStore.setCurrentLessonOnMounted();

const currentLesson = computed(() => {
  return lessonsStore.currentLesson;
});

const onVideoEnded = (id: number) => {
  lessonsStore.enableNext(id);
};

const moveToNextLesson = (id: number) => {
  lessonsStore.moveToNextLesson(id);
};

const isLastLesson = computed(() => {
  return lessonsStore.isLastLesson;
});
</script>
