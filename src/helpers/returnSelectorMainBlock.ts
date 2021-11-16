export const returnSelectorMainBlock = (sub: string): string => {
  switch (sub.trim()) {
    case "Готовая еда":
      return "mainBlockStyleFood";
    case "Овощной прилавок":
      return "mainBlockStyleVegetables";
    case "Молочный прилавок":
      return "mainBlockStyleMilk";
    case "Булочная":
      return "mainBlockStyleBread";
    case "Вода и напитки":
      return "mainBlockStyleWater";
    case "Сладкое и снеки":
      return "mainBlockStyleSweet";
    case "Мясо, птица, рыба":
      return "mainBlockStyleMeat";
    case "Заморозка":
      return "mainBlockStyleFreezing";
    case "Здоровый образ жизни":
      return "mainBlockStyleHealthy";
    case "Бакалея":
      return "mainBlockStyleGrocery";
    case "Для детей":
      return "mainBlockStyleChildren";
    case "Для животных":
      return "mainBlockStyleAnimals";
    case "Дом, милый дом":
      return "mainBlockStyleHome";
    case "Очень надо":
      return "mainBlockStyleNeeded";
    default:
      return "";
  }
};
