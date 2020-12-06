# Part-2 Countries

## Step 1
The API https://restcountries.eu provides a lot data for different countries in a machine readable format, a so-called REST API.

Create an application, in which one can look at data of various countries. The application should probably get the data from the endpoint all.

The user interface is very simple. The country to be shown is found by typing a search query into the search field.

If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:
![image1](https://fullstackopen.com/static/d8a3e3b3af8907d0c3dd495ef0d26ba6/14be6/19b1.png)

If there are fewer than ten countries, but more than one, then all countries matching the query are shown:

![image 2](https://fullstackopen.com/static/1d4ebf199806ccfe0df529c08e2a0c6d/14be6/19b2.png)

When there is only one country matching the query, then the basic data of the country, its flag and the languages spoken in that country are shown:
![image3](https://fullstackopen.com/static/1d4bba516fb538c5214f37c4a2ab0f8e/14be6/19b3.png)

## Step 2

Improve on the application in the previous exercise, such that when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country:
![image3](https://fullstackopen.com/static/b8986829d36bd14bbbd6270e0e8d2edf/14be6/19b4.png)

## Step 3
Add to the view showing the data of a single country the weather report for the capital of that country. There are dozens of providers for weather data. I used https://www.apixu.com. Don't forget to hide your API key.

![image4](https://fullstackopen.com/static/f81474494132d75fcd76a98297df6920/14be6/19b5.png)
