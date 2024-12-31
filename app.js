const arr = [10, 20, 30, 40, 50];

function mySlice(arr, start = 0, end = arr.length) {
  if (start < 0) start = Math.max(arr.length + start, 0);
  if (end < 0) end = Math.max(arr.length + end, 0);
  end = Math.min(end, arr.length);
  const newArr = [];

  for (let i = start; i < end; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log("mySlice " + mySlice(arr, 1, 3));

function myIndexOf(arr, item, from = 0) {
  if (from < 0) {
    from = Math.max(arr.length + from, 0);
  }

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}

console.log("myIndexOf " + myIndexOf(arr, 30));
console.log("myIndexOf " + myIndexOf(arr, 30, 3));
console.log("myIndexOf " + myIndexOf(arr, 50, -2));
console.log("myIndexOf " + myIndexOf(arr, 60));

function myIncludes(arr, item, from = 0) {
  if (from < 0) {
    from = Math.max(arr.length + from, 0);
  }
  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
}

console.log("myIncludes " + myIncludes(arr, 30));
console.log("myIncludes " + myIncludes(arr, 30, 3));
console.log("myIncludes " + myIncludes(arr, 50, -2));
console.log("myIncludes " + myIncludes(arr, 60));
