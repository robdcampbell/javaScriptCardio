function solution(str, ending){
// String method
    //return str.endsWith(ending);

// NOTE -  these are equivelent: 
// let re = /\w+/
// let re = new RegExp('\\w+')

  const re = new RegExp(`\\${ending}$`)
  return re.test(str);
  
  //  return new RegExp(ending+"$", "i").test(str);
}

console.log(solution("swing","ing"));