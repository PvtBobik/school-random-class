import { registerSW } from 'virtual:pwa-register';
import App from './App.svelte';
import './index.css';

const app = new App({
  target: document.getElementById('app'),
});

registerSW();

export default app;
