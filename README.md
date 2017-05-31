# openIssueViewer
openIssueViewer is a javascript library that renders a simple table for all open issues in a git repository. You can filter and view different issues based on label filter. Label filter varies by the submitted labels on each repository.

# How to Install
Create a new folder on your local machine and put package.json. Go to the folder location on terminal, and then use command 'npm install issueviewer --save'. This will create a folder called 'node_modules.' 'issueviewer' folder will be created inside 'node_modules.' It should contain issue-view.js, openIssueViewer.html, and package.json

# How to Use
In order to use the librayr, you should first create new object variable with IssueView inside your script tag or file. It takes an object parameter {repo: 'your github repository Id'}. Then, you can use method called "renderInto" to render all the open issues inside DOM element in your html file. Following is the example usage:

var issueView = new IssueView({repo: 'nasa/openmct'});
var container = document.getElementById('issue-list-container');
issueView.renderInto(container);

Please make sure include jquery in your project.
You can view openIssueViewer.html for reference. 

****When you test locally**** ---> (For Mac Users)
Becuase of Same Origin Policy in Chrome, you will have to open Chrome with command on terminal: open /Applications/Google\ Chrome.app --args --allow-file-access-from-files when you test your written html file.
Otherwise, you will have to run server in order to correctly test out ajax call inside the library.
