# todo-list-phase1

Basic To-Do List.
    The purpose of this task is to be able to create, check/uncheck and delete to-do list.
    To achieve this i will be making use of github for hosting, html for structure of my page, css for styling and javascript for interacting with my page.

# Instruction
# Steps:
1. Creating a new repository on github and adding the four files i need to carry out the Project(index.html, index.css, README file and index.js).
step to do this is listed below:
    Create a local repository folder
    Create a remote GitHub repository
    Add the new remote to the local repository
    Create an index.html file with some basic content
    Add, commit and push the new content to the remote
    Enable GitHub Pages in the remote repository's settings
    Check out the published site
    Continue building out the HTML and add CSS and JavaScript files

Note: I also put all the images i will be using on a folder in my file.
2. Continuation of creating the page structure in my html file
    * In the head section of my HTML i have two(2) script tags(1 is for the icon i used, the other one is for linking the js).
    <script src="https://kit.fontawesome.com/0cc79b077e.js" crossorigin="anonymous"></script>
    <script defer src="index.js"></script>
    * I also added an #onclick and assigned a function to it in my HTML file
3. Styled my HTML file using the index.css folder to add styles to my page
    Staretd by giving my default page some styles and then proceeded to styling the rest of my element using their respective id's and class
    e.g:
    *{
    margin: 0;
    padding: 0;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; 
    }


.todo-btn{
    padding: 10px 10px 10px;
    border: none;
    outline: none;
    border-radius: 40px;
    cursor: pointer;
    }



4. Addition of JavaScript functions: 
    * I made use of the DOM to maniplate my page and add two new element to it(span and li):
    - Uing querySelector i picked the class of the elements i wanted to manipulate and assigned variables to them using const keyword
    - There after i created a function to alert the users onclicking the "create button" that they must input a task before the creating a task
    - Added eventLister to the click event and gave it some conditional statement
    - I also added a time/date function incoporating the use of Arrays and a setInterval function to be calling the time and date function every 200ms

5. I carried step five lst under Instruction step 1
    
