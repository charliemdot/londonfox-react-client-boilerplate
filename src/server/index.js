import server from './web.server';

const webserver = new server();

webserver.start(() => {
  console.log('Webserver started!');
});
