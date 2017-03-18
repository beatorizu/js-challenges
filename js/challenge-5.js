function count_negative(M) {
  var n_count = 0;
  M.map(
    function (row) {
      n_count += row.filter(
        function (item) {
          return item < 0;
        }
      ).length;
    }
  );
  return n_count;
}
