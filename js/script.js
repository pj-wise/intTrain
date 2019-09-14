jQuery(document).ready(function ($) {

	/****** USE THESE IF NOT LOADING FROM JSON ******/

	//List of Countries
	var countries = [
		{
			"ID": "13",
			"Country": "Australia"
		},
		{
			"ID": "30",
			"Country": "Brazil"
		},
		{
			"ID": "38",
			"Country": "Canada"
		},
		{
			"ID": "62",
			"Country": "Egypt"
		},
		{
			"ID": "56",
			"Country": "Denmark"
		},
		{
			"ID": "64",
			"Country": "United Kingdom"
		},
		{
			"ID": "73",
			"Country": "France"
		},
		{
			"ID": "80",
			"Country": "Germany"
		},
		{
			"ID": "106",
			"Country": "Italy"
		},
		{
			"ID": "140",
			"Country": "Mexico"
		},
		{
			"ID": "155",
			"Country": "New Zealand"
		},
		{
			"ID": "175",
			"Country": "Poland"
		},
		{
			"ID": "209",
			"Country": "Spain"
		},
		{
			"ID": "218",
			"Country": "Switzerland"
		},
		{
			"ID": "223",
			"Country": "Thailand"
		},
		{
			"ID": "234",
			"Country": "Ukraine"
		},
		{
			"ID": "236", //had to change from 235. state ID's did not match
			"Country": "United States"
		},
		{
			"ID": "252",
			"Country": "Ireland"
		}
	];

	//List of States - Country_ID is linked to the 'var countries' ID
	var states = [
		{
			"ID": "83",
			"Country_ID": "236",
			"State": "Colorado"
		},
		{
			"ID": "84",
			"Country_ID": "236",
			"State": "Connecticut"
		},
		{
			"ID": "85",
			"Country_ID": "236",
			"State": "District of Columbia"
		},
		{
			"ID": "86",
			"Country_ID": "236",
			"State": "Louisiana"
		},
		{
			"ID": "87",
			"Country_ID": "236",
			"State": "Maryland"
		},
		{
			"ID": "88",
			"Country_ID": "236",
			"State": "Massachusetts"
		},
		{
			"ID": "89",
			"Country_ID": "236",
			"State": "Nebraska"
		},
		{
			"ID": "90",
			"Country_ID": "236",
			"State": "New Mexico"
		},
		{
			"ID": "91",
			"Country_ID": "236",
			"State": "New York"
		},
		{
			"ID": "92",
			"Country_ID": "236",
			"State": "Ohio"
		},
		{
			"ID": "93",
			"Country_ID": "236",
			"State": "West Virginia"
		},
		{
			"ID": "1304",
			"Country_ID": "236",
			"State": "Alabama"
		},
		{
			"ID": "1305",
			"Country_ID": "236",
			"State": "Missouri"
		},
		{
			"ID": "1306",
			"Country_ID": "236",
			"State": "New Hampshire"
		},
		{
			"ID": "1307",
			"Country_ID": "236",
			"State": "Oregon"
		},
		{
			"ID": "1308",
			"Country_ID": "236",
			"State": "Pennsylvania"
		},
		{
			"ID": "1309",
			"Country_ID": "236",
			"State": "Rhode Island"
		},
		{
			"ID": "1310",
			"Country_ID": "236",
			"State": "Texas"
		},
		{
			"ID": "1311",
			"Country_ID": "236",
			"State": "Vermont"
		},
		{
			"ID": "1312",
			"Country_ID": "236",
			"State": "Virginia"
		},
		{
			"ID": "1313",
			"Country_ID": "236",
			"State": "Washington"
		},
		{
			"ID": "1314",
			"Country_ID": "236",
			"State": "Wyoming"
		},
		{
			"ID": "1392",
			"Country_ID": "236",
			"State": "Arizona"
		},
		{
			"ID": "1393",
			"Country_ID": "236",
			"State": "California"
		},
		{
			"ID": "1394",
			"Country_ID": "236",
			"State": "Delaware"
		},
		{
			"ID": "1395",
			"Country_ID": "236",
			"State": "Georgia"
		},
		{
			"ID": "1396",
			"Country_ID": "236",
			"State": "Kansas"
		},
		{
			"ID": "1397",
			"Country_ID": "236",
			"State": "Minnesota"
		},
		{
			"ID": "1398",
			"Country_ID": "236",
			"State": "Montana"
		},
		{
			"ID": "1399",
			"Country_ID": "236",
			"State": "Nevada",
			"Region_ID": "9"
		},
		{
			"ID": "1400",
			"Country_ID": "236",
			"State": "New Jersey"
		},
		{
			"ID": "1401",
			"Country_ID": "236",
			"State": "North Carolina"
		},
		{
			"ID": "1402",
			"Country_ID": "236",
			"State": "South Carolina"
		},
		{
			"ID": "1730",
			"Country_ID": "236",
			"State": "Alaska"
		},
		{
			"ID": "1731",
			"Country_ID": "236",
			"State": "Arkansas"
		},
		{
			"ID": "1732",
			"Country_ID": "236",
			"State": "Florida"
		},
		{
			"ID": "1733",
			"Country_ID": "236",
			"State": "Hawaii"
		},
		{
			"ID": "1734",
			"Country_ID": "236",
			"State": "Idaho"
		},
		{
			"ID": "1735",
			"Country_ID": "236",
			"State": "Illinois"
		},
		{
			"ID": "1736",
			"Country_ID": "236",
			"State": "Indiana"
		},
		{
			"ID": "1737",
			"Country_ID": "236",
			"State": "Iowa"
		},
		{
			"ID": "1738",
			"Country_ID": "236",
			"State": "Kentucky"
		},
		{
			"ID": "1739",
			"Country_ID": "236",
			"State": "Maine"
		},
		{
			"ID": "1740",
			"Country_ID": "236",
			"State": "Michigan"
		},
		{
			"ID": "1741",
			"Country_ID": "236",
			"State": "Mississippi"
		},
		{
			"ID": "1742",
			"Country_ID": "236",
			"State": "North Dakota"
		},
		{
			"ID": "1743",
			"Country_ID": "236",
			"State": "Oklahoma"
		},
		{
			"ID": "1744",
			"Country_ID": "236",
			"State": "South Dakota"
		},
		{
			"ID": "1745",
			"Country_ID": "236",
			"State": "Tennessee"
		},
		{
			"ID": "1746",
			"Country_ID": "236",
			"State": "Utah"
		},
		{
			"ID": "1747",
			"Country_ID": "236",
			"State": "Wisconsin"
		},
		{
			"ID": "6",
			"Country_ID": "13",
			"State": "Tasmania"
		},
		{
			"ID": "105",
			"Country_ID": "13",
			"State": "Australian Capital Territory"
		},
		{
			"ID": "106",
			"Country_ID": "13",
			"State": "Northern Territory"
		},
		{
			"ID": "107",
			"Country_ID": "13",
			"State": "Western Australia"
		},
		{
			"ID": "1321",
			"Country_ID": "13",
			"State": "Queensland"
		},
		{
			"ID": "1415",
			"Country_ID": "13",
			"State": "Christmas Island"
		},
		{
			"ID": "1416",
			"Country_ID": "13",
			"State": "New South Wales"
		},
		{
			"ID": "1417",
			"Country_ID": "13",
			"State": "South Australia"
		},
		{
			"ID": "1418",
			"Country_ID": "13",
			"State": "Victoria"
		},
		{
			"ID": "2503",
			"Country_ID": "13",
			"State": "Canberra"
		},
		{
			"ID": "550",
			"Country_ID": "30",
			"State": "Amazonas"
		},
		{
			"ID": "551",
			"Country_ID": "30",
			"State": "Bahia"
		},
		{
			"ID": "552",
			"Country_ID": "30",
			"State": "Espirito Santo"
		},
		{
			"ID": "553",
			"Country_ID": "30",
			"State": "Maranhao"
		},
		{
			"ID": "554",
			"Country_ID": "30",
			"State": "Mato Grosso do Sul"
		},
		{
			"ID": "555",
			"Country_ID": "30",
			"State": "Minas Gerais"
		},
		{
			"ID": "657",
			"Country_ID": "30",
			"State": "Acre"
		},
		{
			"ID": "658",
			"Country_ID": "30",
			"State": "Ceara"
		},
		{
			"ID": "659",
			"Country_ID": "30",
			"State": "Goias"
		},
		{
			"ID": "660",
			"Country_ID": "30",
			"State": "Pernambuco"
		},
		{
			"ID": "661",
			"Country_ID": "30",
			"State": "Rio Grande do Norte"
		},
		{
			"ID": "662",
			"Country_ID": "30",
			"State": "Roraima"
		},
		{
			"ID": "663",
			"Country_ID": "30",
			"State": "Santa Catarina"
		},
		{
			"ID": "664",
			"Country_ID": "30",
			"State": "Sergipe"
		},
		{
			"ID": "1155",
			"Country_ID": "30",
			"State": "Alagoas"
		},
		{
			"ID": "1156",
			"Country_ID": "30",
			"State": "Amapa"
		},
		{
			"ID": "1157",
			"Country_ID": "30",
			"State": "Mato Grosso"
		},
		{
			"ID": "1158",
			"Country_ID": "30",
			"State": "Paraiba"
		},
		{
			"ID": "1159",
			"Country_ID": "30",
			"State": "Parana"
		},
		{
			"ID": "1160",
			"Country_ID": "30",
			"State": "Piaui"
		},
		{
			"ID": "1161",
			"Country_ID": "30",
			"State": "Tocantins"
		},
		{
			"ID": "1266",
			"Country_ID": "30",
			"State": "Distrito Federal"
		},
		{
			"ID": "1267",
			"Country_ID": "30",
			"State": "Para"
		},
		{
			"ID": "1268",
			"Country_ID": "30",
			"State": "Rio de Janeiro"
		},
		{
			"ID": "1269",
			"Country_ID": "30",
			"State": "Rio Grande do Sul"
		},
		{
			"ID": "1270",
			"Country_ID": "30",
			"State": "Rondonia"
		},
		{
			"ID": "1271",
			"Country_ID": "30",
			"State": "Sao Paulo"
		},
		{
			"ID": "1937",
			"Country_ID": "30",
			"State": "Brasilia-DF"
		},
		{
			"ID": "14",
			"Country_ID": "38",
			"State": "British Columbia"
		},
		{
			"ID": "15",
			"Country_ID": "38",
			"State": "Newfoundland"
		},
		{
			"ID": "16",
			"Country_ID": "38",
			"State": "Northwest Territories"
		},
		{
			"ID": "17",
			"Country_ID": "38",
			"State": "Nunavut"
		},
		{
			"ID": "18",
			"Country_ID": "38",
			"State": "Quebec"
		},
		{
			"ID": "19",
			"Country_ID": "38",
			"State": "Saskatchewan"
		},
		{
			"ID": "20",
			"Country_ID": "38",
			"State": "Yukon Territory"
		},
		{
			"ID": "119",
			"Country_ID": "38",
			"State": "Alberta"
		},
		{
			"ID": "120",
			"Country_ID": "38",
			"State": "Manitoba"
		},
		{
			"ID": "1339",
			"Country_ID": "38",
			"State": "New Brunswick"
		},
		{
			"ID": "1428",
			"Country_ID": "38",
			"State": "Ontario"
		},
		{
			"ID": "126",
			"Country_ID": "62",
			"State": "Ad Daqahliyah"
		},
		{
			"ID": "127",
			"Country_ID": "62",
			"State": "Al Qahirah"
		},
		{
			"ID": "128",
			"Country_ID": "62",
			"State": "Sinai Desert"
		},
		{
			"ID": "1347",
			"Country_ID": "62",
			"State": "Al Jizah"
		},
		{
			"ID": "1433",
			"Country_ID": "62",
			"State": "Al Bahr al Ahmar"
		},
		{
			"ID": "1434",
			"Country_ID": "62",
			"State": "Qina"
		},
		{
			"ID": "1435",
			"Country_ID": "62",
			"State": "Suhaj"
		},
		{
			"ID": "1878",
			"Country_ID": "62",
			"State": "Egypt"
		},
		{
			"ID": "1880",
			"Country_ID": "62",
			"State": "Red Sea"
		},
		{
			"ID": "2200",
			"Country_ID": "62",
			"State": "Cairo"
		},
		{
			"ID": "2352",
			"Country_ID": "62",
			"State": "Masbat"
		},
		{
			"ID": "2445",
			"Country_ID": "62",
			"State": "Sinai Peninsula"
		},
		{
			"ID": "2517",
			"Country_ID": "62",
			"State": "Giza"
		},
		{
			"ID": "2682",
			"Country_ID": "62",
			"State": "Alexandria"
		},
		{
			"ID": "2701",
			"Country_ID": "62",
			"State": "South Sinai"
		},
		{
			"ID": "2749",
			"Country_ID": "62",
			"State": "Port Said"
		},
		{
			"ID": "2752",
			"Country_ID": "62",
			"State": "Damietta"
		},
		{
			"ID": "2786",
			"Country_ID": "62",
			"State": "Beheira"
		},
		{
			"ID": "2790",
			"Country_ID": "62",
			"State": "Gharbia"
		},
		{
			"ID": "2793",
			"Country_ID": "62",
			"State": "Aswan"
		},
		{
			"ID": "2800",
			"Country_ID": "62",
			"State": "Minya"
		},
		{
			"ID": "1516",
			"Country_ID": "56",
			"State": "Hovedstaden"
		},
		{
			"ID": "1517",
			"Country_ID": "56",
			"State": "Sjælland"
		},
		{
			"ID": "1855",
			"Country_ID": "56",
			"State": "Copenhagen"
		},
		{
			"ID": "1967",
			"Country_ID": "56",
			"State": "Fyn"
		},
		{
			"ID": "2127",
			"Country_ID": "56",
			"State": "Bornholm"
		},
		{
			"ID": "2147",
			"Country_ID": "56",
			"State": "Hellerup"
		},
		{
			"ID": "2206",
			"Country_ID": "56",
			"State": "Allerod"
		},
		{
			"ID": "135",
			"Country_ID": "64",
			"State": "Buckinghamshire"
		},
		{
			"ID": "137",
			"Country_ID": "64",
			"State": "Hertfordshire"
		},
		{
			"ID": "139",
			"Country_ID": "64",
			"State": "Lancashire"
		},
		{
			"ID": "140",
			"Country_ID": "64",
			"State": "Leicestershire"
		},
		{
			"ID": "141",
			"Country_ID": "64",
			"State": "Lincolnshire"
		},
		{
			"ID": "142",
			"Country_ID": "64",
			"State": "North Yorkshire"
		},
		{
			"ID": "143",
			"Country_ID": "64",
			"State": "Northamptonshire"
		},
		{
			"ID": "144",
			"Country_ID": "64",
			"State": "Oxfordshire"
		},
		{
			"ID": "145",
			"Country_ID": "64",
			"State": "Suffolk"
		},
		{
			"ID": "146",
			"Country_ID": "64",
			"State": "West Midlands"
		},
		{
			"ID": "676",
			"Country_ID": "73",
			"State": "Guyane"
		},
		{
			"ID": "677",
			"Country_ID": "73",
			"State": "Haute Normandie"
		},
		{
			"ID": "678",
			"Country_ID": "73",
			"State": "Languedoc-Roussillon"
		},
		{
			"ID": "679",
			"Country_ID": "73",
			"State": "Martinique"
		},
		{
			"ID": "680",
			"Country_ID": "73",
			"State": "Rhone-Alpes"
		},
		{
			"ID": "1638",
			"Country_ID": "80",
			"State": "Brandenburg"
		},
		{
			"ID": "1639",
			"Country_ID": "80",
			"State": "Hamburg"
		},
		{
			"ID": "1640",
			"Country_ID": "80",
			"State": "Thuringen"
		},
		{
			"ID": "1915",
			"Country_ID": "80",
			"State": "Bad Hersfeld"
		},
		{
			"ID": "1916",
			"Country_ID": "80",
			"State": "Bad Lippspringe"
		},
		{
			"ID": "1942",
			"Country_ID": "80",
			"State": "Bavaria"
		},
		{
			"ID": "1980",
			"Country_ID": "80",
			"State": "Paderborn"
		},
		{
			"ID": "1756",
			"Country_ID": "106",
			"State": "Emilia-Romagna"
		},
		{
			"ID": "1757",
			"Country_ID": "106",
			"State": "Sicilia"
		},
		{
			"ID": "1858",
			"Country_ID": "106",
			"State": "Genoa"
		},
		{
			"ID": "1904",
			"Country_ID": "106",
			"State": "Vicenza"
		},
		{
			"ID": "1906",
			"Country_ID": "106",
			"State": "Brescia"
		},
		{
			"ID": "1543",
			"Country_ID": "140",
			"State": "Campeche"
		},
		{
			"ID": "1544",
			"Country_ID": "140",
			"State": "Colima"
		},
		{
			"ID": "1545",
			"Country_ID": "140",
			"State": "Guanajuato"
		},
		{
			"ID": "1546",
			"Country_ID": "140",
			"State": "Jalisco"
		},
		{
			"ID": "1547",
			"Country_ID": "140",
			"State": "Michoacan"
		},
		{
			"ID": "1548",
			"Country_ID": "140",
			"State": "Quintana Roo"
		},
		{
			"ID": "1868",
			"Country_ID": "140",
			"State": "Moctezuma"
		},
		{
			"ID": "1193",
			"Country_ID": "155",
			"State": "Canterbury"
		},
		{
			"ID": "1194",
			"Country_ID": "155",
			"State": "Chatham islands"
		},
		{
			"ID": "1195",
			"Country_ID": "155",
			"State": "Christchurch"
		},
		{
			"ID": "1196",
			"Country_ID": "155",
			"State": "Eastland"
		},
		{
			"ID": "1197",
			"Country_ID": "155",
			"State": "Mt Cook"
		},
		{
			"ID": "1198",
			"Country_ID": "155",
			"State": "Northland"
		},
		{
			"ID": "1199",
			"Country_ID": "155",
			"State": "Southland"
		},
		{
			"ID": "1200",
			"Country_ID": "155",
			"State": "Waikato"
		},
		{
			"ID": "1565",
			"Country_ID": "175",
			"State": "Dolnoslaskie"
		},
		{
			"ID": "1566",
			"Country_ID": "175",
			"State": "Kujawsko-Pomorskie"
		},
		{
			"ID": "1567",
			"Country_ID": "175",
			"State": "Mazowieckie"
		},
		{
			"ID": "1568",
			"Country_ID": "175",
			"State": "Pomorskie"
		},
		{
			"ID": "1569",
			"Country_ID": "175",
			"State": "Wielkopolskie"
		},
		{
			"ID": "614",
			"Country_ID": "209",
			"State": "Alava"
		},
		{
			"ID": "615",
			"Country_ID": "209",
			"State": "Almeria"
		},
		{
			"ID": "616",
			"Country_ID": "209",
			"State": "Barcelona"
		},
		{
			"ID": "617",
			"Country_ID": "209",
			"State": "Cordoba"
		},
		{
			"ID": "618",
			"Country_ID": "209",
			"State": "Huesca"
		},
		{
			"ID": "619",
			"Country_ID": "209",
			"State": "Madrid"
		},
		{
			"ID": "620",
			"Country_ID": "209",
			"State": "Toledo"
		},
		{
			"ID": "621",
			"Country_ID": "209",
			"State": "Valladolid"
		},
		{
			"ID": "622",
			"Country_ID": "209",
			"State": "Zamora"
		},
		{
			"ID": "2339",
			"Country_ID": "218",
			"State": "Geneva"
		},
		{
			"ID": "2345",
			"Country_ID": "218",
			"State": "Emmen"
		},
		{
			"ID": "2430",
			"Country_ID": "218",
			"State": "Gros-de-Vaud"
		},
		{
			"ID": "2453",
			"Country_ID": "218",
			"State": "Boudry"
		},
		{
			"ID": "1604",
			"Country_ID": "223",
			"State": "Chiang Mai"
		},
		{
			"ID": "1605",
			"Country_ID": "223",
			"State": "Nakhon Pathom"
		},
		{
			"ID": "1606",
			"Country_ID": "223",
			"State": "Phuket"
		},
		{
			"ID": "1908",
			"Country_ID": "223",
			"State": "Satun"
		},
		{
			"ID": "2065",
			"Country_ID": "223",
			"State": "Chumphon"
		},
		{
			"ID": "2066",
			"Country_ID": "223",
			"State": "Chaiyaphum"
		},
		{
			"ID": "2067",
			"Country_ID": "223",
			"State": "Songkhla"
		},
		{
			"ID": "803",
			"Country_ID": "234",
			"State": "Donetsk"
		},
		{
			"ID": "804",
			"Country_ID": "234",
			"State": "Kyvivs'ka"
		},
		{
			"ID": "805",
			"Country_ID": "234",
			"State": "Kyyiv"
		},
		{
			"ID": "806",
			"Country_ID": "234",
			"State": "Zakarpats'ka"
		},
		{
			"ID": "1484",
			"Country_ID": "234",
			"State": "Dnipropetrovsk"
		},
		{
			"ID": "1485",
			"Country_ID": "234",
			"State": "Luhansk"
		},
		{
			"ID": "1486",
			"Country_ID": "234",
			"State": "Mykolayiv"
		},
		{
			"ID": "1487",
			"Country_ID": "234",
			"State": "Odesa"
		},
		{
			"ID": "1488",
			"Country_ID": "234",
			"State": "Vinnytsya"
		},
		{
			"ID": "1493",
			"Country_ID": "234",
			"State": "Cherkasy"
		},
		{
			"ID": "1494",
			"Country_ID": "234",
			"State": "Rivne"
		},
		{
			"ID": "1971",
			"Country_ID": "252",
			"State": "Connaught"
		},
		{
			"ID": "1972",
			"Country_ID": "252",
			"State": "Leinster"
		},
		{
			"ID": "1973",
			"Country_ID": "252",
			"State": "Munster"
		},
		{
			"ID": "1974",
			"Country_ID": "252",
			"State": "Ulster"
		},
		{
			"ID": "1976",
			"Country_ID": "252",
			"State": "Cork"
		},
		{
			"ID": "2047",
			"Country_ID": "252",
			"State": "Dublin"
		},
		{
			"ID": "2068",
			"Country_ID": "252",
			"State": "Down"
		},
		{
			"ID": "2089",
			"Country_ID": "252",
			"State": "Belfast"
		}
	];

	/***********************************************/

//Sorting countries and states array using localCompare because array is made of objects and not strings
countries = countries.sort((a, b) => a.Country.localeCompare(b.Country))
states = states.sort((a, b) => a.State.localeCompare(b.State))

//mapping through countries array to render individual countries into dropdown list items
const dropDown = $.map(countries, (country => {
	const ddMenu = $('.dropdown-menu')
	ddMenu.append("<li><a countryID=" + country.ID + ">" + country.Country + "</a></li>")
})
)

const ddMenuItems = $('.dropdown-menu a')
// console.log(ddMenuItems)

//itterating through all dropdown-menu anchors tags
ddMenuItems.map((i, item) => {
	$(item).click(() => {
		const countryItem = $(item).attr('countryID')
		const countryStates = $(states).filter((i, state) => {
			return state.Country_ID === countryItem
		})
		// console.log(countryStates)
		$(".statesDisplay").empty(); // clearing on new country selection
		$(".statesDisplay").append("<ul class=list-group></ul>")
		 // changing "pick a country" // changing "pick a country" text to be "Pick Another Country"
		$('#countryDropdown').text("Pick Another Country").append(" <span class=caret></span>")
		$('.statesDisplay').prepend("<h4>The states in " + $(item).text() + " are: </h4>")// adding selected country name as text 
		$.map(countryStates, ((state) => {
			// console.log(state)
			$('.statesDisplay .list-group').append("<li class=list-group-item>"+ state.State +"</li>")
		})
		)
	})
})

});

