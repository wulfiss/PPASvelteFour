import { writable, type Writable } from "svelte/store";
import type { sectorOneData } from "$lib/types";

const sectorOneStore: Writable<sectorOneData> = writable({
    fecha: '',
    productor: '',
    pollos_chicos: false,
    pollos_medianos: false,
    pollos_grandes: false,
    pollos_desparejos: false,
    buches: 0,
    buches_chicos: false,
    buches_medianos: false,
    buches_grandes: false,
    pollos_rotos: 0,
    alas_dislocadas_hematomas_recientes: 0,
    alas_dislocadas_hematomas_viejos: 0,
    alas_dislocadas_sin_hematomas: 0,
    alas_fracturadas_hematomas_recientes: 0,
    alas_fracturadas_hematomas_viejos: 0,
    alas_fracturadas_sin_hematomas: 0,
    alas_puntas_fracturadas: 0,
    miopatias: 0,
    dermatitis: 0,
    dermatitis_leve: false,
    dermatitis_moderada: false,
    dermatitis_severa: false,
    traqueas: 0,
    intermedia_observaciones: '',
    garras_lindas: false,
    garras_regulares: false,
    garras_feas: false,
    garras_observaciones: '',
    cogotes: 0,
    pulmones: 0,
    cloacas: 0,
    patas_fracturadas: 0,
    sangre: false,
    eviscerado_observaciones: ''
});


export default sectorOneStore;