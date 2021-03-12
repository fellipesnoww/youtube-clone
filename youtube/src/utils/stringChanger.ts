function changeString(index: number,text: string): string {    
    var strChange = text.substring(index);    
    var newStr = text.replace(strChange, " ...");    
    return newStr;
  }

export default changeString;