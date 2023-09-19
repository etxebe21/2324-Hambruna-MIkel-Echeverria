export const mostSugarDonuts = (dataDonuts) => {

    let mostSugarDonut = dataDonuts.forEach(donut => {
        donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars = 
        donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars.replace(/[^\d]/g, '')      
    })
    
    mostSugarDonut = dataDonuts.sort((x, y) => y.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars 
        - x.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars);
        console.log("1 --------------------------------------------------------------------------------------");
        console.log(`El donut con más azúcar es :  ${mostSugarDonut[0].name}`);

}

export const mostIronDonuts = (dataDonuts) => {

    let mostIronDonut = dataDonuts.forEach(donut => {
        donut.nutrition_facts.nutrition.vitamines[3].percent = 
        donut.nutrition_facts.nutrition.vitamines[3].percent.replace(/%/g, '')      
    })
    
    mostIronDonut = dataDonuts.sort((x, y) => y.nutrition_facts.nutrition.vitamines[3].percent 
        - x.nutrition_facts.nutrition.vitamines[3].percent);
         console.log(`El donut con más hierro es :  ${mostIronDonut[0].name}`);
}

export const mostProteinDonuts = (dataDonuts) => {

    let mostProteinDonut = dataDonuts.forEach(donut => {
        donut.nutrition_facts.nutrition.proteine = 
        donut.nutrition_facts.nutrition.proteine.replace(/[^\d]/g, '')      
    })
    
    mostProteinDonut = dataDonuts.sort((x, y) => y.nutrition_facts.nutrition.proteine
        - x.nutrition_facts.nutrition.proteine);
        console.log(`El donut con más proteina es :  ${mostProteinDonut[0].name}`);
}

export const minFibreDonuts = (dataDonuts) => {

    let minFibreDonut = dataDonuts.forEach(donut => {
        donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre = 
        donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre.replace(/[^\d]/g, '')      
    })
    
    minFibreDonut = dataDonuts.sort((x, y) => y.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre
        + x.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre);
     
    const minFibreDonuts = dataDonuts[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre;

    const minFibreDonutsArray = dataDonuts.filter(donut =>
        donut.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre === minFibreDonuts);

        console.log(`Los donuts con menos fibra son:  ${minFibreDonutsArray.map(donut => donut.name).join(', ')}`);   
        console.log("2 --------------------------------------------------------------------------------------");
}