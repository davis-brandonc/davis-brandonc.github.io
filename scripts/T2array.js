var myArray = [
  {
    "display": "Washington Nationals 2019 Stats Page",
    "url": "http://mlb.mlb.com/stats/sortable.jsp?c_id=was#elem=%5Bobject+Object%5D&tab_level=child&click_text=Sortable+Player+hitting&game_type='R'&season=2019&season_type=ANY&league_code='MLB'&sectionType=sp&statType=hitting&page=1&ts=1573837866155"
  },
  {
    "display": "Los Angeles Dodges 2019 Stats Page",
    "url": "http://mlb.mlb.com/stats/sortable.jsp#elem=%5Bobject+Object%5D&tab_level=child&click_text=Sortable+Player+hitting&game_type='R'&season=2019&season_type=ANY&league_code='MLB'&sectionType=sp&statType=hitting&page=1&ts=1573838001410&playerType=ALL&sportCode='mlb'&split=&team_id=119&active_sw=&position=&page_type=SortablePlayer&sortOrder='desc'&sortColumn=avg&results=&perPage=50&timeframe=&last_x_days=&extended=0"
  },
  {
    "display": "Arizona Diamondbacks 2019 Stats Page",
    "url": "http://mlb.mlb.com/stats/sortable.jsp#elem=%5Bobject+Object%5D&tab_level=child&click_text=Sortable+Player+hitting&game_type='R'&season=2019&season_type=ANY&league_code='MLB'&sectionType=sp&statType=hitting&page=1&ts=1573837951210&playerType=ALL&sportCode='mlb'&split=&team_id=109&active_sw=&position=&page_type=SortablePlayer&sortOrder='desc'&sortColumn=avg&results=&perPage=50&timeframe=&last_x_days=&extended=0",
  }
];

myFunction(myArray);

function myFunction(arr) {
  var out = "";
  var i;
  for(i = 0; i < arr.length; i++) {
    out += '<a href="' + arr[i].url + '">' + 
    arr[i].display + '</a><br><br><br>';
  }
  document.getElementById("baseball").innerHTML = out;
}