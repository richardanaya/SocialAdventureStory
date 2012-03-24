var book = {
    title:'A Simple Story',
    author:'Richard',
    pages:[
        {
            name:'COVER',
            text:'You are standing inside a room.',
            actions:[
                {
                    text:'open the door',
                    page:'1'
                },
                {
                    text:'close the door',
                    page:'2'
                }
            ]
        },
        {
            name:'1',
            text:'You walk outside, an the planet explodes. Better luck next time.<br>' +
                '<br><center><img src="images/octupus.png" width="90%"></center><br><br>' +
                '<center>THE END</center>',
            actions:[
                {
                    text:'Read again.',
                    page:'COVER'
                }
            ]
        },
        {
            name:'2',
            text:'You sit lathargically at your computer till you die. The End.',
            actions:[
                {
                    text:'Read again.',
                    page:'COVER'
                }
            ]
        }
    ]
};