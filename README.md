# Test-Application-Web-FullStack-Teach-r

Backend server runs on local connection     : http://192.168.1.56:8000/
Frontend server runs on local connection    : http://192.168.1.56:19000/

I have successfully created the backend server with Symfony 4 and WAMP server to run PHP code
The database is created with MySQL using doctrine to migrate from symfony to mysql sub folder

The backend server server has three controllers
    APIController                           : common functions to handle mysql data
    TeachrController extends APIController  : handle users data
    StatsController extends APIController   : handle statistisques data
    
Routes to handle users data : GET, POST and PUT
Routes to handle stats data : GET

I have successfully created the frontend client model as presented with the test, except for the collapsing bar
There are essentially three components nested under the App component.
    Header component
    CarouselCards component
    StatsData component
    
The Header contains the title, and the StatsData contains the number of people subscribed (present in database)
The CarouselCards contains the information of the top 10 subscribers - (Name)
The StatsData contains the number of subscribers

Thus, the issue of not displaying the data in th carousel has been finally resolved

Further developments could be made to improve the application with extra features
