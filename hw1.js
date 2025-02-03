number33 //'number' converted it to a string
null + 3 output:3 //null is 0
for 5 && qwerty output is qwerty //&& evaluates operands from left to right, returnin g immediately with the value of the first falsy operand it encounters
for +'40' + +'2' + hillel output is 42hillel // When adding  a number to a string the interpreter converts number to a string and concatenates both together.
for '10' - 5 === 6 output is false // the operands are of different types
for true + false output is true // True is considered as 1. whereas false is zero. therefore In Boolean algebra True + False=1+0=1
for '4px' - 3 output is NaN // string is not converted to a number, so string minus numebr results in NaN
for '4' - 3 output is 1 // operator - only performs subtraction regardless of the type of operands
for '6' + 3 ** 0 output is 61 // first the 3 is raised to the power of 0 which is 1, then '6' + 1 gives 61
for 12 / '6' output is 2 // operator /  performs division regardless of the type of operands
for '10' + (5 === 6) output is false // 5 is not equal to 6 which is false, and + perform concantenation
for null == '' output is false // because null is not equeal to quotes
3 ** (9 / 3) output is 27 // first we devide 9/3, then we perform exponentiation 3*3*3
git push'false' == git push'true' output is true // double marks exclamation are used to cast a value in a boolean, so 0 == 1 is true
0 || '0' && 1 output is 1 //logical OR returns 0 when comparing 0 to 0, AND return 1 because one of the values is true 
(+null == false) < 1 output is false // +null is 0, so 0 == false is true, and 1 > 1 is false 
false && true || true output is true // false AND true returns true, true OR true returns true 
false && (false || true) output is false // false OR true returns true, false AND true returns false because with && the result can be true is all operands are true 
(+null == false) < 1 ** 5 output is false //(+null == false) is 0, 0 < 1 is false (0), 0 ** 5 is null (false) 
