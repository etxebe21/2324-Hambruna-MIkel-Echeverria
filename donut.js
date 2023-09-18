




let maxSugar = result.map(element => {
    element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars = parseInt(element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.slice(0, element.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.length-1));
})
maxSugar  = result.sort((x, y) => y.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars - x.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars);
console.log("Donut con más azúcar: " + maxSugar[0].name);