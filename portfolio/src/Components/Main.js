import React from 'react'
import './Main.css'
import Project from './Project'
import MultiplyIt from '../Pics/MultiplyIt.png'
import Wikiclone from '../Pics/Wikiclone.png'
import GoogleHome from '../Pics/GoogleHome.png'
import SlackClone from '../Pics/SlackClone.png'

function Main() {
    return (
        <div id="Main">
            <center className="Main__head"><h1>Some of my projects</h1></center>
            <Project
                title="Slack-Clone"
                styles="zoom-in"
                image={SlackClone}
                link="https://slack-17f4d.web.app/"
                desc="This project is a clone of slack which is powered by firebase authentication. You can create different rooms and chat in these rooms after signing in through your google account. All the chats, rooms and user's info is pulled from firebase database."
            />
            <Project
                title="MultiplyIt"
                styles="zoom-in"
                image={MultiplyIt}
                link="https://bajajgirik.github.io/ReactMultiply/"
                desc="This project was made for people who struggle doing multiplication problems. This website generates 10 random questions and gives your final score after completion. It has got 4 difficulty modes in which you can practice. Built using React.js"
            />
            <Project
                title="WikiClone"
                styles="zoom-in"
                image={Wikiclone}
                link="https://github.com/BajajGirik/WikiClone"
                desc="This project is a Wikipedia clone built using Django. It covers many features like creating a new article, editing an already existing article, fetching a random article, a dedicated content page. This project uses Sqlite as its database."
            />
            <Project
                title="GoogleHomepage"
                styles="zoom-in"
                image={GoogleHome}
                link="https://bajajgirik.github.io/GoogleHomepage/"
                desc="This is a clone of Google Home Page in which I pass an action to google.com after you search for something. I tried to give it a very original look. It was my first front-end website."
            />
            <center className="Main__foot"><p>To check out more of my work, visit <a href="https://github.com/BajajGirik">My Github Profile</a></p></center>
        </div>
    )
}

export default Main
