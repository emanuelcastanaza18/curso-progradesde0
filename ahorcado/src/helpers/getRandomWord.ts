let words: string[] = [
    'COMPUTADORA',
    'AGUACATE',
    'DESARROLLO',
    'JACINTO',
    'JOAQUIN',
    'CELULAR',
    'CRUZ',
    'DELVALLE',
    'COMIDA',
    'FAMILIA',
    'CARRO',
    'PANTALON',
    'SPARK',
    'UDEMY',
    'CASTOR',
    'PIZZA',
];


export function getRandomWord() {

    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

