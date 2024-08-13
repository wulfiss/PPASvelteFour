function chlorineConcentrationBadge(concentracion: number): string {
    if (concentracion >= 0.3 && concentracion <= 0.8) {
        return 'badge badge-lg badge-success gap-2';
    } else if (concentracion > 0.8 && concentracion <= 1) {
        return 'badge badge-lg badge-warning gap-2';
    } else if (concentracion < 0.3 && concentracion >= 0.2) {
        return 'badge badge-lg badge-warning gap-2';
    } else {
        return 'badge badge-lg badge-error gap-2';
    }
};


export default chlorineConcentrationBadge;