function sum_items(list_items) {
  var sum = 0;
  list_items.map(
    function (item) {
      for (var key in item) {
        sum += item[key];
      }
    }
  );
  return sum;
}
