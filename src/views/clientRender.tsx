import * as React from 'react';
import { hydrate } from 'react-dom';
import { App, AppProps } from './App';

const root = document.getElementById('app') as HTMLElement;

const state = JSON.parse(root.dataset.state as string) as AppProps;

hydrate(<App {...state} />, root);