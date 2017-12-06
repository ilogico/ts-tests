import * as express from 'express';
import serverRender from './views/serverRender';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => serverRender({ message: 'Hello, world!'}).pipe(res));

app.listen(3000);

console.log('Server listening on port 3000');