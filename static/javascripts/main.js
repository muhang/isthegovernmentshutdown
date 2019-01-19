$(document).ready(function() {
        var startDate = new Date('Sat Dec 22 2018 00:00:00 GMT-0500'); //What date to start counting from
        var now = Math.floor(Date.now()/1000); //Current timestamp in seconds
        var clockStart = now - startDate.getTime()/1000; //What to set the clock at when page loads

        FlipClock.Lang.Custom = { days:'Dagar', hours:'Tim', minutes:'Min', seconds:'Sek' };

        //var clock = $("#clock").FlipClock({}).setTime(date);
        var clock = $("#clock").FlipClock({
                clockFace: 'DailyCounter'
        }).setTime(clockStart);

});
