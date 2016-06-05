var resumeApp = angular.module('resumeApp', ['ngSanitize', 'ngAnimate']);

var press = [
    "http://spectrum.ieee.org/tech-talk/telecom/security/mobile-forensics-ceo-proposes-controversial-publicprivate-key-access-for-smartphones",
    "http://spectrum.ieee.org/tech-talk/telecom/security/5-ways-experts-think-the-fbi-might-have-hacked-the-san-bernardino-iphone",
    "http://news.softpedia.com/news/pastejacking-attack-overrides-your-clipboard-to-trick-you-into-running-evil-code-504420.shtml",
    "http://boingboing.net/2016/05/25/pastejacking-using-malicious.html",
    "http://www.securityweek.com/pastejacking-attack-allows-hackers-execute-malicious-code",
    "https://www.grahamcluley.com/2016/05/researcher-warns-pastejacking-hack-attacks-targeting-users-clipboards/",
    "http://securityaffairs.co/wordpress/47665/hacking/pastejack-attack.html",
    "https://securityintelligence.com/news/pastejacking-the-clipboard-copy-concern/",
    "https://nakedsecurity.sophos.com/2016/05/26/why-you-cant-trust-things-you-cut-and-paste-from-web-pages/",
    "http://www.cyberdefensemagazine.com/pastejacking-attack-relies-on-your-clipboard-as-an-attack-vector/",
    "http://www.theregister.co.uk/2016/05/25/pastejack_attack_turns_your_clipboard_into_a_vector/?mt=1465079900698"
]

var projects = [{
        name: "Pastejacking",
        description: "A type of browser attack that targets the user's clipboard",
        technologies: "Javascript, html",
        github: "https://github.com/dxa4481/Pastejacking"
    },{
        name: "WPA2-HalfHandshake-Crack",
        description: "This python tool cracks failed handshakes from fake Access Points.",
        technologies: "Python, 802.11",
        github: "https://github.com/dxa4481/WPA2-HalfHandshake-Crack"
    },{
        name: "Input Protection for JTAGenum",
        description: "This is a PCB layout that brings all of the hardware functionality of the Jtagulator to the JTAGenum project.",
        technologies: "CadSoft Eagle",
        github: "https://github.com/dxa4481/inputProtectionShield"
    },{
        name: "ShadowBuster",
        description: "An attack map: a graphical visualization of real time international cyber attacks",
        technologies: "Javascript, Leaflet.js, AngularJS",
        github: "https://github.com/indeedops/ShadowBuster"
    },{
        name: "JohnWilliams",
        description: "This restful API scrapes Bitcoin market data and analyzes market trends.",
        technologies: "NodeJS, MongoDB, Express, Bitcoin",
        github: "https://github.com/dxa4481/JohnWilliams"       
    },{
        name: "ComedyCazi Hat",
        description: "This is a talking hat that uses wifi to convert text to speech.",
        technologies: "Raspberry Pi, Java, NodeJS, Express",
        github: "https://github.com/dxa4481/comedycazi"       
    },{
        name: "HIV stats",
        description: "This single page app analyzes your demographic and tells you your HIV risk factors.",
        technologies: "AngularJS, bootstrap",
        github: "https://github.com/dxa4481/HIVStats"       
    },{
        name: "Penguin",
        description: "This tool sharing application uses a restful API to support an single page app.",
        technologies: "Python, Django, sqllite, angularJS, bootstrap",
        github: "https://github.com/dxa4481/penguin"       
    },{
        name: "Bitrush",
        description: "This is an implementation of the SHA-2 bitcoin mining algorithm on an FPGA.",
        technologies: "VHDL, FPGA, Python",
        github: "https://github.com/dxa4481/BitRush"       
    },{
        name: "This resume",
        description: "The frontend used for the resume you are reading.",
        technologies: "VHDL, FPGA, Python",
        github: "https://github.com/dxa4481/dxa4481.github.io"       
}]


resumeApp.controller('mainController', function($scope, $http) {
    $scope.press = function(){
         $http.get("/press.md").then(function(mdData){
            $scope.markdownContent =  markdown.toHTML(mdData.data);
        })
    };
    $scope.press();
    $scope.skillsTable = true;
    $scope.projectsTable = true;
    $scope.statement = true;
    $scope.timeline = true;
    $scope.projects = projects;
    $scope.getMarkdown = function(project){
        var ghName = project.github.split("/");
        $http.get("https://security.love/" + ghName[ghName.length - 1] + "/README.md").then(function(mdData){
            $scope.markdownContent =  markdown.toHTML(mdData.data);
        })
    }
});
