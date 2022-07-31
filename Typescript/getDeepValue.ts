export const getDeepValue = (
    obj: TObj,
    firstKey: TFirstKey keyof TObj,
    secondKey: string
  ) => {
    return obj[firstKey][secondKey];
  };
  
  const obj = {
    foo: {
      a: true,
      b: 2,
    },
    bar: {
      c: "12",
      d: 18,
    },
  };
  
  const value = getDeepValue(obj, "foo", "a");
  