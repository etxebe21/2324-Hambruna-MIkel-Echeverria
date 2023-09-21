

export const buyDonuts = (dataDonuts) => {

    dataDonuts.forEach(donut => {

        console.log(`${donut.name} --> Puedes comprar: ${Math.round(4/donut.ppu)}`);
        console.log(`${donut.name} --> Te sobran: ${(4  % donut.ppu).toFixed(2)}`);
       
        }      
    );

}
