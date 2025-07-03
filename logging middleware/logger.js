export const logger = (message, data =  null) => 
  {
    const timestamp = new Date().toISOString();
    console.log([logger] ${timestamp}: ${message} , data);
}

