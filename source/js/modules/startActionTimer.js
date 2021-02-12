
export function startActionTimer (dedline, daysIDCSS, hoursIDCSS, minutesIDCSS,secondsIDCSS) {
    
    setActionDate(dedline, daysIDCSS, hoursIDCSS, minutesIDCSS,secondsIDCSS);
    let intervalID = setInterval(() =>setActionDate(dedline, daysIDCSS, hoursIDCSS, minutesIDCSS,secondsIDCSS), 1000);
    if(setActionDate(dedline, daysIDCSS, hoursIDCSS, minutesIDCSS,secondsIDCSS)===null) {
        clearInterval(intervalID)
    }

    function setActionDate(endtime, daysID, hoursID, minutesID, secondsID){
        const [day, hour, minute, second] = getArrayElementsByID(daysID, hoursID, minutesID, secondsID);
        const {totalSeconds, days, hours, minutes, seconds} = getActionTime(endtime);
        if (totalSeconds==0)return null;
        day.innerHTML=`${days}`;
        hour.innerHTML=`${hours}`;
        minute.innerHTML=`${minutes}`;
        second.innerHTML=`${seconds}`;
    }
    

    function getArrayElementsByID(...arr){
        return arr.map(item =>{
            return document.getElementById(item);
         })
     }
     

    function getActionTime(endtime){
        // if (!/\d{4}-\d{2}-\d{2}/.test(endtime)){
        //     console.error('The parameter must be a string in the format "2021-05-06"');
        // }
        const totalSeconds = Math.floor((new Date(endtime)-new Date())/1000);
        const days = convertTime(Math.floor(totalSeconds/(3600*24)));
        const hours = convertTime(Math.floor((totalSeconds/3600)%24));
        const minutes = convertTime(Math.floor((totalSeconds/60)%60));
        const seconds = convertTime(Math.floor(totalSeconds%60));
    
        return {totalSeconds, days, hours, minutes, seconds};
    }
    
    function convertTime(time){
        return time>=10 ? `${time}` : `0${time}`;
    }
    
    
    
    

}





