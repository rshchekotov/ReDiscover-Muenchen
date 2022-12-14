const statues = [
  {
    "name": "2 Stadtverweiszeichen",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/M%C3%BCnchen%2C_Bruderm%C3%BChlstr%2C_Zwei_Stadtverweiszeichen%2C_1.jpeg/480px-M%C3%BCnchen%2C_Bruderm%C3%BChlstr%2C_Zwei_Stadtverweiszeichen%2C_1.jpeg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Stefan_Wewerka\" title=\"Stefan Wewerka\">Stefan Wewerka</a>",
    "type": "statue",
    "lat": "48.11168",
    "lng": "11.54371"
  },
  {
    "name": "4S",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Christian_Hinz_4S_1997-1.jpg/480px-Christian_Hinz_4S_1997-1.jpg",
    "description": "<br>Author: Christian Hinz<br>Description: Granit, 100&nbsp;×&nbsp;600&nbsp;×&nbsp;130&nbsp;cm",
    "type": "statue",
    "lat": "48.130809",
    "lng": "11.581764"
  },
  {
    "name": "Aglaia",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Toni_Stadler_Aglaia_1961-1.jpg/480px-Toni_Stadler_Aglaia_1961-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Toni_Stadler_junior\" title=\"Toni Stadler junior\">Toni Stadler</a><br>Description: im Wasserbecken vor der Terrasse",
    "type": "statue",
    "lat": "48.14941",
    "lng": "11.571457"
  },
  {
    "name": "Allegorische Erzfiguren Sieg der Wissenschaft und Wahrheit",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/LMU_Amalienstra%C3%9Fe.jpg/480px-LMU_Amalienstra%C3%9Fe.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hermann_Hahn_(Bildhauer)\" title=\"Hermann Hahn (Bildhauer)\">Hermann Hahn</a><br>Description: gegossen von Wilhelm Rupp, H&ouml;he 2&nbsp;m",
    "type": "statue",
    "lat": "48.1511",
    "lng": "11.57917"
  },
  {
    "name": "Alpha im Wind",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Otto_Wesendonck_Alpha_im_Wind_%281990%29_Garmischer_Str._35_Muenchen-1.jpg/480px-Otto_Wesendonck_Alpha_im_Wind_%281990%29_Garmischer_Str._35_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Otto_Wesendonck_(Bildhauer)\" title=\"Otto Wesendonck (Bildhauer)\">Otto Wesendonck</a><br>Description: Chrom-Nickel-Stahl, H&ouml;he 9&nbsp;m",
    "type": "statue",
    "lat": "48.130095",
    "lng": "11.52916"
  },
  {
    "name": "Asphaltsee",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Asphaltsee_Arnulfpark_Muenchen-1.jpg/480px-Asphaltsee_Arnulfpark_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Wilhelm_Koch_(K%C3%BCnstler)\" title=\"Wilhelm Koch (K&uuml;nstler)\">Wilhelm Koch</a><br>Description: Bodenrelief, Gussasphalt, ca. 70&nbsp;m&nbsp;×&nbsp;17&nbsp;m; Rainer Werner Fassbinder gewidmet",
    "type": "statue",
    "lat": "48.14389",
    "lng": "11.537097"
  },
  {
    "name": "Aristoteles",
    "link": "https://de.wikipedia.org/wiki/Aristoteles",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bayerische_Staatsbibliothek_Statue_des_Homer_Muenchen-2.jpg/480px-Bayerische_Staatsbibliothek_Statue_des_Homer_Muenchen-2.jpg",
    "description": "<br>Author: Roland von Bohr<br>Description: Original von <a href=\"https://de.wikipedia.org/wiki/Francesco_Sanguinetti\" title=\"Francesco Sanguinetti\">Francesco Sanguinetti</a> nach Modell von <a href=\"https://de.wikipedia.org/wiki/Ludwig_von_Schwanthaler\" class=\"mw-redirect\" title=\"Ludwig von Schwanthaler\">Ludwig von Schwanthaler</a> (1837) heute in <a href=\"https://de.wikipedia.org/wiki/Bernau_am_Chiemsee\" title=\"Bernau am Chiemsee\">Bernau am Chiemsee</a> (Schulhof)",
    "type": "statue",
    "lat": "48.14749",
    "lng": "11.58006"
  },
  {
    "name": "Auffliegender Vogel",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Roland_Friederichsen_Auffliegender_Vogel_1984_Rosenkavalierplatz_Muenchen-1.jpg/480px-Roland_Friederichsen_Auffliegender_Vogel_1984_Rosenkavalierplatz_Muenchen-1.jpg",
    "description": "<br>Author: Roland Friederichsen<br>Description: Bronze",
    "type": "statue",
    "lat": "48.1521032",
    "lng": "11.620604"
  },
  {
    "name": "Aufsteigendes Pferd mit Reiter",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Promenadeplatz_9_Muenchen-2.jpg/480px-Promenadeplatz_9_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Heinrich_D%C3%BCll\" title=\"Heinrich D&uuml;ll\">Heinrich D&uuml;ll</a> und <a href=\"https://de.wikipedia.org/wiki/Georg_Pezold\" title=\"Georg Pezold\">Georg Pezold</a><br>Description: Bronze, Baudenkmal",
    "type": "statue",
    "lat": "48.1399",
    "lng": "11.57268"
  },
  {
    "name": "Austausch",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ernst_Hesse_o.T._%28Austausch%29_2001_Pettenkoferstr.Muenchen-1.jpg/480px-Ernst_Hesse_o.T._%28Austausch%29_2001_Pettenkoferstr.Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Ernst_Hesse_(Bildhauer)\" title=\"Ernst Hesse (Bildhauer)\">Ernst Hesse</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.134544",
    "lng": "11.55837"
  },
  {
    "name": "Baumbrunnen",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Baum-Brunnen_Roland_Friederichsen_1971_Cosimastr._Muenchen-1.jpg/480px-Baum-Brunnen_Roland_Friederichsen_1971_Cosimastr._Muenchen-1.jpg",
    "description": "<br>Author: Roland Friederichsen<br>Description: Bronzeskulptur, 3,30&nbsp;m hoch, urspr&uuml;nglich als Brunnen im Innenhof <a href=\"https://de.wikipedia.org/wiki/Prinzregentenstra%C3%9Fe\" title=\"Prinzregentenstra&szlig;e\">Prinzregentenstra&szlig;e</a> 14 aufgestellt",
    "type": "statue",
    "lat": "48.1538",
    "lng": "11.6291"
  },
  {
    "name": "Bavaria",
    "link": "https://de.wikipedia.org/wiki/Bavaria",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Muenchen-Bavaria-bjs2007-03.JPG/480px-Muenchen-Bavaria-bjs2007-03.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Ludwig_Schwanthaler\" title=\"Ludwig Schwanthaler\">Ludwig Schwanthaler</a><br>Description: Bronzekolossalstatue der <a href=\"https://de.wikipedia.org/wiki/Personifikation\" title=\"Personifikation\">Personifikation</a> <a href=\"https://de.wikipedia.org/wiki/Bayern\" title=\"Bayern\">Bayerns</a>, modelliert von Schwanthaler basierend auf einem Entwurf von <a href=\"https://de.wikipedia.org/wiki/Leo_von_Klenze\" title=\"Leo von Klenze\">Leo von Klenze</a>, gegossen von <a href=\"https://de.wikipedia.org/wiki/Ferdinand_von_Miller\" title=\"Ferdinand von Miller\">Ferdinand von Miller</a>",
    "type": "statue",
    "lat": "48.130664",
    "lng": "11.545993"
  },
  {
    "name": "Begegnung",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ernst_Hesse_o.T._%28Begegnung%29_2001_Pettenkoferstr.Muenchen-2.jpg/480px-Ernst_Hesse_o.T._%28Begegnung%29_2001_Pettenkoferstr.Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Ernst_Hesse_(Bildhauer)\" title=\"Ernst Hesse (Bildhauer)\">Ernst Hesse</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.134622",
    "lng": "11.558351"
  },
  {
    "name": "Bennos&auml;ule",
    "link": "https://de.wikipedia.org/wiki/Bennos%C3%A4ule",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Bennosaeule.jpg/480px-Bennosaeule.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/German_Bestelmeyer\" title=\"German Bestelmeyer\">German Bestelmeyer</a><br> <a href=\"https://de.wikipedia.org/wiki/Georg_Albertshofer\" title=\"Georg Albertshofer\">Georg Albertshofer</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.15177",
    "lng": "11.55225"
  },
  {
    "name": "Berliner B&auml;r",
    "link": "https://de.wikipedia.org/wiki/Berliner_B%C3%A4r_(M%C3%BCnchen)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Munich_Berliner_B%C3%A4r_Memorial_01.jpg/480px-Munich_Berliner_B%C3%A4r_Memorial_01.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Ren%C3%A9e_Sintenis\" title=\"Renée Sintenis\">Renée Sintenis</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.203794",
    "lng": "11.620661"
  },
  {
    "name": "Bewegung",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Ernst_Hesse_o.T._%28Bewegung%29_2001_Pettenkoferstr._21_Muenchen-1.jpg/480px-Ernst_Hesse_o.T._%28Bewegung%29_2001_Pettenkoferstr._21_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Ernst_Hesse_(Bildhauer)\" title=\"Ernst Hesse (Bildhauer)\">Ernst Hesse</a><br>Description: COR-TEN-Stahl",
    "type": "statue",
    "lat": "48.134654",
    "lng": "11.557564"
  },
  {
    "name": "Blaue Spirale",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Louis_Constantin_Blaue_Spirale_2001_1972-2.jpg/480px-Louis_Constantin_Blaue_Spirale_2001_1972-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Louis_Constantin\" title=\"Louis Constantin\">Louis Constantin</a><br>Description: Aus glasfaserverst&auml;rktem Polyester, ca. 1500kg schwer, 9m lang und 3,5m Durchmesser.",
    "type": "statue",
    "lat": "48.113642",
    "lng": "11.645713"
  },
  {
    "name": "Blockwalzer",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Blockwalzer-1.JPG/480px-Blockwalzer-1.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fritz_Koelle\" title=\"Fritz Koelle\">Fritz Koelle</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.11873",
    "lng": "11.609719"
  },
  {
    "name": "Blumen am Wege",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Blumen_am_Wege_Klinikum_Grosshadern.JPG/480px-Blumen_am_Wege_Klinikum_Grosshadern.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Reinhart_R._Wolke\" title=\"Reinhart R. Wolke\">Reinhart R. Wolke</a>",
    "type": "statue",
    "lat": "48.10971",
    "lng": "11.46913"
  },
  {
    "name": "Bridge",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Christian_Hinz_Bridge_%282008%29_Fallstr._34_Muenchen-3.jpg/480px-Christian_Hinz_Bridge_%282008%29_Fallstr._34_Muenchen-3.jpg",
    "description": "<br>Author: Christian Hinz<br>Description: Kalkstein 110&nbsp;×&nbsp;320&nbsp;×&nbsp;90&nbsp;cm",
    "type": "statue",
    "lat": "48.107985",
    "lng": "11.538915"
  },
  {
    "name": "Bronzehengst",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Hans_Kastler_Bronzehengst_Klinikum_Gro%C3%9Fhadern_Muenchen-1.jpg/480px-Hans_Kastler_Bronzehengst_Klinikum_Gro%C3%9Fhadern_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hans_Kastler\" title=\"Hans Kastler\">Hans Kastler</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.111194",
    "lng": "11.472254"
  },
  {
    "name": "Bronzehirsch",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Bronzehirsch%2C_von_Theodor_Georgii%2C_Bavariapark_Muenchen-1.jpg/480px-Bronzehirsch%2C_von_Theodor_Georgii%2C_Bavariapark_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Theodor_Georgii_(Bildhauer)\" title=\"Theodor Georgii (Bildhauer)\">Theodor Georgii</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.130523",
    "lng": "11.543391"
  },
  {
    "name": "Vier Bronzel&ouml;wen",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/ResidenzstrLoewe_Muenchen-01.jpg/480px-ResidenzstrLoewe_Muenchen-01.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hubert_Gerhard\" title=\"Hubert Gerhard\">Hubert Gerhard</a>, Carlo Pallagio<br>Description: halten Kartuschen mit Tugendemblemen, urspr&uuml;nglich f&uuml;r Stiftergrabmal von <a href=\"https://de.wikipedia.org/wiki/Wilhelm_V._(Bayern)\" title=\"Wilhelm V. (Bayern)\">Wilhelm&nbsp;V. der Fromme</a> (1548–1626, Herzog von Bayern 1579–1598)",
    "type": "statue",
    "lat": "48.14171",
    "lng": "11.57776"
  },
  {
    "name": "Bronzemodell Altstadt M&uuml;nchen",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/M%C3%BCnchen%2C_Frauenplatz%2C_Altstadtmodell_%2801%29.JPG/480px-M%C3%BCnchen%2C_Frauenplatz%2C_Altstadtmodell_%2801%29.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Egbert_Broerken\" title=\"Egbert Broerken\">Egbert Broerken</a><br>Description: Bronze, <a href=\"https://de.wikipedia.org/wiki/Tastmodell\" title=\"Tastmodell\">Tastmodell</a> f&uuml;r Sehbehinderte",
    "type": "statue",
    "lat": "48.13875",
    "lng": "11.57260"
  },
  {
    "name": "Bukolika",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Martin_Mayer_Bukolika_1984_Ludwigsbr%C3%BCcke_Muenchen-1.jpg/480px-Martin_Mayer_Bukolika_1984_Ludwigsbr%C3%BCcke_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Martin_Mayer_(Bildhauer)\" title=\"Martin Mayer (Bildhauer)\">Martin Mayer</a><br>Description: Bronzeplastik auf Steinsockel",
    "type": "statue",
    "lat": "48.13131",
    "lng": "11.587357"
  },
  {
    "name": "Buscando la Luz",
    "link": "https://de.wikipedia.org/wiki/Buscando_la_Luz",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Eduardo_Chillida_Buscando_la_Luz_1997.jpg/480px-Eduardo_Chillida_Buscando_la_Luz_1997.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Eduardo_Chillida\" title=\"Eduardo Chillida\">Eduardo Chillida</a><br>Description: Stahl gewalzt, je 798&nbsp;cm hoch",
    "type": "statue",
    "lat": "48.147921",
    "lng": "11.571495"
  },
  {
    "name": "Camera",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Eduardo_Paolozzi_Gusseisenbrunnen_Europaeisches_Patentamt_Muenchen-1.jpg/480px-Eduardo_Paolozzi_Gusseisenbrunnen_Europaeisches_Patentamt_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Eduardo_Paolozzi\" title=\"Eduardo Paolozzi\">Eduardo Paolozzi</a>",
    "type": "statue",
    "lat": "48.130163",
    "lng": "11.578856"
  },
  {
    "name": "Castor und Pollux",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Akademie_der_Bildenden_Kuenste_Muenchen-2.jpg/480px-Akademie_der_Bildenden_Kuenste_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Max_von_Widnmann\" title=\"Max von Widnmann\">Max von Widnmann</a><br>Description: Reiterstatuen vor der <a href=\"https://de.wikipedia.org/wiki/Akademie_der_Bildenden_K%C3%BCnste_M%C3%BCnchen\" title=\"Akademie der Bildenden K&uuml;nste M&uuml;nchen\">Akademie f&uuml;r Bildende K&uuml;nste</a>",
    "type": "statue",
    "lat": "48.153042",
    "lng": "11.580238"
  },
  {
    "name": "Chalamy kopto",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Rudolf_Wachter_Chalamy_kopto_1969_Arabellastr._Muenchen-1.jpg/480px-Rudolf_Wachter_Chalamy_kopto_1969_Arabellastr._Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Rudolf_Wachter_(Bildhauer)\" title=\"Rudolf Wachter (Bildhauer)\">Rudolf Wachter</a><br>Description: Aluminium",
    "type": "statue",
    "lat": "48.14989",
    "lng": "11.62243"
  },
  {
    "name": "Christophorus",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bernhard_Bleeker_Christophorus-Figur_Widenmayerstr._Muenchen-3.jpg/480px-Bernhard_Bleeker_Christophorus-Figur_Widenmayerstr._Muenchen-3.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Bernhard_Bleeker\" title=\"Bernhard Bleeker\">Bernhard Bleeker</a>",
    "type": "statue",
    "lat": "48.140399",
    "lng": "11.594183"
  },
  {
    "name": "Christophorus",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Fischer%2C_Alexander_-_Christophorus.JPG/480px-Fischer%2C_Alexander_-_Christophorus.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Alexander_Fischer_(Bildhauer)\" title=\"Alexander Fischer (Bildhauer)\">Alexander Fischer</a>",
    "type": "statue",
    "lat": "48.17101",
    "lng": "11.5732"
  },
  {
    "name": "Christus als Weltenrichter",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Christus_als_Weltenrichter_Schrammerstr._3_Muenchen-1.jpg/480px-Christus_als_Weltenrichter_Schrammerstr._3_Muenchen-1.jpg",
    "description": "<br>Description: Bronzeplastik",
    "type": "statue",
    "lat": "48.13911",
    "lng": "11.57677"
  },
  {
    "name": "Chronos 10B",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Nicolas_Schoeffer_Chronos_10B_1980_Europaeisches_Patentamt_Muenchen-2.jpg/480px-Nicolas_Schoeffer_Chronos_10B_1980_Europaeisches_Patentamt_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Nicolas_Sch%C3%B6ffer\" title=\"Nicolas Sch&ouml;ffer\">Nicolas Sch&ouml;ffer</a><br>Description: 12,5&nbsp;m hoch, Edelstahl, Elektromotoren, Scheinwerfer und Spiegel",
    "type": "statue",
    "lat": "48.130581",
    "lng": "11.581005"
  },
  {
    "name": "Cross-Bend",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Phillip_King_Cross-Bend_1978-80-4.jpg/480px-Phillip_King_Cross-Bend_1978-80-4.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Phillip_King_(Bildhauer)\" title=\"Phillip King (Bildhauer)\">Phillip King</a><br>Description: schwei&szlig;bares Stahlblech mit Korrosionsschutz und Farbanstrich, ca. 850&nbsp;cm hoch",
    "type": "statue",
    "lat": "48.131254",
    "lng": "11.581185"
  },
  {
    "name": "Daphne",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Undine_Werdin_Daphne_1979_Muenchen-1.jpg/480px-Undine_Werdin_Daphne_1979_Muenchen-1.jpg",
    "description": "<br>Author: Undine Werdin<br>Description: Kunststein (Steinguss), 180&nbsp;×&nbsp;100&nbsp;×&nbsp;80&nbsp;cm",
    "type": "statue",
    "lat": "48.164403",
    "lng": "11.567951"
  },
  {
    "name": "Da un Evelpiuma",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sante_Monachesi_Da_un_Evelpiuma_1970_Bayerstr._Muenchen-2.jpg/480px-Sante_Monachesi_Da_un_Evelpiuma_1970_Bayerstr._Muenchen-2.jpg",
    "description": "<br>Author: Sante Monachesi<br>Description: Travertin",
    "type": "statue",
    "lat": "48.13911",
    "lng": "11.55060"
  },
  {
    "name": "Der Schwere enthoben",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Raoul_Ratnowsky_Der_Schwere_enthoben_%281976-77%29_Leopoldstr._17_Muenchen-7.jpg/480px-Raoul_Ratnowsky_Der_Schwere_enthoben_%281976-77%29_Leopoldstr._17_Muenchen-7.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Raoul_Ratnowsky\" title=\"Raoul Ratnowsky\">Raoul Ratnowsky</a><br>Description: Bronze, 430&nbsp;cm hoch (mit Sockel)",
    "type": "statue",
    "lat": "48.156752",
    "lng": "11.583893"
  },
  {
    "name": "Die &ouml;ffentliche Rose",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rolf_Szymanski_Die_oeffentliche_Rose_1969-71_Frauenstr._Muenchen-2.jpg/480px-Rolf_Szymanski_Die_oeffentliche_Rose_1969-71_Frauenstr._Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Rolf_Szymanski\" title=\"Rolf Szymanski\">Rolf Szymanski</a><br>Description: Eisen, 325&nbsp;cm hoch",
    "type": "statue",
    "lat": "48.13489",
    "lng": "11.57975"
  },
  {
    "name": "Discrepancy",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Roxy_Paine_Discrepancy_%282011%29_Mandlstr._3_Muenchen-3.jpg/480px-Roxy_Paine_Discrepancy_%282011%29_Mandlstr._3_Muenchen-3.jpg",
    "description": "<br>Author: Roxy Paine<br>Description: Edelstahl",
    "type": "statue",
    "lat": "48.157981",
    "lng": "11.589931"
  },
  {
    "name": "Discussion",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Discussion_%28Tony_Cragg%2C_2005%29_Muenchen-1.jpg/480px-Discussion_%28Tony_Cragg%2C_2005%29_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Tony_Cragg\" title=\"Tony Cragg\">Tony Cragg</a><br>Description: Bronze, rot lackiert, 170&nbsp;×&nbsp;190&nbsp;×&nbsp;240&nbsp;cm",
    "type": "statue",
    "lat": "48.17941",
    "lng": "11.60436"
  },
  {
    "name": "Doppels&auml;ule 23/70",
    "link": "https://de.wikipedia.org/wiki/Doppels%C3%A4ule_23/70",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Doppels%C3%A4ule_23_70_von_Erich_Hauser-1.jpg/480px-Doppels%C3%A4ule_23_70_von_Erich_Hauser-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Erich_Hauser\" title=\"Erich Hauser\">Erich Hauser</a><br>Description: Edelstahl, 750&nbsp;×&nbsp;400&nbsp;×&nbsp;300 cm, <a href=\"https://de.wikipedia.org/wiki/Theo_Wormland-Stiftung\" title=\"Theo Wormland-Stiftung\">Sammlung Theo Wormland</a>",
    "type": "statue",
    "lat": "48.149164",
    "lng": "11.569887"
  },
  {
    "name": "Entfaltung IV",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Lidy_von_Luettwitz_Entfaltung_IV_%281989%29_Lanzenstielweg_Muenchen-2.jpg/480px-Lidy_von_Luettwitz_Entfaltung_IV_%281989%29_Lanzenstielweg_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Lidy_von_L%C3%BCttwitz\" title=\"Lidy von L&uuml;ttwitz\">Lidy von L&uuml;ttwitz</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.087485",
    "lng": "11.637655"
  },
  {
    "name": "Erzengel Michael",
    "link": "https://de.wikipedia.org/wiki/Erzengel_Michael",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Saint_Michael%27s_Church_%28Munich%2C_Bavaria%29_-_statue_of_Saint_Michael.JPG/480px-Saint_Michael%27s_Church_%28Munich%2C_Bavaria%29_-_statue_of_Saint_Michael.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hubert_Gerhard\" title=\"Hubert Gerhard\">Hubert Gerhard</a><br>Description: Bronzestatue in vergoldeter Mittelnische zwischen den Eingangsportalen",
    "type": "statue",
    "lat": "48.13855",
    "lng": "11.57024"
  },
  {
    "name": "Exzentrische Pyramide",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Alf_Lechner_Exzentrische_Pyramide_1978_Muenchen-1.jpg/480px-Alf_Lechner_Exzentrische_Pyramide_1978_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Alf_Lechner\" title=\"Alf Lechner\">Alf Lechner</a><br>Description: Rostfreier Stahl, 6&nbsp;×&nbsp;12&nbsp;×&nbsp;3&nbsp;m",
    "type": "statue",
    "lat": "48.148879",
    "lng": "11.579221"
  },
  {
    "name": "Feuervogel",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Joseph_Michael_Neustifter_Feuervogel_1978_Heidestr._3_Muenchen-2.jpg/480px-Joseph_Michael_Neustifter_Feuervogel_1978_Heidestr._3_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Joseph_Michael_Neustifter\" title=\"Joseph Michael Neustifter\">Joseph Michael Neustifter</a><br>Description: Bronze, Edelstahl, Farbe",
    "type": "statue",
    "lat": "48.09272",
    "lng": "11.65582"
  },
  {
    "name": "Feuer & Flamme",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Gmn.jpg/480px-Gmn.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Bruno_Wank\" title=\"Bruno Wank\">Bruno Wank</a><br>Description: Edelstahl, 6&nbsp;m hoch, 2,5 t",
    "type": "statue",
    "lat": "48.19956",
    "lng": "11.57273"
  },
  {
    "name": "Fides",
    "link": "https://de.wikipedia.org/wiki/Fides_(Mythologie)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Halbig-Statue-Fides-Treue-Maximilianstrasse-Muenchen.JPG/480px-Halbig-Statue-Fides-Treue-Maximilianstrasse-Muenchen.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Johann_von_Halbig\" class=\"mw-redirect\" title=\"Johann von Halbig\">Johann von Halbig</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.13837",
    "lng": "11.58592"
  },
  {
    "name": "Finnischer Granit gespalten",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Ulrich_Rueckriem_Finnischer_Granit_gespalten_1992-93_Goethe-Institut_Muenchen-2.jpg/480px-Ulrich_Rueckriem_Finnischer_Granit_gespalten_1992-93_Goethe-Institut_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Ulrich_R%C3%BCckriem\" title=\"Ulrich R&uuml;ckriem\">Ulrich R&uuml;ckriem</a><br>Description: Zweiteilig, 550&nbsp;×&nbsp;120&nbsp;×&nbsp;110&nbsp;cm und 550&nbsp;×&nbsp;140&nbsp;×&nbsp;140 cm.",
    "type": "statue",
    "lat": "48.161368",
    "lng": "11.545224"
  },
  {
    "name": "Fl&auml;chendurchdringung",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Alf_Lechner_Flaechendurchdringung_1979-83_Gasteig_Muenchen-1.jpg/480px-Alf_Lechner_Flaechendurchdringung_1979-83_Gasteig_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Alf_Lechner\" title=\"Alf Lechner\">Alf Lechner</a><br>Description: rostfreier Stahl, geschliffen, 23,8&nbsp;×&nbsp;1,43&nbsp;×&nbsp;1,43 m, Gewicht 50t",
    "type": "statue",
    "lat": "48.131029",
    "lng": "11.590642"
  },
  {
    "name": "Flora III",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Fritz_Koenig_Flora_III_1971-5.jpg/480px-Fritz_Koenig_Flora_III_1971-5.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fritz_Koenig\" title=\"Fritz Koenig\">Fritz Koenig</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.140657",
    "lng": "11.580193"
  },
  {
    "name": "Fl&uuml;gelstelen",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Markus_Heinsdorff_Fluegelstelen_%281994%29_Schumacherring_20_Muenchen-3.jpg/480px-Markus_Heinsdorff_Fluegelstelen_%281994%29_Schumacherring_20_Muenchen-3.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Markus_Heinsdorff\" title=\"Markus Heinsdorff\">Markus Heinsdorff</a><br>Description: Fl&uuml;gel aus Aluminium, farbig lackiert, 132&nbsp;cm lang, 11&nbsp;cm breit. Masten aus Stahl, wei&szlig; beschichtet, 350 bis 550&nbsp;cm hoch",
    "type": "statue",
    "lat": "48.099326",
    "lng": "11.640684"
  },
  {
    "name": "For Leonardo",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Paolozzi_For_Leonardo_1986-1.jpg/480px-Paolozzi_For_Leonardo_1986-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Eduardo_Paolozzi\" title=\"Eduardo Paolozzi\">Eduardo Paolozzi</a><br>Description: Eisenguss",
    "type": "statue",
    "lat": "48.148048",
    "lng": "11.568837"
  },
  {
    "name": "Franziskus",
    "link": "https://de.wikipedia.org/wiki/Franziskus_als_Friedensbote",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Martin_Mayer_Franzikus_1978-79_Bronze_St.-Anna-Platz_Muenchen-2.jpg/480px-Martin_Mayer_Franzikus_1978-79_Bronze_St.-Anna-Platz_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Martin_Mayer_(Bildhauer)\" title=\"Martin Mayer (Bildhauer)\">Martin Mayer</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.140276",
    "lng": "11.586398"
  },
  {
    "name": "Freitreppe",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Olaf_Metzel_Freitreppe_1994_Goethe-Institut_Muenchen-1.jpg/480px-Olaf_Metzel_Freitreppe_1994_Goethe-Institut_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Olaf_Metzel\" title=\"Olaf Metzel\">Olaf Metzel</a><br>Description: Stahl, verzinkt, ca. 15&nbsp;m hoch, ca. 3&nbsp;m Durchmesser",
    "type": "statue",
    "lat": "48.162152",
    "lng": "11.544762"
  },
  {
    "name": "Freiham Folly",
    "link": "https://de.wikipedia.org/wiki/Freiham_Folly",
    "description": "<br>Author: Heike Mutter und Ulrich Genth<br>Description: Stahl, Holz, gef&auml;rbter Beton, vorpatiniertes Kupferblech, LEDs, 21&nbsp;m hoch",
    "type": "statue",
    "lat": "48.1485",
    "lng": "11.408"
  },
  {
    "name": "Fructus",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Michael_Friederichsen_Fructus_1989_Neuperlach-1.jpg/480px-Michael_Friederichsen_Fructus_1989_Neuperlach-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Michael_Friederichsen\" title=\"Michael Friederichsen\">Michael Friederichsen</a><br>Description: r&ouml;tlicher Granit aus Tschechien",
    "type": "statue",
    "lat": "48.09853",
    "lng": "11.64544"
  },
  {
    "name": "Ged&auml;chtnisst&auml;tte der Familie von Neuschatz",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Harthauser_Str._25_Gedaechtnisstaette_der_Familie_von_Neuschatz_Muenchen-1.jpg/480px-Harthauser_Str._25_Gedaechtnisstaette_der_Familie_von_Neuschatz_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Emanuel_von_Seidl\" title=\"Emanuel von Seidl\">Emanuel von Seidl</a><br>Description: halbrunde Anlage mit Pfeiler, Stirnmauer und reicher plastischer Ausgestaltung. Architekt: Emanuel von Seidl; Bildhauer: <a href=\"https://de.wikipedia.org/wiki/Julius_Seidler\" title=\"Julius Seidler\">Julius Seidler</a>",
    "type": "statue",
    "lat": "48.087569",
    "lng": "11.552013"
  },
  {
    "name": "Gelber und blauer Turm",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Heinz_Pfahler_Blauer_Turm_%281996-98%29_Trogerstr._Muenchen-1.jpg/480px-Heinz_Pfahler_Blauer_Turm_%281996-98%29_Trogerstr._Muenchen-1.jpg",
    "description": "<br>Author: Heinz Pfahler",
    "type": "statue",
    "lat": "48.13715",
    "lng": "11.60319"
  },
  {
    "name": "Generally",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Franz_West_Generally_2007_Adenauerring_11_Neuperlach_Muenchen-1.jpg/480px-Franz_West_Generally_2007_Adenauerring_11_Neuperlach_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Franz_West_(K%C3%BCnstler)\" title=\"Franz West (K&uuml;nstler)\">Franz West</a><br>Description: Aluminium, lackiert",
    "type": "statue",
    "lat": "48.10446",
    "lng": "11.64142"
  },
  {
    "name": "Ge&ouml;ffnete Granite II",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Nikolaus_Gerhart_Geoeffnete_Granite_II_1992_EP_Muenchen-1.jpg/480px-Nikolaus_Gerhart_Geoeffnete_Granite_II_1992_EP_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Nikolaus_Gerhart\" title=\"Nikolaus Gerhart\">Nikolaus Gerhart</a><br>Description: 350 bis 480&nbsp;cm hoch",
    "type": "statue",
    "lat": "48.14001",
    "lng": "11.54953"
  },
  {
    "name": "Gerundetes Blau",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Gasteig_Gerundetes_Blau_von_Rupprecht_Geiger.jpg/480px-Gasteig_Gerundetes_Blau_von_Rupprecht_Geiger.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Rupprecht_Geiger\" title=\"Rupprecht Geiger\">Rupprecht Geiger</a><br>Description: Aluminium spritzlackiert, 600&nbsp;×&nbsp;700&nbsp;×&nbsp;200&nbsp;cm",
    "type": "statue",
    "lat": "48.131302",
    "lng": "11.590505"
  },
  {
    "name": "Gesteinsader",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Hans_Rucker_Gesteinsader_%281976%29_Klinikum_Gro%C3%9Fhadern_Muenchen-1.jpg/480px-Hans_Rucker_Gesteinsader_%281976%29_Klinikum_Gro%C3%9Fhadern_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hans_Rucker\" title=\"Hans Rucker\">Hans Rucker</a><br>Description: Carrara-Marmor, ca. 175&nbsp;cm hoch, 8&nbsp;m lang",
    "type": "statue",
    "lat": "48.10959",
    "lng": "11.47025"
  },
  {
    "name": "Globus",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Wolf_Hirtreiter_Globus_1974-1.jpg/480px-Wolf_Hirtreiter_Globus_1974-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Wolf_Hirtreiter\" title=\"Wolf Hirtreiter\">Wolf Hirtreiter</a>",
    "type": "statue",
    "lat": "48.10186635072153",
    "lng": "11.640136688947678"
  },
  {
    "name": "Gran Paradiso",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Stephan_Huber%2C_Gran_Paradiso%2C_Neue_Messe_Muenchen-2.jpg/480px-Stephan_Huber%2C_Gran_Paradiso%2C_Neue_Messe_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Stephan_Huber\" title=\"Stephan Huber\">Stephan Huber</a>",
    "type": "statue",
    "lat": "48.13519",
    "lng": "11.691675"
  },
  {
    "name": "Gro&szlig;e Biga",
    "link": "https://de.wikipedia.org/wiki/Gro%C3%9Fe_Biga",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Fritz_Koenig_-_Grosse_Biga_-_2000-2.jpg/480px-Fritz_Koenig_-_Grosse_Biga_-_2000-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fritz_Koenig\" title=\"Fritz Koenig\">Fritz Koenig</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.1488",
    "lng": "11.569825"
  },
  {
    "name": "Gro&szlig;e Blattfigur",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Fritz_Koenig_Gro%C3%9Fe_Blattfigur_1996_TU_Muenchen-1.jpg/480px-Fritz_Koenig_Gro%C3%9Fe_Blattfigur_1996_TU_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fritz_Koenig\" title=\"Fritz Koenig\">Fritz Koenig</a><br>Description: Eisen, 450&nbsp;cm hoch",
    "type": "statue",
    "lat": "48.14886",
    "lng": "11.567286"
  },
  {
    "name": "Gro&szlig;e Flora V",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Grosse_Flora_V_1991_Fritz_Koenig_Thalkirchner_Str._56_Muenchen-8.jpg/480px-Grosse_Flora_V_1991_Fritz_Koenig_Thalkirchner_Str._56_Muenchen-8.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fritz_Koenig\" title=\"Fritz Koenig\">Fritz Koenig</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.127388",
    "lng": "11.563474"
  },
  {
    "name": "Gro&szlig;e Kore III",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Fritz_Koenig_Grosse_Kore_III_%281972-75%29_Graubuendener_Str._Muenchen-2.jpg/480px-Fritz_Koenig_Grosse_Kore_III_%281972-75%29_Graubuendener_Str._Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fritz_Koenig\" title=\"Fritz Koenig\">Fritz Koenig</a><br>Description: Bronze, 370&nbsp;cm hoch",
    "type": "statue",
    "lat": "48.090133",
    "lng": "11.480688"
  },
  {
    "name": "Gro&szlig;e Kugelkopfs&auml;ule",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Fritz_Koenig_Grosse_Kugelkopfsaeule_1969-71_Lenbachhaus_Muenchen-2.jpg/480px-Fritz_Koenig_Grosse_Kugelkopfsaeule_1969-71_Lenbachhaus_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fritz_Koenig\" title=\"Fritz Koenig\">Fritz Koenig</a><br>Description: Bronze, H&ouml;he 438 cm, 2013 hier aufgestellt",
    "type": "statue",
    "lat": "48.146628",
    "lng": "11.563903"
  },
  {
    "name": "Gro&szlig;e Landschaft I",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Fritz_Koenig_Grosse_Landschaft_I_%281964-68%29_Mensa_TU_Muenchen-2.jpg/480px-Fritz_Koenig_Grosse_Landschaft_I_%281964-68%29_Mensa_TU_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fritz_Koenig\" title=\"Fritz Koenig\">Fritz Koenig</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.147134",
    "lng": "11.566794"
  },
  {
    "name": "Gro&szlig;e Liegende",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Henry_Moore_Grosse_Liegende_1957-1.jpg/480px-Henry_Moore_Grosse_Liegende_1957-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Henry_Moore\" title=\"Henry Moore\">Henry Moore</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.148876",
    "lng": "11.57049"
  },
  {
    "name": "Gro&szlig;e m&auml;nnliche B&uuml;ste",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Gro%C3%9Fe_maennliche_Bueste_Bronze_1992_Wohnanlage_Hansapark_Muenchen-1.jpg/480px-Gro%C3%9Fe_maennliche_Bueste_Bronze_1992_Wohnanlage_Hansapark_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Lothar_Fischer_(Bildhauer)\" title=\"Lothar Fischer (Bildhauer)\">Lothar Fischer</a><br>Description: Bronze, 220&nbsp;×&nbsp;120&nbsp;×&nbsp;60&nbsp;cm",
    "type": "statue",
    "lat": "48.12783",
    "lng": "11.53295"
  },
  {
    "name": "Gro&szlig;er sitzender weiblicher Torso",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Lothar_Fischer_-_Gro%C3%9Fer_sitzender_weiblicher_Torso.JPG/480px-Lothar_Fischer_-_Gro%C3%9Fer_sitzender_weiblicher_Torso.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Lothar_Fischer_(Bildhauer)\" title=\"Lothar Fischer (Bildhauer)\">Lothar Fischer</a><br>Description: Bronze, 190&nbsp;×&nbsp;90&nbsp;×&nbsp;100&nbsp;cm",
    "type": "statue",
    "lat": "48.13759",
    "lng": "11.56899"
  },
  {
    "name": "Gro&szlig;es Votiv",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Fritz_Koenig_Grosses_Votiv_1963-64-1.jpg/480px-Fritz_Koenig_Grosses_Votiv_1963-64-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fritz_Koenig\" title=\"Fritz Koenig\">Fritz Koenig</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.14729",
    "lng": "11.564565"
  },
  {
    "name": "Gro&szlig;e tektonische Stele",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Lothar_Fischer_Gro%C3%9Fe_tektonische_Stele_1992_Mariahilfplatz_Muenchen-2.jpg/480px-Lothar_Fischer_Gro%C3%9Fe_tektonische_Stele_1992_Mariahilfplatz_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Lothar_Fischer_(Bildhauer)\" title=\"Lothar Fischer (Bildhauer)\">Lothar Fischer</a><br>Description: Eisen, 490&nbsp;cm hoch",
    "type": "statue",
    "lat": "48.123757",
    "lng": "11.582187"
  },
  {
    "name": "Gro&szlig;e Torfigur",
    "link": "https://de.wikipedia.org/wiki/Gro%C3%9Fe_Torfigur",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fritz_Koenig_-_Grosse_Torfigur_1985-86-1.jpg/480px-Fritz_Koenig_-_Grosse_Torfigur_1985-86-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fritz_Koenig\" title=\"Fritz Koenig\">Fritz Koenig</a><br>Description: Bronze, 640&nbsp;cm hoch",
    "type": "statue",
    "lat": "48.152861",
    "lng": "11.596722"
  },
  {
    "name": "Gro&szlig;e Zwei V",
    "link": "https://de.wikipedia.org/wiki/Gro%C3%9Fe_Zwei_V",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Fritz_Koenig_Grosse_zwei_V_1973-1.jpg/480px-Fritz_Koenig_Grosse_zwei_V_1973-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fritz_Koenig\" title=\"Fritz Koenig\">Fritz Koenig</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.149682",
    "lng": "11.572189"
  },
  {
    "name": "Gro&szlig;e Zwei VI",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Fritz_Koenig%2C_Gro%C3%9Fe_Zwei_VI_%281973%3B82%29._Bronze-4.jpg/480px-Fritz_Koenig%2C_Gro%C3%9Fe_Zwei_VI_%281973%3B82%29._Bronze-4.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fritz_Koenig\" title=\"Fritz Koenig\">Fritz Koenig</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.15428",
    "lng": "11.62467"
  },
  {
    "name": "Guernica",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/BFinanzhof_Muenchen-03.jpg/480px-BFinanzhof_Muenchen-03.jpg",
    "description": "<br>Author: Norbert Tress",
    "type": "statue",
    "lat": "48.14914",
    "lng": "11.60618"
  },
  {
    "name": "Harmlos",
    "link": "https://de.wikipedia.org/wiki/Harmlos",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Harmlos_F.J.Schwanthaler_1803_v2.jpg/480px-Harmlos_F.J.Schwanthaler_1803_v2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Franz_Jakob_Schwanthaler\" title=\"Franz Jakob Schwanthaler\">Franz Jakob Schwanthaler</a><br>Description: Marmor, Kopie (Original im <a href=\"https://de.wikipedia.org/wiki/Residenzmuseum\" title=\"Residenzmuseum\">Residenzmuseum</a>)",
    "type": "statue",
    "lat": "48.14364",
    "lng": "11.582344"
  },
  {
    "name": "Heunens&auml;ule",
    "link": "https://de.wikipedia.org/wiki/Heunens%C3%A4ule",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Monolith-Arch%C3%A4ologische_Staatssammlung.JPG/480px-Monolith-Arch%C3%A4ologische_Staatssammlung.JPG",
    "description": "<br>Description: Granit",
    "type": "statue",
    "lat": "48.14432",
    "lng": "11.59117"
  },
  {
    "name": "Hippokrates",
    "link": "https://de.wikipedia.org/wiki/Hippokrates_von_Kos",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bayerische_Staatsbibliothek_Statue_des_Hippokrates_Muenchen-2.jpg/480px-Bayerische_Staatsbibliothek_Statue_des_Hippokrates_Muenchen-2.jpg",
    "description": "<br>Author: Karl Krohe<br>Description: Original von <a href=\"https://de.wikipedia.org/wiki/Francesco_Sanguinetti\" title=\"Francesco Sanguinetti\">Francesco Sanguinetti</a> nach Modell von <a href=\"https://de.wikipedia.org/wiki/Ludwig_von_Schwanthaler\" class=\"mw-redirect\" title=\"Ludwig von Schwanthaler\">Ludwig von Schwanthaler</a> (1837) heute in <a href=\"https://de.wikipedia.org/wiki/Bernau_am_Chiemsee\" title=\"Bernau am Chiemsee\">Bernau am Chiemsee</a> (Schulhof)",
    "type": "statue",
    "lat": "48.14739",
    "lng": "11.58001"
  },
  {
    "name": "Hoch-Wiesen-Haus",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Hundertwasser_Hoch-Wiesen-Haus_Westpark_Muenchen-3.jpg/480px-Hundertwasser_Hoch-Wiesen-Haus_Westpark_Muenchen-3.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Friedensreich_Hundertwasser\" title=\"Friedensreich Hundertwasser\">Friedensreich Hundertwasser</a>",
    "type": "statue",
    "lat": "48.122671",
    "lng": "11.510261"
  },
  {
    "name": "Holzsammelnder Mann",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Rupert_Miller_holzsammelnder_Mann.jpg/480px-Rupert_Miller_holzsammelnder_Mann.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Rupert_von_Miller\" title=\"Rupert von Miller\">Rupert von Miller</a><br>Description: Steinfigur, Baudenkmal",
    "type": "statue",
    "lat": "48.126978",
    "lng": "11.578097"
  },
  {
    "name": "Homer",
    "link": "https://de.wikipedia.org/wiki/Homer",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Bayerische_Staatsbibliothek_Statue_des_Homer_Muenchen-2.jpg/480px-Bayerische_Staatsbibliothek_Statue_des_Homer_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Elmar_Dietz\" title=\"Elmar Dietz\">Elmar Dietz</a><br>Description: Original von Johann Ernst Mayer nach Modell von <a href=\"https://de.wikipedia.org/wiki/Ludwig_von_Schwanthaler\" class=\"mw-redirect\" title=\"Ludwig von Schwanthaler\">Ludwig von Schwanthaler</a> (1837) heute in <a href=\"https://de.wikipedia.org/wiki/Bernau_am_Chiemsee\" title=\"Bernau am Chiemsee\">Bernau am Chiemsee</a> (Schulhof)",
    "type": "statue",
    "lat": "48.1476",
    "lng": "11.58011"
  },
  {
    "name": "Der Hund",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Toni_Stadler%2C_Der_Hund%2C_1935%2C_Muenchen-1.jpg/480px-Toni_Stadler%2C_Der_Hund%2C_1935%2C_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Toni_Stadler_junior\" title=\"Toni Stadler junior\">Toni Stadler</a><br>Description: Bronzeplastik vor Kindergarten und Grundschule",
    "type": "statue",
    "lat": "48.09826",
    "lng": "11.57485"
  },
  {
    "name": "Hundskugel",
    "link": "",
    "description": "<br>Description: Terrakottarelief nach einem Holzrelief von <a href=\"https://de.wikipedia.org/wiki/Roman_Anton_Boos\" title=\"Roman Anton Boos\">Roman Anton Boos</a>",
    "type": "statue",
    "lat": "48.13628",
    "lng": "11.56974"
  },
  {
    "name": "Inklination – frei schwingende Nadel",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Paul_Fuchs_Inklination_-_frei_schwingende_Nadel_1999_Adenauerring_31_Neuperlach_Muenchen-1.jpg/480px-Paul_Fuchs_Inklination_-_frei_schwingende_Nadel_1999_Adenauerring_31_Neuperlach_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Paul_Fuchs_(Bildhauer)\" title=\"Paul Fuchs (Bildhauer)\">Paul Fuchs</a>",
    "type": "statue",
    "lat": "48.10385",
    "lng": "11.64309"
  },
  {
    "name": "Innere Linie",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Leo_Kornbrust_Innere_Linie_1981-2.jpg/480px-Leo_Kornbrust_Innere_Linie_1981-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Leo_Kornbrust\" title=\"Leo Kornbrust\">Leo Kornbrust</a><br>Description: Naturstein, 9&nbsp;m hoch",
    "type": "statue",
    "lat": "48.104432",
    "lng": "11.645006"
  },
  {
    "name": "Julia",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/M%C3%BCnchen_-_Altes_Rathaus_-_Julia_003.jpg/480px-M%C3%BCnchen_-_Altes_Rathaus_-_Julia_003.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Nereo_Costantini\" title=\"Nereo Costantini\">Nereo Costantini</a><br>Description: Bronze-Replik, 265&nbsp;cm hoch, Original in <a href=\"https://de.wikipedia.org/wiki/Verona\" title=\"Verona\">Verona</a> (Aufstellung 1972)",
    "type": "statue",
    "lat": "48.13661",
    "lng": "11.57702"
  },
  {
    "name": "Julia",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Julia-am-shakespeareplatz-muenchen.jpg/480px-Julia-am-shakespeareplatz-muenchen.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Nereo_Costantini\" title=\"Nereo Costantini\">Nereo Costantini</a><br>Description: Bronze-Replik, 265&nbsp;cm hoch, Original in <a href=\"https://de.wikipedia.org/wiki/Verona\" title=\"Verona\">Verona</a> (Aufstellung 1972)",
    "type": "statue",
    "lat": "48.14287",
    "lng": "11.60697"
  },
  {
    "name": "Knabe mit Murmeltier",
    "link": "",
    "description": "<br>Description: Stein",
    "type": "statue",
    "lat": "48.13660",
    "lng": "11.56797"
  },
  {
    "name": "Konkav gerundet",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Rupprecht_Geiger_Konkav_gerundet_1973_Koeniginstr._Muenchen-1.jpg/480px-Rupprecht_Geiger_Konkav_gerundet_1973_Koeniginstr._Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Rupprecht_Geiger\" title=\"Rupprecht Geiger\">Rupprecht Geiger</a><br>Description: Aluminium, 400&nbsp;×&nbsp;480&nbsp;×&nbsp;70&nbsp;cm",
    "type": "statue",
    "lat": "48.156203",
    "lng": "11.589286"
  },
  {
    "name": "Konkav-Konvex",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Rudolf_Wachter_Konkav-Konvex_1979_Marsplatz_Muenchen-2.jpg/480px-Rudolf_Wachter_Konkav-Konvex_1979_Marsplatz_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Rudolf_Wachter_(Bildhauer)\" title=\"Rudolf Wachter (Bildhauer)\">Rudolf Wachter</a><br>Description: Steinskulptur",
    "type": "statue",
    "lat": "48.14681",
    "lng": "11.54703"
  },
  {
    "name": "Kontinente",
    "link": "https://de.wikipedia.org/wiki/Kontinent",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Georg_Brenninger_-_Kontinente-1.jpg/480px-Georg_Brenninger_-_Kontinente-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Georg_Brenninger\" title=\"Georg Brenninger\">Georg Brenninger</a><br>Description: in der Brunnenanlage",
    "type": "statue",
    "lat": "48.149273",
    "lng": "11.571759"
  },
  {
    "name": "Kopf schauend",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Klaus_Behr_Kopf_schauend_%281999%29_Clemensstr._Muenchen-1.jpg/480px-Klaus_Behr_Kopf_schauend_%281999%29_Clemensstr._Muenchen-1.jpg",
    "description": "<br>Author: Klaus Behr",
    "type": "statue",
    "lat": "48.16376",
    "lng": "11.57745"
  },
  {
    "name": "Kraft",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Kraft_%28Herkules_auf_Stier%29%2C_von_Fritz_Behn%2C_Bavariapark_Muenchen-1.jpg/480px-Kraft_%28Herkules_auf_Stier%29%2C_von_Fritz_Behn%2C_Bavariapark_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fritz_Behn\" title=\"Fritz Behn\">Fritz Behn</a><br>Description: Herkules auf Stier, Bestandteil einer Reitergruppe aus vier Figuren",
    "type": "statue",
    "lat": "48.130339",
    "lng": "11.542254"
  },
  {
    "name": "Large Red Sphere",
    "link": "https://de.wikipedia.org/wiki/Large_Red_Sphere",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MUC_MaxVStadt_T%C3%BCrkentorRedSphere.jpg/480px-MUC_MaxVStadt_T%C3%BCrkentorRedSphere.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Walter_De_Maria\" title=\"Walter De Maria\">Walter De Maria</a><br>Description: entstanden 2002, polierter roter Granit, 2,60&nbsp;m Durchmesser, 25,5 t",
    "type": "statue",
    "lat": "48.1472",
    "lng": "11.57377"
  },
  {
    "name": "Die Last",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Elfe_Gerhart_Die_Last_Tucherpark_Muenchen-1.jpg/480px-Elfe_Gerhart_Die_Last_Tucherpark_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Elfe_Gerhart\" class=\"mw-redirect\" title=\"Elfe Gerhart\">Elfe Gerhart</a>",
    "type": "statue",
    "lat": "48.15222",
    "lng": "11.59826"
  },
  {
    "name": "Leben und Licht",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Helmut_Kaestl_Leben_und_Licht_1978_Muenchen-1.jpg/480px-Helmut_Kaestl_Leben_und_Licht_1978_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Helmut_K%C3%A4stl\" title=\"Helmut K&auml;stl\">Helmut K&auml;stl</a><br>Description: Bronze, 100&nbsp;cm Durchmesser, auf Granitstele, insges. 250&nbsp;cm hoch",
    "type": "statue",
    "lat": "48.166884",
    "lng": "11.566793"
  },
  {
    "name": "Legung",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Adrian_Maryniak_Legung_Hanns-Seidel-Platz_Muenchen-1.jpg/480px-Adrian_Maryniak_Legung_Hanns-Seidel-Platz_Muenchen-1.jpg",
    "description": "<br>Author: Adrian Maryniak<br>Description: Stahl",
    "type": "statue",
    "lat": "48.100463",
    "lng": "11.646686"
  },
  {
    "name": "Lichtpartitur",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Oskar-von-Miller-Ring_18_Lichtpartitur_Brigitte_Kowanz_Muenchen-1.jpg/480px-Oskar-von-Miller-Ring_18_Lichtpartitur_Brigitte_Kowanz_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Brigitte_Kowanz\" title=\"Brigitte Kowanz\">Brigitte Kowanz</a><br>Description: Neoninstallation mit sich stetig &auml;ndernden Farben",
    "type": "statue",
    "lat": "48.144959",
    "lng": "11.574795"
  },
  {
    "name": "Lichtzeichen",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Michael_Friederichsen_Lichtzeichen_%281996%29_Arnulfstrasse_126_Muenchen-7.jpg/480px-Michael_Friederichsen_Lichtzeichen_%281996%29_Arnulfstrasse_126_Muenchen-7.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Michael_Friederichsen\" title=\"Michael Friederichsen\">Michael Friederichsen</a><br>Description: Marmor, farbiges Glas, 830&nbsp;cm",
    "type": "statue",
    "lat": "48.146766",
    "lng": "11.537832"
  },
  {
    "name": "Liegende Form",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Karin_Saalmann_Liegende_Form_1979_Muenchen-1.jpg/480px-Karin_Saalmann_Liegende_Form_1979_Muenchen-1.jpg",
    "description": "<br>Author: Karin Saalmann<br>Description: Bronze, 300&nbsp;×&nbsp;120&nbsp;×&nbsp;120&nbsp;cm",
    "type": "statue",
    "lat": "48.148933",
    "lng": "11.578955"
  },
  {
    "name": "Liegende Quellennymphe",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Liegende_Quellennymphe_von_Heinrich_Duell_u._Georg_Pezold%2C_Bavariapark_Muenchen-1.jpg/480px-Liegende_Quellennymphe_von_Heinrich_Duell_u._Georg_Pezold%2C_Bavariapark_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Heinrich_D%C3%BCll\" title=\"Heinrich D&uuml;ll\">Heinrich D&uuml;ll</a> und <a href=\"https://de.wikipedia.org/wiki/Georg_Pezold\" title=\"Georg Pezold\">Georg Pezold</a>",
    "type": "statue",
    "lat": "48.131567",
    "lng": "11.542066"
  },
  {
    "name": "L&ouml;we",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Loewe-Halbig-LB-Bayern.jpg/480px-Loewe-Halbig-LB-Bayern.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Alfred_G%C3%B6rig\" title=\"Alfred G&ouml;rig\">Alfred G&ouml;rig</a><br>Description: Nachsch&ouml;pfung eines L&ouml;wen von <a href=\"https://de.wikipedia.org/wiki/Johann_von_Halbig\" class=\"mw-redirect\" title=\"Johann von Halbig\">Johann von Halbig</a> (1848)",
    "type": "statue",
    "lat": "48.14545",
    "lng": "11.57415"
  },
  {
    "name": "L&ouml;we („Swapo“)",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/L%C3%B6we_v_Hallbig.JPG/480px-L%C3%B6we_v_Hallbig.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Johann_von_Halbig\" class=\"mw-redirect\" title=\"Johann von Halbig\">Johann von Halbig</a><br>Description: L&ouml;wenplastik vor der Katholischen Akademie, urspr&uuml;nglich seit 1848 vor dem <a href=\"https://de.wikipedia.org/wiki/Wittelsbacher_Palais\" title=\"Wittelsbacher Palais\">Wittelsbacher Palais</a> in der <a href=\"https://de.wikipedia.org/wiki/Brienner_Stra%C3%9Fe\" title=\"Brienner Stra&szlig;e\">Brienner Stra&szlig;e</a>, 1994 mit Gedenktafel f&uuml;r <a href=\"https://de.wikipedia.org/wiki/Fritz_Gerlich\" title=\"Fritz Gerlich\">Fritz Gerlich</a>. Benannt nach <i>Svapo</i>, dem (angeblichen) Gr&uuml;nder Schwabings",
    "type": "statue",
    "lat": "48.160203",
    "lng": "11.591322"
  },
  {
    "name": "M&auml;dchenstatue",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hans_Stangl_Bronzefigur_M%C3%A4dchenstatue_seite.JPG/480px-Hans_Stangl_Bronzefigur_M%C3%A4dchenstatue_seite.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hans_Stangl\" title=\"Hans Stangl\">Hans Stangl</a><br>Description: Bronzefigur auf Steinsockel, Baudenkmal",
    "type": "statue",
    "lat": "48.125016",
    "lng": "11.57579"
  },
  {
    "name": "Mae West",
    "link": "https://de.wikipedia.org/wiki/Mae_West_(Kunstwerk)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/MaeWestTram.jpg/480px-MaeWestTram.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Rita_McBride\" title=\"Rita McBride\">Rita McBride</a>",
    "type": "statue",
    "lat": "48.152607",
    "lng": "11.614327"
  },
  {
    "name": "Mann mit ausgestreckten Armen",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Muenchen-KaufingerTorSkulptur1-Asio.JPG/480px-Muenchen-KaufingerTorSkulptur1-Asio.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Stephan_Balkenhol\" title=\"Stephan Balkenhol\">Stephan Balkenhol</a><br>Description: Holzskulptur",
    "type": "statue",
    "lat": "48.13751",
    "lng": "11.57333"
  },
  {
    "name": "Mariens&auml;ule",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Eversbuschstr161_Muenchen-01.jpg/480px-Eversbuschstr161_Muenchen-01.jpg",
    "description": "",
    "type": "statue",
    "lat": "48.197065",
    "lng": "11.458108"
  },
  {
    "name": "Mariens&auml;ule",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Aubing_Mariensaeule.jpg/480px-Aubing_Mariensaeule.jpg",
    "description": "",
    "type": "statue",
    "lat": "48.158674",
    "lng": "11.413250"
  },
  {
    "name": "Mariens&auml;ule",
    "link": "https://de.wikipedia.org/wiki/Mariens%C3%A4ule_(M%C3%BCnchen)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Muenchen-Marienplatz-bjs-2.jpg/480px-Muenchen-Marienplatz-bjs-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hubert_Gerhard\" title=\"Hubert Gerhard\">Hubert Gerhard</a> zugeschrieben",
    "type": "statue",
    "lat": "48.137224",
    "lng": "11.575507"
  },
  {
    "name": "Zwei Marmorl&ouml;wen",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Steinerner_L%C3%B6we_an_der_Feldherrnhalle.jpg/480px-Steinerner_L%C3%B6we_an_der_Feldherrnhalle.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Wilhelm_von_R%C3%BCmann\" title=\"Wilhelm von R&uuml;mann\">Wilhelm von R&uuml;mann</a><br>Description: <a href=\"https://de.wikipedia.org/wiki/Laaser_Marmor\" title=\"Laaser Marmor\">Laaser Marmor</a>; nach dem Volksmund ein <a href=\"https://de.wikipedia.org/wiki/Bayerischer_L%C3%B6we\" title=\"Bayerischer L&ouml;we\">bayerischer</a> (geschlossenes) und ein preu&szlig;ischer L&ouml;we (offenes Maul)",
    "type": "statue",
    "lat": "48.14176",
    "lng": "11.57736"
  },
  {
    "name": "Mariens&auml;ule",
    "link": "https://de.wikipedia.org/wiki/Mariens%C3%A4ule_(Pasing)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Pasingmariensaule.jpg/480px-Pasingmariensaule.jpg",
    "description": "",
    "type": "statue",
    "lat": "48.146603",
    "lng": "11.459388"
  },
  {
    "name": "Minerva",
    "link": "https://de.wikipedia.org/wiki/Minerva#Heraldik",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/M%C3%BCnchen_-_Max-Planck-Gesellschaft.JPG/480px-M%C3%BCnchen_-_Max-Planck-Gesellschaft.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fernando_de_la_Jara\" title=\"Fernando de la Jara\">Fernando de la Jara</a><br>Description: vor dem Eingang der Generalverwaltung der <a href=\"https://de.wikipedia.org/wiki/Max-Planck-Gesellschaft\" title=\"Max-Planck-Gesellschaft\">Max-Planck-Gesellschaft</a>",
    "type": "statue",
    "lat": "48.14124",
    "lng": "11.58197"
  },
  {
    "name": "Miracolo",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Marino_Marini_-_Miracolo_1959-60-1.jpg/480px-Marino_Marini_-_Miracolo_1959-60-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Marino_Marini\" title=\"Marino Marini\">Marino Marini</a><br>Description: vor dem Eingang der <a href=\"https://de.wikipedia.org/wiki/Neue_Pinakothek\" title=\"Neue Pinakothek\">Neuen Pinakothek</a>",
    "type": "statue",
    "lat": "48.149591",
    "lng": "11.570923"
  },
  {
    "name": "Monolithische Granitstele",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Herbert_Peters_Monolithische_Granitstele_1982-83_Destouches_Str._Muenchen-2.jpg/480px-Herbert_Peters_Monolithische_Granitstele_1982-83_Destouches_Str._Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Herbert_Peters\" title=\"Herbert Peters\">Herbert Peters</a><br>Description: Granit",
    "type": "statue",
    "lat": "48.165125",
    "lng": "11.570563"
  },
  {
    "name": "Moving Lines",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/de/thumb/b/bb/F%C3%B6st_Moving_Lines.jpg/480px-F%C3%B6st_Moving_Lines.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Reinhold_F%C3%B6st\" title=\"Reinhold F&ouml;st\">Reinhold F&ouml;st</a><br>Description: 81 Edelstahlrohre mit Lichtinstallation",
    "type": "statue",
    "lat": "48.13211",
    "lng": "11.52985"
  },
  {
    "name": "Nicht mit uns",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Nicht_mit_uns_%28Olaf_Metzel%29%2C_1.jpeg/480px-Nicht_mit_uns_%28Olaf_Metzel%29%2C_1.jpeg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Olaf_Metzel\" title=\"Olaf Metzel\">Olaf Metzel</a><br>Description: Stahl",
    "type": "statue",
    "lat": "48.13305",
    "lng": "11.69172"
  },
  {
    "name": "Nur der Mensch ist der Ort der Bilder",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Jai_Young_Park_Nur_der_Mensch_ist_der_Ort_der_Bilder_1999-1.jpg/480px-Jai_Young_Park_Nur_der_Mensch_ist_der_Ort_der_Bilder_1999-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Jai_Young_Park\" title=\"Jai Young Park\">Jai Young Park</a><br>Description: Beton",
    "type": "statue",
    "lat": "48.105069",
    "lng": "11.65124"
  },
  {
    "name": "Oculus historiae, oculus memoriae, oculus oblivionis",
    "link": "https://de.wikipedia.org/wiki/Oculus_historiae,_oculus_memoriae,_oculus_oblivionis",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Anne_und_Patrick_Poirier_Memoria_historiae_1989_Muenchen-11.jpg/480px-Anne_und_Patrick_Poirier_Memoria_historiae_1989_Muenchen-11.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Anne_und_Patrick_Poirier\" title=\"Anne und Patrick Poirier\">Anne und Patrick Poirier</a><br>Description: Vierteilig: Oculus historiae ('das Auge der Geschichte' – Bronze-Medaillon an der Fassade des Stadtarchivs); S&auml;ule (o.&nbsp;T.), V2A-Stahl, rostfrei, 855&nbsp;cm hoch; zwei Marmorbl&ouml;cke (Oculus memoriae und Oculus oblivionis – das 'Auge der Erinnerung' bzw. das 'Auge des Vergessens'), je 100&nbsp;cm hoch.",
    "type": "statue",
    "lat": "48.160383",
    "lng": "11.562961"
  },
  {
    "name": "Olympia Triumphans",
    "link": "https://de.wikipedia.org/wiki/Olympia_Triumphans",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Martin_Mayer_Olympia-Triumphans-3.jpg/480px-Martin_Mayer_Olympia-Triumphans-3.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Martin_Mayer_(Bildhauer)\" title=\"Martin Mayer (Bildhauer)\">Martin Mayer</a><br>Description: Bronzeplastik &ouml;stlich des ehemaligen Radstadions",
    "type": "statue",
    "lat": "48.170465",
    "lng": "11.54233"
  },
  {
    "name": "o. T.",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Max_Bill_o.T._1978-83_Klinikum_Gro%C3%9Fhadern_Muenchen-1.jpg/480px-Max_Bill_o.T._1978-83_Klinikum_Gro%C3%9Fhadern_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Max_Bill\" title=\"Max Bill\">Max Bill</a>",
    "type": "statue",
    "lat": "48.111068",
    "lng": "11.472284"
  },
  {
    "name": "o. T.",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Alf_Lechner_o.T._%281973%29_Graubuendener_Str._Muenchen-1.jpg/480px-Alf_Lechner_o.T._%281973%29_Graubuendener_Str._Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Alf_Lechner\" title=\"Alf Lechner\">Alf Lechner</a><br>Description: Vierkantstahlrohr, rostfrei, geschliffen, 400&nbsp;×&nbsp;700&nbsp;×&nbsp;300 cm; Profilquerschnitt 250&nbsp;×&nbsp;250 mm",
    "type": "statue",
    "lat": "48.09109",
    "lng": "11.48111"
  },
  {
    "name": "o. T.",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Markus_Stangl_o.T._1993_EP_Muenchen-2.jpg/480px-Markus_Stangl_o.T._1993_EP_Muenchen-2.jpg",
    "description": "<br>Author: Markus Stangl<br>Description: Granit/Stahl, 520&nbsp;×&nbsp;230&nbsp;×&nbsp;80&nbsp;cm",
    "type": "statue",
    "lat": "48.13993",
    "lng": "11.55022"
  },
  {
    "name": "o. T.",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Roland_Fischer_o._T._am_Muenchner_Tor_2003-5.jpg/480px-Roland_Fischer_o._T._am_Muenchner_Tor_2003-5.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Roland_Fischer_(Fotograf)\" title=\"Roland Fischer (Fotograf)\">Roland Fischer</a><br>Description: stark besch&auml;digt (Stand Juli 2018)",
    "type": "statue",
    "lat": "48.17599",
    "lng": "11.58904"
  },
  {
    "name": "o. T.",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Yoshimi_Hashimoto_o.T._1985_Schinkelstr._Muenchen-1.jpg/480px-Yoshimi_Hashimoto_o.T._1985_Schinkelstr._Muenchen-1.jpg",
    "description": "<br>Author: Yoshimi Hashimoto",
    "type": "statue",
    "lat": "48.17326",
    "lng": "11.58931"
  },
  {
    "name": "Panther",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Hans_Kastler_Panther-1.jpg/480px-Hans_Kastler_Panther-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hans_Kastler\" title=\"Hans Kastler\">Hans Kastler</a>",
    "type": "statue",
    "lat": "48.120356",
    "lng": "11.605841"
  },
  {
    "name": "Patrona Bavariae",
    "link": "https://de.wikipedia.org/wiki/Patrona_Bavariae#Bronzestatue_an_der_Residenz",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/ResidenzPatronaBoiariae_Muenchen-01.JPG/480px-ResidenzPatronaBoiariae_Muenchen-01.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hans_Krumpper\" title=\"Hans Krumpper\">Hans Krumpper</a><br>Description: bronzene Marienstatue, gegossen 1615 von Bartolom&auml;us Wenglein",
    "type": "statue",
    "lat": "48.14152",
    "lng": "11.57779"
  },
  {
    "name": "Pavillon – Schr&auml;ge W&auml;nde",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Kay_Winkler_Pavillon_-_Schraege_Waende_2003_Staendlerstra%C3%9Fe_Muenchen-1.jpg/480px-Kay_Winkler_Pavillon_-_Schraege_Waende_2003_Staendlerstra%C3%9Fe_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Kay_Winkler\" title=\"Kay Winkler\">Kay Winkler</a><br>Description: Beton, Stahl",
    "type": "statue",
    "lat": "48.104507",
    "lng": "11.649979"
  },
  {
    "name": "Pferd, sich bei&szlig;end",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Alexander_Fischer_Pferd_sich_beissend_1965_Kulturzentrum_2411_Muenchen-1.jpg/480px-Alexander_Fischer_Pferd_sich_beissend_1965_Kulturzentrum_2411_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Alexander_Fischer_(Bildhauer)\" title=\"Alexander Fischer (Bildhauer)\">Alexander Fischer</a>",
    "type": "statue",
    "lat": "48.21339",
    "lng": "11.55689"
  },
  {
    "name": "Pferdeb&auml;ndiger",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pferdeb%C3%A4ndiger-3.JPG/480px-Pferdeb%C3%A4ndiger-3.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Mathias_Gasteiger\" title=\"Mathias Gasteiger\">Mathias Gasteiger</a><br>Description: Baudenkmal",
    "type": "statue",
    "lat": "48.143385",
    "lng": "11.670022"
  },
  {
    "name": "Phantasie",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Phantasie_%28Reiterin_auf_steigendem_Pferd%29%2C_von_Carl_Ebbinghaus%2C_Bavariapark_Muenchen-1.jpg/480px-Phantasie_%28Reiterin_auf_steigendem_Pferd%29%2C_von_Carl_Ebbinghaus%2C_Bavariapark_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Carl_Ebbinghaus\" title=\"Carl Ebbinghaus\">Carl Ebbinghaus</a><br>Description: Reiterin auf steigendem Pferd, Bestandteil einer Reitergruppe aus vier Figuren",
    "type": "statue",
    "lat": "48.130427",
    "lng": "11.541720"
  },
  {
    "name": "Platzgestaltung Europ&auml;ische Schule",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Hans_Rucker_Vorplatz_Europaeische_Schule-1981-1.jpg/480px-Hans_Rucker_Vorplatz_Europaeische_Schule-1981-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hans_Rucker\" title=\"Hans Rucker\">Hans Rucker</a>",
    "type": "statue",
    "lat": "48.0966",
    "lng": "11.64013"
  },
  {
    "name": "Present Continuous",
    "link": "https://de.wikipedia.org/wiki/Present_Continuous_(Skulptur)",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Henk_Visch_Present_Continuous-1.jpg/480px-Henk_Visch_Present_Continuous-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Henk_Visch\" title=\"Henk Visch\">Henk Visch</a>",
    "type": "statue",
    "lat": "48.14719",
    "lng": "11.5688"
  },
  {
    "name": "Prisma",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Herbert_Peters_Prisma_1984_Putzbrunner_Str.%2C_Therese-Giehse-Allee_Neuperlach_Muenchen-1.jpg/480px-Herbert_Peters_Prisma_1984_Putzbrunner_Str.%2C_Therese-Giehse-Allee_Neuperlach_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Herbert_Peters\" title=\"Herbert Peters\">Herbert Peters</a>",
    "type": "statue",
    "lat": "48.097074",
    "lng": "11.643641"
  },
  {
    "name": "Rad des Lebens",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Hans_Kastler_Rad_des_Lebens_1989_Arabellastr._Muenchen-1.jpg/480px-Hans_Kastler_Rad_des_Lebens_1989_Arabellastr._Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hans_Kastler\" title=\"Hans Kastler\">Hans Kastler</a><br>Description: Bronze, 260&nbsp;cm Durchmesser",
    "type": "statue",
    "lat": "48.14983",
    "lng": "11.62315"
  },
  {
    "name": "Raumspindel (Space Churn)",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/George_M._Rickey_Raumspindel_Space_Churn_1972_Neuperlach-1.jpg/480px-George_M._Rickey_Raumspindel_Space_Churn_1972_Neuperlach-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/George_Rickey\" title=\"George Rickey\">George Rickey</a><br>Description: westlich vom <a href=\"https://de.wikipedia.org/wiki/Perlacher_Einkaufs-Passagen\" class=\"mw-redirect\" title=\"Perlacher Einkaufs-Passagen\">PEP</a>",
    "type": "statue",
    "lat": "48.10168",
    "lng": "11.64321"
  },
  {
    "name": "Reichtum",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Reichtum_%28J%C3%BCngling_auf_Seekuh%29%2C_von_Bernhard_Bleeker%2C_Bavariapark_Muenchen-1.jpg/480px-Reichtum_%28J%C3%BCngling_auf_Seekuh%29%2C_von_Bernhard_Bleeker%2C_Bavariapark_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Bernhard_Bleeker\" title=\"Bernhard Bleeker\">Bernhard Bleeker</a><br>Description: J&uuml;ngling auf Seekuh, Bestandteil einer Reitergruppe aus vier Figuren",
    "type": "statue",
    "lat": "48.131500",
    "lng": "11.541081"
  },
  {
    "name": "Reiter",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Alexander_Fischer_Reiter_1956_Heimeranplatz-1.jpg/480px-Alexander_Fischer_Reiter_1956_Heimeranplatz-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Alexander_Fischer_(Bildhauer)\" title=\"Alexander Fischer (Bildhauer)\">Alexander Fischer</a>",
    "type": "statue",
    "lat": "48.13353",
    "lng": "11.5338"
  },
  {
    "name": "Rhythmus im Raum",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Max_Bill_Rhythmus_im_Raum_1994_EP_Muenchen-3.jpg/480px-Max_Bill_Rhythmus_im_Raum_1994_EP_Muenchen-3.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Max_Bill\" title=\"Max Bill\">Max Bill</a><br>Description: Bayrischer Granit, 3.20&nbsp;×&nbsp;10.65&nbsp;×&nbsp;18,45&nbsp;m",
    "type": "statue",
    "lat": "48.13941",
    "lng": "11.55039"
  },
  {
    "name": "Ring",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/El_Anillo%2C_M%C3%BAnich%2C_Alemania%2C_2012-04-30%2C_DD_01.JPG/480px-El_Anillo%2C_M%C3%BAnich%2C_Alemania%2C_2012-04-30%2C_DD_01.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Mauro_Staccioli\" title=\"Mauro Staccioli\">Mauro Staccioli</a><br>Description: Stahlzement, Durchmesser 12m, Gewicht 18 t",
    "type": "statue",
    "lat": "48.142315",
    "lng": "11.561926"
  },
  {
    "name": "Ringergruppe",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Matthias_Gasteiger_Ringergruppe_1896_Sachsenstr._2_Muenchen-2.jpg/480px-Matthias_Gasteiger_Ringergruppe_1896_Sachsenstr._2_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Mathias_Gasteiger\" title=\"Mathias Gasteiger\">Mathias Gasteiger</a><br>Description: Steinskulptur, Baudenkmal",
    "type": "statue",
    "lat": "48.119758",
    "lng": "11.565572"
  },
  {
    "name": "Rosseb&auml;ndiger",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/M%C3%BCnchen_Rosseb%C3%A4ndiger_von_Bernhard_Bleeker.jpg/480px-M%C3%BCnchen_Rosseb%C3%A4ndiger_von_Bernhard_Bleeker.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Bernhard_Bleeker\" title=\"Bernhard Bleeker\">Bernhard Bleeker</a><br>Description: Kopie, ohne Pferd, Original zerst&ouml;rt, Baudenkmal",
    "type": "statue",
    "lat": "48.148375",
    "lng": "11.568365"
  },
  {
    "name": "Rosseb&auml;ndiger",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/M%C3%BCnchen_Rosseb%C3%A4ndiger_von_Hermann_Hahn.jpg/480px-M%C3%BCnchen_Rosseb%C3%A4ndiger_von_Hermann_Hahn.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hermann_Hahn_(Bildhauer)\" title=\"Hermann Hahn (Bildhauer)\">Hermann Hahn</a><br>Description: urspr&uuml;nglich auch vor der TUM gestanden, Baudenkmal",
    "type": "statue",
    "lat": "48.148392",
    "lng": "11.568711"
  },
  {
    "name": "Rosselenker",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Franz_Mikorey_Rosselenker_Goethestr-1.jpg/480px-Franz_Mikorey_Rosselenker_Goethestr-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Franz_Mikorey_(Bildhauer)\" title=\"Franz Mikorey (Bildhauer)\">Franz Mikorey</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.135196",
    "lng": "11.558701"
  },
  {
    "name": "Ruhender Faun",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Ruhender_Faun%2C_von_Adolf_Baermann%2C_Bavariapark_Muenchen-1.jpg/480px-Ruhender_Faun%2C_von_Adolf_Baermann%2C_Bavariapark_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Cipri_Adolf_Bermann\" title=\"Cipri Adolf Bermann\">Cipri Adolf Bermann</a>",
    "type": "statue",
    "lat": "48.131986",
    "lng": "11.542047"
  },
  {
    "name": "Der Schauende",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Siemens-Siedlung_Muenchen_Statue_Joachim_Berthold_1.JPG/480px-Siemens-Siedlung_Muenchen_Statue_Joachim_Berthold_1.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Joachim_Berthold\" title=\"Joachim Berthold\">Joachim Berthold</a>",
    "type": "statue",
    "lat": "48.100547",
    "lng": "11.519333"
  },
  {
    "name": "Sch&ouml;nheit",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Schoenheit_%28Jungfrau_auf_Einhorn%29%2C_von_Hermann_Hahn%2C_Bavariapark_Muenchen-2.jpg/480px-Schoenheit_%28Jungfrau_auf_Einhorn%29%2C_von_Hermann_Hahn%2C_Bavariapark_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hermann_Hahn_(Bildhauer)\" title=\"Hermann Hahn (Bildhauer)\">Hermann Hahn</a><br>Description: Jungfrau auf Einhorn, Bestandteil einer Reitergruppe aus vier Figuren",
    "type": "statue",
    "lat": "48.131144",
    "lng": "11.541063"
  },
  {
    "name": "Der Schreitende",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Michael_Morgner_-_Der_Schreitende_%282016%29_Muenchen-1.jpg/480px-Michael_Morgner_-_Der_Schreitende_%282016%29_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Michael_Morgner\" title=\"Michael Morgner\">Michael Morgner</a><br>Description: Stahl, 10&nbsp;Tonnen, 5&nbsp;Meter<sup id=\"cite_ref-1\" class=\"reference\"><a href=\"https://de.wikipedia.org#cite_note-1\">[1]</a></sup><sup id=\"cite_ref-2\" class=\"reference\"><a href=\"https://de.wikipedia.org#cite_note-2\">[2]</a></sup>",
    "type": "statue",
    "lat": "48.14493",
    "lng": "11.51952"
  },
  {
    "name": "Schrifts&auml;ule",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Leo_Kornbrust_o._T._%28Schriftsaeule%29_1985_Berliner_Str._Muenchen-1.jpg/480px-Leo_Kornbrust_o._T._%28Schriftsaeule%29_1985_Berliner_Str._Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Leo_Kornbrust\" title=\"Leo Kornbrust\">Leo Kornbrust</a><br>Description: achteckig, schwarzer Granit, 850&nbsp;×&nbsp;60&nbsp;×&nbsp;60 cm; Text von Felicitas Frischmuth",
    "type": "statue",
    "lat": "48.174118",
    "lng": "11.587767"
  },
  {
    "name": "Schrifts&auml;ule",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Leo_Kornbrust_Schriftsaeule_1989_Thalkirchner_Strasse_Muenchen-1.jpg/480px-Leo_Kornbrust_Schriftsaeule_1989_Thalkirchner_Strasse_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Leo_Kornbrust\" title=\"Leo Kornbrust\">Leo Kornbrust</a><br>Description: Granit, schwarz, 995&nbsp;×&nbsp;54&nbsp;×&nbsp;54 cm; Text von Felicitas Frischmuth",
    "type": "statue",
    "lat": "48.112830",
    "lng": "11.549043"
  },
  {
    "name": "Schuttblume",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Rudolf_Belling_Schuttblume_1972_Olympiaberg_Muenchen-2.jpg/480px-Rudolf_Belling_Schuttblume_1972_Olympiaberg_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Rudolf_Belling\" title=\"Rudolf Belling\">Rudolf Belling</a><br>Description: Bronze, 645&nbsp;cm hoch",
    "type": "statue",
    "lat": "48.170922",
    "lng": "11.556095"
  },
  {
    "name": "Sechs Halbstatuen von Augustinus, Papias, Solon, Hippokrates, Aristoteles und Archimedes",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/LMU_Eingang_Amalienstra%C3%9Fe.jpg/480px-LMU_Eingang_Amalienstra%C3%9Fe.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Josef_Flossmann\" title=\"Josef Flossmann\">Josef Flossmann</a>",
    "type": "statue",
    "lat": "48.1511",
    "lng": "11.57928"
  },
  {
    "name": "Sechs Statuen (Hephaistos, Phydias, Perikles, Kaiser Hadrian, Prometheus, Daidalos)",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Ionische_Glyptothek_M%C3%BCnchen_am_K%C3%B6nigsplatz_-_Panorama.jpg/480px-Ionische_Glyptothek_M%C3%BCnchen_am_K%C3%B6nigsplatz_-_Panorama.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Johannes_Leeb\" title=\"Johannes Leeb\">Johannes Leeb</a>, Joseph Lazzarani, <a href=\"https://de.wikipedia.org/wiki/Peter_Sch%C3%B6pf\" title=\"Peter Sch&ouml;pf\">Peter Sch&ouml;pf</a>",
    "type": "statue",
    "lat": "48.14625",
    "lng": "11.56563"
  },
  {
    "name": "Silbers&auml;ule",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Olympisches_Dorf_-_Silbers%C3%A4ule_-_August_2016.jpg/480px-Olympisches_Dorf_-_Silbers%C3%A4ule_-_August_2016.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Roland_Martin_(Bildhauer)\" title=\"Roland Martin (Bildhauer)\">Roland Martin</a><br>Description: verdreht geschichtete Aluminiumplatten, urspr&uuml;nglich motorbewegt",
    "type": "statue",
    "lat": "48.18185",
    "lng": "11.55158"
  },
  {
    "name": "Sitzender Keiler",
    "link": "https://de.wikipedia.org/wiki/Sitzender_Keiler",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Borstei_L%C3%B6fftstrasse_Martin_Mayer_Sitzende_Keiler_02.JPG/480px-Borstei_L%C3%B6fftstrasse_Martin_Mayer_Sitzende_Keiler_02.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Martin_Mayer_(Bildhauer)\" title=\"Martin Mayer (Bildhauer)\">Martin Mayer</a><br>Description: Bronze, 124&nbsp;cm hoch, nachempfunden nach <a href=\"https://de.wikipedia.org/wiki/Fontana_del_Porcellino\" title=\"Fontana del Porcellino\">Porcellino</a> von <a href=\"https://de.wikipedia.org/wiki/Pietro_Tacca\" title=\"Pietro Tacca\">Pietro Tacca</a>",
    "type": "statue",
    "lat": "48.17011",
    "lng": "11.53746"
  },
  {
    "name": "Sitzender Keiler",
    "link": "https://de.wikipedia.org/wiki/Sitzender_Keiler",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Sitzender_Keiler_Muenchen.jpg/480px-Sitzender_Keiler_Muenchen.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Martin_Mayer_(Bildhauer)\" title=\"Martin Mayer (Bildhauer)\">Martin Mayer</a><br>Description: Abguss des Originales von 1960",
    "type": "statue",
    "lat": "48.138310",
    "lng": "11.571677"
  },
  {
    "name": "Sitzender und Stehender",
    "link": "",
    "description": "",
    "type": "statue",
    "lat": "48.13977",
    "lng": "11.5738"
  },
  {
    "name": "Sockelobjekt",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Edgar_Gutbub_Sockelobjekt_1990_He%C3%9Fstr._3_Muenchen-1.jpg/480px-Edgar_Gutbub_Sockelobjekt_1990_He%C3%9Fstr._3_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Edgar_Gutbub\" title=\"Edgar Gutbub\">Edgar Gutbub</a><br>Description: Edelstahl, 420&nbsp;cm hoch",
    "type": "statue",
    "lat": "48.150888",
    "lng": "11.569409"
  },
  {
    "name": "Sonnengott",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Laszlo_Szabo_Sonnengott_%281968-73%29_Ungererstr._Muenchen-1.jpg/480px-Laszlo_Szabo_Sonnengott_%281968-73%29_Ungererstr._Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/L%C3%A1szl%C3%B3_Szab%C3%B3_(Bildhauer)\" title=\"László Szabó (Bildhauer)\">László Szabó</a><br>Description: Donaukalkstein, 320&nbsp;cm hoch",
    "type": "statue",
    "lat": "48.16536",
    "lng": "11.588653"
  },
  {
    "name": "Sophora Sophia",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Alix_Stadtbaeumer_Sophora_Sophia_2010_Giesinger_Bahnhof_Muenchen-1.jpg/480px-Alix_Stadtbaeumer_Sophora_Sophia_2010_Giesinger_Bahnhof_Muenchen-1.jpg",
    "description": "<br>Author: Alix Stadtb&auml;umer",
    "type": "statue",
    "lat": "48.110376",
    "lng": "11.595686"
  },
  {
    "name": "Sphere",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/M%C3%BCnchen_F%C3%BCnf_H%C3%B6fe_Sphere_2013-06-20_2.jpg/480px-M%C3%BCnchen_F%C3%BCnf_H%C3%B6fe_Sphere_2013-06-20_2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/%C3%93lafur_El%C3%ADasson\" title=\"Ólafur Elíasson\">Ólafur Elíasson</a>",
    "type": "statue",
    "lat": "48.14093",
    "lng": "11.57612"
  },
  {
    "name": "Springende Pferde",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/SpringendePferdeHerzogWilhelmStr_Muenchen-01.jpg/480px-SpringendePferdeHerzogWilhelmStr_Muenchen-01.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Franz_Mikorey_(Bildhauer)\" title=\"Franz Mikorey (Bildhauer)\">Franz Mikorey</a><br>Description: Steinplastik, erste Aufstellung 1934 auf dem Tassiloplatz in der <a href=\"https://de.wikipedia.org/wiki/Au_(M%C3%BCnchen)\" title=\"Au (M&uuml;nchen)\">Au</a>",
    "type": "statue",
    "lat": "48.13540",
    "lng": "11.5669"
  },
  {
    "name": "Stahlplastik",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Alfred_de_Vivanco-Luyken_Stahlplastik_1985-89_Heimeranstr._10_Muenchen-2.jpg/480px-Alfred_de_Vivanco-Luyken_Stahlplastik_1985-89_Heimeranstr._10_Muenchen-2.jpg",
    "description": "<br>Author: Alfred de Vivanco-Luyken<br>Description: Corten-Stahl, 350&nbsp;×&nbsp;50&nbsp;×&nbsp;150&nbsp;cm",
    "type": "statue",
    "lat": "48.13395",
    "lng": "11.54381"
  },
  {
    "name": "Stahlskulptur",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Alfred_Aschauer_Stahlskulptur_ca._1970-1.jpg/480px-Alfred_Aschauer_Stahlskulptur_ca._1970-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Alfred_Aschauer\" title=\"Alfred Aschauer\">Alfred Aschauer</a>",
    "type": "statue",
    "lat": "48.106051",
    "lng": "11.65684"
  },
  {
    "name": "Steinerner Vogel",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Pinuccio_Sciola_Steinerner_Vogel_%281986%29_Westpark_Muenchen-4.jpg/480px-Pinuccio_Sciola_Steinerner_Vogel_%281986%29_Westpark_Muenchen-4.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Pinuccio_Sciola\" title=\"Pinuccio Sciola\">Pinuccio Sciola</a><br>Description: Glimmertrachyt, 275&nbsp;×&nbsp;67&nbsp;×&nbsp;27&nbsp;cm",
    "type": "statue",
    "lat": "48.12247",
    "lng": "11.52577"
  },
  {
    "name": "Steinprisma und Steinriegel",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Herbert_Peters_Steinprisma_und_Steinriegel_1990_Hessstr._Muenchen-1.jpg/480px-Herbert_Peters_Steinprisma_und_Steinriegel_1990_Hessstr._Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Herbert_Peters\" title=\"Herbert Peters\">Herbert Peters</a><br>Description: Zwei Monolithen aus Rockensteiner Granit (Bayerischer Wald),<br> vorn: Steinriegel, 80&nbsp;×&nbsp;820&nbsp;×&nbsp;100 cm,<br> hinten: Steinprisma, 180&nbsp;×&nbsp;430&nbsp;×&nbsp;100 cm.",
    "type": "statue",
    "lat": "48.15099",
    "lng": "11.56825"
  },
  {
    "name": "Steinskulptur",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Nikolaus_Gerhart_Steinskulptur_Gasteig_Muenchen-1.jpg/480px-Nikolaus_Gerhart_Steinskulptur_Gasteig_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Nikolaus_Gerhart\" title=\"Nikolaus Gerhart\">Nikolaus Gerhart</a>",
    "type": "statue",
    "lat": "48.131772",
    "lng": "11.590065"
  },
  {
    "name": "Stele diagonal",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ben_Muthofer_Stele_diagonal_1986_Muenchen-1.jpg/480px-Ben_Muthofer_Stele_diagonal_1986_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Ben_Muthofer\" title=\"Ben Muthofer\">Ben Muthofer</a><br>Description: Aluminium, Lack, 10&nbsp;×&nbsp;1&nbsp;×&nbsp;1&nbsp;m",
    "type": "statue",
    "lat": "48.155698",
    "lng": "11.559289"
  },
  {
    "name": "St&uuml;rzende (Ende einer Epoche)",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Alexander_Fischer_-_Stuerzende1.JPG/480px-Alexander_Fischer_-_Stuerzende1.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Alexander_Fischer_(Bildhauer)\" title=\"Alexander Fischer (Bildhauer)\">Alexander Fischer</a><br>Description: Bronzeplastik vor der Versicherungskammer Bayern",
    "type": "statue",
    "lat": "48.13747",
    "lng": "11.58962"
  },
  {
    "name": "Sweet Brown Snail",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Sweet_Brown_Snail_am_Bavariapark_und_dem_Verkehrszentrum_des_Deutschen_Museums_in_M%C3%BCnchen_an_der_Theresienh%C3%B6he_Schwanthalerh%C3%B6he_Westend.JPG/480px-Sweet_Brown_Snail_am_Bavariapark_und_dem_Verkehrszentrum_des_Deutschen_Museums_in_M%C3%BCnchen_an_der_Theresienh%C3%B6he_Schwanthalerh%C3%B6he_Westend.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Jason_Rhoades\" title=\"Jason Rhoades\">Jason Rhoades</a> und <a href=\"https://de.wikipedia.org/wiki/Paul_McCarthy\" title=\"Paul McCarthy\">Paul McCarthy</a>",
    "type": "statue",
    "lat": "48.13213",
    "lng": "11.54330"
  },
  {
    "name": "Tellus Bavarica",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bavaria_Dianatempel_Hofgarten_Muenchen.jpg/480px-Bavaria_Dianatempel_Hofgarten_Muenchen.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hubert_Gerhard\" title=\"Hubert Gerhard\">Hubert Gerhard</a>, 1623 umgestaltet von <a href=\"https://de.wikipedia.org/wiki/Hans_Krumpper\" title=\"Hans Krumpper\">Hans Krumpper</a><br>Description: Bronzestatue der Allegorie f&uuml;r die „Bayerische Erde“, ca. 230&nbsp;cm",
    "type": "statue",
    "lat": "48.14294",
    "lng": "11.58002"
  },
  {
    "name": "Terrasse",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Jean_Clareboudt_-_Terrasse_-_Westpark_Muenchen-1.jpg/480px-Jean_Clareboudt_-_Terrasse_-_Westpark_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Jean_Clareboudt\" title=\"Jean Clareboudt\">Jean Clareboudt</a><br>Description: acht Findlinge mit aufliegender Stahlkonstruktion, Durchmesser ca. 650&nbsp;cm",
    "type": "statue",
    "lat": "48.123954",
    "lng": "11.511139"
  },
  {
    "name": "The Shining Circus and its Spectators",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Ilja_und_Emilia_Kabakow%2C_The_Shining_Circus_and_its_Spectators_Muenchen-1.jpg/480px-Ilja_und_Emilia_Kabakow%2C_The_Shining_Circus_and_its_Spectators_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Ilja_Kabakow\" title=\"Ilja Kabakow\">Ilja Kabakow</a> und Emilia Kabakow",
    "type": "statue",
    "lat": "48.113507",
    "lng": "11.58936"
  },
  {
    "name": "The Wings",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/The_Wings_created_by_Studio_Libeskind_Wittelsbacherplatz_Siemens_Konzernzentrale_Muenchen-1.jpg/480px-The_Wings_created_by_Studio_Libeskind_Wittelsbacherplatz_Siemens_Konzernzentrale_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Daniel_Libeskind\" title=\"Daniel Libeskind\">Studio Libeskind</a><br>Description: 10&nbsp;m hoch, 15 t schwer, mattgeschliffene Aluminiumskulptur, Teil aus 4 Objekten von der <a href=\"https://de.wikipedia.org/wiki/Expo_2015\" title=\"Expo 2015\">Expo 2015</a> in Mailand",
    "type": "statue",
    "lat": "48.14425",
    "lng": "11.57493"
  },
  {
    "name": "Thukydides",
    "link": "https://de.wikipedia.org/wiki/Thukydides",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bayerische_Staatsbibliothek_Statue_des_Thukydides_Muenchen-2.jpg/480px-Bayerische_Staatsbibliothek_Statue_des_Thukydides_Muenchen-2.jpg",
    "description": "<br>Author: Hans Vogel<br>Description: Original von Johann Ernst Mayer nach Modell von <a href=\"https://de.wikipedia.org/wiki/Ludwig_von_Schwanthaler\" class=\"mw-redirect\" title=\"Ludwig von Schwanthaler\">Ludwig von Schwanthaler</a> (1837) heute in <a href=\"https://de.wikipedia.org/wiki/Bernau_am_Chiemsee\" title=\"Bernau am Chiemsee\">Bernau am Chiemsee</a> (Schulhof)",
    "type": "statue",
    "lat": "48.14768",
    "lng": "11.58016"
  },
  {
    "name": "Torkonstruktion",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Johannes_Leismueller_Torkonstruktion_1989_Brudermuehlstrasse_Muenchen-1.jpg/480px-Johannes_Leismueller_Torkonstruktion_1989_Brudermuehlstrasse_Muenchen-1.jpg",
    "description": "<br>Author: Johannes Leism&uuml;ller",
    "type": "statue",
    "lat": "48.112323",
    "lng": "11.553915"
  },
  {
    "name": "Torre Pendente",
    "link": "",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Rudolf_Wachter_(Bildhauer)\" title=\"Rudolf Wachter (Bildhauer)\">Rudolf Wachter</a><br>Description: 6,50&nbsp;m hoch, 2,10&nbsp;m Durchmesser, 2 Holzskulpturen",
    "type": "statue",
    "lat": "48.11761",
    "lng": "11.58179"
  },
  {
    "name": "Die Trauernden",
    "link": "https://de.wikipedia.org/wiki/Die_Trauernden",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Die_Trauernden_M%C3%BCnchen.jpg/480px-Die_Trauernden_M%C3%BCnchen.jpg",
    "description": "<br>Author: Karl Kroher<br>Description: Bronzefiguren",
    "type": "statue",
    "lat": "48.14358",
    "lng": "11.534056"
  },
  {
    "name": "Trilogie f&uuml;r das Arbeitsamt",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Georg_Seibert_Das_Haus_%281985-86%29_Kapuzinerstr._Muenchen-2.jpg/480px-Georg_Seibert_Das_Haus_%281985-86%29_Kapuzinerstr._Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Georg_Seibert\" title=\"Georg Seibert\">Georg Seibert</a><br>Description: Stahl",
    "type": "statue",
    "lat": "48.125614",
    "lng": "11.559198"
  },
  {
    "name": "Trojanisches Pferd",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Trojanisches_Pferd_1976-1981_von_Hans_Wimmer-1.jpg/480px-Trojanisches_Pferd_1976-1981_von_Hans_Wimmer-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Hans_Wimmer\" title=\"Hans Wimmer\">Hans Wimmer</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.147504",
    "lng": "11.570473"
  },
  {
    "name": "T&uuml;r",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Josef_Sailstorfer%2C_Tuer%2C_2002%2C_Rundfunkplatz_Muenchen-1.jpg/480px-Josef_Sailstorfer%2C_Tuer%2C_2002%2C_Rundfunkplatz_Muenchen-1.jpg",
    "description": "<br>Author: Josef Sailstorfer<br>Description: Kalkstein, 350&nbsp;cm hoch",
    "type": "statue",
    "lat": "48.14412",
    "lng": "11.55511"
  },
  {
    "name": "Turm",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Ingo_Glass_Turm_1985_Thomas-Wimmer-Ring_Muenchen-2.jpg/480px-Ingo_Glass_Turm_1985_Thomas-Wimmer-Ring_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Ingo_Glass\" title=\"Ingo Glass\">Ingo Glass</a><br>Description: Stahl, 370&nbsp;×&nbsp;100&nbsp;×&nbsp;100&nbsp;cm",
    "type": "statue",
    "lat": "48.13639",
    "lng": "11.58360"
  },
  {
    "name": "Two-Piece Reclining Figure: Points",
    "link": "https://de.wikipedia.org/wiki/Two-Piece_Reclining_Figure:_Points",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Henry_Moore_Liegende_1969-70-1.jpg/480px-Henry_Moore_Liegende_1969-70-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Henry_Moore\" title=\"Henry Moore\">Henry Moore</a><br>Description: Bronze",
    "type": "statue",
    "lat": "48.1489",
    "lng": "11.5705"
  },
  {
    "name": "Umschreibung (Endlose Treppe)",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Endlose_Treppe_KPMG_Muenchen.JPG/480px-Endlose_Treppe_KPMG_Muenchen.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/%C3%93lafur_El%C3%ADasson\" title=\"Ólafur Elíasson\">Ólafur Elíasson</a><br>Description: begehbare Installation, Stahl, 9,30&nbsp;m hoch",
    "type": "statue",
    "lat": "48.13277",
    "lng": "11.5403"
  },
  {
    "name": "Untitled",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Andre_Volten_Untitled_1980_Europaeisches_Patentamt_Muenchen-1.jpg/480px-Andre_Volten_Untitled_1980_Europaeisches_Patentamt_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Andr%C3%A9_Volten\" title=\"André Volten\">André Volten</a>",
    "type": "statue",
    "lat": "48.130042",
    "lng": "11.578806"
  },
  {
    "name": "Urteil des Paris",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Nymphenburg_schlosspark_vier_statuen.jpg/480px-Nymphenburg_schlosspark_vier_statuen.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Landolin_Ohmacht\" title=\"Landolin Ohmacht\">Landolin Ohmacht</a><br>Description: vier Figuren auf einem gemeinsamen Sockel:  Paris, Aphrodite, Hera und Pallas Athene, Sandstein",
    "type": "statue",
    "lat": "48.15881",
    "lng": "11.50072"
  },
  {
    "name": "Vernetzungen",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Manfred_Bergmeister_Vernetzungen_1993_Otto-Str._Muenchen-2.jpg/480px-Manfred_Bergmeister_Vernetzungen_1993_Otto-Str._Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Manfred_Bergmeister\" title=\"Manfred Bergmeister\">Manfred Bergmeister</a>",
    "type": "statue",
    "lat": "48.142949",
    "lng": "11.570569"
  },
  {
    "name": "Versunkenes Dorf",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Versunkenes_Dorf-2.JPG/480px-Versunkenes_Dorf-2.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Timm_Ulrichs\" title=\"Timm Ulrichs\">Timm Ulrichs</a><br>Description: Bemalte Betonfertigteile, nicht begehbar",
    "type": "statue",
    "lat": "48.216067",
    "lng": "11.630533"
  },
  {
    "name": "Vierteiliger Kubus",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Alfred_Goerig_Vierteiliger_Kubus_1985_Berliner_Str._Muenchen-5.jpg/480px-Alfred_Goerig_Vierteiliger_Kubus_1985_Berliner_Str._Muenchen-5.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Alfred_G%C3%B6rig\" title=\"Alfred G&ouml;rig\">Alfred G&ouml;rig</a><br>Description: Granit, 300&nbsp;×&nbsp;300&nbsp;×&nbsp;300 cm, Innenfl&auml;chen poliert",
    "type": "statue",
    "lat": "48.17418",
    "lng": "11.59314"
  },
  {
    "name": "Walking Man",
    "link": "https://de.wikipedia.org/wiki/Walking_Man",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Walking_Man_-_Panorama.jpg/480px-Walking_Man_-_Panorama.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Jonathan_Borofsky\" title=\"Jonathan Borofsky\">Jonathan Borofsky</a><br>Description: vor dem Sitz der <a href=\"https://de.wikipedia.org/wiki/M%C3%BCnchener_R%C3%BCck\" title=\"M&uuml;nchener R&uuml;ck\">M&uuml;nchener R&uuml;ck</a>",
    "type": "statue",
    "lat": "48.156384",
    "lng": "11.584415"
  },
  {
    "name": "Wassersch&ouml;pfender Mann",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Karl_May_wasserschoepfender_Mann.JPG/480px-Karl_May_wasserschoepfender_Mann.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Karl_May_(Bildhauer)\" title=\"Karl May (Bildhauer)\">Karl May</a><br>Description: Kalkstein, Baudenkmal",
    "type": "statue",
    "lat": "48.126584",
    "lng": "11.577389"
  },
  {
    "name": "Wilde Pferde",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bronzegruppe_Wilde_Pferde%2C_von_Georg_Roemer%2C_Bavariapark_Muenchen-3.jpg/480px-Bronzegruppe_Wilde_Pferde%2C_von_Georg_Roemer%2C_Bavariapark_Muenchen-3.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Georg_Roemer\" title=\"Georg Roemer\">Georg Roemer</a><br>Description: Bronzegruppe",
    "type": "statue",
    "lat": "48.131982",
    "lng": "11.543191"
  },
  {
    "name": "Wildes Pferd",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Alexander_Fischer_Wildes_Pferd_1965_Koenigsplatz_Muenchen-1.jpg/480px-Alexander_Fischer_Wildes_Pferd_1965_Koenigsplatz_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Alexander_Fischer_(Bildhauer)\" title=\"Alexander Fischer (Bildhauer)\">Alexander Fischer</a>",
    "type": "statue",
    "lat": "48.146222",
    "lng": "11.56328"
  },
  {
    "name": "X",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Isa_Genzken_X_%281994%29_Arnulfstrasse_Muenchen-1.jpg/480px-Isa_Genzken_X_%281994%29_Arnulfstrasse_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Isa_Genzken\" title=\"Isa Genzken\">Isa Genzken</a><br>Description: Stahlbeton, 300&nbsp;×&nbsp;240&nbsp;×&nbsp;240&nbsp;cm",
    "type": "statue",
    "lat": "48.15247",
    "lng": "11.51543"
  },
  {
    "name": "Zeichen 74",
    "link": "https://de.wikipedia.org/wiki/Zeichen_74",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Sederanger3Skulptur_Muenchen-01.jpg/480px-Sederanger3Skulptur_Muenchen-01.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Bernhard_Heiliger\" title=\"Bernhard Heiliger\">Bernhard Heiliger</a><br>Description: Bronze, teilweise poliert, 420&nbsp;×&nbsp;320&nbsp;×&nbsp;220&nbsp;cm",
    "type": "statue",
    "lat": "48.1538",
    "lng": "11.59972"
  },
  {
    "name": "Ziele",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Ernst_Hesse_o.T._%28Ziele%29_Pettenkoferstr._22_Muenchen-1.jpg/480px-Ernst_Hesse_o.T._%28Ziele%29_Pettenkoferstr._22_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Ernst_Hesse_(Bildhauer)\" title=\"Ernst Hesse (Bildhauer)\">Ernst Hesse</a><br>Description: COR-TEN-Stahl",
    "type": "statue",
    "lat": "48.13468",
    "lng": "11.55779"
  },
  {
    "name": "Zueinander",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Zueinander_1999_von_Alf_Lechner-3.jpg/480px-Zueinander_1999_von_Alf_Lechner-3.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Alf_Lechner\" title=\"Alf Lechner\">Alf Lechner</a><br>Description: aus Stahl",
    "type": "statue",
    "lat": "48.14885",
    "lng": "11.570938"
  },
  {
    "name": "Zwei Bronzepferde",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Zwei_Pferde%2C_Rossmarkt_Muenchen%2C_Claus_Nageler%2C_1982-2.jpg/480px-Zwei_Pferde%2C_Rossmarkt_Muenchen%2C_Claus_Nageler%2C_1982-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Claus_Nageler\" title=\"Claus Nageler\">Claus Nageler</a>",
    "type": "statue",
    "lat": "48.13364",
    "lng": "11.5695"
  },
  {
    "name": "Zwei Diagonalschnitte",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Holzskulptur_im_Westpark_Muenchen-1.jpg/480px-Holzskulptur_im_Westpark_Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Rudolf_Wachter_(Bildhauer)\" title=\"Rudolf Wachter (Bildhauer)\">Rudolf Wachter</a><br>Description: Holzskulptur",
    "type": "statue",
    "lat": "48.12507",
    "lng": "11.53261"
  },
  {
    "name": "Zwei monolithische Granitpfeiler",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Herbert_Peters_Zwei_monolithische_Granitpfeiler_1991-92_Mariahilfplatz_Muenchen-2.jpg/480px-Herbert_Peters_Zwei_monolithische_Granitpfeiler_1991-92_Mariahilfplatz_Muenchen-2.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Herbert_Peters\" title=\"Herbert Peters\">Herbert Peters</a><br>Description: Roggensteiner Granit, 727&nbsp;×&nbsp;140&nbsp;×&nbsp;110&nbsp;cm und 767&nbsp;×&nbsp;148&nbsp;×&nbsp;60 cm.",
    "type": "statue",
    "lat": "48.124412",
    "lng": "11.582779"
  },
  {
    "name": "Zwei Rinder",
    "link": "",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Zwei_Rinder_1955_Fritz_Koenig_Thiemestr._Muenchen-1.jpg/480px-Zwei_Rinder_1955_Fritz_Koenig_Thiemestr._Muenchen-1.jpg",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Fritz_Koenig\" title=\"Fritz Koenig\">Fritz Koenig</a><br>Description: Muschelkalk",
    "type": "statue",
    "lat": "48.156814",
    "lng": "11.588248"
  },
  {
    "name": "Zwillingsplastik",
    "link": "https://de.wikipedia.org/wiki/Zwillingsplastik",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Zwillingsplastik_Tucherpark_3.JPG/480px-Zwillingsplastik_Tucherpark_3.JPG",
    "description": "<br>Author: <a href=\"https://de.wikipedia.org/wiki/Isamu_Noguchi\" title=\"Isamu Noguchi\">Isamu Noguchi</a><br>Description: <a href=\"https://de.wikipedia.org/wiki/Labradorit\" title=\"Labradorit\">Labradorit</a>, Liechtensteiner Granit, Oberfl&auml;che geflammt, Seitenl&auml;nge des Kubus 350 cm.",
    "type": "statue",
    "lat": "48.151818",
    "lng": "11.597822"
  }
]