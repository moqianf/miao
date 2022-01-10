var moqianf = {
  chunk: function chunk(array, size) {
    var newarray = []
    var ary = []
      var p = array.length
      var n = p / size >> 0
    for (var i = 0; i < array.length; i++) {
      ary.push(array[i])
        if (((i + 1) % n) === 0) {
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

  drop: function drop(array , n) {
    var newarray = []
    if (n == undefined) {
      n = 1
    }
    for (var i = 0; i < array.length; i++) {
      newarray.push(array[i])
      if (i+1 <= n) {
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
    for (var i = 0; i < array.length-n; i++) {
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
        array[i] =value
      }
    }
   return array
  }



















}




