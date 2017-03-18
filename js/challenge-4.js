function ascend(head_index, list) {
  if (head_index < list.length && head_index >= 0) {
    var new_list = [];
    return new_list.concat(list[head_index], list.slice(0, head_index), list.slice(head_index + 1));
  }
}
