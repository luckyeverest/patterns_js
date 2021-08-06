class SimpleMemberShip {
    constructor(name) {
        this.name = name
        this.cost = 50
    }
}

class StandartMemberShip {
    constructor(name) {
        this.name = name
        this.cost = 150
    }
}

class PremiumMemberShip {
    constructor(name) {
        this.name = name
        this.cost = 500
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMemberShip,
        standart: StandartMemberShip,
        premium: PremiumMemberShip
    }

    create(name, type = 'simple') {
        const MemberShip = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new MemberFactory(name)

        member.type = type
        member.define = function () {
            console.log(`${this.name} (${this.type}) :${this.cost}`)
        }

        return member
    }
}

const factory = new MemberFactory

const members = [
    factory.create('dmitryy', 'simple'),
    factory.create('katerina', 'premium')
]

console.log(members)

class Product {
    GetName() {}
}

class ConcreteProductA extends Product {
    GetName() {
        return 'ProductA'
    }
}

class ConcreteProductB extends Product {
    GetName() {
        return 'ProductB'
    }
}

class Creator {
    FactoryMethod() {}
}

class ConcreteCreatorA extends Creator {
    FactoryMethod() {
        return new ConcreteProductA()
    }
}

class ConcreteCreatorB extends Creator {
    FactoryMethod() {
        return new ConcreteProductB()
    }
}

// An array of creators
const creators = [ new ConcreteCreatorA(), new ConcreteCreatorB() ]
const products = []

// Iterate over creators and create products
for (let creator of creators) {
    products.push(creator.FactoryMethod().GetName())
}

console.log(products)