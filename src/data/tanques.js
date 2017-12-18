//Loma Negra PTG - YPF
   const tanques = [
       {id: 1,nombre:'TK V-510',idLocacion:11, estado: 'rojo',tipo:'T',producto:'GLP',inscriptoA1: 'Si',client:'ypf',mapData: {
           center: {lat:-38.920396, lng:-69.279718},
           zoom: 25
         }},
       {id: 2,nombre:'TK V-515',idLocacion:11, estado: 'verde',tipo:'T',producto:'GLP',client:'ypf',mapData: {
           center: {lat:-38.920379, lng:-69.279628},
           zoom: 25
         }},
       {id: 3,nombre:'TK V-565',idLocacion:11, estado: 'amarillo',tipo:'T',producto:'GLP',client:'ypf',mapData: {
           center: {lat:-38.920356, lng:-69.279545},
           zoom: 25
         }},
       {id: 4,nombre:'TK V-570',idLocacion:11, estado: 'verde',tipo:'T',producto:'GLP',client:'ypf',mapData: {
           center: {lat:-38.920342, lng:-69.279456},
           zoom: 25
         }},
         {id: 8,nombre:'TK 01',idLocacion:11, estado: 'rojo',tipo:'T',producto:'Gasolina',client:'ypf',mapData: {
           center: {lat:-38.92093872610833, lng: -69.28100287914276},
           zoom: 25
         }},

         {id: 9,nombre:'TK General',idLocacion:11, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',client:'ypf',mapData: {
             center: {lat:-38.92081351829113, lng:-69.28103774785995},
             zoom: 25
         }},
         //Portezuelo Oeste - YPF
       {id: 5,nombre:'TK 1701',idLocacion:14, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',client:'ypf',mapData: {
           center: {lat:-39.013125, lng:-69.561911},
           zoom: 25
         }},
       {id: 6,nombre:'TK 1700',idLocacion:14, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',client:'ypf',mapData: {
           center: {lat:-39.013238, lng:-69.561909},
           zoom: 25
         }},
         //Portezuelo Norte - YPF
       {id: 7,nombre:'TK 01',idLocacion:15, estado: 'verde',tipo:'T',producto:'Petroleo + Agua',client:'ypf',mapData: {
           center: {lat:-38.944810, lng: -69.469410},
           zoom: 25
         }},
       //Barda Gonzalez - YPF
       {id: 10,nombre:'TK 22 General',idLocacion:1, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',client:'ypf',mapData: {
           center: {lat:-38.841640080703236, lng:-69.14907574653625},
           zoom: 25
       }},
       //PTG EFO - YPF
       {id: 11,nombre:'TK 07 Petroleo',idLocacion:16, estado: 'amarillo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'FUERA DE 785',client:'ypf',mapData: {
           center: {lat:-39.00756914722049, lng:-67.87331253290176},
           zoom: 25
       }},

       {id: 12,nombre:'TK 03 Petroleo',idLocacion:16, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'FUERA DE 785',client:'ypf',mapData: {
           center: {lat:-39.007959, lng:-67.873409},
           zoom: 25
       }},

       {id: 42,nombre:'TK 06 Control 2',idLocacion:16, estado: 'verde',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'FUERA DE 785',client:'ypf',mapData: {
           center: {lat:-39.007787, lng: -67.873167},
           zoom: 25
       }},

       {id: 43,nombre:'TK 05 Petroleo',idLocacion:16, estado: 'verde',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'habilitado Res.785/266',client:'ypf',mapData: {
           center: {lat:-39.007767, lng: -67.873367},
           zoom: 25
       }},

       {id: 44,nombre:'TK Lavador',idLocacion:16, estado: 'verde',tipo:'T',producto:'Petroleo',inscriptoA1:'habilitado Res.785/266',client:'ypf',mapData: {
           center: {lat:-39.008142, lng:-67.873456},
           zoom: 25
       }},
       //BaT. 2 - YPF
       {id: 13,nombre:'TK Cov',idLocacion:17, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'FUERA DE 785',client:'ypf',mapData: {
           center: {lat:-39.01092261775828, lng:-67.87443906068802},
           zoom: 25
       }},
       //Bat. 3 - Chevron
       {id: 14,nombre:'TK 232',idLocacion:18, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'No Inscripto',client:'chevron',mapData: {
           center: {lat:-37.410694172383614, lng:-69.30489867925644},
           zoom: 25
       }},
       {id: 15,nombre:'TK 231A',idLocacion:18, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'AP OCT-2028',client:'chevron',mapData: {
           center: {lat:-37.41083904501605, lng:-69.30489331483841},
           zoom: 25
       }},
       {id: 16,nombre:'TK 231B',idLocacion:18, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'FUERA DE 785',client:'chevron',mapData: {
           center: {lat:-37.41099030878916, lng:-69.30489599704742},
           zoom: 25
       }},
       {id: 17,nombre:'TK 239A',idLocacion:18, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'FUERA DE 785',client:'chevron',mapData: {
           center: {lat:-37.41048112388576, lng:-69.3048906326294},
           zoom: 25
       }},
       {id: 18,nombre:'TK 239B',idLocacion:18, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'AP NOV-2029',client:'chevron',mapData: {
           center: {lat:-37.41027020527605, lng:-69.30490404367447},
           zoom: 25
       }},
       //Bat. 7 - Chevron
       {id: 19,nombre:'TK 272B',idLocacion:23, estado: 'verde',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'EA NOV-2018',client:'chevron',mapData: {
           center: {lat:-37.3784402576075, lng:-69.2897817492485},
           zoom: 25
       }},

       {id: 21,nombre:'TK 279',idLocacion:23, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'Fuera de 785',client:'chevron',mapData: {
           center: {lat:-37.378143, lng:-69.289791},
           zoom: 25
       }},

       {id: 22,nombre:'TK 272C',idLocacion:23, estado: 'amarillo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'EA JUL-2019',client:'chevron',mapData: {
           center: {lat:-37.378282, lng:-69.289800},
           zoom: 25
       }},

       {id: 23,nombre:'TK 272A',idLocacion:23, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'A Abandono',client:'chevron',mapData: {
           center: {lat:-37.37861503211537, lng: -69.28977370262146},
           zoom: 25
       }},

       {id: 24,nombre:'TK 274',idLocacion:23, estado: 'verde',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'Fuera de 785',client:'chevron',mapData: {
           center: {lat:-37.378590, lng:-69.289033},
           zoom: 25
       }},
        //Bat. 2 - Chevron
       {id: 20,nombre:'TK 221A',idLocacion:25, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'AP OCT-2031',client:'chevron',mapData: {
           center: {lat:-37.432146, lng:-69.337998},
           zoom: 25
       }},

       {id: 25,nombre:'TK 221B',idLocacion:25, estado: 'amarillo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'AP OCT-2029',client:'chevron',mapData: {
           center: {lat:-37.43214505326583, lng:-69.33818221092224},
           zoom: 25
       }},

       {id: 26,nombre:'TK 222',idLocacion:25, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'No Inscripto',client:'chevron',mapData: {
           center: {lat:-37.43215357275228 , lng:-69.33779865503311},
           zoom: 25
       }},
       {id: 27,nombre:'TK 229A',idLocacion:25, estado: 'verde',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'Fuera de 785',client:'chevron',mapData: {
           center: {lat:-37.43214931300918, lng:-69.33751434087753},
           zoom: 25
       }},
       {id: 28,nombre:'TK 229B',idLocacion:25, estado: 'amarillo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'Fuera de 785',client:'chevron',mapData: {
           center: {lat:-37.43215570262374, lng:-69.33720052242279},
           zoom: 25
       }},
       //Bat 1 - Chevron
        {id: 29,nombre:'TK 210A',idLocacion:24, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'A Abandono',client:'chevron',mapData: {
           center: {lat:-37.406194459374085 , lng:-69.37253326177597},
           zoom: 25
       }},
        {id: 30,nombre:'TK 210B',idLocacion:24, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'EA ENE-2018',client:'chevron',mapData: {
           center: {lat:-37.40608153696348, lng:-69.37233477830887},
           zoom: 25
       }},
        {id: 31,nombre:'TK 212',idLocacion:24, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'No Inscripto',client:'chevron',mapData: {
           center: {lat:-37.40600909608216, lng:-69.3721604347229},
           zoom: 25
       }},
       //Bat 4 - Chevron
        {id: 32,nombre:'TK 240A',idLocacion:20, estado: 'verde',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'AP MAY-2029',client:'chevron',mapData: {
           center: {lat:-37.413335923417115, lng:-69.34054255485535},
           zoom: 25
       }},
        {id: 33,nombre:'TK 240B',idLocacion:20, estado: 'verde',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'EA NOV-2018',client:'chevron',mapData: {
           center: {lat: -37.41331461934594, lng:-69.3403548002243},
           zoom: 25
       }},
        {id: 34,nombre:'TK 242',idLocacion:20, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'No Inscripto',client:'chevron',mapData: {
           center: {lat:-37.41330183690034, lng:-69.34016704559326},
           zoom: 25
       }},
        {id: 35,nombre:'TK 249',idLocacion:20, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'Fuera de 785',client:'chevron',mapData: {
           center: {lat:-37.41321235971996, lng:-69.33955013751984},
           zoom: 25
       }},
        {id: 36,nombre:'TK 249B',idLocacion:20, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'Fuera de 785',client:'chevron',mapData: {
           center: {lat:-37.41318679479165, lng:-69.33931946754456},
           zoom: 25
       }},
       //Bat 5 - Chevron
        {id: 37,nombre:'TK 259',idLocacion:19, estado: 'verde',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'Fuera de 785',client:'chevron',mapData: {
           center: {lat:-37.41791402774428, lng:-69.36022728681564},
           zoom: 25
       }},
        {id: 38,nombre:'TK 250B',idLocacion:19, estado: 'verde',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'EA NOV-2018',client:'chevron',mapData: {
           center: {lat: -37.417790471599716, lng:-69.36008512973785},
           zoom: 25
       }},
        {id: 39,nombre:'TK 250A',idLocacion:19, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'AP SEP-2030',client:'chevron',mapData: {
           center: {lat:-37.41766691525129, lng:-69.35994565486908},
           zoom: 25
       }},
        {id: 40,nombre:'TK 252',idLocacion:19, estado: 'amarillo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'No Inscripto',client:'chevron',mapData: {
           center: {lat:-37.41756679185392 , lng:-69.35981959104538},
           zoom: 25
       }},
        {id: 41,nombre:'TK 259B',idLocacion:19, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'Fuera de 785',client:'chevron',mapData: {
           center: {lat:-37.41769034836752, lng:-69.35961842536926},
           zoom: 25
       }},
       //Bat 8 - Chevron
        {id: 46,nombre:'TK 282',idLocacion:22, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'No Inscripto',client:'chevron',mapData: {
           center: {lat:-37.411386575817005, lng:-69.35534834861755},
           zoom: 25
       }},
        {id: 47,nombre:'TK 281',idLocacion:22, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'A Abandono',client:'chevron',mapData: {
           center: {lat:-37.41140574997486, lng:-69.35516595840454},
           zoom: 25
       }},
        {id: 48,nombre:'TK 280',idLocacion:22, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'AP MAY-2029',client:'chevron',mapData: {
           center: {lat:-37.41140574997486, lng:-69.35499161481857 },
           zoom: 25
       }},
        {id: 49,nombre:'TK 289',idLocacion:22, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'Fuera de 785',client:'chevron',mapData: {
           center: {lat:-37.411416402282654 , lng:-69.35475021600723},
           zoom: 25
       }},
       //PTC - Chevron
        {id: 50,nombre:'TK 104',idLocacion:21, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'No Inscripto',client:'chevron',mapData: {
           center: {lat:-37.36552713149698, lng:-69.28091704845428},
           zoom: 25
       }},
        {id: 51,nombre:'TK 102',idLocacion:21, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'AP ENE-2032',client:'chevron',mapData: {
           center: {lat: -37.36587674028173, lng: -69.2811369895935},
           zoom: 25
       }},
        {id: 52,nombre:'TK 101',idLocacion:21, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'No Inscripto',client:'chevron',mapData: {
           center: {lat:-37.36628603630129, lng:-69.28120136260986  },
           zoom: 25
       }},
        {id: 53,nombre:'TK 112',idLocacion:21, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'Fuera de 785',client:'chevron',mapData: {
           center: {lat:-37.36696819137233 , lng: -69.28167879581451},
           zoom: 25
       }},
        {id: 54,nombre:'TK 103B',idLocacion:21, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'Fuera de 785',client:'chevron',mapData: {
           center: {lat:-37.36575736185545, lng:-69.280144572258},
           zoom: 25
       }},
        {id: 55,nombre:'TK 103A',idLocacion:21, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'EA ENE-2019',client:'chevron',mapData: {
           center: {lat: -37.36635425208749, lng:-69.28024649620056},
           zoom: 25
       }},
        {id: 56,nombre:'TK 113B',idLocacion:21, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'A Abandono',client:'chevron',mapData: {
           center: {lat: -37.36569554081005, lng:-69.27905827760696},
           zoom: 25
       }},
        {id: 57,nombre:'TK 113A',idLocacion:21, estado: 'rojo',tipo:'T',producto:'Petroleo + Agua',inscriptoA1:'AP ENE-2024',client:'chevron',mapData: {
           center: {lat:-37.366448048692234 , lng: -69.2791736125946 },
           zoom: 25
       }},
    ]

       export default tanques;
