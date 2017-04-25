
const get30DegRandom = () =>{
     return (Math.random() > 0.5 ? '' : '-') + ~~(Math.random() * 30);
}
export  default get30DegRandom;
