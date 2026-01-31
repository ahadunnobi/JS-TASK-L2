let shoppingList = ["Milk", "Eggs", "Bread", "Apples",];
if (!shoppingList.includes("Sugar")) {
  console.log("Don't forget the sugar!");
  shoppingList.push("Sugar");
}
console.log(shoppingList);