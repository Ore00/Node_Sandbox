const solution = (A, B, C) => {
    let team, points, size = B.length, maxPoints = [], maxValue = -Infinity;
    let teams = A.reduce((acc, item) => {
        const key = item.split(':')[0]; 
        acc[key] = 0; 
        return acc;
      }, {});;
      

    for(let i = 0; i < size; i++) {
        
         team = B[i].split(':');
         points = C[i].split(':');
         if(points[0] == points[1] ) {
            teams[team[0]] = teams[team[0]] + 2;
            teams[team[1]] = teams[team[1]] + 2;
         }
         if(points[0] > points[1]) {
            teams[team[0]] = teams[team[0]] + 4;
         } 
         if(points[0] < points[1]) {
            teams[team[1]] = teams[team[1]] + 4;
         } 
        
    }

    for (const key in teams) {
        if (teams[key] > maxValue) {
         
          maxValue = teams[key];
          maxPoints = [key];
        } else if (teams[key] === maxValue) {
          
          maxPoints.push(key);
        }
      }

    const keysSet = new Set(maxPoints);
     return A.filter(item => keysSet.has(item.split(':')[0])).map(item => item.split(':')[1])
   
}

exports.solution = solution;