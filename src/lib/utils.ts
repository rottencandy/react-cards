export const sleep = (ms: number) => 
  new Promise(resolve => setTimeout(resolve, ms))

/*
* Shuffle array in-place
* http://en.wikipedia.org/wiki/Fisher-Yates_shuffle#The_modern_algorithm
* https://stackoverflow.com/a/12646864/7683374
*/
export const shuffleArray = <T>(array: T[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
