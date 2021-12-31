const togglebars = document.getElementById('toggleb');
const nav = document.querySelector('nav');
const toggletimes = document.getElementById('togglet');

//nav show and hide
togglebars.addEventListener('click',()=>{

    togglebars.classList.toggle('active');
    nav.classList.toggle('active');

});

toggletimes.addEventListener('click',()=>{
    nav.classList.toggle('active');
    togglebars.classList.toggle('active');

})



// play audio
//UI
const musiccontainer = document.getElementById('music-container');

const title = document.getElementById('title'),
    progresscontainer = document.getElementById('progress-container'),
    progress = document.getElementById('progress');

const audio = document.getElementById('audio');
// console.log(audio.ondurationchange);
const cover = document.getElementById('cover');

const prevbtn = document.getElementById('prev'),
    playbtn = document.getElementById('play'),
    nextbtn = document.getElementById('next');
// console.log(musiccontainer)
let songindex = 0;

//Song Lyrics
const lyricsbtn = document.getElementById('lyrics');
const lyricsmodal = document.getElementById('lyricsmodal');
const lyricstext = document.getElementById('lyricstext');

const closelyrics = document.getElementById('closel');
lyricsbtn.addEventListener('click',()=>{
    // console.log("hey");
    lyricsmodal.classList.add('showlyrics');
    lyricstext.innerText = songlyrics[songindex];

});

closelyrics.addEventListener('click',()=>{
    lyricsmodal.classList.remove('showlyrics');
})


//Song Title
const songs = ['sample1','sample2','sample3', 'sample4', 'sample5', 'sample6', 'sample7'];
// console.log(songs[songindex]);
const songtitle = [
    'Memories- Maroon5',
    'One Call Away- Charlie Puth',
    '10,000 Hours- Dan and Shay',
    'A Little Love- Fiona Fung',
    'Perfect- Ed Sheeran',
    'Marry You- Bruno Mars',
    'A Thousand Years- Christina Perri'
    ];
loadsong(songs[songindex]);


function loadsong(music){
    // console.log(music);

    title.innerText = songtitle[songindex];
    title.style.fontSize = '20px';
    title.style.letterSpacing = '1.2px';
    audio.src = `music/${music}.mp3`;
    cover.src = `img/${music}.jpg`;
}

//Event Listener for play/pause
playbtn.addEventListener('click',()=>{
    // console.log("hey");
    //  musiccontainer.classList.add('play');
    const isplaying = musiccontainer.classList.contains('play');
    if(isplaying){
        pausesong();
    }else {
        playsong();
    }
});

//Play Song
function playsong(){
    musiccontainer.classList.add('play');

    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

//Pause Song
function pausesong(){
    musiccontainer.classList.remove('play');
    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

//Prev Song
prevbtn.addEventListener('click',()=>{
    songindex--;
    if(songindex < 0){
        songindex = songs.length;
    }else{
        var prevsong = `sample${songindex + 1}`;

        loadsong(prevsong);
        playsong();
    }
});



//Next Song
nextbtn.addEventListener('click',()=>{
    songindex++;
    // console.log(songindex);
    if(songindex >= songs.length){
        songindex = 0;
    }else {

        var nextsong = `sample${songindex + 1}`;

        loadsong(nextsong);
        playsong();
    }


    // pausesong();
});

//show time
// function showtime(e){
//     const audios = musiccontainer.querySelector('audio');
//     console.log(audios);
//
//     const duration = audios.duration;
//     console.log(duration);
// }
//

// showtime();

    const audios = musiccontainer.querySelector('audio');
    const musicduration = musiccontainer.querySelector('.max-duration');
    const musiccurrenttimes = musiccontainer.querySelector('.current-time');




audios.addEventListener("timeupdate", (e)=>{
    const currenttime = e.target.currentTime; //getting playing song currentTime
    const duration = e.target.duration; //getting playing song total duration
// console.log(currentime);


    audios.addEventListener("loadeddata", ()=>{
        // console.log("hey");
        let mainduration = audios.duration;
        // console.log(mainduration)
        let totalMin = Math.floor(mainduration / 60);
        let totalSec = Math.floor(mainduration % 60);
        if(totalSec < 10){ //if sec is less than 10 then add 0 before it
            totalSec = `0${totalSec}`;
        }
        musicduration.innerText = `${totalMin}:${totalSec}`;
    });
    // update playing song current time
    let currentmin = Math.floor(currenttime / 60);
    let currentsec = Math.floor(currenttime % 60);
    if(currentsec < 10){ //if sec is less than 10 then add 0 before it
        currentsec = `0${currentsec}`;
    }
    musiccurrenttimes.innerText = `${currentmin}:${currentsec} / `;
});


//dots menu
const dots = document.getElementById('dots');
const dotsmenu = document.querySelectorAll('.dots-menu');
// console.log(dotsmenu)
dots.addEventListener('click',()=>{
    dots.classList.toggle('active');
    // dots.classList.toggle('active');
    // dotsmenu.style.opacity = '1';
});




//Model Container
//SignUp Model
//Show Model
const openbtn = document.getElementById('open');

const modal = document.getElementById('modal');
const closebtn = document.getElementById('close');

openbtn.addEventListener('click',()=>{
    // console.log(openbtn)
    modal.classList.add('showmodal');
});

//Close Model
closebtn.addEventListener('click',()=>{
    modal.classList.remove('showmodal');
});


window.addEventListener('click',(e)=>e.target === modal ? modal.classList.remove('showmodal') : false);



//form validation
const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cfmpassword = document.getElementById('cfmpassword');

function showerror(input,message){
    const formcontrol = input.parentElement;
    // console.log(formcontrol)
    formcontrol.classList.add('error');

    const small = formcontrol.querySelector('small');
    small.innerText = message;
}

function showsuccess(input){
    const formcontrol = input.parentElement;

    formcontrol.classList.remove('error');
    formcontrol.classList.add('success');

}


//Checked Required Field
function checkrequired(inputarrs){
    // console.log(inputarr);

    inputarrs.forEach(function (inputarr){

        if(inputarr.value === ''){
            // showerror(inputarr,`${inputarr.id} is required.`);
            showerror(inputarr,`${getfieldname(inputarr)} is required.`);

        }else{
            showsuccess(inputarr);
        }

    })

}

//Get Field Name
function getfieldname(inputarr){
    // console.log("hey");
    return inputarr.id.charAt(0).toUpperCase()+inputarr.id.slice(1);
}
// getfieldname(username);
// getfieldname(username.id);

//Check Input Lenght
function checklength(input, min, max){
    if(input.value.length < min){
        showerror(input, `${getfieldname(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){
        showerror(input, `${getfieldname(input)} must be less than ${max} characters`);
    }else{
        showsuccess(input);
    }


}

//Check Email
function checkemail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());

    if(re.test(input.value)){
        showsuccess(input);
    }else{
        showerror(input,'Email is not valid');
    }
}

//Check Password Match
function checkpasswordsmatch(input1,input2){
    if(input1.value !== input2.value){
        showerror(input2,'Password does not match');

    }
}


//Event Listener Method 2

form.addEventListener('submit',function (e){
    e.preventDefault();
    // console.log("hey");

    checkrequired([username,email,password,cfmpassword]);

    checklength(username,3,15);
    checklength(password,6,25);

    checkemail(email);

    checkpasswordsmatch(password,cfmpassword);
});



//lyrics
const songlyrics = [
    'Memories\n' +
    'Maroon 5\n' +
    'Here\'s to the ones that we got\n' +
    'Cheers to the wish you were here, but you\'re not\n' +
    '\'Cause the drinks bring back all the memories\n' +
    'Of everything we\'ve been through\n' +
    'Toast to the ones here today\n' +
    'Toast to the ones that we lost on the way\n' +
    '\'Cause the drinks bring back all the memories\n' +
    'And the memories bring back, memories bring back you\n' +
    'There\'s a time that I remember, when I did not know no pain\n' +
    'When I believed in forever, and everything would stay the same\n' +
    'Now my heart feel like December when somebody say your name\n' +
    '\'Cause I can\'t reach out to call you, but I know I will one day, yeah\n' +
    'Everybody hurts sometimes\n' +
    'Everybody hurts someday, ayy ayy\n' +
    'But everything gon\' be alright\n' +
    'Go and raise a glass and say, ayy\n' +
    'Here\'s to the ones that we got\n' +
    'Cheers to the wish you were here, but you\'re not\n' +
    '\'Cause the drinks bring back all the memories\n' +
    'Of everything we\'ve been through\n' +
    'Toast to the ones here today\n' +
    'Toast to the ones that we lost on the way\n' +
    '\'Cause the drinks bring back all the memories\n' +
    'And the memories bring back, memories bring back you\n' +
    'Doo doo, doo doo doo doo\n' +
    'Doo doo doo doo, doo doo doo doo\n' +
    'Doo doo doo doo, doo doo doo\n' +
    'Memories bring back, memories bring back you\n' +
    'There\'s a time that I remember when I never felt so lost\n' +
    'When I felt all of the hatred was too powerful to stop (ooh, yeah)\n' +
    'Now my heart feel like an ember and it\'s lighting up the dark\n' +
    'I\'ll carry these torches for ya that you know I\'ll never drop, yeah\n' +
    'Everybody hurts sometimes\n' +
    'Everybody hurts someday, ayy ayy\n' +
    'But everything gon\' be alright\n' +
    'Go and raise a glass and say, ayy\n' +
    'Here\'s to the ones that we got (oh)\n' +
    'Cheers to the wish you were here, but you\'re not\n' +
    '\'Cause the drinks bring back all the memories\n' +
    'Of everything we\'ve been through (no, no)\n' +
    'Toast to the ones here today (ayy)\n' +
    'Toast to the ones that we lost on the way\n' +
    '\'Cause the drinks bring back all the memories (ayy)\n' +
    'And the memories bring back, memories bring back you\n' +
    'Doo doo, doo doo doo doo\n' +
    'Doo doo doo doo, doo doo doo doo\n' +
    'Doo doo doo doo, doo doo doo\n' +
    'Memories bring back, memories bring back you\n' +
    'Doo doo, doo doo doo doo\n' +
    'Doo doo doo doo, doo doo doo doo\n' +
    'Doo doo doo doo, doo doo doo (ooh, yeah)\n' +
    'Memories bring back, memories bring back you\n' +
    'Yeah, yeah, yeah\n' +
    'Yeah, yeah, yeah, yeah, yeah, doh, doh\n' +
    'Memories bring back, memories bring back you',
    //track2
    'One Call Away\n' +
    'Charlie Puth\n' +
    'I\'m only one call away\n' +
    'I\'ll be there to save the day\n' +
    'Superman got nothing on me\n' +
    'I\'m only one call away\n' +
    'Call me, baby, if you need a friend\n' +
    'I just wanna give you love\n' +
    'C\'mon, c\'mon, c\'mon\n' +
    'Reaching out to you, so take a chance\n' +
    'No matter where you go, know you\'re not alone\n' +
    'I\'m only one call away\n' +
    'I\'ll be there to save the day\n' +
    'Superman got nothing on me\n' +
    'I\'m only one call away\n' +
    'Come along with me and don\'t be scared\n' +
    'I just wanna set you free\n' +
    'C\'mon, c\'mon, c\'mon\n' +
    'You and me can make it up, anyway\n' +
    'For now, we can stay here for a while\n' +
    'Cause you know, I just wanna see your smile\n' +
    'No matter where you go, know you\'re not alone\n' +
    'I\'m only one call away\n' +
    'I\'ll be there to save the day\n' +
    'Superman got nothing on me\n' +
    'I\'m only one call away\n' +
    'When you\'re weak I\'ll be strong\n' +
    'I\'m gonna keep holding on\n' +
    'Now don\'t you worry, it won\'t be long\n' +
    'Darling, if you feel like hope is gone\n' +
    'Just run into my arms\n' +
    'I\'m only one call away\n' +
    'I\'ll be there to save the day\n' +
    'Superman got nothing on me\n' +
    'I\'m only one, I\'m only one call away\n' +
    'I\'m only one call away\n' +
    'I\'ll be there to save the day\n' +
    'Superman got nothing on me\n' +
    'I\'m only one call away\n' +
    'I\'m only one call away',
    //track3
    '10,000 Hours\n' +
    'Justin Bieber, Dan + Shay\n' +
    'Do you love the rain, does it make you dance\n' +
    'When you\'re drunk with your friends at a party\n' +
    'What\'s your favorite song, does it make you smile\n' +
    'Do you think of me\n' +
    'When you close your eyes, tell me, what are you dreamin\'\n' +
    'Everything, I wanna know it all\n' +
    'I\'d spend ten thousand hours and ten thousand more\n' +
    'Oh, if that\'s what it takes to learn that sweet heart of yours\n' +
    'And I might never get there, but I\'m gonna try\n' +
    'If it\'s ten thousand hours or the rest of my life\n' +
    'I\'m gonna love you\n' +
    'Do you miss the road that you grew up on\n' +
    'Did you get your middle name from your grandma\n' +
    'When you think about your forever now, do you think of me\n' +
    'When you close your eyes, tell me, what are you dreamin\'\n' +
    'Everything, I wanna know it all\n' +
    'I\'d spend ten thousand hours and ten thousand more\n' +
    'Oh, if that\'s what it takes to learn that sweet heart of yours\n' +
    'And I might never get there, but I\'m gonna try\n' +
    'If it\'s ten thousand hours or the rest of my life\n' +
    'I\'m gonna love you\n' +
    'I\'m gonna love you\n' +
    'Ooh, want the good and the bad and everything in between\n' +
    'Ooh, gotta cure my curiosity\n' +
    'Ooh, yeah\n' +
    'I\'d spend ten thousand hours and ten thousand more\n' +
    'Oh, if that\'s what it takes to learn that\n' +
    'Sweet heart of yours\n' +
    'And I might never get there, but I\'m gonna try\n' +
    'If it\'s ten thousand hours or the rest of my life\n' +
    'I\'m gonna love you\n' +
    'I\'m gonna love you\n' +
    'And I\'m gonna love you\n' +
    'I\'m gonna love you',
    //track4
    'A Little Love\n' +
    'Fiona Fung\n' +
    'Greatness as you\n' +
    'Smallest as me\n' +
    'You show me what is deep as sea\n' +
    'A little love, little kiss\n' +
    'A little hug, little gift\n' +
    'All of little something, these are memories\n' +
    'You make me cry, make me smile\n' +
    'Make me feel that love is true\n' +
    'You always stand by my side\n' +
    'I don\'t want to say goodbye\n' +
    'You make me cry, make me smile\n' +
    'Make me feel the joy of love\n' +
    'Oh, kissing you\n' +
    'Thank you for all the love you always give to me\n' +
    'Oh, I love you\n' +
    'Greatness as you\n' +
    'Smallest as me\n' +
    'You show me what is deep as sea\n' +
    'A little love, little kiss\n' +
    'A little hug, little gift\n' +
    'All of little something, these are memories\n' +
    'You make me cry, make me smile\n' +
    'Make me feel that love is true\n' +
    'You always stand by my side\n' +
    'I don\'t want to say goodbye\n' +
    'You make me cry, make me smile\n' +
    'Make me feel the joy of love\n' +
    'Oh, kissing you\n' +
    'Thank you for all the love you always give to me\n' +
    'Oh, I love you\n' +
    'Yes I do\n' +
    'I always do\n' +
    'Make me cry\n' +
    'Make me smile\n' +
    'Make me feel that love is true\n' +
    'You always stand by my side\n' +
    'I don\'t want to say goodbye\n' +
    'You make me cry\n' +
    'Make me smile\n' +
    'Make me feel the joy of love\n' +
    'Oh, kissing you\n' +
    'Thank you for all the love you always give to me\n' +
    'Oh, I love you\n' +
    'To be with you\n' +
    'Oh, I love you',
    //track5
    'Perfect\n' +
    'Ed Sheeran\n' +
    'I found a love for me\n' +
    'Oh darling, just dive right in and follow my lead\n' +
    'Well, I found a girl, beautiful and sweet\n' +
    'Oh, I never knew you were the someone waiting for me\n' +
    '\'Cause we were just kids when we fell in love\n' +
    'Not knowing what it was\n' +
    'I will not give you up this time\n' +
    'But darling, just kiss me slow, your heart is all I own\n' +
    'And in your eyes, you\'re holding mine\n' +
    'Baby, I\'m dancing in the dark with you between my arms\n' +
    'Barefoot on the grass, listening to our favourite song\n' +
    'When you said you looked a mess, I whispered underneath my breath\n' +
    'But you heard it, darling, you look perfect tonight\n' +
    'Well I found a woman, stronger than anyone I know\n' +
    'She shares my dreams, I hope that someday I\'ll share her home\n' +
    'I found a love, to carry more than just my secrets\n' +
    'To carry love, to carry children of our own\n' +
    'We are still kids, but we\'re so in love\n' +
    'Fighting against all odds\n' +
    'I know we\'ll be alright this time\n' +
    'Darling, just hold my hand\n' +
    'Be my girl, I\'ll be your man\n' +
    'I see my future in your eyes\n' +
    'Baby, I\'m dancing in the dark, with you between my arms\n' +
    'Barefoot on the grass, listening to our favorite song\n' +
    'When I saw you in that dress, looking so beautiful\n' +
    'I don\'t deserve this, darling, you look perfect tonight\n' +
    'Baby, I\'m dancing in the dark, with you between my arms\n' +
    'Barefoot on the grass, listening to our favorite song\n' +
    'I have faith in what I see\n' +
    'Now I know I have met an angel in person\n' +
    'And she looks perfect\n' +
    'I don\'t deserve this\n' +
    'You look perfect tonight',
    //track6
    'Marry You\n' +
    'Bruno Mars\n' +
    'It\'s a beautiful night, we\'re looking for something dumb to do\n' +
    'Hey baby, I think I wanna marry you\n' +
    'Is it the look in your eyes or is it this dancing juice?\n' +
    'Who cares, baby, I think I wanna marry you\n' +
    'Well, I know this little chapel on the boulevard we can go\n' +
    'No one will know, oh, come on girl\n' +
    'Who cares if we\'re trashed, got a pocket full of cash we can blow\n' +
    'Shots of patron and it\'s on, girl\n' +
    'Don\'t say no, no, no, no, no\n' +
    'Just say yeah, yeah, yeah, yeah, yeah\n' +
    'And we\'ll go, go, go, go, go\n' +
    'If you\'re ready, like I\'m ready\n' +
    '\'Cause it\'s a beautiful night, we\'re looking for something dumb to do\n' +
    'Hey baby, I think I wanna marry you\n' +
    'Is it the look in your eyes or is it this dancing juice?\n' +
    'Who cares, baby, I think I wanna marry you, oh\n' +
    'I\'ll go get a ring, let the choir bells sing like, ooh\n' +
    'So what ya wanna do? Let\'s just run, girl\n' +
    'If we wake up and you wanna break up, that\'s cool\n' +
    'No, I won\'t blame you, it was fun, girl\n' +
    'Don\'t say no, no, no, no, no\n' +
    'Just say yeah, yeah, yeah, yeah, yeah\n' +
    'And we\'ll go, go, go, go, go\n' +
    'If you\'re ready, like I\'m ready\n' +
    '\'Cause it\'s a beautiful night, we\'re looking for something dumb to do\n' +
    'Hey baby, I think I wanna marry you\n' +
    'Is it the look in your eyes or is it this dancing juice?\n' +
    'Who cares, baby, I think I wanna marry you\n' +
    'Just say I do\n' +
    'Tell me right now, baby\n' +
    'Tell me right now, baby, baby\n' +
    'Just say I do\n' +
    'Tell me right now, baby\n' +
    'Tell me right now, baby, baby, oh\n' +
    'It\'s a beautiful night, we\'re looking for something dumb to do\n' +
    'Hey baby, I think I wanna marry you\n' +
    'Is it the look in your eyes or is it this dancing juice?\n' +
    'Who cares, baby, I think I wanna marry you',
    //track7
    'A Thousand Years\n' +
    'Christina Perri\n' +
    'Heart beats fast\n' +
    'Colors and promises\n' +
    'How to be brave?\n' +
    'How can I love when I\'m afraid to fall?\n' +
    'But watching you stand alone\n' +
    'All of my doubt suddenly goes away somehow\n' +
    'One step closer\n' +
    'I have died every day waiting for you\n' +
    'Darling, don\'t be afraid\n' +
    'I have loved you for a thousand years\n' +
    'I\'ll love you for a thousand more\n' +
    'Time stands still\n' +
    'Beauty in all she is\n' +
    'I will be brave\n' +
    'I will not let anything take away\n' +
    'What\'s standing in front of me\n' +
    'Every breath\n' +
    'Every hour has come to this\n' +
    'One step closer\n' +
    'I have died every day waiting for you\n' +
    'Darling, don\'t be afraid\n' +
    'I have loved you for a thousand years\n' +
    'I\'ll love you for a thousand more\n' +
    'And all along I believed I would find you\n' +
    'Time has brought your heart to me\n' +
    'I have loved you for a thousand years\n' +
    'I\'ll love you for a thousand more\n' +
    'One step closer\n' +
    'One step closer\n' +
    'I have died every day waiting for you\n' +
    'Darling don\'t be afraid\n' +
    'I have loved you for a thousand years\n' +
    'I\'ll love you for a thousand more\n' +
    'And all along I believed I would find you\n' +
    'Time has brought your heart to me\n' +
    'I have loved you for a thousand years\n' +
    'I\'ll love you for a thousand more'
];