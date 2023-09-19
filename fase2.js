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
    console.log("--------------------------------------------------------------------------------------");
}

export const donutsMediumVitamines = (dataDonuts) => {
    let totalVitaminA = 0;
    let totalVitaminC = 0;
    let totalCalcium = 0;
    let totalIron = 0;

    dataDonuts.forEach(donut => {
        const vitamines = donut.nutrition_facts.nutrition.vitamines;

        vitamines.forEach(vitamin => {
            switch (vitamin.type) {
                case "Vitamin A":
                    totalVitaminA += parseFloat(vitamin.percent);
                    break;
                case "Vitamin C":
                    totalVitaminC += parseFloat(vitamin.percent);
                    break;
                case "Calcium":
                    totalCalcium += parseFloat(vitamin.percent);
                    break;
                case "Iron":
                    totalIron += parseFloat(vitamin.percent);
                    break;
            }
        });
    });

    const mediumVitaminA = totalVitaminA / dataDonuts.length;
    const mediumVitaminC = totalVitaminC / dataDonuts.length;
    const mediumCalcium = totalCalcium / dataDonuts.length;
    const mediumIron = totalIron / dataDonuts.length;

    console.log(`Media de Vitamina A: ${mediumVitaminA}%`);
    console.log(`Media de Vitamina C: ${mediumVitaminC}%`);
    console.log(`Media de Calcio: ${mediumCalcium}%`);
    console.log(`Media de Hierro: ${mediumIron}%`);
    console.log("--------------------------------------------------------------------------------------");
}
