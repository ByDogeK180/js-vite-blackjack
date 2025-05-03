/**
 * Funcion para de terminar el valor de una carta
 * @param {String} carta Recibe una carta
 * @returns {Number} Retorna el valor de la carta
 */

export const valorCarta = ( carta ) => {

    const valorCarta = carta.substring(0, carta.length - 1);
    return ( isNaN( valorCarta ) ) ? 
            ( valorCarta === 'A' ) ? 11 : 10
            : valorCarta * 1;
}