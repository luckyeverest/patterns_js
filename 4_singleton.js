const Singleton = (function() {
    let instance;
  
    // Приватные методы и свойства
  
    // Конструктор
    function Singleton() {
      if (instance) return instance;
      instance = this;
    }
  
    // Публичные методы
    Singleton.prototype.test = function() {};
  
    return Singleton;
  })();
  
  console.log(new Singleton() === new Singleton());
  //Без использования сокрытия переменных есть простое решение, основанное на том, что функция Singleton является объектом. Минусом является возможность изменения свойства instance вне класса:
  
  function Singleton() {
    const instance = Singleton.instance;
    if (instance) return instance;
    Singleton.instance = this;
  }
  
  Singleton.prototype.test = function() {};
  
  console.log(new Singleton() === new Singleton());
  //Наиболее короткий вариант.
  
  const Singleton = new (function() {
    const instance = this;
    return function() { return instance; };
  })();
  
  console.log(new Singleton() === new Singleton());
  //С использованием статических приватных полей JS-класса:
  
  class Singleton{
      static #onlyInstance = null;
      constructor(){
          if(!Singleton.#onlyInstance){
              Singleton.#onlyInstance = this;
          } else {
              return Singleton.#onlyInstance;
          }
      }
  }
  
  console.log(new Singleton() === new Singleton());