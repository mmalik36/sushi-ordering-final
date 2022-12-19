const dbName='sushi-ordering';
const dbHost='localhost';
const dbPort=27017;
module.exports={
    url:`mogodb://${dbHost}:${dbPort}/${dbName}`
}