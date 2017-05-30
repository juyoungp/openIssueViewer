# openIssueViewer
# May.29.2017
# Ju Young Park

This is built to view all the open Issues for certain git repository. You can filter open issues based on labels. 

In order to start, you should create new object with IssueView. It takes an object parameter {repo: 'your github repository Id'}.
Then, you can use method called "renderInto" to put outcome into certain DOM element. Following is the example usage:

var issueView = new IssueView({repo: 'nasa/openmct'});
var container = document.getElementById('issue-list-container');
issueView.renderInto(container);
