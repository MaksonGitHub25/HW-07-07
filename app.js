const studentArray = [
    {
        name: 'Максим',
        surname: 'Белый',
        age: 15, 
        dataOfBorn: '25.12.2006',
        skills: [
            'html',
            'css',
            'js',
            'python',
            'play in brawl stars', 
            'nigger'
        ]
    }, 
    {
        name: 'Егор',
        surname: 'Пятов', 
        age: 20, 
        dataOfBorn: '25.08.2001',
        skills: [
            'html',
            'css',
            'js',
            'python',
            'master to do nothing'
        ]
    },
    {
        name: 'Тимур',
        surname: 'Маренич',
        age: 15, 
        dataOfBorn: '10.10.2006',
        skills: [
            'беркут в кс 2на2',
            'js',
            'python'
        ]
    },
    {
        name: 'Даниил',
        surname: 'Приходько',
        age: 20, 
        dataOfBorn: '05.06.2002',
        skills: [
            'html', 
            'css',
            'js',
            'play in brawl stars'
        ]
    },
    {
        name: 'Arthur',
        surname: 'Morgan',
        age: 34, 
        dataOfBorn: '01.11.1865',
        skills: []
    },
    {
        name: 'Michael',
        surname: 'De Santa',
        age: 56, 
        dataOfBorn: '29.02.1957'
    }
];

console.log(studentArray);

// task 1
console.log('task 1');

function checkEmptySkills(mainArr) {
    const studentsWithSkills = [];
    mainArr.forEach(function (elem) {
        if ('skills' in elem) {
            const skillsLen = elem['skills'];
            if (!skillsLen.length == 0) {
                studentsWithSkills.push(elem);
            }
        }
    });
    return studentsWithSkills;
}

function checkMaxAmountOfSkills() {
    const studentWithSkillsArray = checkEmptySkills(studentArray);
    let maxSkills = 0;
    let studentWithTheBiggestSkills;

    studentWithSkillsArray.forEach(function (elem) {
        const skillsAmount = elem['skills'].length;
        console.log(elem);
        console.log('skillsAmount', skillsAmount);

        if (skillsAmount > maxSkills) {
            maxSkills = skillsAmount;
            studentWithTheBiggestSkills = elem;
        }
    });
    console.log(`Студент с самым большим количесвтом скиллов - ${studentWithTheBiggestSkills.name}\nУ него их целых ${maxSkills}`);
}

checkMaxAmountOfSkills();



// 'key' in obj - проверка на наличие ключей в объекте


// 1) Создать массив [ ]  с Вашими одногруппниками в виде объектов { } у объектов есть такие свойства как : -имя , -возраст ,[ -скиллы ]
// Fun(arr) {

// }

//* Написать функции :
//* 1) Выбирает объект у которого больше (кол-во) хобби , чем у остальных , но предусмотреть , что могут быть объекты без хобби (такие объекты мы должны игнорировать).
// 2) Сложить возраст всех участников в группе
// 3) Выбрать самого молодого и пожилого .
// 4) Выбрать участника у которого самое длинное/короткое имя