export const listDonutsAndCalories = (dataDonuts) => {
    dataDonuts.forEach(donut => {
        const calories = donut.nutrition_facts.nutrition.calories;
        console.log(`${donut.name} --> Calorías: ${calories}`);
    });
    console.log("--------------------------------------------------------------------------------------");
}

export const listDonutsAndCarbohydrates = (dataDonuts) => {

    dataDonuts.forEach(donut => {
        const carbohydrate = donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre;
        const sugar = donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars;
        const dailyValue = donut.nutrition_facts.nutrition.carbohydrate.daily_value;
        const amount = donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.amount;
        console.log(`${donut.name} --> ValorDiario: ${dailyValue} --> Cantidad: ${amount} --> Fibra: ${carbohydrate}g --> Azucar: ${sugar}g`);
    })
    console.log("--------------------------------------------------------------------------------------");
}

export const donutsMediumCalories = (dataDonuts) => {
    
    let totalCalories = 0;

    dataDonuts.forEach(donut => {
        const calories = donut.nutrition_facts.nutrition.calories;
        totalCalories += calories;
    });

    const mediumCalories = totalCalories / dataDonuts.length;
    console.log(`La media de calorías de todos los donuts es: ${mediumCalories}`);
    console.log("--------------------------------------------------------------------------------------");
}

export const sumFatSaturated = (dataDonuts) => {
    
    let totalSaturatedFat = 0;

    dataDonuts.forEach(donut => {
        const saturatedFat = donut.nutrition_facts.nutrition.fat.fat_type.saturated;
        totalSaturatedFat += parseFloat(saturatedFat.replace(/[^\d.]/g, ''));
    });

    console.log(`La suma de grasas saturadas de todos los donuts es: ${totalSaturatedFat}g`);
    console.log("3  --------------------------------------------------------------------------------------");
}