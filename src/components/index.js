/**
 * The index.js file is used to re-export from our separate files, that way rather than write:
 * 
 * import Feature from './components/Feature';
 * 
 * we can write:
 * 
 * import { Feature } from './components';
 * 
 * since index.js is assumed as part of the import when you specify a folder
 * 
 * Re-export Feature, Loading, Preview, Search, and Title from their respective files
 */


import Feature from './Feature';
import Loading from './Loading';
import Preview from './Preview';
import Search from './Search';
import Title from './Title';

// export {Feature, Loading, Preview, Search, Title};

export {Loading, Title, Search, Preview, Feature}