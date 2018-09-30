module.exports = function check(str, bracketsConfig) {
     
    var stoc;
    var copystr = str;

    for (var i=0; i<bracketsConfig.length; i++){
        stoc = bracketsConfig[i][0]+bracketsConfig[i][1];
     
        while (copystr.includes(stoc)){
            i = copystr.indexOf(stoc);
            copystr = copystr.substring(0, i) + copystr.substring(i + 2);
            i = -1;
            }
         
    }
    
    return (!copystr.length);
    };
   


