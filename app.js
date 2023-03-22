// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
  // 以_符號分割成陣列
  // idx > 0的情況 首字大寫
  // 最後再組成字串
  return str.split("_").map((el, idx) => {
    if (idx != 0) {
      return el.replace(el[0], el[0].toUpperCase());
    }
    return el;
  }).join('');
}

console.log(toCamelCase("book")) // book
console.log(toCamelCase("book_store")) // bookStore
console.log(toCamelCase("get_good_score")) // getGoodScore