export const arrayOfObjectsToCSVData = (data: object[]) => {
  var finalArray: object[] = [];
  data?.forEach((item, index) => {
    let dataArray = Object.entries(item);
    if (index === 0) {
      let KeyMap = new Map(dataArray);
      finalArray.push([...KeyMap.keys()]);
    }

    let ValueMap = new Map(dataArray);
    finalArray.push([...ValueMap.values()]);
  });

  return finalArray;
};
