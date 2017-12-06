import * as React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { App, AppProps } from './App';

export default (props: AppProps) => renderToNodeStream(
    <html>
        <head>
            <title>Sample App</title>
        </head>
        <body>
            <div id="app" data-state={JSON.stringify(props)}>
                <App {...props} />
            </div>
            <script defer src="/app.js"></script>
        </body>
    </html>
);