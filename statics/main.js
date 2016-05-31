var getTimelineData = function(){
    var timelineData = {
        events: [
            {
                media: {
                    url: "/statics/images/Enernoc.png",
                    caption: "Boston, MA"
                },
                start_date: {
                    year: 2013,
                    month: 7
                },
                end_date: {
                    year: 2014,
                    month: 1
                },
                text: { 
                    text: "Worked on a team of four to design the backend for two restful APIs in NodeJS.</br> Worked on embeded linux systems.",
                    headline: "Enernoc:</br>Software Engineer Intern"
                }
            },
            {
                media: {
                    url: "/statics/images/anvilAndGear.png",
                    caption: "Rochester, NY",
                },
                start_date: {
                    year: 2014,
                    month: 3
                },
                end_date: {
                    year: 2014,
                    month: 6
                },
                text: { 
                    text: "Worked in a group of 3 with Bitcoin technology to build out a web application</br> in Python",
                    headline: "Anvil & Gear:</br>Software Engineer Contractor"
                }
            },
            {
                media: {
                    url: "/statics/images/securityInnovation.png",
                    caption: "Seattle, WA",
                },
                start_date: {
                    year: 2014,
                    month: 6
                },
                end_date: {
                    year: 2015,
                    month: 1
                },
                text: { 
                    text: "Worked in teams of two and three to perform penatration tests and code reviews</br> for high profile clients",
                    headline: "Security Innovation:</br>Security Engineer Intern"
                }
            },
            {
                media: {
                    url: "/statics/images/indeed.jpeg",
                    caption: "Austin, TX",
                },
                start_date: {
                    year: 2015,
                    month: 5
                },
                end_date: {
                    year: 2015,
                    month: 8
                },
                text: { 
                    text: "Worked on a team of 7 to improve application security and promote security</br> awareness at indeed.com",
                    headline: "indeed.com:</br>Security Engineer Intern"
                }
            },
            {
                media: {
                    url: "/statics/images/praetorian.png",
                    caption: "Austin, TX",
                },
                start_date: {
                    year: 2016,
                    month: 1
                },
                end_date: {
                    year: new Date().getFullYear(),
                    month: new Date().getMonth()
                },
                text: { 
                    text: "Working on teams to perform red team penatration testing on web applications, </br>internal networks, external networks, and IoT devices",
                    headline: "Praetorian (current):</br>Security Engineer"
                }
            },
            {
                start_date: {
                    year: 2010,
                    month: 9
                },
                end_date: {
                    year: 2015,
                    month: 12
                },
                text: { 
                    text: "Earned a bachelors of science degree in Computer Engineering.",
                    headline: "Rochester Institute of Technology"
                }
            }
        ],
    }
    return timelineData;
}

var timeline_json = getTimelineData(); // you write this part
// two arguments: the id of the Timeline container (no '#')
// and the JSON object or an instance of TL.TimelineConfig created from
// a suitable JSON object
var additionalOptions = {
    start_at_end: true,
    timenav_height_percentage: 5,
    default_bg_color: {r:250, g:250, b:250}
}

window.timeline = new TL.Timeline('timeline-embed', timeline_json, additionalOptions);