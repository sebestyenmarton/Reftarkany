
$(document).ready(function(){
  var adatok_a_felvetelekhez = [

    {tipus:      'ifjusagienek', 
    link:        'https://www.youtube.com/embed/LXzGN_z0sok', 
    cim:         'Terád vár egy szép ország',
    szolgal:     'Ének: Sebestyén Márton és Sebestyén László Ede',
    datum:       '2017.12',
    kategoria:   'Ifjúsági-ének'},

    {tipus:      'ifjusagienek', 
    link:        'https://www.youtube.com/embed/8Wf7foG5pZY', 
    cim:         'Teremts bennem tiszta szívet',
    szolgal:     'Ének: Sebestyén Márton, Sebestyén Ágnes, Halász Heni',
    datum:       '2017.04',
    kategoria:   'Ifjúsági-ének'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/Uwb3FgHQ6zo', 
    cim:         '2Kir5 - Evangelizáció',
    szolgal:     'Szolgál: Molnár Róbert',
    datum:       '2017.02',
    kategoria:   'Istentisztelet'},
  
    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/Ww8V3_NgCQA', 
    cim:         'Zsolt 130,8',
    szolgal:     'Szolgál: Filep Attila és Sebestyén László Ede',
    datum:       '2020.03.29',
    kategoria:   'Istentisztelet'},
  
    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/J7KppCq--xM', 
    cim:         'Mt 27,3 - Evangelizáció',
    szolgal:     'Szolgál: Bódis Miklós',
    datum:       '2017.02.25',
    kategoria:   'Istentisztelet'},
  
    {tipus:      'ahitat', 
    link:        'https://www.youtube.com/embed/lRXrHUugImc', 
    cim:         'Lk 18,1-8 - Áhitat',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2020.03.19',
    kategoria:   'Áhitat'},
  
    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/Zgr-lttrtOs', 
    cim:         '1Pt 4,7 - Istentisztelet',
    szolgal:     'Szolgál: Nagy Brigitta',
    datum:       '2016.02.01',
    kategoria:   'Istentisztelet'},

    {tipus:      'ifjusagienek', 
    link:        'https://www.youtube.com/embed/BFaxYlbDJlY', 
    cim:         'Áldom szent neved',
    szolgal:     'Ének és zene: Sebestyén Márton',
    datum:       '2017.02.09',
    kategoria:   'Ifjúsági-ének'},

    {tipus:      'ifjusagienek', 
    link:        'https://www.youtube.com/embed/9i-d8o5p3CA', 
    cim:         'Jézus véred megtisztít',
    szolgal:     'Énekli: Magvető',
    datum:       '',
    kategoria:   'Ifjúsági-ének'},

    {tipus:      'ahitat', 
    link:        'https://www.youtube.com/embed/5NhESAkq9-Y', 
    cim:         'Bölcs - Lk 2, 41-52',
    szolgal:     'Sebestyén László Ede',
    datum:       '2021.04.28  ',
    kategoria:   'Bibliaóra'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/6_izcL6xkNg', 
    cim:         'Salamoni döntés',
    szolgal:     'Sebestyén László Ede',
    datum:       '2021.04.25',
    kategoria:   'Istentisztelet'},

    {tipus:      'ahitat', 
    link:        'https://www.youtube.com/embed/jlhSDeFfu3Q', 
    cim:         'Bíztató "Ne félj!" - Ézs 41, 10-14',
    szolgal:     'Sebestyén László Ede',
    datum:       '2021.04.21  ',
    kategoria:   'Bibliaóra'},

  ];
  
  
  boxMakingForHtml(adatok_a_felvetelekhez);
  
  function boxMakingForHtml(data){
  var box = document.getElementById('youtube');
  
  for (var i = 0; i < data.length; i++){
    var boxContainer = `<div class="linkbox" id="${data[i].tipus}" >
                            <iframe width="560" height="315" src="${data[i].link}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          
                            <div class="cime__szolgal">
                              <div class="cime">${data[i].cim}</div> 
                              <div class="szolgal">${data[i].szolgal}</div>
                            <div class="datum__kategoria">
                              <div class="datum">${data[i].datum}</div> 
                              <div class="kategoria">${data[i].kategoria}</div>
                            </div>
                          </div>
                        </div>`;
    box.innerHTML += boxContainer;
    };
  };
});

