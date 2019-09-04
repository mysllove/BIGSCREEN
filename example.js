/**
 * 
 */
    
    
    
    var arrGroup = [2, 6, 6, 2, 55, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 2, 2, 2, 2];

    function mostTimes(arrGroup) {
      var regroup = {};
      var receive;
      for (var i = 0; i < arrGroup.length; i++) {
        const element = arrGroup[i];
        if (!regroup[element]) {
          regroup[element] = 1
        } else {
          regroup[element]++
        }
      }
      for (const key in regroup) {
        if (!receive || regroup[key] > receive.reset) {
          receive = {
            name: key,
            reset: regroup[key]
          }
        }
      } 
      console.log(receive)
    }
    mostTimes(arrGroup)
