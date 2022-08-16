
function twoSums(nums: number[], target: number): number[] {
    let i = 0;
    let j = 0;
    let vetResult: Array<number> = [];
    let tam = nums.length;
    let aux = 0;
    let achou = false;
    for (i = 0; i < tam; i++) {
        aux = nums[i];
        for (j = 0; j < tam; j++) {
            if (aux + nums[j] === target && j !== i) {
                vetResult.push(i);
                vetResult.push(j);
                achou = true;
                break;
            }
        }
        if (achou === true) {
            break;
        }
    }
    return vetResult;
};


let nums = [2,5,5,11];
let target = 10;

let result = twoSums(nums, target);
console.log(result);