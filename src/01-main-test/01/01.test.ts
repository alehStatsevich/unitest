// import {multiply, sum, sumRest} from "./01";
//
// let numOne: number
// let numTwo: number
// beforeEach(()=>{
//     numOne=5
//     numTwo=10
// })
//
//
// test("multiply", () => {
//     const result = multiply(numOne,numTwo)
//   expect( multiply(numOne,numTwo)).toBe(50)
// })
//
//
// test("sum", () => {
//     const result = sum(numOne,numTwo)
//     expect( sum(numOne,numTwo)).toBe(15)
// })
//
//
//
// test(" sumRest", () => {
//     const result =  sumRest(numOne,numTwo,35)
//     expect( result).toBe(50)
// })

import {getSum, getTriangleType, isEvenSumGreater, isSquareGreater, sum1} from "./01";

test("get sum of numbers",() => {
    expect(sum1(1,2,3,4,5)).toBe(15)
})
// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "01", если треугольник равнобедренный,
//  - "10", если треугольник равносторонний,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.
test("get Triangle Type", ()=> {
    expect(getTriangleType(1,1,1,)).toBe("10")
    expect(getTriangleType(3, 3, 2)).toBe("01")
    expect(getTriangleType(5,4,3)).toBe("11")
    expect(getTriangleType(10, 5,5)).toBe("00")
})
// 3. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг поместится в
// квадрате и false в противном случае.
test("is Square Greater Than Circle", ()=> {
    const sCr = 3.14
    const sSq = 4
    const result = isSquareGreater(sCr, sSq)
    expect(result).toBe(true)
})
// 4. Функция принимает isEvenSumGreater параметром массив чисел.
// Если сумма чисел с чётным индексом больше суммы чисел с нечётными индексами,
// то функция возвращает true. В противном случае - false.
test("is Even Sum Greater", ()=> {
    expect(isEvenSumGreater([1, 100, 2, 200])).toBe(false)
    expect(isEvenSumGreater([100, 1, 200, 2])).toBe(true)
})
// 5. Функция принимает параметром целое число и возвращает
// сумму цифр этого числа
test("get sum", () => {
    expect(getSum(2000)).toBe(2)
    expect(getSum(9999)).toBe(36)
    expect(getSum(1111)).toBe(4)
})
