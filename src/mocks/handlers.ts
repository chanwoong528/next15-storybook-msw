import { delay, http, HttpResponse } from 'msw';

export const handlers = [
  http.all('*', async () => {
    await delay(100)// [MSW] Warning: intercepted a request without a matching request handler:.
  }),
  http.get('https://jsonplaceholder.typicode.com/todos', () => {
    return HttpResponse.json(require('./json/temp.json'));
  }),
];