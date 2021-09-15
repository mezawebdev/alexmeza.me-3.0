export default {
    minmaxInt(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    },
    minmaxFloat(min: number, max: number): number {
        return Math.random() * (max - min) + min;
    }
}