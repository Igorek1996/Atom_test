import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { createManager } from '@vue-youtube/core';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

const api = axios.create({ baseURL: 'https://api.example.com' });

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
  app.use(createManager());
});

export { api };
