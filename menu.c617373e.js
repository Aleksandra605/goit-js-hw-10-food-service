// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"bpEP":[function(require,module,exports) {
module.exports = [{
  "id": "XWaQXcbk0",
  "name": "Картофель, запеченный в мундире",
  "description": "Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.",
  "image": "https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg",
  "price": 100,
  "ingredients": ["Картофель", "Чеснок", "Сметана", "Бекон", "Твердый сыр", "Зеленый лук"]
}, {
  "id": "pkXzyRp1P",
  "name": "Томатный магрибский суп",
  "description": "Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.",
  "image": "https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg",
  "price": 150,
  "ingredients": ["Помидоры", "Куриный бульон", "Мед", "Петрушка", "Кинза", "Паприка"]
}, {
  "id": "QMom9q4Ku",
  "name": "Крем-суп из тыквы",
  "description": "Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.",
  "image": "https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png",
  "price": 100,
  "ingredients": ["Тыква", "Петрушка", "Сливки", "Бренди", "Куриный бульон"]
}, {
  "id": "k2k0UrjZG",
  "name": "Салат из красной фасоли с творожным сыром",
  "description": "Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.",
  "image": "https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg",
  "price": 150,
  "ingredients": ["Фасоль", "Соль", "Чеснок", "Оливковое масло", "Творожный сыр", "Красный лук"]
}, {
  "id": "j2k8U1jZd",
  "name": "Классический греческий салат ",
  "description": "Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. Для салата используют только оливковое масло, а такие специи, как орегано и базилик, являются визитной карточкой греческой кухни.",
  "image": "https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg",
  "price": 350,
  "ingredients": ["Оливковое масло", "Лимонный сок", "Чеснок", "Помидоры", "Красный лук", "Сыр фета", "Маслины"]
}, {
  "id": "X2aQ7cvkd",
  "name": "Маффины с голубикой и мускатным орехом",
  "description": "Культовая ягода, которую научились производить круглый год, в сочетании с рыхлым тестом — это абсолютно беспроигрышный вариант. Маффины с голубикой стали популярным десертом в Англии и Америке, хотя происхождение их французское. Да и вообще эти маленькие сладкие кексы, какими мы их знаем сейчас, задумывались как обычный хлеб и на вкус были нейтральны.",
  "image": "https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg",
  "price": 170,
  "ingredients": ["Сливочное масло", "Пшеничная мука", "Голубика", "Ванильный экстракт", "Мускатный орех"]
}, {
  "id": "nk3zy1pf8",
  "name": "Азу по‑татарски",
  "description": "Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.",
  "image": "https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg",
  "price": 270,
  "ingredients": ["Говядина", "Соленые огурцы", "Картофель", "Мясной бульон", "Чеснок"]
}, {
  "id": "b7k2U13fd",
  "name": "Жареный рис с яйцом по‑китайски",
  "description": "Жареный рис — довольно распространенный ингредиент блюд восточноазиатской кухни — готовить, в сущности, можно из остатков вчерашнего ужина. Только хорошо остывший, заранее сваренный рис, в идеале простоявший всю ночь в холодильнике, при попадании в раскаленный вок не расползется до состояния каши и не превратит содержимое сковородки в неповоротливый бесформенный ком.",
  "image": "https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg",
  "price": 240,
  "ingredients": ["Круглый рис", "Мини цукини", "Тертый имбирь", "Грибы шиитаке", "Соевый соус", "Кунжутное масло"]
}];
},{}]},{},["bpEP"], null)
//# sourceMappingURL=/goit-js-hw-10-food-service/menu.c617373e.js.map