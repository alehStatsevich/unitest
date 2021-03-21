import {student, StudentType} from "../02/02";

export const sum=(a: number, b: number) => {
    return a + b;
}

export const addSkill=(student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getDate(),
        title: skill
    })
}

export  function  makeStudentActive (student: StudentType) {
    student.isActive=true
}

export const studentLiveIn = (student: StudentType, cityName: string) => {

    return student.address.city.title === cityName;
}




