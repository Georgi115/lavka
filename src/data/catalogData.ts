import food from "../images/catalog/food.jpg";
import vegetables from "../images/catalog/vegetables.jpg";
import milk from "../images/catalog/milk.jpg";
import bread from "../images/catalog/bread.jpg";
import water from "../images/catalog/water.jpg";
import snacks from "../images/catalog/snacks.jpg";
import meat from "../images/catalog/meat.jpg";
import freezing from "../images/catalog/freezing.jpg";
import zoj from "../images/catalog/zoj.jpg";
import grocery from "../images/catalog/grocery.jpg";
import children from "../images/catalog/children.jpg";
import animals from "../images/catalog/animals.jpg";
import home from "../images/catalog/home.jpg";
import medical from "../images/catalog/medical.jpg";
import mainMenu from "../images/mainBlock/mainMenu.jpg";
import deserty from "../images/mainBlock/deserty.jpg";
import fructy from "../images/mainBlock/fructy.jpg";
import ovoshy from "../images/mainBlock/ovoshy.jpg";
import milks from "../images/mainBlock/milk.jpg";
import chees from "../images/mainBlock/chees.jpg";
import kefir from "../images/mainBlock/kefir.jpg";
import igurt from "../images/mainBlock/igurt.jpg";
import molokoDets from "../images/mainBlock/molokoDets.jpg";
import baton from "../images/mainBlock/baton.jpg";
import bulka from "../images/mainBlock/bulka.jpg";
import hlebcy from "../images/mainBlock/hlebcy.jpg";
import voda from "../images/mainBlock/voda.jpg";
import soki from "../images/mainBlock/soki.jpg";
import gazirovka from "../images/mainBlock/gazirovka.jpg";
import chai from "../images/mainBlock/chai.jpg";
import energetik from "../images/mainBlock/energetiki.jpg";
import sneki from "../images/mainBlock/sneki.jpg";
import shocolad from "../images/mainBlock/shocolad.jpg";
import vafli from "../images/mainBlock/vafli.jpg";
import orehy from "../images/mainBlock/orehy.jpg";
import pastila from "../images/mainBlock/pastila.jpg";
import varenie from "../images/mainBlock/varenie.jpg";
import ledency from "../images/mainBlock/ledency.jpg";
import myso from "../images/mainBlock/myso.jpg";
import kolbasa from "../images/mainBlock/kolbasa.jpg";
import ryba from "../images/mainBlock/ryba.jpg";
import konservy from "../images/mainBlock/konservy.jpg";
import morozhenoe from "../images/mainBlock/morozhenoe.jpg";
import pelmeni from "../images/mainBlock/pelmeni.jpg";
import mozdeserty from "../images/mainBlock/morozdeserty.jpg";
import pizza from "../images/mainBlock/pizza.jpg";
import mozryba from "../images/mainBlock/morozryba.jpg";
import led from "../images/mainBlock/led.jpg";
import nomyso from "../images/mainBlock/nomyso.jpg";
import vkusno from "../images/mainBlock/vkusno.jpg";
import vodainapitki from "../images/mainBlock/vodainapitki.jpg";
import sport from "../images/mainBlock/sport.jpg";
import gluten from "../images/mainBlock/gluten.jpg";
import makarony from "../images/mainBlock/makarony.jpg";
import hlopia from "../images/mainBlock/hlopia.jpg";
import kofe from "../images/mainBlock/kofe.jpg";
import maslo from "../images/mainBlock/maslo.jpg";
import konservybak from "../images/mainBlock/konservybak.jpg";
import pitanie from "../images/mainBlock/pitanie.jpg";
import detvoda from "../images/mainBlock/detvoda.jpg";
import gigiena from "../images/mainBlock/gigiena.jpg";
import cat from "../images/mainBlock/cat.jpg";
import dog from "../images/mainBlock/dog.jpg";
import gigienado from "../images/mainBlock/gigienado.jpg";
import bumaga from "../images/mainBlock/bumaga.jpg";
import uborka from "../images/mainBlock/uborka.jpg";
import gotovka from "../images/mainBlock/gotovka.jpg";
import melochi from "../images/mainBlock/melochi.jpg";
import batareyka from "../images/mainBlock/batareyka.jpg";
import odeshda from "../images/mainBlock/odeshda.jpg";
import apteka from "../images/mainBlock/apteka.jpg";
import shop from "../images/mainBlock/shop.jpg";
import kolgotki from "../images/mainBlock/colgotky.jpg";
import tusa from "../images/mainBlock/tusa.jpg";
import school from "../images/mainBlock/school.jpg";
import yagody from "../images/mainBlock/yagody.jpg";

export const catalogDate = [
  {
    image: food,
    category: "Готовая еда",
    subcategories: [
      {
        name: "Основное меню",
        image: mainMenu,
      },
      { name: "Выпечка и десерты", image: deserty },
    ],
    active: false,
    dropActive: false,
  },
  {
    image: vegetables,
    category: "Овощной прилавок",
    subcategories: [
      { name: "Овощи,грибы и зелень", image: ovoshy },
      { name: "Фрукты и ягоды", image: fructy },
    ],
    active: false,
    dropActive: false,
  },
  {
    image: milk,
    category: "Молочный прилавок",
    subcategories: [
      { name: "Молоко, масло и яйца", image: milks },
      { name: "Сыры", image: chees },
      { name: "Кефир, сметана, творог", image: kefir },
      { name: "Йогурты и десерты", image: igurt },
      { name: "Молочное для детей", image: molokoDets },
    ],
    active: false,
    dropActive: false,
  },
  {
    image: bread,
    category: " Булочная",
    subcategories: [
      { name: "Хлеб", image: baton },
      { name: "Выпечка", image: bulka },
      { name: "Хлебцы", image: hlebcy },
    ],
    active: false,
    dropActive: false,
  },
  {
    image: water,
    category: "Вода и напитки",
    subcategories: [
      { name: "Вода", image: voda },
      { name: "Соки и морсы", image: soki },
      { name: "Газировка", image: gazirovka },
      { name: "Холодный чай и кофе", image: chai },
      { name: "Энергетики и пиво", image: energetik },
    ],
    active: false,
    dropActive: false,
  },
  {
    image: snacks,
    category: "Сладкое и снеки",
    subcategories: [
      { name: "Снеки", image: sneki },
      { name: "Шоколад и конфеты", image: shocolad },
      { name: "Торты, печенье, вафли", image: vafli },
      { name: "Сухофрукты и орехи", image: orehy },
      { name: "Пастила и мармелад", image: pastila },
      { name: "Варенье, мёд и пасты", image: varenie },
      { name: "Леденцы и жвачка", image: ledency },
    ],
    active: false,
    dropActive: false,
  },
  {
    image: meat,
    category: "  Мясо, птица, рыба",
    subcategories: [
      { name: "Мясо и птица", image: myso },
      { name: "Колбаса и сосиски", image: kolbasa },
      { name: "Рыба и морепро­дукты", image: ryba },
      { name: "Консервы", image: konservy },
    ],
    active: false,
    dropActive: false,
  },
  {
    image: freezing,
    category: "Заморозка",
    subcategories: [
      { name: "Мороженое", image: morozhenoe },
      { name: "Пельмени и вареники", image: pelmeni },
      { name: "Овощи и ягоды", image: yagody },
      { name: "Десерты", image: mozdeserty },
      { name: "Полуфабрикаты", image: pizza },
      { name: "Рыба и морепро­дукты", image: mozryba },
      { name: "Лёд", image: led },
    ],
    active: false,
    dropActive: false,
  },
  {
    image: zoj,
    category: "Здоровый образ жизни",
    subcategories: [
      { name: "Без мя­са и мо­ло­ка", image: nomyso },
      { name: "Вкусно и полезно", image: vkusno },
      { name: "Вода и напитки", image: vodainapitki },
      { name: " Спорт", image: sport },
      { name: "Без глю­те­на", image: gluten },
    ],
    active: false,
    dropActive: false,
  },
  {
    image: grocery,
    category: "Бакалея",
    subcategories: [
      { name: "Макароны, крупы и мука", image: makarony },
      { name: "Хлопья и мюсли", image: hlopia },
      { name: "Чай и кофе", image: kofe },
      { name: "Масло, соусы, специи", image: maslo },
      { name: "Консервы", image: konservybak },
    ],
    active: false,
    dropActive: false,
  },
  {
    image: children,
    category: "Для детей",
    subcategories: [
      { name: "Питание", image: pitanie },
      { name: "Вода и напитки", image: detvoda },
      { name: "Гигиена и уход", image: gigiena },
    ],
    active: false,
    dropActive: false,
  },
  {
    image: animals,
    category: "Для животных",
    subcategories: [
      { name: "Для кошек", image: cat },
      { name: "Для собак", image: dog },
    ],
    active: false,
    dropActive: false,
  },
  {
    image: home,
    category: "Дом, милый дом",
    subcategories: [
      { name: "Гигиена", image: gigienado },
      { name: "Бумага и салфетки", image: bumaga },
      { name: "Уборка и стирка", image: uborka },
      { name: "Для готовки и хранения", image: gotovka },
      { name: "Полезные мелочи", image: melochi },
      { name: "Батарейки и лампочки", image: batareyka },
      { name: "Для одежды и обуви", image: odeshda },
    ],
    active: false,
    dropActive: false,
  },
  {
    image: medical,
    category: "Очень надо",
    subcategories: [
      { name: "Аптеч­ка", image: apteka },
      { name: "Магазин Яндекса", image: shop },
      { name: "Колгот­ки и носки", image: kolgotki },
      { name: "Всё для вечеринки", image: tusa },
      { name: "Для шко­лы и офи­са", image: school },
    ],
    active: false,
    dropActive: false,
  },
];
