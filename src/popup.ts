import Popup from './views/Popup.svelte';
import '@skeletonlabs/skeleton/themes/theme-modern.css';
import '@skeletonlabs/skeleton/styles/skeleton.css';

const popup = new Popup({
  target: document.body
});

export default popup;
