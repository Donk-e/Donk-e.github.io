---
layout: default
title: Final Year Project
---

<html>
    <body>
    <div class = "main">
        <div class = "windowContainer">
            <div class = "textHeading">
                <img src="/assets/Icons/Windows/star.png">
                <p><strong>Project</strong></p>
                <img src = "/assets/Icons/Windows/close.png" style = "margin-left: auto;">
            </div>
            <div style= "font-size: 50px">
                <p><strong>RFID Enhanced Gameplay</strong></p>
            </div>
        </div>
         <div class = "windowContainer">
            <div class = "textHeading">
                <img src="/assets/Icons/Windows/screen.png">
                <p><strong>Gameplay Videos</strong></p>
                <img src = "/assets/Icons/Windows/close.png" style = "margin-left: auto;">
            </div>
            <div style="display: flex; flex-direction: row; margin:1%">
                <iframe width="768" height="432" 
                    src = "https://www.youtube.com/embed/BrVP-3Zlm7s?autoplay=1&mute=1&loop=1"
                    title = "UI Demo Video" style = "padding:0.5%">
                </iframe>
                <iframe width="768" height="432" 
                    src = "https://www.youtube.com/embed/FYDgmq2L4mM?autoplay=1&mute=1&loop=1"
                    title = "Arduino Demo Video" style = "padding:0.5%">
                </iframe>
            </div>
        </div>
        <div class = "flexRow">
            <div class = "windowContainer">
                <div class = "textHeading">
                    <img src="/assets/Icons/Windows/star.png">
                    <p><strong>Project Overview</strong></p>
                    <img src = "/assets/Icons/Windows/close.png" style = "margin-left: auto;">
                </div>
                <p>For my final year project at uni I chose to look into the mechanic featured in games the Skylanders series and used in Amiibo + Disnery Infinity. I researched the difference in player experience between players who used the physical scanning mechanic and those that used UI.</p>
                <p>I had a lot of fun working on this project and I'm really glad I chose the area of research that I did. I got to research some really interesting papers on different types and ways to use controllers </p>
            </div>
            <div class = "windowContainer" style = "width: 200%">
                <div class= "textHeading">
                    <img src="/assets/Icons/Windows/notepad.png">
                    <p><strong>Skills Used</strong></p>
                    <img src = "/assets/Icons/Windows/close.png" style = "margin-left: auto;">
                </div>
                <div class = "projectSkills">
                    <ul>
                        <li>Unity</li>
                        <li>C#</li>
                        <li>Arduino wiring</li>            
                        <li>Serial communication in Unity</li>            
                    </ul>
                    <ul>
                        <li>Presenting in person and online</li>  
                        <li>Academic Research</li>
                        <li>Academic Writing</li>      
                    </ul>
                </div>
            </div>
        </div>
        <div class = "flexRow">
            <div class = "windowContainer">
                <div class = "textHeading">
                    <img src="/assets/Icons/Windows/star.png">
                    <p><strong>Physical Scanning Mechanic</strong></p>
                    <img src = "/assets/Icons/Windows/close.png" style = "margin-left: auto;">
                </div>
                <p>To implement the mecahinc that allows the player to use I used an Arduino with a RC522 component that  would scan the NFC tags on the bottom of the character models and then pass the tag ID to Unity which would read it then swap to the correct character. </p>
                <p>To get these tags I broke open NFC tags from online (see the blue tags in the below video) to get to the circuit inside then glued it to the bottom so it wouldn't be too bulky to use, to protect the circuit I added clear silicone bumpers so the models would still sit flat.</p>
            </div>            
            <div class = "imgWindowContainer" style = "width = 300px; height: 400px">
                <div class = "textHeading">
                    <img src="/assets/Icons/Windows/star.png">
                    <p><strong>Arduino</strong></p>
                    <img src = "/assets/Icons/Windows/close.png" style = "margin-left: auto;">
                </div>
                    <img src="/assets/Images/Unity/FYP/NFCTag.jpg" alt= "Dragon Models" title = "test title">
            </div>
        </div>  <div class = "flexRow">
            <div class = "imgWindowContainer">
                <div class = "textHeading">
                    <img src="/assets/Icons/Windows/star.png">
                    <p><strong>Arduino</strong></p>
                    <img src = "/assets/Icons/Windows/close.png" style = "margin-left: auto;">
                </div>
                <iframe width="768" height="432" 
                    src = "https://www.youtube.com/embed/TSft-yZoGeU?autoplay=1&mute=1&loop=1"
                    title = "Early Arduino Demo Video" style = "padding:0.5%">
                </iframe>
            </div>
            <div class = "windowContainer">
                <div class = "textHeading">
                    <img src="/assets/Icons/Windows/star.png">
                    <p><strong>Physical Scanning Mechanic</strong></p>
                    <img src = "/assets/Icons/Windows/close.png" style = "margin-left: auto;">
                </div>
                <p>This is an early demo of the mechanic, by default the RC522 only sends messages when it reads an appropriate tag (the RC522 can not read ultra lightweight NFC tags such as the NFC stickers found online, this is because they do not have enough space to store unique IDs). </p>
                <p>When a tag is read it sends the string to a serial port reader running in Unity which initialises the port on Start and processes the read data, if the string matches the ID expected for any of the three dragons it passes event with the dragons type to a seperate script which is running on Unity's main thread where it invokes the event. </p>
                <p>This is because Unity is single threaded and the Arduino reading script is running on a different thread and Unity prevents changes to be made outside of the main thread. </p>
            </div>         
        </div> 
    </div>
    </body>
</html>