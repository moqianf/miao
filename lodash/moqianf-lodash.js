var moqianf = {
  chunk: function chunk(array, size) {
    var newarray = []
    var ary = []
    for (var i = 0; i < array.length; i++) {
      var n = i + 1
      ary.push(array[i])
      if (n % size == 0 || i == array.length - 1) {
        newarray.push(ary)
        ary = []
      }
    }
    return newarray
  },

  compact: function compact(array) {
    var ary = []
    array.forEach(item => {
      if (item) {
        ary.push(item)
      }
    })
    return ary
  },

  difference: function difference(array, values) {
    var ary = []
    for (var i = 0; i < array.length; i++) {
      ary.push(array[i])
      for (var j = 0; j < values.length; j++) {
        if (array[i] == values[j]) {
          ary.splice(i)
        }
      }
    }
    return ary
  },

  differenceBy: function differenceBy() {

  },

  differenceWith: function differenceWith() {

  },

  drop: function drop(array, n) {
    var newarray = []
    if (n == undefined) {
      n = 1
    }
    for (var i = 0; i < array.length; i++) {
      newarray.push(array[i])
      if (i + 1 <= n) {
        newarray = []
      }
    }
    return newarray
  },

  dropRight: function dropRight(array, n) {
    if (n == undefined) {
      n = 1
    }
    var newarray = []
    for (var i = 0; i < array.length - n; i++) {
      newarray.push(array[i])
    }

    return newarray
  },

  dropRightWhile: function dropRightWhile(array, [predicate = _.identity]) {

  },

  dropWhile: function dropWhile() {

  },

  fill: function fill(array, value, start, end) {
    if (start == undefined) {
      start = 0
    }
    if (end == undefined) {
      end = array.length
    }
    for (var i = 0; i < array.length; i++) {
      if (i >= start && i < end) {
        array[i] = value
      }
    }
    return array
  },

  findIndex: function findIndex() {

  },

  findLastIndex: function findLastIndex() {

  },

  flatten: function flatten() {

  },

  flattenDeep: function flattenDeep() {

  },

  flattenDepth: function flattenDepth() {

  },

  fromPairs: function fromPairs() {

  },

  head: function head(array) {
    for (var i = 0; i < array.length; i++){
      return array[0]
    }
  },

  indexOf: function indexOf(array, value, fromIndex) {
    if (fromIndex == undefined) {
      fromIndex = 0
    }
    while (fromIndex < 0) {
      fromIndex = array.length + fromIndex
      for (var i = fromIndex; i >= 0; i--) {
        if (array[i] == value) {
          return i
        }
      }
    }
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },

  initial: function initial(array) {
    var n = array.length - 1
    var a = array.slice(0, n)
    return a
  },

  intersection: function intersection(...Array) {
    var newarray = []

  },

  join: function join(array, separator) {
    var string = ''
    for (var i = 0; i < array.length; i++) {
      if (i === array.length - 1) {
        string = string + array[i]
        return string
      }
      string = string + array[i] + separator
    }
  },

  last: function last(array) {
    for (var i = 0; i < array.length; i++) {
      var a = array[i]
    }
    return a
  },

  lastIndexOf: function lastIndexOf(array, value, fromIndex) {
    if (fromIndex == undefined) {
      fromIndex = array.length-1
    }
    while (fromIndex < 0) {
      fromIndex = Math.abs(fromIndex)
      for (var i = fromIndex; i < array.length ; i++) {
        if (array[i] == value) {
          return i
        }
      }
    }
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  }
















}












