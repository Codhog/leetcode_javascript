const allAttendees = [392, 123, 34, 1294, 603, 432]
const sessions = {
    "Session1": [123, 603, 392],
    "Session2": [603, 432, 123, 34],
    "Session3": [432, 392, 123, 1294, 34, 603]
}

const findDifference = (totalAttend, sessions) =>{
    let obj = {}
    for(const [sessionName, actualAttenArr] of Object.entries(sessions)){
        obj[sessionName] = findTwoArrayDiff(totalAttend, actualAttenArr)
    }
    return obj
}
//  Shorter Array will gain ? after filter the element of long

//  Shorter Array will gain nothing after filter the  long with no same element

//  this func output the  array  less the  coming people
const findTwoArrayDiff = (totalPeople, comingPeople) =>{

    let newArr = [...totalPeople]

    comingPeople.forEach((comingGuy)=>{
        let comingIndex = totalPeople.indexOf(comingGuy)
        if(comingIndex > -1){
            console.log(newArr);
            newArr.splice(comingIndex,1)
        }
    })
    // return newArr.filter(att => comingPeople.indexOf(att)===-1)
    // console.log(newArr);
    return newArr
}

findDifference(allAttendees, sessions)