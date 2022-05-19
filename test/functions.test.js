// IMPORT MODULES under test here:
import { 
    addAllAges,
    getAllCoolFactorsOfEachCar,
    getAverageCoolFactor,
    getAverageCoolFactorByAgeBracket,
    getAverageCoolFactorOfEachCar,
    getCoolFactorsByAgeBracket,
    getGenderBreakdownOfEachCar,
    getGenderBreakdownOfFordOwners,
    getTotalOfEachGender,
    greetUsers,
    greetUsersOverAge60,
    makeAgeBrackets,
} from '../functions.js';
import customers from './data.js';

const { test, skip } = QUnit;

test('greetUsers', (expect) => {
    const expected = [
        'Hello Suzi Summerson!',
        'Hello Boot Penton!',
        'Hello Cacilia Caramuscia!',
        'Hello Mattie Mungane!',
        'Hello Kathryne Gostling!',
        'Hello Cristal Oakman!',
        'Hello Mahmud Shingler!',
        'Hello Kenny Kepe!',
        'Hello Elena Guisby!',
        'Hello Irene Kynvin!',
        'Hello Debor Lashmar!',
        'Hello Christian Churchill!',
        'Hello Fawnia Cowdroy!',
        'Hello Eli Perigo!',
        'Hello Parker Goodboddy!',
        'Hello Leeland Bonome!',
        'Hello Lowe Driussi!',
        'Hello Tracy Chidlow!',
        'Hello Dimitri Ochiltree!',
        'Hello Sascha Yanin!',
        'Hello Emmaline Horribine!',
        'Hello Erinna Swires!',
        'Hello Erroll Reade!',
        "Hello Ilaire O'Codihie!",
        'Hello Anatol Gulley!',
        'Hello Celestine Teodori!',
        'Hello Brandi Sawdon!',
        'Hello Atlanta Oneil!',
        'Hello Salomone Merkle!',
        'Hello Alta Sulter!',
        'Hello Marys Allsopp!',
        'Hello Marilin Ellacott!',
        'Hello Alexandros Cornell!',
        'Hello Matti Haller!',
        'Hello Henryetta Cheng!',
        'Hello Gennie Saura!',
        'Hello Sherwynd Wiggans!',
        'Hello Thorn McMeekin!',
        'Hello Esmaria Moukes!',
        'Hello Dietrich Gladebeck!',
        'Hello Karol Rosa!',
        'Hello Manya Fodden!',
        'Hello Casi Waterland!',
        'Hello Munroe Walthall!',
        'Hello Tannie Sedman!'
    ];

    const actual = greetUsers(customers);

    expect.deepEqual(actual, expected);
});


test('greetUsersOverAge60', (expect) => {
    const expected = [
        'Hello Suzi Summerson!',
        'Hello Boot Penton!',
        'Hello Cacilia Caramuscia!',
        'Hello Cristal Oakman!',
        'Hello Kenny Kepe!',
        'Hello Dimitri Ochiltree!',
        "Hello Ilaire O'Codihie!",
        'Hello Anatol Gulley!',
        'Hello Salomone Merkle!',
        'Hello Alta Sulter!',
        'Hello Alexandros Cornell!',
        'Hello Thorn McMeekin!',
        'Hello Esmaria Moukes!',
        'Hello Munroe Walthall!',
        'Hello Tannie Sedman!'
    ];

    const actual = greetUsersOverAge60(customers);

    expect.deepEqual(actual, expected);
});

test('addAllAges', (expect) => {
    const expected = 2125;

    const actual = addAllAges(customers);

    expect.equal(actual, expected);
});


test('getAverageCoolFactor', (expect) => {
    const expected = 5.088888888888889;

    const actual = getAverageCoolFactor(customers);

    expect.equal(actual, expected);
});

test('getTotalOfEachGender', (expect) => {
    const expected = {
        'Bigender': 1,
        'Female': 19,
        'Genderqueer': 1,
        'Male': 23,
        'Non-binary': 1
    };

    const actual = getTotalOfEachGender(customers);

    expect.deepEqual(actual, expected);
});

test('getGenderBreakdownOfFordOwners', (expect) => {
    const expected = {
        'Female': 1,
        'Male': 2
    };

    const actual = getGenderBreakdownOfFordOwners(customers);

    expect.deepEqual(actual, expected);
});

test('getGenderBreakdownOfEachCar', (expect) => {
    const expected = {
        'Alfa Romeo': {
            'Male': 1
        },
        'Audi': {
            'Female': 1
        },
        'BMW': {
            'Male': 1
        },
        'Buick': {
            'Female': 1,
            'Male': 1
        },
        'Cadillac': {
            'Male': 1,
            'Non-binary': 1
        },
        'Chevrolet': {
            'Female': 1,
            'Male': 3
        },
        'Chrysler': {
            'Female': 1,
            'Genderqueer': 1
        },
        'Dodge': {
            'Female': 2,
            'Male': 1
        },
        'Eagle': {
            'Male': 1
        },
        'Ford': {
            'Female': 1,
            'Male': 2
        },
        'GMC': {
            'Female': 2,
            'Male': 2
        },
        'Infiniti': {
            'Female': 1
        },
        'Jeep': {
            'Female': 1
        },
        'Kia': {
            'Male': 1
        },
        'Lexus': {
            'Male': 1
        },
        'Mazda': {
            'Male': 1
        },
        'Mercedes-Benz': {
            'Female': 1
        },
        'Mercury': {
            'Male': 1
        },
        'Mitsubishi': {
            'Male': 1
        },
        'Oldsmobile': {
            'Male': 1
        },
        'Peugeot': {
            'Female': 1
        },
        'Pontiac': {
            'Female': 1
        },
        'Porsche': {
            'Female': 1,
            'Male': 1
        },
        'Scion': {
            'Female': 1
        },
        'Subaru': {
            'Female': 1
        },
        'Toyota': {
            'Bigender': 1,
            'Female': 1,
            'Male': 2
        },
        'Volvo': {
            'Female': 1,
            'Male': 1
        }
    };

    const actual = getGenderBreakdownOfEachCar(customers);

    expect.deepEqual(actual, expected);
});

test('getAllCoolFactorsOfEachCar', (expect) => {
    const expected = {
        'Alfa Romeo': [
            6
        ],
        'Audi': [
            1
        ],
        'BMW': [
            5
        ],
        'Buick': [
            4,
            3
        ],
        'Cadillac': [
            7,
            1
        ],
        'Chevrolet': [
            8,
            9,
            2,
            1
        ],
        'Chrysler': [
            4,
            9
        ],
        'Dodge': [
            10,
            8,
            10
        ],
        'Eagle': [
            9
        ],
        'Ford': [
            5,
            2,
            10
        ],
        'GMC': [
            6,
            6,
            10,
            8
        ],
        'Infiniti': [
            2
        ],
        'Jeep': [
            5
        ],
        'Kia': [
            2
        ],
        'Lexus': [
            4
        ],
        'Mazda': [
            3
        ],
        'Mercedes-Benz': [
            3
        ],
        'Mercury': [
            2
        ],
        'Mitsubishi': [
            4
        ],
        'Oldsmobile': [
            5
        ],
        'Peugeot': [
            1
        ],
        'Pontiac': [
            8
        ],
        'Porsche': [
            8,
            7
        ],
        'Scion': [
            2
        ],
        'Subaru': [
            2
        ],
        'Toyota': [
            1,
            8,
            2,
            3
        ],
        'Volvo': [
            9,
            4
        ]
    };

    const actual = getAllCoolFactorsOfEachCar(customers);

    expect.deepEqual(actual, expected);
});

test('getAverageCoolFactorOfEachCar', (expect) => {
    const expected = {
        'Alfa Romeo': 6,
        'Audi': 1,
        'BMW': 5,
        'Buick': 3.5,
        'Cadillac': 4,
        'Chevrolet': 5,
        'Chrysler': 6.5,
        'Dodge': 9.333333333333334,
        'Eagle': 9,
        'Ford': 5.666666666666667,
        'GMC': 7.5,
        'Infiniti': 2,
        'Jeep': 5,
        'Kia': 2,
        'Lexus': 4,
        'Mazda': 3,
        'Mercedes-Benz': 3,
        'Mercury': 2,
        'Mitsubishi': 4,
        'Oldsmobile': 5,
        'Peugeot': 1,
        'Pontiac': 8,
        'Porsche': 7.5,
        'Scion': 2,
        'Subaru': 2,
        'Toyota': 3.5,
        'Volvo': 6.5
    };

    const actual = getAverageCoolFactorOfEachCar(customers);

    expect.deepEqual(actual, expected);
});


test('makeAgeBrackets', (expect) => {
    const expected = {
        '0': 6,
        '10': 8,
        '100': 2,
        '20': 2,
        '30': 7,
        '40': 2,
        '50': 5,
        '60': 1,
        '70': 3,
        '80': 2,
        '90': 7
    };

    const actual = makeAgeBrackets(customers);

    expect.deepEqual(actual, expected);
});

test('getCoolFactorsByAgeBracket', (expect) => {
    const expected = {
        '0': [
            4,
            1,
            3,
            9,
            10,
            8
        ],
        '10': [
            6,
            2,
            10,
            7,
            3,
            1,
            8,
            3
        ],
        '100': [
            8,
            5
        ],
        '20': [
            10,
            5
        ],
        '30': [
            4,
            9,
            9,
            8,
            2,
            5,
            2
        ],
        '40': [
            2,
            6
        ],
        '50': [
            5,
            4,
            6,
            3,
            10
        ],
        '60': [
            8
        ],
        '70': [
            4,
            4,
            2
        ],
        '80': [
            2,
            2
        ],
        '90': [
            9,
            2,
            8,
            1,
            1,
            1,
            7
        ]
    };

    const actual = getCoolFactorsByAgeBracket(customers);

    expect.deepEqual(actual, expected);
});

test('getAverageCoolFactorByAgeBracket', (expect) => {
    const expected = {
        '0': 5.833333333333333,
        '10': 5,
        '100': 6.5,
        '20': 7.5,
        '30': 5.571428571428571,
        '40': 4,
        '50': 5.6,
        '60': 8,
        '70': 3.3333333333333335,
        '80': 2,
        '90': 4.142857142857143
    };

    const actual = getAverageCoolFactorByAgeBracket(customers);

    expect.deepEqual(actual, expected);
});
