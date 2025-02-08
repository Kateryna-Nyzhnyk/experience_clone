'number' + 3 + 3 output is number33 //'number' converted it to a string
null + 3 output is 3 //null is 0
5 && "qwerty" output is qwerty //&& selects one of their operands, in this case it returns querty as it uses the logic: if 5 is true, select querty, otherwise select 5, but non of them is true or false
+'40' + +'2' + hillel output is 42hillel // When adding  a number to a string the interpreter converts number to a string and concatenates both together.
'10' - 5 === 6 output is false // first we execute the maths operation, the output is 5, then compare 5 === 6 is false, because === means strict quality
true + false output is true // True is considered as 1. whereas false is zero. therefore In Boolean algebra True + False=1+0=1
'4px' - 3 output is NaN // the maths operation of 4px - 3 returns not a number as a result
'4' - 3 output is 1 // operator - only performs subtraction regardless of the type of operands
'6' + 3 ** 0 output is 61 // first the 3 is raised to the power of 0 which is 1, then '6' + 1 gives 61
12 / '6' output is 2 // operator /  performs division regardless of the type of operands
'10' + (5 === 6) output is false // 5 is not equal to 6 which is false, and + perform concantenation
null == '' output is false // null does not equal true or false, and empty string is "falsy", == checks whether its two operands are equal and can return true only if both operands have the same value
3 ** (9 / 3) output is 27 // first we devide 9/3, then we perform exponentiation 3*3*3
!!'false' == !!'true' output is true // double marks exclamation are used to cast a value in a boolean, !!'false' equals true, !!'true' equals true
0 || '0' && 1 output is 1 //first priority is &&, it compares '0' && 1, as '0' string is true the output is true, 0 || 1 is true because for Or one of the statements can be true 
(+null == false) < 1 output is false // +null is 0, so 0 == false is true, and 1 > 1 is false 
false && true || true output is true // false AND true returns false, false OR true returns true because for Or one of the statements can be true
false && (false || true) output is false // false OR true returns true, false AND true returns false because with && the result can be true is all operands are true 
(+null == false) < 1 ** 5 output is false //(+null == false) is true, next is the maths operation 1 ** 5 is 1, then comparison 1 < 1 is false
