

var merge = function(nums1, m, nums2, n) {
    let arr1 = nums1.slice(0,m)
    return arr1.concat(nums2.slice(0,n))
};
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log([1,2,3]+[1,1,1]);