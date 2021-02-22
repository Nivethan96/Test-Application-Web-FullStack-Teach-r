# Test-Application-Web-FullStack-Teach-r

Backend server runs on local connection : http://172.20.10.6:8000/
Frontend server runs on local connection   : http://172.20.10.6:19002/

I have successfully created the backend server with Symfony 4 and WAMP server to run PHP code
The database is created using MySQL using doctrine to migrate from symfony to mysql sub folder

The backend server server has three controllers
    APIController                           : common functions to handle mysql data
    TeachrController extends APIController  : handle users data
    StatsController extends APIController   : handle statistisques data
    
Routes to handle users data : GET, POST and PUT
Routes to handle stats data : GET

I have successfully created the frontend client model as presented with the test, except for the collapsing bar
There are essentially three components nested under the App component.
    Header component
    CarouselCard component
    StatsData component
    
There is a fourth component purely for testing reasons with user information
    
The header contains the title, and the StatsData contains the number of people subscribed (present in database)
The CarouselCard is supposed to contain the information of each subsriber but i have failed in displaying the users inside the carousel, so it has mock data for the moment

That's why the fourth component is still present because it is successfully connected to backend server to retrieve and display information on the web page even though it is not to be displayed just on the screen.

Further developments are being made at the moment to resolve the issue with the improper display of information
