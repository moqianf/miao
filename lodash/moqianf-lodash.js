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
  }


}




