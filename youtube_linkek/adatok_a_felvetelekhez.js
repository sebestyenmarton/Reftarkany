
$(document).ready(function(){
  var adatok_a_felvetelekhez = [

    {tipus:      'ahitat', 
    link:        'https://www.youtube.com/embed/hTvbFIL3iAA', 
    cim:         'Bibliaóra 1Sám17,1-51 Erővel teljes',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021 06 23',
    kategoria:   'Bibliaóra'},


    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/Hq1vjZZKVfQ', 
    cim:         'Vas du Préd 3,1 Ha az idő Ura szól',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021 06 20',
    kategoria:   'Istentisztelet'},



    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/9nUXGINHmyQ', 
    cim:         'Vas de ApCsel 23,11 Bízzál!',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021 06 20',
    kategoria:   'Istentisztelet'},


    {tipus:      'ahitat', 
    link:        'https://www.youtube.com/embed/hM3Xfz2O85Q', 
    cim:         'Bibliaóra 1Móz12,1-5 Zsid 11,8 Engedelmesen',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021 06 16',
    kategoria:   'Bibliaóra'},

   {tipus:      'ifjusagienek', 
    link:        'https://www.youtube.com/embed/0RveZkCDapo', 
    cim:         'Köröstárkányi Ifi-est énekei',
    szolgal:     'Ének: Sebestyén Márton, Antal Anasztázia',
    datum:       '2021 06 13',
    kategoria:   'Ifjúsági-ének'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/-xuyUlGR37Q', 
    cim:         'Vas Du Zsolt 33,1-3 Énekeljetek Neki új éneket!',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021 06 13',
    kategoria:   'Istentisztelet'},



    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/6IYnwCfB-n8', 
    cim:         'Vas De Ap Csel 20, 24 Tovább!',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021 06 13',
    kategoria:   'Istentisztelet'},


    {tipus:      'ahitat', 
    link:        'https://www.youtube.com/embed/QUVdJ0Ixf-Y', 
    cim:         'Bibliaóra Efézus 4,1-16 Testvérszeretetben',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021 06 09',
    kategoria:   'Bibliaóra'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/hP1JNwCyQm8', 
    cim:         'Vas de Bírák 16,16 Bukásban',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021 06 06',
    kategoria:   'Istentisztelet'},

    {tipus:      'ahitat', 
    link:        'https://www.youtube.com/embed/QUVdJ0Ixf-Y', 
    cim:         'Bibliaóra Zsolt 127, 1-2 2Thessz 3, 6-15 Végletek',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021 06 02',
    kategoria:   'Bibliaóra'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/4qZNAPwig1I', 
    cim:         'Vas de Zsolt 9, 20-21 Isten a hatalmas Úr, senki más ne hatalmaskodjék!',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.30',
    kategoria:   'Istentisztelet'},

    {tipus:      'ahitat', 
    link:        'https://www.youtube.com/embed/Q-Ckd9iaAg4', 
    cim:         'Bibliaóra Mk 6,30-32 Csendesség Jézussal',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.26',
    kategoria:   'Bibliaóra'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/Fb-nxMFV2OM', 
    cim:         'P. Hétfő Du Jn 14,26 A Pártfogó',
    szolgal:     'Szolgál: Balás Zoltán Attila',
    datum:       '2021.05.24',
    kategoria:   'Istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/82R9A9QTC-s', 
    cim:         'P. Hétfő de Ezékiel 37,1-14 Jöjj el Lélek!',
    szolgal:     'Szolgál: Balás Zoltán Attila',
    datum:       '2021.05.24',
    kategoria:   'Istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/0rkkAPs-KLA', 
    cim:         'P. Vasárnap du Ap Csel 2, 1-8 Bábel és Pünkösd',
    szolgal:     'Szolgál: Balás Zoltán Attila',
    datum:       '2021.05.23',
    kategoria:   'Istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/NtQoEbxEU5k', 
    cim:         'Pünkösdvas de Ap Csel 2,21 A Lélek üzenete: Kiálts Jézushoz!',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.23',
    kategoria:   'Istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/Yx44r7cr1mQ', 
    cim:         'Szombat este Ap Csel 14,1-7 Kitartóan és hűségesen',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.22',
    kategoria:   'Bűnbánati istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/2J7l4JMf8yo', 
    cim:         'Szombat reggel Bírák 8,24-35 Gedeon bálványimádása',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.22',
    kategoria:   'Bűnbánati istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/rIixmWjrfxA', 
    cim:         'Péntek este Ap Csel 13,44-52 Ébredés Antiókhiában',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.21',
    kategoria:   'Bűnbánati istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/74cZ-Bi0xrs', 
    cim:         'Péntek reggel Bírák 8,13-23 Isten maradjon az első!',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.21',
    kategoria:   'Bűnbánati istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/LvGjvOCBbXU', 
    cim:         'Csüt este Ap Csel 13,41 Magvetők a megvetők között',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.20',
    kategoria:   'Bűnbánati istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/3gSHuXf6Mzk', 
    cim:         'Csüt reggel Bírák 8,1-12 Fáradtan se abbahagyva',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.20',
    kategoria:   'Bűnbánati istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/WRnU-S01Vbg', 
    cim:         'Szerda este Ap Csel 13,26 Az üdvösség Igéje',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.19',
    kategoria:   'Bűnbánati istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/7w8h0X4eXwY', 
    cim:         'Szerda reggel Bírák 7,15-25 Fegyverbe!',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.19',
    kategoria:   'Bűnbánati istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/cTFxRSoZxL8', 
    cim:         'Kedd este Ap Csel 13,15 Intés és buzdítás',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.18',
    kategoria:   'Bűnbánati istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/janOvjd_qBo', 
    cim:         'Kedd reggel Bírák 7,9-15 Bátorodás és megerősödés',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.18',
    kategoria:   'Bűnbánati istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/52E-StbgA38', 
    cim:         'Hétfő este Ap Csel 13,1-3 Pál és Barnabás elhívása',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.17',
    kategoria:   'Bűnbánati istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/SgxwMIDyR5g', 
    cim:         'Hétfő reggel Bírák7,1-8 Nincs helye a dicsekedésnek!',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.17',
    kategoria:   'Bűnbánati istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/YQv-mO7tozo', 
    cim:         'Vas du Zsolt 65,1-5 Boldog, akit kiválasztott',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.16',
    kategoria:   'Istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/GFlkZoHc7UY', 
    cim:         'Vas de Róma 8,38-39 Meg vagyok győződve',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.16',
    kategoria:   'Istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/wdm9bHvmVbc', 
    cim:         'Áldozócsüt du Ef 1,19 A szeretet hatalma',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.13',
    kategoria:   'Istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/4e1X28CJqN8', 
    cim:         'Áldozócsütörtök de. istent. Lk 24,50-53 Az imádandó Úr',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.13',
    kategoria:   'Istentisztelet'},

    {tipus:      'ahitat', 
    link:        'https://www.youtube.com/embed/MJ7Qv2X_VSc', 
    cim:         'Bibliaóra Ef 4,1-3 1Pt 4,7-11 Szerető',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.12',
    kategoria:   'Bibliaóra'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/hRjADGnyBZ8', 
    cim:         'Vas du Zsolt 66,16-20 A meghallgatás öröme',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.09',
    kategoria:   'Istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/mTSKhIGfjT0', 
    cim:         'Vas de Ap Csel 10,33b Jól tetted, hogy eljöttél',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.09',
    kategoria:   'Istentisztelet'},

    {tipus:      'ahitat', 
    link:        'https://www.youtube.com/embed/120tgbhb4PE', 
    cim:         'Lk 15,11-32  - Tékozlók',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.ö5',
    kategoria:   'Bibliaóra'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/mTSKhIGfjT0', 
    cim:         'Vas du Ap Csel 8,23 Furcsa fogság',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.02',
    kategoria:   'Istentisztelet'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/Zv5gBsoYOfQ', 
    cim:         'Anyáknapi ünnepély',
    szolgal:     'Szolgál: vallásórások',
    datum:       '2021.05.02',
    kategoria:   'Anyáknapi ünnepély'},

    {tipus:      'istentisztelet', 
    link:        'https://www.youtube.com/embed/hfVwxE12uFY', 
    cim:         'Mt 20, 20-21 Jézus mellett',
    szolgal:     'Szolgál: Sebestyén László Ede',
    datum:       '2021.05.02',
    kategoria:   'Anyáknapi Istentisztelet'},

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
  
  //a képernyőátmérőtől függően beállítom az elemek lehetséges számát az oldalon:
  //   -mobilon 8, míg nagybb képernyőn 13  
  $(window).resize(function() {
    if (window.matchMedia("(max-width: 704px)").matches) {
      lengthValue = 8;
      felvetelekResize(adatok_a_felvetelekhez);
    } else {
      lengthValue = 13;
      felvetelekResize(adatok_a_felvetelekhez);
    }
  }).trigger("resize"); 

  let paginationValue = adatok_a_felvetelekhez.length/(lengthValue-1);
  paginationBoxMakingForHtml();
  paginationMaking(paginationValue);
  boxMakingForHtml(adatok_a_felvetelekhez , 1);

   //   automatikusan: kattintásérzékelés és kiíratás; egyenlőre még nem működik,
   //   mert a multipliernek megfelelő current z kattintáskor mindig a maximális értéket veszi fel
   //   e helyett használom a paginationMaking-et
/*   function paginationMaking(paginationValue){
    var z = 1;
    for( z ; z < paginationValue+1 ; ++z){
      $('.page:nth-of-type(' +  z + ')').click(function(){
        boxMakingForHtml(adatok_a_felvetelekhez , z );
      });
    }
  };  */




  function paginationMaking(){ //Manuálisan: kattintásérzékelés és felvételek-kiíratás, 
    $('.page:nth-of-type(' +  1 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 1);});
    $('.page:nth-of-type(' +  2 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 2);});
    $('.page:nth-of-type(' +  3 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 3);});
    $('.page:nth-of-type(' +  4 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 4);});
    $('.page:nth-of-type(' +  5 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 5);});
    $('.page:nth-of-type(' +  6 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 6);});
    $('.page:nth-of-type(' +  7 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 7);});
    $('.page:nth-of-type(' +  8 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 8);});
    $('.page:nth-of-type(' +  9 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 9);});
    $('.page:nth-of-type(' +  10 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 10);});
    $('.page:nth-of-type(' +  11 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 11);});
    $('.page:nth-of-type(' +  12 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 12);});
    $('.page:nth-of-type(' +  13 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 13);});
    $('.page:nth-of-type(' +  14 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 14);});
    $('.page:nth-of-type(' +  15 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 15);});
    $('.page:nth-of-type(' +  16 + ')').click(function(){boxMakingForHtml(adatok_a_felvetelekhez , 16);});
  }; //Mindig növelni kell a sorok számát ha új oldalra van szükség!!! 


  //a current lengthValue értéket ismerve (egy oldalon levő youtubeboxok száma) :
  //                 -vagy törlöm a nagyképernyős plusz elemeket (ha vannak ilyenek) a mobil módhoz
  //                 -vagy láthatóvá teszem a törölt elemeket (ha vannak ilyenek) a mobil módhoz
  function felvetelekResize(felvetel){  
    for( var x = 1 ; x < felvetel.length; ++x){
      if( x < lengthValue ){
        $( '.linkbox:nth-of-type(' +  x +  ')').css("display","block");
      } else {
        $( '.linkbox:nth-of-type(' +  x + ')').css("display","none");
      }
    };
  };




  //kiíratom a megfelelő oldal youtubebox-jait
  //úgy működik, hogy az indexeket felhasználva mindig kicserélem a szükséges oldal tartalmára a korábbi tartalmak html-jét
  function boxMakingForHtml(felvetelek , multiplier){

    console.log(multiplier);
    var box = document.getElementById('youtube');
    var i = ((lengthValue-1) * multiplier) - (lengthValue-1);

    //deklarálás
    for ( i ; i < (lengthValue-1) * multiplier; i++){
      var felvetelekContainer = `
        <div class="linkbox" id="${felvetelek[i].tipus}" >
          <iframe width="560" height="315" src="${felvetelek[i].link}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>          
          <div class="cime__szolgal">
            <div class="cime">${felvetelek[i].cim}</div> 
            <div class="szolgal">${felvetelek[i].szolgal}</div>
          </div>
          <div class="datum__kategoria">
            <div class="datum">${felvetelek[i].datum}</div> 
            <div class="kategoria">${felvetelek[i].kategoria}</div>
          </div>
        </div>
      `;


      for(var q=1; q<paginationValue ; ++q){
        if(q==multiplier){
          $('#pagination .page:nth-of-type(' + q + ')').addClass('actual'); 
        }else{
          $('#pagination .page:nth-of-type(' + q + ')').removeClass('actual');
        };
      };


      // a kiíratás feltételei:
      //        -if ág valósul meg, hogyha az első elemet íratom ki, ezzel lecserélem (igazából törlöm) 
      //          az előző összes child-et a box(=youtube)-ból
      //        -else ág valúsul meg, ha nem az első elemet írom ki, ilyenkor semmit nem írok felül, 
      //          hanem csak hozzádak a box-hoz egy új felvetelekContainer (youtube box) elementet  
      if( i == (((lengthValue-1) * multiplier) - (lengthValue-1))){box.innerHTML = felvetelekContainer;}
      else{box.innerHTML += felvetelekContainer;}
    };
  };





  function paginationBoxMakingForHtml(){
    var paginationBox = document.getElementById('pagination');
    for(  var y = 1; y < paginationValue + 1; ++y  ){
      var paginationContainer = `
        <div class="page" href="">${ y }</div>
      `;
        paginationBox.innerHTML += paginationContainer;
    };
  };
});

