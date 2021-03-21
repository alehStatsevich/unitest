import {StudentType} from "../02/02";

// export function sum (a:number, b: number){
//     return a+b
// }
//
// export function multiply (a:number, b: number){
//     return a*b
// }
// export function sumRest (...nums:Array<number>){
//     return nums.reduce((acc,el) => acc+el)
//
//
//     export function addFriends(students: Array<StudentType>) {
//         return students.map(student => ({
//             ...student,
//             friends: students
//                 .filter(s => s.name !== student.name)
//                 .map(s => s.name)
//         }))
//     }}
export function sum1 (...numbers: Array<number>){
    return numbers.reduce((acc, el) => acc+ el)
}
// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "01", если треугольник равнобедренный,
//  - "10", если треугольник равносторонний,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number){
    let result: string
    if(a+b>c&&b+c>a&&a+c>b){
     if(a===b && b===c)  {
         result= "10"
     } else if (a===b || b===c || a===c){
         result = "01"
     } else {
         result = "11"
     }
    }else {
        result = "00"
    }
    return result
}

// 3. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг поместится в
// квадрате и false в противном случае.
export const isSquareGreater =
    (a: number, b: number) => (a/b <= Math.PI/4) ? true: false
// 4. Функция принимает isEvenSumGreater параметром массив чисел.
// Если сумма чисел с чётным индексом больше суммы чисел с нечётными индексами,
// то функция возвращает true. В противном случае - false.
 export const isEvenSumGreater = ( arr: Array<number> ) => {
    const result: Array<number> =
        arr.reduce( ( temp: Array<number>, el, index ) =>

                index % 2 === 0
                    ? [ temp[0] + el, temp[1] ]
                    : [ temp[0], temp[1] + el ],
            [ 0, 0 ] );
    return result[0] >= result[1];
};
// 5. Функция принимает параметром целое число и возвращает
// сумму цифр этого числа
export function getSum (number: number) {
   return  number.toString().split("")
        .reduce((acc, el) =>acc+ Number(el),0)
}
