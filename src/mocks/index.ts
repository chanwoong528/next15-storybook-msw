export async function initMsw() {

  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { server } = await import('./server');
    server.listen();
  } else {
    const { worker } = await import('./browser');
    await worker.start();
  }
}