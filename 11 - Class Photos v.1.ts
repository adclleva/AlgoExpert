/**
 * Class Photos 📸
 * 
 * It's photo day at the local school, and you're the photographer assigned to take class photos.
 * The class that you'll be photographing has an even number of students, and all these students 
 * are wearing red or blue shirts. In fact, exactly half of the class is wearing red shirts, and 
 * the other half is wearing blue shirts. You're responsible for arranging the students in two rows 
 * before taking the photo. Each row should contain the same number of students and should adhere 
 * to the following guidelines:
 * - All students wearing red shirts must be in the same row.
 * - All students wearing blue shirts must be in the same row.
 * - Each student in the back row must be strictly taller than the student directly in front of 
 *   them in the front row.
 * 
 * You're given two input arrays: one containing the heights of all the students with red shirts 
 * and another one containing the heights of all the students with blue shirts. These arrays will 
 * always have the same length, and each height will be a positive integer. Write a function that 
 * returns whether or not a class photo that follows the stated guidelines can be taken.
 * 
 * Note: you can assume that each class has at least 2 students.
 * 
 * Sample Input:
 * redShirtHeights = [5, 8, 1, 3, 4]
 * blueShirtHeights = [6, 9, 2, 4, 5]
 * 
 * Sample Output:
 * true // Place all students with blue shirts in the back row.
 */

export function classPhotos(redShirtHeights: number[], blueShirtHeights: number[]) {
  
  redShirtHeights.sort((a,b) => a - b)
  blueShirtHeights.sort((a,b) => a - b)

  const tallestRed = redShirtHeights[redShirtHeights.length - 1]
  const tallestBlue = blueShirtHeights[blueShirtHeights.length - 1]

  let frontRow, backRow

  if (tallestBlue > tallestRed) {
    backRow = blueShirtHeights
    frontRow = redShirtHeights
  } else if (tallestBlue < tallestRed) {
    backRow = redShirtHeights
    frontRow = blueShirtHeights
  } else if (tallestBlue === tallestRed) {    
    return false;
  }

  if (frontRow && backRow && frontRow.length === backRow.length) {    
    for (let i = 0; i < blueShirtHeights.length; i++) {
      let frontPerson = frontRow[i] 
      let backPerson = backRow[i] 
  
      if (frontPerson === backPerson || frontPerson > backPerson) {
        return false
      }
    }
  }

   return true
}

/**
 * Space O(1)
 *  it is always the same on any input
 * 
 * Time nlogn
 *  because of the sorting of the two arrays
 */