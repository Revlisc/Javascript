import { list } from './list';

const randomPick = () => {
    let min = 0;
    let max = list.length - 1;
    return Math.floor(Math.random() * (max - min) + min);
};

export const getRecipe = () => {
    return list[randomPick()];
};