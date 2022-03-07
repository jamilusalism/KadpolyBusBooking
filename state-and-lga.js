
// locations
var State_arr = new Array("Federal Capital City", "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Kastina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara");

// routes
var l_a = new Array();
l_a[0] = "";
l_a[1] = "Abaji|Abuja|Municipal|Gwagwalada|Kuje|Bwari|Kwali";
l_a[2] = "Aba North|Aba South|Arochukwu|Bende|Ikwuano|Isiala Ngwa North|Isiala Ngwa South|Isuikwuato|Obi Ngwa|Ohafia|Osisioma Ngwa|Ugwunagbo|Ukwa East|Ukwa West|Umuahia North|Umuahia South|Umu Nneochi";
l_a[3] = "Demsa|Fufore|Ganye|Girei|Gombi|Guyuk|Hong|Jada|Lamurde|Madagali|Maiha|Mayo-Belwa|Michika|Mubi North|Mubi South|Numan|Shelleng|Song|Toungo|Yola North (State capital)|Yola South";
l_a[4] = "Abak|Eastern Obolo|Eket|Esit-Eket|Essien Udim|Etim-Ekpo|Etinan|Ibeno|Ibesikpo-Asutan|Ibiono-Ibom|Ika|Ikono|Ikot Abasi|Ikot Ekpene|Ini|Itu|Mbo|Mkpat-Enin|Nsit-Atai|Nsit-Ibom|Nsit-Ubium|Obot-Akara|Okobo|Onna|Oron|Oruk Anam|Ukanafun|Udung-Uko|Uruan|Urue-Offong/Oruko|Uyo";
l_a[5] = "Aguata|Awka North|Awka South|Anambra East|Anambra West|Anaocha|Ayamelum|Dunukofia|Ekwusigo|Idemili North|Idemili South|Ihiala|Njikoka|Nnewi North|Nnewi South|Ogbaru|Onitsha North|Onitsha South|Orumba North|Orumba South|Oyi ";
l_a[6] = "Bauchi|Tafawa Balewa|Bununu|Dass|Toro|Bogoro|Ningi|Warji|Ganjuwa|Kafin Madaki|Kirfi|Alkaleri|Darazo|Misau|Giade|Shira|Jama'are|Katagum|Itas/Gadau|Zaki|Gamawa|Damban";
l_a[7] = "Brass|Ekeremor|Kolokuma/Opokuma|Nembe|Ogbia|Sagbama|Southern Ijaw|Yenagoa";
l_a[8] = "Ado|Agatu|Apa|Buruku|Gboko|Guma|Gwer East|Gwer West|Katsina-Ala|Konshisha|Kwande|Logo|Makurdi|Obi|Ogbadibo|Ohimini|Oju|pokwu|Otukpo|Tarka|Ukum|Ushongo|Vandeikya";
l_a[9] = "Maiduguri|Askira/Uba|Abadam|Ngala|Bayo|Gubio|Kala/Balge|Biu|Guzamala|Mafa|Chibok|Kaga|Konduga|Damboa|Kukawa|Bama|Gwoza|Magumeri|Jere|Hawul|Marte|Dikwa|Kwaya Kusar|Mobbar|Shani|Monguno|Nganzai";
l_a[10] = "Abi|Akamkpa|Akpabuyo|Bakassi|Bekwarra|Biase|Boki|Calabar Municipal|Calabar South|Etung|Ikom|Obanliku|Obubra|Obudu|Odukpani|Ogoja|Yakuur|Yala";
l_a[11] = "Ethiope East|Aniocha North|Bomadi|Ethiope West|Aniocha South|Burutu|Okpe|Ika North East|Isoko North|Sapele|Ika South|Udu|Ndokwa East|Patani|Ughelli North|Ndokwa West|Warri North|Ughelli South|Oshimili North|Warri South|Uvwie|Oshimili South|Warri South West|Ukwuani";
l_a[12] = "Abakaliki|Afikpo North|Afikpo South (Edda)|Ebonyi|Ezza North|Ezza South|Ikwo|Ishielu|Ivo|Izzi|Ohaozara|Ohaukwu|Onicha";
l_a[13] = "Akoko-Edo|Egor|Esan Central|Esan North-East|Esan South-East|Esan West|Etsako Central|Etsako East|Etsako West|Igueben|Ikpoba-Okha|Oredo|Orhionmwon|Ovia North-East|Ovia South-West|Owan East|Owan West|Uhunmwonde";
l_a[14] = "Ado-Ekiti|Ikere|Oye|Aiyekire (Gbonyin)|Efon|Ekiti East|Ekiti South-West|Ekiti West|Emure|Ido-Osi|Ijero|Ikole|Ilejemeje|Irepodun/Ifelodun|Ise/Orun|Moba";
l_a[15] = "Aninri|Awgu|Enugu East|Enugu North|Enugu South|Ezeagu|Igbo Etiti|Igbo Eze North|Igbo Eze South|Isi Uzo|Nkanu East|Nkanu West|Nsukka|Oji River|Udenu|Udi|Uzo-Uwani";
l_a[16] = "Akko|Balanga|Billiri|Dukku|Funakaye|Gombe|Kaltungo|Kwami|Nafada|Shongom|Yamaltu/Deba";
l_a[17] = "Aboh Mbaise|Ahiazu Mbaise|Ehime Mbano|Ezinihitte Mbaise|Ideato North|Ideato South|Ihitte/Uboma|Ikeduru|Isiala Mbano|Isu|Mbaitoli|Ngor Okpala|Njaba|Nkwerre|Nwangele|Obowo|Oguta|Ohaji/Egbema|Okigwe|Onuimo|Orlu|Orsu|Oru East|Oru West|Owerri Municipal|Owerri North|Owerri West|Nwangele";
l_a[18] = "Auyo|Babura|Biriniwa|Birnin Kudu|Buji|Dutse|Gagarawa|Garki|Gumel|Guri|Gwaram|Gwiwa|Hadejia|Jahun|Kafin Hausa|Kaugama|Kazaure|Kiri Kasama|Kiyawa|Maigatari|Malam Madori|Miga|Ringim|Roni|Sule Tankarkar|Taura|Yankwashi";
l_a[19] = "Birnin Gwari|Chikun|Giwa|Igabi|Ikara|Jaba|Jema'a|Kachia|Kaduna North|Kaduna South|Kagarko|Kajuru|Kaura|Kauru|Kubau|Kudan|Lere|Makarfi|Sabon Gari|Sanga|Soba|Zangon Kataf|Zaria";
l_a[20] = "Fagge|Dala|Gwanmaja|Gwale|Kano Municipal|Kofar Kudu|Tarauni|Unguwa Uku|Nassarawa|Bompai|Kumbotso|Ungogo|Dawakin Tofa|Tofa|Rimin Gado|Bagwai|Gezawa|Gabasawa|Minjibiri|Dambatta|Makoda|Kunchi|Bichi|Tsanyawa|Shanono|Gwarzo|Karaye|Rogo|Kabo|Bunkure|Kibiya|Rano|Tudun Wada|Doguwa|Madobi|Kura|Garun Mallam|Bebeji|Kiru|Sumaila|Garko|Takai|Albasu|Gaya|Ajingi|Wudil|Warawa|Dawakin Kudu";
l_a[21] = "Aleiro|Arewa Dandi|Argungu|Augie|Bagudo|Birnin Kebbi|Bunza|Dandi|Fakai|Gwandu|Jega|Kalgo|Koko/Besse|Maiyama|Ngaski|Sakaba|Shanga|Suru|Danko/Wasagu|Yauri|Zuru";
l_a[22] = "Adavi|Ajaokuta|Ankpa|Bassa|Dekina|Ibaji|Idah|Igalamela-Odolu|Ijumu|Kabba/Bunu|Koton Karfe|Lokoja|Mopa-Muro|Ofu|Ogori/Magongo|Okehi|Okene|Olamaboro|Omala|Yagba East|Yagba West";
l_a[23] = "Asa|Barute|Edu|Ekiti|Ifelodun|Ilorin East|Ilorin South|Ilorin West|Irepodun|Isin|Kaiama|Moro|Offa|Oke Ero|Oyun|Pategi";
l_a[24] = "Agege|Ajeromi-Ifelodun|Alimosho|Amuwo-Odofin|Apapa|Eti-Osa|Ifako-Ijaiye|Ikeja|Kosofe|Lagos Island|Lagos Mainland|Mushin|Ojo|Oshodi-Isolo|Somolu|Surulere";
l_a[25] = "Karu|Akwanga|Awe|Keffi|Nasarawa Egon|Doma|Kokona|Wamba|Keana|Nasarawa|Lafia|Toto|Obi";
l_a[26] = "Agaie|Agwara|Bida|Borgu|Bosso|Chanchaga|Edati|Gbako|Gurara|Katcha|Kontagora|Lapai|Lavun|Magama|Mariga|Mashegu|Mokwa|Munya|Paikoro|Rafi|Rijau|Shiroro|Suleja|Tafa|Wushishi";
l_a[27] = "Abeokuta North|Abeokuta South|Ado-Odo/Ota|Ewekoro|Ifo|Ijebu East|Ijebu North|Ijebu North East|Ijebu Ode|Ikenne|Imeko Afon|Ipokia|Obafemi Owode|Odogbolu|Odeda|Ogun Waterside|Remo North|Sagamu(Shagamu)|Yewa North(formerly Egbado North)|Yewa South(formerly Egbado South)";
l_a[28] = "Akoko North-West|Akoko North-East|Akoko South-East|Akoko South-West|Ose|Owo|Akure North|Akure South|Ifedore|Ile Oluji/Okeigbo|Ondo West|Ondo East|Idanre|Odigbo|Okitipupa|Irele|Ese Odo|Ilaje";
l_a[29] = "Aiyedaade|Aiyedire|Atakunmosa East|Atakunmosa West|Boluwaduro|Boripe|Ede North|Ede South|Egbedore|Ejigbo|Ife Central|Ife East|Ife North|Ife South|Ifedayo|Ifelodun|Ila|Ilesa East|Ilesa West|Irepodun|Irewole|Isokan|Iwo|Obokun|Odo Otin|Ola Oluwa|Olorunda|Oriade|Orolu|Osogbo";
l_a[30] = "Akinyele Moniya|Afijio Jobele|Egbeda Egbeda|Ibadan North Agodi Gate|Ibadan North-East Iwo Road|Ibadan North-West|Ibadan South-West Ring Road|Ibadan South-East Mapo|Ibarapa Central|Ibarapa East Eruwa|Ido|Irepo|Iseyin Iseyin|Kajola|Lagelu|Ogbomosho North|Ogbomosho South|Oyo West Ojongbodu|Atiba Ofa Meta|Atisbo Tede|Saki West|Saki East|Itesiwaju Otu|Iwajowa|Ibarapa North|Olorunsogo|Oluyole|Ogo Oluwa|Surulere|Orelope|Ori Ire|Oyo East|Ona Ara";
l_a[31] = "Barkin Ladi|Bassa|Bokkos|Jos East|Jos North|Jos South|Kanam|Kanke|Langtang North|Langtang South|Mangu|Mikang|Pankshin|Qua'an Pan|Ziyom|Shendam|Wase";
l_a[32] = "Abua|Agbirigba|Baan|Biseni|Defaka|Degema|Ekpeye|Eleme|Engenni|Gokana|Ijaw|Ikwerre|Kalabari|Khana|Kugbo|Nkoroo|O’chi’chi’|Obolo|Obulom|Odual|Ogba|Ogbogolo|Ogbronuagum|Ogoni|Okodia|Oruma|Tee|Ukwuani-Aboh-Ndoni";
l_a[33] = "Binji|Bodinga|Dange Shuni|Gada|Goronyo|Gudu|Gwadabawa|Illela|Isa|Kebbe|Kware|Rabah|Sabon Birni|Shagari|Silame|Sokoto North|Sokoto South|Tambuwal|Tangaza|Tureta|Wamako|Wurno|Yabo";
l_a[34] = "Ardo Kola|Bali|Donga|Gashaka|Gassol|Ibi|Jalingo|Karim Lamido|Kurmi|Lau|Sardauna|Takum|Ussa|Wukari|Yorro|Zing";
l_a[35] = " Bade|Bursari|Damaturu|Geidam|Gujba|Gulan|Fika|Fune|Jakusko|Karasuwa|Machina|Nanger|Nguru|Potiskum|Tarmuwa|Yunusari|Yusufari";
l_a[36] = "Anka|Bakura|Birnin Magaji/Kiyaw|Bukkuyum|Bungudu|Tsafe|Gummi|Gusau|Kaura Namoda|Maradun|Maru|Shinkafi|Talata Mafara|Zurmi";

function populatelgas(StateElementId, lgaElementId) {
    var selectedStateIndex = document.getElementById(StateElementId).selectedIndex;
    var lgaElement = document.getElementById(lgaElementId);
    lgaElement.length = 0;
    lgaElement.options[0] = new Option('Select LGA', '-1');
    lgaElement.selectedIndex = 0;
    var lga_arr = l_a[selectedStateIndex].split("|");
    for (var i = 0; i < lga_arr.length; i++) {
        lgaElement.options[lgaElement.length] = new Option(lga_arr[i], lga_arr[i]);
    }
}

function populateSt(StateElementId, lgaElementId) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var StateElement = document.getElementById(StateElementId);
    StateElement.length = 0;
    StateElement.options[0] = new Option('Select State', '-1');
    StateElement.selectedIndex = 0;
    for (var i = 0; i < State_arr.length; i++) {
        StateElement.options[StateElement.length] = new Option(State_arr[i], State_arr[i]);
    }

    // Assigned all States and add event listener for the lga.
    if (lgaElementId) {
        StateElement.onchange = function () {
            populatelgas(StateElementId, lgaElementId);
        };
    }
}