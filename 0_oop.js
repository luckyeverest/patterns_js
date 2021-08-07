// ООП — это способ написания кода, позволяющий создавать объекты с помощью одного объекта.
//  В этом также заключается суть шаблона проектирования «Конструктор». Общий объект, обычно, называется планом,
//  проектом или схемой (blueprint), а создаваемые с его помощью объекты — экземплярами (instances)
//Каждый экземпляр имеет как свойства, наследуемые от родителя, так и собственные свойства

//Второй аспект ООП состоит в структурировании кода, когда у нас имеется несколько проектов разного уровня. 
//Это называется наследованием (inheritance) или классификацией (созданием подклассов) (subclassing).

// Третий аспект ООП — инкапсуляция, когда мы скрываем детали реализации от посторонних, 
// делая переменные и функции недоступными извне. В этом заключается суть шаблонов проектирования «Модуль» и «Фасад»

// Функция-конструктор
// Конструкторами являются функции, в которых используется ключевое слово «this».

function Human(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

// this позволяет сохранять и получать доступ к
//  уникальным значениям создаваемого экземпляра. Экземпляры создаются с помощью ключевого слова «new»
const chris = new Human('Chris', 'Coyier')
console.log(chris.firstName) // Chris
console.log(chris.lastName) // Coyier

const zell = new Human('Zell', 'Liew')
console.log(zell.firstName) // Zell
console.log(zell.lastName) // Liew

// Классы являются абстракцией («синтаксическим сахаром») над функциями-конструкторами.
//  Они облегчают задачу создания экземпляров
//можно опустить constructor, если нам не требуется присваивать начальные значения
class Human2 {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

//Экземпляры также создаются с помощью ключевого слова «new».
const chrisM = new Human2('Chris', 'Coyier')

console.log(chrisM.firstName) // Chris
console.log(chrisM.lastName) // Coyier

//Связывание объектов
// В данном подходе мы определяем проект как обычный объект. Затем с помощью метода мы инициализируем экземпляр.
const Human3 = {
    init(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}
const chrisV = Object.create(Human3)
chrisV.init('Chris', 'Coyier')

console.log(chrisV.firstName) // Chris
console.log(chrisV.lastName) // Coyier

//Фабричная функция — это функция, возвращающая объект. Можно вернуть любой объект.
// Можно даже вернуть экземпляр класса или связывания объектов
function Human5(firstName, lastName) {
    return {
        firstName,
        lastName
    }
}
//Для создания экземпляра вызываем функцию
const chrisW = Human5('Chris', 'Coyier')

console.log(chrisW.firstName) // Chris
console.log(chrisW.lastName) // Coyier

//Определение свойств и методов в конструкторе
//Методы — это функции, объявленные в качестве свойств объекта
function Human6(firstName, lastName) {
    // Определяем свойства
    this.firstName = firstName
    this.lastname = lastName

    // Определяем методы
    this.sayHello = function () {
        console.log(`Hello, I'm ${firstName}`)
    }
}

const chrisY = new Human6('Chris', 'Coyier')
console.log(chrisY)
// добавления свойства в прототип используют prototype
function Human7(firstName, lastName) {
    this.firstName = firstName
    this.lastname = lastName
}
// Определяем метод в прототипе
Human7.prototype.sayHello = function () {
    console.log(`Hello, I'm ${this.firstName}`)
}

//Создание нескольких методов с помощью Object.assign
Object.assign(Human7.prototype, {
    method1() { /*...*/ },
    method2() { /*...*/ },
    method3() { /*...*/ }
})

//Свойства экземпляра можно определить в constructor
class Human8 {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName

        this.sayHello = function () {
            console.log(`Hello, I'm ${firstName}`)
        }
    }
}

//Свойства прототипа определяются после constructor в виде обычной функции
class Human9 {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName

        sayHello = function () {
            console.log(`Hello, I'm ${firstName}`)
        }
    }
}
//Создание нескольких методов в классе
class Human10{}