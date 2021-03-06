console.log ('Script is loaded')
let currentPhoto = 0;
let imagesData = [
    {   photo: 'images/01-slash.jpeg',
        title: 'Slash',
        description: "At the concert of Guns & Roses in Hungary. Photo: Illes Sandor" },
    {   photo: 'images/02-tankcsapda.jpeg',
        title: 'Lukács Tibi - Tankcsapda',
        description: 'Tankcsapda Concert 2019. Photo: Illes Sandor'},
    {   photo: 'images/03-annaandthebarbies.jpeg',
        title: 'Anna & the Barbies',
        description: 'Budapest Park, Anna & the Barbies concert 2019. Photo: Illes Sandor'},
    {   photo: 'images/04-nigel.jpg',
        title: 'Nigel Stately',
        description: 'Nigel Stately, open-air deep house night at Wasser 2019. Photo: Illes Sandor'},
    {   photo: 'images/05-lugosi-nirvana.jpg',
        title: 'Lugosi Dani',
        description: 'Tribute for Nirvana Unplugged at Ellatohaz, 2019. Photo: Illes Sandor'},
    {   photo: 'images/06-scorpions.jpg',
        title: 'Scorpions',
        description: 'Scorpions concert in Papp Laszlo Arena, 2019. Photo: Illes Sandor'},
    {   photo: 'images/07-boney_m.jpg',
        title: 'Boney M',
        description: 'Back to 80s concert at Budapest Park, 2019. Photo: Illes Sandor'},
    {   photo: 'images/08-4oz.jpg',
        title: '4Oz Tribute Band',
        description: 'Tribute concerts at Durer Kert, 2019. Photo: Illes Sandor'},
    {   photo: 'images/09-dffrntroom.jpg',
        title: 'DFFRNTRoom',
        description: 'Techno party crowd at DFFRNTRoom Budapest. Photo: Illes Sandor'}
];
$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);
