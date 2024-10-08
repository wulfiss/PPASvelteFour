export interface sectorOneData {
	fecha?: string;
	productor?: string;
	observaciones_aves?: string;
	pollos_chicos: boolean;
	pollos_medianos: boolean;
	pollos_grandes: boolean;
	pollos_desparejos: boolean;
	buches?: number;
	buches_chicos: boolean;
	buches_medianos: boolean;
	buches_grandes: boolean;
	aves_rotas?: number;
	alas_dislocadas_hematomas_recientes?: number;
	alas_dislocadas_hematomas_viejos?: number;
	alas_dislocadas_sin_hematomas?: number;
	alas_fracturadas_hematomas_recientes?: number;
	alas_fracturadas_hematomas_viejos?: number;
	alas_fracturadas_sin_hematomas?: number;
	alas_puntas_fracturadas?: number;
	miopatias?: number;
	dermatitis?: number;
	dermatitis_leve: boolean;
	dermatitis_moderada: boolean;
	dermatitis_severa: boolean;
	traqueas?: number;
	garras_lindas: boolean;
	garras_regulares: boolean;
	garras_feas: boolean;
	observaciones_garras?: string;
	cogotes?: number;
	pulmones?: number;
	cloacas?: number;
	patas_fracturadas?: number;
	sangre?: boolean;
	observaciones_generales: string;

	[key: `pollos_${string}`]: boolean;
	[key: `buches_${string}`]: boolean;
	[key: `dermatitis_${string}`]: boolean;
	[key: `garras_${string}`]: boolean;
}

export interface ModalState  {
	isFormOpen: boolean;
	itemToDelete: never | null;
};