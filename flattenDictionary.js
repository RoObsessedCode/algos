function flattenDictionary(dict) {
  // your code goes here
  let result = {}
  const highLevelKeys = Object.keys(dict)

  for (let key of highLevelKeys) {
    if (typeof dict[key] === typeof {}) {
      let newDict = flattenDictionary(dict[key])
      let newDictKeys = Object.keys(newDict)
      for(let innerKey of newDictKeys) {
        let newKey = ""

        if (innerKey === "") {
          newKey = key
        } else if (key === "") {
          newKey = innerKey
        } else {

          newKey = key + '.' + innerKey
        }
        result[newKey] = newDict[innerKey]
      }


    } else {
      result[key] = dict[key]
    }
  }
  return result

 }
