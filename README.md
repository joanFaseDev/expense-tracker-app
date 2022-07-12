# Expense Tracker App

## Project Overview

The goal here is to build an expense tracker with two main parts. The first part is a form composed of three input elements (name, date and amount) and one button to submit the data. The other part is a table with four columns, one for each input's value plus one for a delete button. Each time a form is submitted, a new row appears in the table populated with the form's data and a delete button to remove the entry on click.

This project came from a youtube video of [Andy Sterkowitz](https://www.youtube.com/watch?v=roumzWd4XJU&list=PLOSs2PF1l7PLPhmH0ep2DGxtZT1OH2czk&index=2) meant to provide some inspirations for wannabe developpers lacking ideas and&sol;or motivation. There's no solution provided, only instructions on what the finished product should look like. I find this kind of content really useful and it seems fair to share the source here.

Ressources: [Tab icon](https://icones8.fr/icons/set/to-do)

## Project Review

    * Create an expenses handler object with a _handleEvent()_ function tasked with calling all the functions necessary for the app to work properly.
    * Get all three object representation of the input's form when submit event is fired and retrieve their data.
    * Create a table cell for each input's entry with a table row as a container then feed them to the table element.
    * Also create a delete button with an _addEventListener()_ method to listen to the click event and fire an event handler to remove the all row in reaction.
    * Add a function to reset the value of each input after a submit event is fired
    * Make it so the cell containing `No expenses added yet!` is removed when at least one entry is added to the table. If all entries are deleted then add it again.

    [POSSIBLE UPGRADE]
    * Create a function which is called every time the submit event is called and create an object populated with the three input's data.
    * Then create the table from the ground and insert the various rows by respecting the date order of each expense.

## Conclusion

Well goal accomplished! The app isn't as pretty as i would have wished but i spend a fair amount of time on that project and the css part wasn't the focus here anyways. I gave myself a time limit and so didn't find the time to test a few ideas, specially the one where entries are sorted by name, date or amount. I basically used the same method as for the to-do App here, the work was basically the same except there was more DOM objects to manipulate. I'm gonna try to do daily projects like this, similar but a little harder each time. Studies and practice should do the trick. Plus, i'm in web developement for the long run (hopefully) so better try to grow good habits out of it (i should also learn to speak english properly, thank god no one read theses files).
