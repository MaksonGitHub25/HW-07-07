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

// // task 1
// console.log(`
//     task 1
//     `);

// function checkEmptySkills(mainArr) {
//     const studentsWithSkills = [];
//     mainArr.forEach(function (elem) {
//         if ('skills' in elem) {
//             const skillsLen = elem['skills'];
//             if (!skillsLen.length == 0) {
//                 studentsWithSkills.push(elem);
//             }
//         }
//     });
//     return studentsWithSkills;
// }

// function checkMaxAmountOfSkills() {
//     const studentWithSkillsArray = checkEmptySkills(studentArray);
//     let maxSkills = 0;
//     let studentWithTheBiggestSkills;

//     studentWithSkillsArray.forEach(function (elem) {
//         const skillsAmount = elem['skills'].length;

//         if (skillsAmount > maxSkills) {
//             maxSkills = skillsAmount;
//             studentWithTheBiggestSkills = elem;
//         }
//     });
//     console.log(`Студент с самым большим количесвтом скиллов - ${studentWithTheBiggestSkills.name}\nУ него их целых ${maxSkills}`);
// }

// checkMaxAmountOfSkills();

// //task 2
// console.log(`
//     task 2
//     `);

// function sumAllAge(arr) {
//     let sumAllAge = 0;

//     arr.forEach(function (elem) {
//         sumAllAge += elem['age'];
//     });

//     console.log(`Сумма возрастов всех студентов - ${sumAllAge} лет`);
// }

// sumAllAge(studentArray);

// //task 3
// console.log(`
//     task 3
//     `);

// let minAge = 100;
// let maxAge = 0;
// let youngestStudent;
// let oldestStudent;

// function checkMinAndMaxAge(arr) {
//     arr.forEach(function (elem) {

//         studentAge = elem['age'];
//         if (studentAge < minAge) {
//             minAge = studentAge;
//             youngestStudent = elem;
//         }
//         if (studentAge > maxAge) {
//             maxAge = studentAge;
//             oldestStudent = elem;
//         }
//     });

//     console.log(`Самый молодой студент - ${youngestStudent.name}\nСамый старый студент - ${oldestStudent.name}`);
// }

// checkMinAndMaxAge(studentArray);

// // task 4

// console.log(`
//     task 4
//     `);

// let lengthOfShortestName = 100;
// let lengthOfLongestName = 0;
// let studentShortestName = '';
// let studentLongestName = '';

// function checkStudentNameLenght(arr) {
//     arr.forEach(function (elem) {
//         studentNameLenght = elem['name'].length;

//         if (studentNameLenght < lengthOfShortestName) {
//             lengthOfShortestName = studentNameLenght;
//             studentShortestName = elem;
//         }
//         if (studentNameLenght > lengthOfLongestName) {
//             lengthOfLongestName = studentNameLenght;
//             studentLongestName = elem;
//         }
//     });

//     console.log(`Студент, с самым коротким именем - ${studentShortestName.name}\nСтудент, с самым длинным именем - ${studentLongestName.name}`);
// }

// checkStudentNameLenght(studentArray);


//task nigga

console.log(`
    task universal
    `);

const studentsWithSkills = [];
let maxSkills = 0;
let studentWithTheBiggestSkills;
let sumAllAge = 0;
let minAge = 100;
let maxAge = 0;
let youngestStudent;
let oldestStudent;
let lengthOfShortestName = 100;
let lengthOfLongestName = 0;
let studentShortestName = '';
let studentLongestName = '';
    
function genericFunction(arr) {
    arr.forEach(function (elem) {
        studentAge = elem['age'];
        studentNameLenght = elem['name'].length;

        //task 1
        if ('skills' in elem) {
            const skillsLen = elem['skills'];
            if (!skillsLen.length == 0) {
                studentsWithSkills.push(elem);
            }
            studentsWithSkills.forEach(function (elem) {
                const skillsAmount = elem['skills'].length;
            
                if (skillsAmount > maxSkills) {
                    maxSkills = skillsAmount;
                    studentWithTheBiggestSkills = elem;
                }
            });
        }
        
        //task 2
        sumAllAge += studentAge;

        // task 3
        if (studentAge < minAge) {
            minAge = studentAge;
            youngestStudent = elem;
        }
        if (studentAge > maxAge) {
            maxAge = studentAge;
            oldestStudent = elem;
        }

        //task 4
        if (studentNameLenght < lengthOfShortestName) {
            lengthOfShortestName = studentNameLenght;
            studentShortestName = elem;
        }
        if (studentNameLenght > lengthOfLongestName) {
            lengthOfLongestName = studentNameLenght;
            studentLongestName = elem;
        }
    });

    console.log(`Студент с самым большим количесвтом скиллов - ${studentWithTheBiggestSkills.name}\nУ него их целых ${maxSkills}`);
    console.log(`Сумма возрастов всех студентов - ${sumAllAge} лет`);
    console.log(`Самый молодой студент - ${youngestStudent.name}\nСамый старый студент - ${oldestStudent.name}`);
    console.log(`Студент, с самым коротким именем - ${studentShortestName.name}\nСтудент, с самым длинным именем - ${studentLongestName.name}`);
}

genericFunction(studentArray);

//* Написать функции :
//* 1) Выбирает объект у которого больше (кол-во) хобби , чем у остальных , но предусмотреть , что могут быть объекты без хобби (такие объекты мы должны игнорировать).
//* 2) Сложить возраст всех участников в группе
//* 3) Выбрать самого молодого и пожилого .
//* 4) Выбрать участника у которого самое длинное/короткое имя