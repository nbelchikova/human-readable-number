module.exports = function toReadable (number) { 
    function oneToHundred (n)  {
        switch (n) {
            case 1:
                return 'one';
                break;
            case 2:
                return 'two';
                break;
            case 3:
                return 'three';
                break;
            case 4:
                return 'four';
                break;
            case 5:
                return 'five';
                break;
            case 6:
                return 'six';
                break;
            case 7:
                return 'seven';
                break;
            case 8:
                return 'eight';
                break;
            case 9:
                return 'nine';
                break;
            case 0:
                return 'zero';
                break;
            case 10:
                return 'ten';
                break;
            case 11:
                return 'eleven';
                break;
            case 12:
                return 'twelve';
                break;
            case 13:
                return 'thirteen';
                break;
            case 14:
                return 'fourteen';
                break;
            case 15:
                return 'fifteen';
                break;
            case 16:
                return 'sixteen';
                break;
            case 17:
                return 'seventeen';
                break;
            case 18:
                return 'eighteen';
                break;
            case 19:
                return 'nineteen';
                break;
            case 20:
                return 'twenty';
                break;
            case 30:
                return 'thirty';
                break;
            case 40:
                return 'forty';
                break;
            case 50:
                return 'fifty';
                break;
            case 60:
                return 'sixty';
                break;
            case 70:
                return 'seventy';
                break;
            case 80:
                return 'eighty';
                break;
            case 90:
                return 'ninety';
                break;
            default:
                return 'What?';     

        }
    };    
        if (number===0||number===1||number===2 ||number===3 ||number===4 ||number===5 ||number===6 ||number===7 ||number===8 ||number===9 ||number===10 ||number===11 ||number===12 ||number===13 ||number===14 ||number===15 ||number===16 ||number===17 ||number===18 ||number===19 ||number===20 ||number===30 ||number===40 ||number===50 ||number===60 ||number===70 ||number===80 ||number===90 ) {

            return oneToHundred(number);
        } else if(number>20 && number<100) {
            return oneToHundred(number-number%10)+ " " + oneToHundred(number%10);
        } else if (number>=100 && number%100===0) {
            return oneToHundred(number/100)+ " hundred";
        } else if((number>100 && number<110) || (number>200 && number<210)|| (number>300 && number<310) || (number>400 && number<410) || (number>500 && number<510) || (number>600 && number<610) || (number>700 && number<710) || (number>800 && number<810)||(number>900 && number<910) ) {
            return oneToHundred(Math.floor(number/100))+ " hundred " + oneToHundred(number%100);
        } else if ((number>=110 && number<=120) || (number>=210 && number<=220)|| (number>=310 && number<=320) || (number>=410 && number<=420) || (number>=510 && number<=520) || (number>=610 && number<=620) || (number>=710 && number<=720) || (number>=810 && number<=820)||(number>=910 && number<=920)) {
            return oneToHundred(Math.floor(number/100))+ " hundred " + oneToHundred(number%100);
        } else if (number>100 && number%10===0) {
            return oneToHundred(Math.floor(number/100))+ " hundred " + oneToHundred(number%100); 
        } else {
            return oneToHundred(Math.floor(number/100))+ " hundred " + oneToHundred(number%100-number%10) +" " +oneToHundred(number%10);
        }
   
    

       
   
};




