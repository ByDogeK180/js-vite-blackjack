/**
 * Esta funcion sirve para retornar una carta del deck
 * @param {Array<String>} deck Es un arreglo de string - Ejemplo: [ "3C", "6H", "2C", … ]
 * @returns {String} Retorna una carta del deck
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }

    const carta = deck.pop();
    return carta;
}