# Test-Application-Web-FullStack-Teach-r

Backend server runs on local connection : http://172.20.10.6:8000/
Front server runs on local connection   : http://172.20.10.6:19002/

I have successfully created the backend server with Symfony 4 and WAMP server to run PHP code
The database is created using MySQL using doctrine to migrate from symfony to mysql sub folder

The backend server server has three controllers
    APIController                           : common functions to handle mysql data
    TeachrController extends APIController  : handle users data
    StatsController extends APIController   : handle statistisques data
    
Routes to handle users data : GET, POST and PUT
Routes to handle stats data : GET
