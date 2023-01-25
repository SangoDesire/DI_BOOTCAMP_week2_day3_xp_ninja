/**
 * @author ETOUMI Assomou Bertrand Aristide
 * @description DI-Bootcamp-Week1-Day5-ExercicesXPNinja - Grade Average
 */

/*
Hint:
- This Exercise is trickier then the others. You have to think about its structure before you start coding.
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

Create a function called findAvg(gradesList) that takes an argument called gradesList.

Your function must calculate and console.log the average.

If the average is above 65 let the user know they passed

If the average is below 65 let the user know they failed and must repeat the course.
Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
Hint One function must call the other.
*/

function findAvg(gradesList) {
    let sum = 0;
    let average = 0;
    for (const data of gradesList) {
        sum += data;
    }

    average = sum / gradesList.length;

    if (average > 65) {
        console.log("Congrat! You passed.");
    } else {
        console.log("Sorry! You don't passed, you must repeat the course");
    }
}

findAvg([25, 30, 75, 45, 68, 90]);