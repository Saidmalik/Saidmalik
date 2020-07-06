const defaultState = { channels: {}, messages: {} };
let state = { ...defaultState };

export default router => router.put('refresh', '/refresh', async (ctx) => {
  state = { ...defaultState };
});