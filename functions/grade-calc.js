// student score, total possible score
// 15/20 >> return string >> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeReport = function (studentScore, totalPossibleScore) {

    let gradePercentage = studentScore / totalPossibleScore
    let newGradePercentage = gradePercentage * 100
    let gradeLetter = undefined

    if (newGradePercentage >= 90 && newGradePercentage <= 100) {
        gradeLetter = 'A'
    } else if (newGradePercentage >= 80 && newGradePercentage <= 89) {
        gradeLetter = 'B'
    } else if (newGradePercentage >= 70 && newGradePercentage <= 79) {
        gradeLetter = 'C'
    } else if (newGradePercentage >= 60 && newGradePercentage <= 69) {
        gradeLetter = 'D'
    } else if (newGradePercentage >= 0 && newGradePercentage <= 59) {
        gradeLetter = 'F'
    } else {
        gradeLetter = 'ERROR, DOES NOT COMPUTE'
    }

    return `Your final score: ${gradeLetter} (${newGradePercentage}%)!` 
}

let finalReport = gradeReport(-1, 50)
console.log(finalReport)