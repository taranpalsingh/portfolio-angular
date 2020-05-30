import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = [
    {
        "url":"https://github.com/cybergroupdevs/BtB_PocketTanks.git",
        "name":"Socialize - Social Media Automation Tool",
        "img":"../../../assets/images/Socialize.png",
        "description":"It is an analysis tool for all your social media platforms, that displays analysis after applying machine learning algorithms to all the posts and comments that a person receives. Also, allows the user to schedule posts for a fututre time. This application is built using Angular, MongoDB, Node.Js and Python." 
    },{
        "url":"https://todotest-taran.netlify.com/",
        "name":"Todo - Task Viewer",
        "img":"../../../assets/images/ToDo.jpeg",
        "description":"This Task Viewer lets users create their personalized accounts and enables them to add, edit, or view their tasks in an interactive manner with an easy to use Interface. This application is built using Angular, MongoDB and Node.Js." 
    },{
        "url":"https://bouncingballs.netlify.com/",
        "name":"Interactive Bouncing balls",
        "img":"../../../assets/images/bouncingBalls.PNG",
        "description":"It is a fun project which gives the users access to toggle the controls and make the balls move in any manner as they wish. This is built purely using HTML, CSS and Javascript." 
    },
    {
        "url":"https://github.com/taranpalsingh/Leave_Management",
        "name":"Leave Management",  
        "img":"../../../assets/images/leaveManagement.PNG",
        "description":"This is an implementation of a Leave management project that can be used by any kind of an organisation. This lets users view their profile, raise leave requests for themselves and approove/reject the requests raised by their juniors. This is built using AngularJS and SQL Server." 
    },
    {
        "url":"https://github.com/taranpalsingh/File_Comparison_Electron.git",
        "name":"File Comparison",
        "img":"../../../assets/images/fileComparison.jpg",
        "description":"It is desktop application built using Electron. When given the address of two or more folders that exists in your local system, It creates a CSV file and compares the files that exists in the two paths. For the text files that exists in both the paths, It points out the differences in the text files by specifying the line number in the CSV file. This application is built using HTML, CSS, Javascript and powershell." 
    },
    {
        "url":"https://github.com/taranpalsingh/social__media_automation",
        "name":"Social Media Automation",
        "img":"../../../assets/images/socialMedia.png",
        "description":"This program lets you publish posts (Images in which you want to write some texts) to your social media accounts (Twitter, Facebook and Instagram). You just have to create a template of the post in the HTML file and you are good to go. This is helpful mostly for bloggers who want to post a specific template on a dailly basis. This program is built on Nodejs." 
    },
    {
        "url":"https://github.com/taranpalsingh/jumper-game",
        "name":"Jumper",
        "img":"../../../assets/images/jumper.PNG",
        "description":"It is a dodge game in which a user has to jump in order to dodge the obstacles. This is built using Vanilla Javascript using the canvas library." 
    },
    // {
    //     "url":"https://github.com/taranpalsingh/Calcii",
    //     "name":"Calculator",
    //     "img":"../../../assets/images/Calci.PNG",
    //     "description":"It is a fun project which gives the users access to tooggle the controls and make the balls move in any manner as they wish. It is a fun project which gives the users access to tooggle the controls and make the balls move in any manner as they wish." 
    // },
    {
        "url":"https://github.com/taranpalsingh/30MinTask",
        "name":"Tic Tac Toe",
        "img":"../../../assets/images/tictactoe.PNG",
        "description":"It is an implementation of the game Tic Tac Toe, in which 2 players can play. This is built purely using Vanilla Javascript." 
    }
  ] 

}
