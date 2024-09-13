import { writable, type Writable } from 'svelte/store';
import type { ZonaLimpiaData } from '$lib/types';

const ZonaLimpiaStore: Writable<ZonaLimpiaData> = writable({
	fecha: '',
	productor: '',
	granja: '',
    galpon: '',
    observaciones_aves: '',
});

export default ZonaLimpiaStore;