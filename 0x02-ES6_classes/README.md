**ES6 Classes Project**

This project focuses on implementing ES6 classes in JavaScript to simulate various real-world scenarios. Each task involves creating classes, setting up constructors, defining methods, implementing getters and setters, and extending classes.

### Project Structure

The project directory contains several JavaScript files, each corresponding to a specific task:

1. **Task 0: ClassRoom Class (`0-classroom.js`):**
   - Defines a `ClassRoom` class with a constructor that accepts `maxStudentsSize`.
   
2. **Task 1: Initialize ClassRooms (`1-make_classrooms.js`):**
   - Implements the `initializeRooms` function to create an array of `ClassRoom` objects with specific sizes.

3. **Task 2: HolbertonCourse Class (`2-hbtn_course.js`):**
   - Implements a `HolbertonCourse` class with attributes for name, length, and students, along with getters and setters for each attribute.

4. **Task 3: Currency Class (`3-currency.js`):**
   - Defines a `Currency` class with attributes for code and name, along with methods for displaying the full currency.

5. **Task 4: Pricing Class (`4-pricing.js`):**
   - Implements a `Pricing` class with attributes for amount and currency, along with methods for displaying the full price and converting prices.

6. **Task 5: Building Class (`5-building.js`):**
   - Defines an abstract `Building` class with an attribute for square footage and checks for method implementation.

7. **Task 6: SkyHighBuilding Class (`6-sky_high.js`):**
   - Extends the `Building` class to create a `SkyHighBuilding` class with additional attributes for floors and an overridden evacuation warning method.

8. **Task 7: Airport Class (`7-airport.js`):**
   - Implements an `Airport` class with attributes for name and code, along with a method to return a string representation of the airport.

9. **Task 8: HolbertonClass (`8-hbtn_class.js`):**
   - Defines a `HolbertonClass` class with attributes for size and location, along with methods for type conversion.

10. **Task 9: Hoisting Fix (`9-hoisting.js`):**
    - Fixes a hoisting issue by rearranging the code and defining classes before usage.

11. **Task 10: Car Class (`10-car.js`):**
    - Implements a `Car` class with attributes for brand, motor, and color, along with a method to clone the car.

12. **Task 11: EVCar Class (`100-evcar.js`):**
    - Extends the `Car` class to create an `EVCar` class with an additional attribute for range and overridden clone method to return a `Car` instance.

### Usage

Each task's JavaScript file can be imported and used in other JavaScript files as required. The classes and functions provided by these files can be utilized to solve specific programming challenges or simulate various scenarios.

To run the project, ensure you have Node.js installed, navigate to the project directory, and execute the JavaScript files using Node.js.

```
node 0-main.js
node 1-main.js
...
node 100-main.js
```

### Conclusion

This project serves as a comprehensive exercise in working with ES6 classes in JavaScript, covering various aspects such as class definition, inheritance, method implementation, and static methods. It demonstrates practical usage of classes in solving real-world problems and showcases the power and versatility of modern JavaScript programming.