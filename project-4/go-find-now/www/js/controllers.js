angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('mapCtrl', function($scope, $http, $location) {
  var map;

  $(function(){
    //begin jquery
    $scope.swiperList = function(){
      $('.movie').css('background-color', 'green');
      console.log("swiped from list page");
      window.location.href ="/#/app/map";
    }

    $scope.swiperMap = function(){
      $('.mapContainer').css('background-color', 'green');
      console.log("panning");
      window.location.href ="/#/list";
    }
      // $location.url("/#/list");
    // })
    //
    // $('.tabContainer').on('click', function(){
    //   console.log('swipe worked');
    //   $('.movie').css('background-color', 'green')
    //   window.location.href = '/#/app/map';
    //   // $location.url("/#/app/map");
    // })

    //end jquery iife
  })

  $scope.initMap = function() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }
})

.controller('listItemCtrl', function($scope, $stateParams) {
})

.controller('listCtrl', function($scope, $http){

  var todayDate = (new Date().getHours()+":"+ new Date().getMinutes()+":"+ new Date().getSeconds());
  console.log(todayDate);

  $scope.list = [
  {
  tmsId: "MV006183910000",
  rootId: "11019661",
  subType: "Feature Film",
  title: "Shaun the Sheep Movie",
  releaseYear: 2015,
  releaseDate: "2015-01-24",
  titleLang: "en-GB",
  descriptionLang: "en-GB",
  entityType: "Movie",
  genres: [
  "Adventure",
  "Comedy",
  "Animated"
  ],
  longDescription: "When Shaun decides to take the day off and have some fun, he gets a little more action than he bargained for, ending up in the Big City.",
  shortDescription: "Shaun decides to take the day off and have some fun but gets more action than he bargained for.",
  topCast: [
  "Justin Fletcher",
  "John Sparkes",
  "Omid Djalili"
  ],
  directors: [
  "Mark Burton",
  "Richard Starzak"
  ],
  officialUrl: "http://shaunthesheep.com/movie",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG"
  }
  ],
  advisories: [
  "Adult Situations"
  ],
  runTime: "PT01H25M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Shaun the Sheep Movie (2015)"
  },
  uri: "assets/p11019661_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T09:30",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=147099&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T10:40",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=147099&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T12:50",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=147099&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T09:55",
  quals: "Reserved Seating|AMC Independent|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=147099&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T15:25",
  quals: "Reserved Seating|AMC Independent|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=147099&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV007082020000",
  rootId: "11436702",
  subType: "Feature Film",
  title: "A Walk in the Woods",
  releaseYear: 2015,
  releaseDate: "2015-01-23",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy",
  "Adventure"
  ],
  longDescription: "Travel writer Bill Bryson (Robert Redford) takes a long-lost old friend (Nick Nolte) for a hike along the Appalachian Trail, which stretches more than 2,000 miles from Georgia to Maine.",
  shortDescription: "Travel writer Bill Bryson and a long-lost old friend embark on a hike along the Appalachian Trail.",
  topCast: [
  "Robert Redford",
  "Nick Nolte",
  "Emma Thompson"
  ],
  directors: [
  "Ken Kwapis"
  ],
  officialUrl: "http://www.walkinthewoodsmovie.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations"
  ],
  runTime: "PT01H44M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "A Walk in the Woods (2015)",
  lang: "en"
  },
  uri: "assets/p11436702_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T09:35",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T11:55",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T14:25",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T16:50",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T19:15",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T21:40",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T10:30",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T12:40",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T15:25",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T17:35",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T19:00",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T21:40",
  barg: false
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T10:55",
  quals: "Closed Captioned|Reserved Seating|AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T13:45",
  quals: "Reserved Seating|AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T16:35",
  quals: "Reserved Seating|AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T19:20",
  quals: "Reserved Seating|AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T22:10",
  quals: "Reserved Seating|AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T10:30",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T12:40",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T15:00",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T17:25",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T19:35",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T22:15",
  barg: false
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:30",
  quals: "AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:10",
  quals: "Closed Captioned|AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T16:45",
  quals: "AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T19:20",
  quals: "AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T22:05",
  quals: "AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=147128&d=2015-09-07"
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T11:50",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating",
  barg: true
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T14:20",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T16:50",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T19:20",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T21:45",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV005896680000",
  rootId: "10840532",
  subType: "Feature Film",
  title: "Inside Out",
  releaseYear: 2015,
  releaseDate: "2015-06-19",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Animated",
  "Comedy",
  "Fantasy"
  ],
  longDescription: "Riley (Kaitlyn Dias) is a happy, hockey-loving 11-year-old Midwestern girl, but her world turns upside-down when she and her parents move to San Francisco. Riley's emotions -- led by Joy (Amy Poehler) -- try to guide her through this difficult, life-changing event. However, the stress of the move brings Sadness (Phyllis Smith) to the forefront. When Joy and Sadness are inadvertently swept into the far reaches of Riley's mind, the only emotions left in Headquarters are Anger, Fear and Disgust.",
  shortDescription: "The five emotions inside a girl's (Kaitlyn Dias) head vie for control after a life-changing event.",
  topCast: [
  "Amy Poehler",
  "Phyllis Smith",
  "Richard Kind"
  ],
  directors: [
  "Pete Docter"
  ],
  officialUrl: "http://movies.disney.com/inside-out/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG"
  }
  ],
  advisories: [
  "Adult Situations"
  ],
  runTime: "PT01H35M",
  animation: "Animated",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Inside Out 3D (2015)",
  lang: "en"
  },
  uri: "assets/p10840532_p_v5_af.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T09:40",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T09:55",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T12:25",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T14:40",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T15:30",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T17:05",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T20:25",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T10:10",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T12:50",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T15:45",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T10:45",
  quals: "Closed Captioned|Descriptive Video Services|Reserved Seating",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T13:30",
  quals: "Closed Captioned|Reserved Seating|Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T17:40",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T10:50",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T13:15",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T15:25",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T17:35",
  barg: false
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:30",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:00",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=140203&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T16:30",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=140203&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV007696300000",
  rootId: "11855839",
  subType: "Feature Film",
  title: "Un Gallo con Muchos Huevos",
  releaseYear: 2015,
  releaseDate: "2015-09-04",
  titleLang: "es",
  descriptionLang: "es",
  entityType: "Movie",
  genres: [
  "Comedy",
  "Adventure",
  "Animated"
  ],
  longDescription: "Un joven gallo de granja tiene el sueño de ser un gran gallo de pelea en el palenque del pueblo, y un buen día el destino le cumplirá sus deseos cuando un ranchero embustero engaña a los dueños de la granja donde vive Toto, que deberá entrenar para vencer al despiadado gallo Bankivoide para defender el destino de la granja y sus habitantes.",
  shortDescription: "Un joven gallo de granja tiene el sueño de ser un gran gallo de pelea en el palenque del pueblo.",
  topCast: [
  "Bruno Bichir",
  "Angélica Vale",
  "Omar Chaparro"
  ],
  directors: [
  "Gabriel Riva Palacio Alatriste"
  ],
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG-13"
  }
  ],
  advisories: [
  "Adult Situations"
  ],
  runTime: "PT01H38M",
  animation: "Animada",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Un Gallo con Muchos Huevos (2015)",
  lang: "es"
  },
  uri: "assets/p11855839_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T09:45",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T12:05",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T14:20",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T16:40",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T19:00",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T21:15",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T10:30",
  quals: "Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T13:00",
  quals: "Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T16:10",
  quals: "Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T19:15",
  quals: "Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T22:00",
  quals: "Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T09:45",
  quals: "Reserved Seating|AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T12:20",
  quals: "Reserved Seating|AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T14:55",
  quals: "Reserved Seating|AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T17:35",
  quals: "Reserved Seating|AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T20:15",
  quals: "Reserved Seating|AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T22:50",
  quals: "Reserved Seating|AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T11:05",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T13:10",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T15:45",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T18:10",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T22:10",
  barg: false
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:30",
  quals: "AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:00",
  quals: "AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T16:30",
  quals: "AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T19:10",
  quals: "AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=151830&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T21:50",
  quals: "AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=151830&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV007434040000",
  rootId: "11657883",
  subType: "Feature Film",
  title: "Straight Outta Compton",
  releaseYear: 2015,
  releaseDate: "2015-08-14",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Drama",
  "Biography"
  ],
  longDescription: "In 1988, a groundbreaking new group revolutionizes music and pop culture, changing and influencing hip-hop forever. N.W.A's first studio album, 'Straight Outta Compton,' stirs controversy with its brutally honest depiction of life in Southern Los Angeles. With guidance from veteran manager Jerry Heller, band members Ice Cube (O'Shea Jackson Jr.), Dr. Dre (Corey Hawkins), Eazy-E, DJ Yella and MC Ren navigate their way through the industry, acquiring fame, fortune and a place in history.",
  shortDescription: "N.W.A revolutionizes music and pop culture with their depiction of life in Southern Los Angeles.",
  topCast: [
  "O'Shea Jackson Jr.",
  "Corey Hawkins",
  "Jason Mitchell"
  ],
  directors: [
  "F. Gary Gray"
  ],
  officialUrl: "http://www.straightouttacompton.com/#/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Nudity",
  "Strong Sexual Content",
  "Violence"
  ],
  runTime: "PT02H27M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Straight Outta Compton (2015)",
  lang: "en"
  },
  uri: "assets/p11657883_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T10:00",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T11:00",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T12:00",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T13:10",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T14:10",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T16:20",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T17:20",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T19:30",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T20:30",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T22:35",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T23:35",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T12:30",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T15:45",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T19:00",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T22:10",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T10:00",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T11:15",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T12:45",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T13:30",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T14:30",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T16:00",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T17:30",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T19:05",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T20:00",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T21:15",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T22:15",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T23:30",
  barg: false
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T10:00",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T12:15",
  quals: "Closed Captioned|Xtreme",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T13:15",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T15:30",
  quals: "Closed Captioned|Xtreme",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T16:40",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T19:00",
  quals: "Closed Captioned|Xtreme",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T20:00",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T22:20",
  quals: "Closed Captioned|Xtreme",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T10:05",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T11:10",
  quals: "Reserved Seating|AMC Prime",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T12:15",
  quals: "Descriptive Video Services|Closed Captioned|Reserved Seating",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T14:45",
  quals: "Reserved Seating|AMC Prime",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T15:45",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T19:15",
  quals: "Descriptive Video Services|Closed Captioned|Reserved Seating",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T21:45",
  quals: "Reserved Seating|AMC Prime",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T22:45",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T11:10",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T12:20",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T14:05",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T15:15",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T16:55",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T17:45",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T19:45",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T20:45",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T21:35",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T22:40",
  barg: false
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:30",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T15:00",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T16:25",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T18:30",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T19:40",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T22:00",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T23:00",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149699&d=2015-09-07"
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T10:00",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: true
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T13:05",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T16:10",
  quals: "Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired|Closed Captioned",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T19:20",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T22:25",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007559570000",
  rootId: "11748491",
  subType: "Feature Film",
  title: "We Are Your Friends",
  releaseYear: 2015,
  releaseDate: "2015-08-28",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Drama",
  "Romance"
  ],
  longDescription: "Young Cole Carter (Zac Efron) dreams of hitting the big time as a Hollywood disc jockey, spending his days and nights hanging with buddies and working on the one track that will set the world on fire. Opportunity comes knocking when he meets James Reed, a charismatic DJ who takes the 23-year-old under his wing. Soon, his seemingly clear path to success gets complicated when he starts falling for his mentor's girlfriend, jeopardizing his new friendship and the future he seems destined to fulfill.",
  shortDescription: "An aspiring disc jockey (Zac Efron) falls for his mentor's (Wes Bentley) young girlfriend.",
  topCast: [
  "Zac Efron",
  "Wes Bentley",
  "Emily Ratajkowski"
  ],
  directors: [
  "Max Joseph"
  ],
  officialUrl: "http://wayf-movie.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Nudity"
  ],
  runTime: "PT01H36M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "We Are Your Friends (2015)",
  lang: "en"
  },
  uri: "assets/p11748491_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T10:10",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T12:45",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T15:10",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T17:25",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T20:35",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T23:30",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T10:50",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T12:35",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T16:55",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T20:05",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T23:10",
  barg: false
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T11:00",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T16:35",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T22:35",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T10:20",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T13:00",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T19:55",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T22:30",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T10:45",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T18:00",
  barg: false
  },
  {
  theatre: {
  id: "6324",
  name: "Los Feliz 3"
  },
  dateTime: "2015-09-07T19:30",
  barg: false
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:35",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T16:50",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=150928&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T22:10",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=150928&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV005926670000",
  rootId: "10854431",
  subType: "Feature Film",
  title: "Hitman: Agent 47",
  releaseYear: 2015,
  releaseDate: "2015-08-21",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Action",
  "Adventure"
  ],
  longDescription: "Genetically engineered from conception to be the perfect killing machine, he's the culmination of decades of research, endowed with unprecedented strength, speed, stamina and intelligence. Known only as Agent 47 (Rupert Friend), his latest target is a corporation that plans to unlock the secret of his past to create an army of killers even more powerful than him. With help from a young woman, the elite assassin confronts revelations about his own origins in an epic battle with his deadliest foe.",
  shortDescription: "A genetically engineered assassin targets a corporation that plans to create an army of killers.",
  topCast: [
  "Rupert Friend",
  "Hannah Ware",
  "Zachary Quinto"
  ],
  directors: [
  "Aleksander Bach"
  ],
  officialUrl: "http://www.foxmovies.com/movies/hitman-agent-47",
  qualityRating: {
  ratingsBody: "TMS",
  value: "1.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Graphic Violence"
  ],
  runTime: "PT01H36M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Hitman: Agent 47 (2015)",
  lang: "en"
  },
  uri: "assets/p10854431_p_v5_ab.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T10:30",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=140377&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T22:40",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=140377&d=2015-09-07"
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T13:15",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T19:35",
  barg: false
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T10:05",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=140377&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T12:30",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=140377&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T15:00",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=140377&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T17:30",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=140377&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T20:05",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=140377&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T22:45",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=140377&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T19:55",
  barg: false
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:30",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=140377&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T13:55",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=140377&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T16:20",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=140377&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T18:45",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=140377&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T21:10",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=140377&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV005540480000",
  rootId: "10592915",
  subType: "Feature Film",
  title: "The Man From U.N.C.L.E.",
  releaseYear: 2015,
  releaseDate: "2015-08-14",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Adventure",
  "Action",
  "Comedy"
  ],
  longDescription: "At the height of the Cold War, a mysterious criminal organization plans to use nuclear weapons and technology to upset the fragile balance of power between the United States and Soviet Union. CIA agent Napoleon Solo (Henry Cavill) and KGB agent Illya Kuryakin (Armie Hammer) are forced to put aside their hostilities and work together to stop the evildoers in their tracks. The duo's only lead is the daughter of a missing German scientist, whom they must find soon to prevent a global catastrophe.",
  shortDescription: "CIA agent Napoleon Solo and KGB agent Illya Kuryakin join forces to prevent a nuclear catastrophe.",
  topCast: [
  "Henry Cavill",
  "Armie Hammer",
  "Alicia Vikander"
  ],
  directors: [
  "Guy Ritchie"
  ],
  officialUrl: "http://manfromuncle.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG-13"
  }
  ],
  advisories: [
  "Adult Situations",
  "Nudity",
  "Violence"
  ],
  runTime: "PT01H56M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "The Man From U.N.C.L.E. (2015)",
  lang: "en"
  },
  uri: "assets/p10592915_p_v5_ab.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T10:35",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=136884&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T14:50",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=136884&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T17:30",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=136884&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T20:05",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=136884&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T22:50",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=136884&d=2015-09-07"
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T13:30",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T16:30",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T19:30",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T22:10",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T11:00",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T14:25",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T17:10",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T19:50",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T22:50",
  barg: false
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T13:35",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=136884&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T19:25",
  quals: "Digital Cinema|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=136884&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T10:15",
  quals: "Closed Captioned|Descriptive Video Services|Reserved Seating",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=136884&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T13:10",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=136884&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T16:05",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=136884&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T19:05",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=136884&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T22:05",
  quals: "Closed Captioned|Descriptive Video Services|Reserved Seating",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=136884&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T13:20",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T15:05",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T19:50",
  barg: false
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:05",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=136884&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T19:15",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=136884&d=2015-09-07"
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T11:25",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Screening Lounge|Hearing Impaired",
  barg: true
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T14:00",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Screening Lounge|Hearing Impaired",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T16:35",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Screening Lounge|Hearing Impaired",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T19:15",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Screening Lounge|Hearing Impaired",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T21:50",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Screening Lounge|Hearing Impaired",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV006095300000",
  rootId: "10967531",
  subType: "Feature Film",
  title: "The Transporter Refueled",
  releaseYear: 2015,
  releaseDate: "2015-06-19",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Thriller",
  "Action"
  ],
  longDescription: "Frank Martin is living a less perilous lifestyle, or so he thinks, transporting classified packages for questionable people. Things get complicated when femme fatale Anna and her three accomplices orchestrate a bank heist and the kidnapping of Frank's father. It's all part of a grand plan to take down the human trafficker who victimized her years earlier. Now a pawn in her vengeful scheme, the former special-operations mercenary must use his covert skills to play Anna's dangerous game.",
  shortDescription: "Former special-ops mercenary Frank Martin becomes a pawn in a scheme against a human trafficker.",
  topCast: [
  "Ed Skrein",
  "Ray Stevenson",
  "Loan Chabanol"
  ],
  directors: [
  "Camille Delamarre"
  ],
  officialUrl: "http://www.thetransporterrefueled.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG-13"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Violence"
  ],
  runTime: "PT01H36M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "The Transporter Refueled (2015)",
  lang: "en"
  },
  uri: "assets/p10967531_p_v5_ab.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T10:45",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T13:05",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T17:45",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T20:00",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T22:15",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T12:30",
  quals: "D-BOX",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T15:00",
  quals: "D-BOX",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T17:30",
  quals: "D-BOX",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T20:00",
  quals: "D-BOX",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T22:30",
  quals: "D-BOX",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T10:20",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T14:50",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T17:15",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T20:25",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T23:00",
  barg: false
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T11:20",
  quals: "Xtreme|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T14:10",
  quals: "Xtreme|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T17:00",
  quals: "Xtreme|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T19:45",
  quals: "Xtreme|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T22:40",
  quals: "Xtreme|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T09:50",
  quals: "Reserved Seating|AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T12:25",
  quals: "Reserved Seating|AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T15:05",
  quals: "Reserved Seating|AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T17:45",
  quals: "Reserved Seating|AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T20:20",
  quals: "Reserved Seating|AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T22:55",
  quals: "Reserved Seating|AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T11:15",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T13:25",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T15:30",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T17:50",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T20:15",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T21:55",
  barg: false
  },
  {
  theatre: {
  id: "5154",
  name: "Vintage Cinemas Vista Theatre"
  },
  dateTime: "2015-09-07T14:00",
  quals: "Digital",
  barg: false
  },
  {
  theatre: {
  id: "5154",
  name: "Vintage Cinemas Vista Theatre"
  },
  dateTime: "2015-09-07T16:45",
  quals: "Digital",
  barg: false
  },
  {
  theatre: {
  id: "5154",
  name: "Vintage Cinemas Vista Theatre"
  },
  dateTime: "2015-09-07T19:20",
  quals: "Digital",
  barg: false
  },
  {
  theatre: {
  id: "5154",
  name: "Vintage Cinemas Vista Theatre"
  },
  dateTime: "2015-09-07T21:50",
  quals: "Digital",
  barg: false
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:50",
  quals: "AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T13:50",
  quals: "AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:50",
  quals: "AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T16:35",
  quals: "AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T17:35",
  quals: "AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T19:10",
  quals: "AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T20:10",
  quals: "AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T21:45",
  quals: "AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141591&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T22:45",
  quals: "AMC Independent|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141591&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV007406600000",
  rootId: "11639797",
  subType: "Feature Film",
  title: "The Gift",
  releaseYear: 2015,
  releaseDate: "2015-08-07",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Thriller"
  ],
  longDescription: "When married couple Simon (Jason Bateman) and Robyn (Rebecca Hall) unexpectedly encounter Gordo (Joel Edgerton), an acquaintance from Simon's past, little do they know that their perfect lives will be thrown into a terrifying tailspin. At first, Simon doesn't recognize Gordo, but after a troubling series of uninvited encounters and mysterious gifts, a horrifying secret emerges. As Robyn learns what really happened between Simon and Gordo, she begins to question how well she knows her spouse.",
  shortDescription: "A horrifying secret emerges when a married couple encounter an acquaintance from the man's past.",
  topCast: [
  "Jason Bateman",
  "Rebecca Hall",
  "Joel Edgerton"
  ],
  directors: [
  "Joel Edgerton"
  ],
  officialUrl: "http://giftmovie.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations"
  ],
  runTime: "PT01H48M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "The Gift (2015)",
  lang: "en"
  },
  uri: "assets/p11639797_p_v5_ab.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T10:50",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149529&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T13:15",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149529&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T15:45",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149529&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T18:15",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149529&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T20:45",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149529&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T23:15",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=149529&d=2015-09-07"
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T10:35",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T13:50",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T17:05",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T20:30",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T22:45",
  barg: false
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T10:40",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149529&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T13:45",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149529&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T16:20",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149529&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T19:25",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149529&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T22:25",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149529&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T20:25",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T22:45",
  barg: false
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:35",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149529&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T20:15",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149529&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV006134340000",
  rootId: "10989210",
  subType: "Feature Film",
  title: "Mission: Impossible Rogue Nation",
  releaseYear: 2015,
  releaseDate: "2015-07-31",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Action",
  "Adventure",
  "Thriller"
  ],
  longDescription: "With the IMF now disbanded and Ethan Hunt (Tom Cruise) out in the cold, a new threat -- called the Syndicate -- soon emerges. The Syndicate is a network of highly skilled operatives who are dedicated to establishing a new world order via an escalating series of terrorist attacks. Faced with what may be the most impossible mission yet, Ethan gathers his team and joins forces with Ilsa Faust (Rebecca Ferguson), a disavowed British agent who may or may not be a member of this deadly rogue nation.",
  shortDescription: "Ethan Hunt and his team square off against an organization bent on creating a new world order.",
  topCast: [
  "Tom Cruise",
  "Jeremy Renner",
  "Simon Pegg"
  ],
  directors: [
  "Christopher McQuarrie"
  ],
  officialUrl: "http://www.missionimpossible.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG-13"
  }
  ],
  advisories: [
  "Adult Situations",
  "Brief Nudity",
  "Violence"
  ],
  runTime: "PT02H11M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Mission: Impossible Rogue Nation (2015)",
  lang: "en"
  },
  uri: "assets/p10989210_p_v5_ac.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T11:10",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T14:05",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T16:55",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T19:45",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T22:45",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T10:15",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T12:15",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T15:05",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T17:45",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T19:45",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T21:45",
  barg: false
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T12:20",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T15:50",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T18:55",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T22:10",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T10:10",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T13:20",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T16:30",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T18:30",
  quals: "Reserved Seating|AMC Prime",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T19:45",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T22:55",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T10:35",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T12:45",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T15:20",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T17:30",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T20:30",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T22:20",
  barg: false
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:30",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:30",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T17:30",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T20:30",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141793&d=2015-09-07"
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T10:25",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: true
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T13:20",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T16:15",
  quals: "Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired|Closed Captioned",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T19:10",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T22:00",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV006957230000",
  rootId: "11376954",
  subType: "Feature Film",
  title: "Minions",
  releaseYear: 2015,
  releaseDate: "2015-06-26",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy",
  "Adventure",
  "Animated"
  ],
  longDescription: "Evolving from single-celled yellow organisms at the dawn of time, Minions live to serve, but find themselves working for a continual series of unsuccessful masters, from T. Rex to Napoleon. Without a master to grovel for, the Minions fall into a deep depression. But one minion, Kevin, has a plan; accompanied by his pals Stuart and Bob, Kevin sets forth to find a new evil boss for his brethren to follow. Their search leads them to Scarlet Overkill, the world's first-ever super-villainess.",
  shortDescription: "A clever Minion hatches a plan to find his masterless brethren someone new to serve.",
  topCast: [
  "Sandra Bullock",
  "Jon Hamm",
  "Michael Keaton"
  ],
  directors: [
  "Pierre Coffin",
  "Kyle Balda"
  ],
  officialUrl: "http://www.minionsmovie.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG"
  }
  ],
  advisories: [
  "Adult Situations"
  ],
  runTime: "PT01H31M",
  animation: "Animated",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Minions (2015)",
  lang: "en"
  },
  uri: "assets/p11376954_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T11:35",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=146687&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T13:45",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=146687&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T16:00",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=146687&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T19:40",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=146687&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:45",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=146687&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:10",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=146687&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV006404920000",
  rootId: "11132509",
  subType: "Feature Film",
  title: "No Escape",
  releaseYear: 2015,
  releaseDate: "2015-08-26",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Thriller",
  "Action"
  ],
  longDescription: "American businessman Jack Dwyer (Owen Wilson), wife Annie and their two young daughters arrive in Southeast Asia to begin a new life. As his company plans to improve the region's water quality, the family quickly learns that they're right in the middle of a political uprising. Armed rebels attack the hotel where they're staying, ordered to kill any foreigners that they encounter. Amid utter chaos, Jack must find a way to save himself and his loved ones from the violence erupting all around them.",
  shortDescription: "An American businessman must save his family from a violent political uprising in Southeast Asia.",
  topCast: [
  "Owen Wilson",
  "Lake Bell",
  "Pierce Brosnan"
  ],
  directors: [
  "John Erick Dowdle"
  ],
  qualityRating: {
  ratingsBody: "TMS",
  value: "2"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Graphic Violence"
  ],
  runTime: "PT01H43M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "No Escape (2015)",
  lang: "en"
  },
  uri: "assets/p11132509_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T12:20",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T14:45",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T17:10",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T19:35",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T22:00",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T10:25",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T14:35",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T16:50",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T19:15",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T22:30",
  barg: false
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T11:10",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T14:15",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T17:15",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T20:15",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T23:00",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T11:30",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T14:20",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T17:10",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T20:10",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T22:55",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T10:40",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T13:30",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T15:40",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T17:40",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T20:40",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T22:50",
  barg: false
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:30",
  quals: "Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:10",
  quals: "Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T16:45",
  quals: "Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T19:30",
  quals: "Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T22:10",
  quals: "Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=143824&d=2015-09-07"
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T12:10",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Screening Lounge",
  barg: true
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T14:40",
  quals: "Reserved Seating|Closed Captioned|Descriptive Video Services|Handicap Accessible",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T17:10",
  quals: "Handicap Accessible|Reserved Seating|Closed Captioned|Descriptive Video Services|Screening Lounge",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T19:40",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Screening Lounge",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T22:05",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Screening Lounge",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007559250000",
  rootId: "11748368",
  subType: "Feature Film",
  title: "American Ultra",
  releaseYear: 2015,
  releaseDate: "2015-08-21",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy",
  "Action"
  ],
  longDescription: "Small-town stoner Mike Howell (Jesse Eisenberg) spends most of his time getting high and writing a graphic novel. What Mike doesn't know is that he was trained by the CIA to be a lethal killing machine. When the agency targets him for termination, his former handler activates his latent skills, turning the mild-mannered slacker into a deadly weapon. Now, the utterly surprised Mike must use his newfound abilities to save himself and his girlfriend from getting smoked.",
  shortDescription: "A small-town stoner must use his latent, deadly skills to prevent the CIA from taking him out.",
  topCast: [
  "Jesse Eisenberg",
  "Kristen Stewart",
  "Topher Grace"
  ],
  directors: [
  "Nima Nourizadeh"
  ],
  officialUrl: "http://www.americanultrathemovie.com/#",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Graphic Violence"
  ],
  runTime: "PT01H36M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "American Ultra (2015)",
  lang: "en"
  },
  uri: "assets/p11748368_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T13:20",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=150925&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T15:35",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=150925&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T17:55",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=150925&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T20:15",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=150925&d=2015-09-07"
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T14:00",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T17:55",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T20:35",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T23:25",
  barg: false
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T22:50",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=150925&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T20:10",
  barg: false
  },
  {
  theatre: {
  id: "6324",
  name: "Los Feliz 3"
  },
  dateTime: "2015-09-07T17:00",
  barg: false
  },
  {
  theatre: {
  id: "6324",
  name: "Los Feliz 3"
  },
  dateTime: "2015-09-07T21:45",
  barg: false
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:20",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=150925&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T19:30",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=150925&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV006074350000",
  rootId: "10951814",
  subType: "Feature Film",
  title: "Ant-Man",
  releaseYear: 2015,
  releaseDate: "2015-07-17",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy",
  "Adventure",
  "Action"
  ],
  longDescription: "Forced out of his own company by former protégé Darren Cross, Dr. Hank Pym (Michael Douglas) recruits the talents of Scott Lang (Paul Rudd), a master thief just released from prison. Lang becomes Ant-Man, trained by Pym and armed with a suit that allows him to shrink in size, possess superhuman strength and control an army of ants. The miniature hero must use his new skills to prevent Cross, also known as Yellowjacket, from perfecting the same technology and using it as a weapon for evil.",
  shortDescription: "Ant-Man must prevent Yellowjacket from perfecting his shrinking technology as a weapon for evil.",
  topCast: [
  "Paul Rudd",
  "Michael Douglas",
  "Evangeline Lilly"
  ],
  directors: [
  "Peyton Reed"
  ],
  officialUrl: "http://marvel.com/antman",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG-13"
  }
  ],
  advisories: [
  "Adult Situations",
  "Violence"
  ],
  runTime: "PT01H57M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Ant-Man (2015)",
  lang: "en"
  },
  uri: "assets/p10951814_p_v5_ac.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T15:00",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=141430&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T22:55",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=141430&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T10:40",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141430&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T13:45",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141430&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T16:45",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141430&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T19:40",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141430&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T16:10",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141430&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T19:10",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141430&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T22:20",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=141430&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:35",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141430&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:20",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141430&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T17:05",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141430&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T20:00",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141430&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T23:00",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141430&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV006998360000",
  rootId: "11395383",
  subType: "Feature Film",
  title: "Trainwreck",
  releaseYear: 2015,
  releaseDate: "2015-07-17",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Romantic comedy"
  ],
  longDescription: "Ever since her father drilled into her head that monogamy isn't realistic, magazine writer Amy (Amy Schumer) has made promiscuity her credo. As much as she enjoys an uninhibited life free of commitment, Amy is really in a rut. While writing a profile about charming and successful sports doctor Aaron Conners (Bill Hader), she finds herself actually falling in love for the first time -- and what's more, Aaron seems to like her too. Amy starts to wonder if it's time to clean up her act.",
  shortDescription: "A promiscuous magazine writer starts to fall in love with the subject of her latest article.",
  topCast: [
  "Amy Schumer",
  "Bill Hader",
  "Brie Larson"
  ],
  directors: [
  "Judd Apatow"
  ],
  officialUrl: "http://www.trainwreckmovie.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Nudity",
  "Strong Sexual Content"
  ],
  runTime: "PT02H02M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Trainwreck (2015)",
  lang: "en"
  },
  uri: "assets/p11395383_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T17:50",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=146801&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T19:25",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=146801&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T22:10",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=146801&d=2015-09-07"
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T11:50",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T14:55",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T17:50",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T20:40",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T22:40",
  barg: false
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T13:25",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=146801&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T16:25",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=146801&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T19:35",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=146801&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T22:40",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=146801&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T15:10",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T18:15",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T10:45",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Screening Lounge|Hearing Impaired",
  barg: true
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T13:30",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Screening Lounge|Hearing Impaired",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T16:15",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Screening Lounge|Hearing Impaired",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T19:10",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T22:00",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007175330000",
  rootId: "11490851",
  subType: "Feature Film",
  title: "Dope",
  releaseYear: 2015,
  releaseDate: "2015-01-24",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy"
  ],
  longDescription: "High-school senior Malcolm (Shameik Moore) and his friends Jib (Tony Revolori) and Diggy (Kiersey Clemons) bond over '90s hip-hop culture, their studies and playing music in their own punk band. A chance encounter with a drug dealer named Dom lands Malcolm and company at the dealer's nightclub birthday party; when the scene turns violent, they flee -- with the Ecstasy that Dom secretly hid in Malcolm's backpack. A wild adventure ensues as the youths try to evade armed thugs who want the stash.",
  shortDescription: "A teenage geek and his friends try to figure out what to do with the drugs a dealer hid with him.",
  topCast: [
  "Shameik Moore",
  "Tony Revolori",
  "Kiersey Clemons"
  ],
  directors: [
  "Rick Famuyiwa"
  ],
  officialUrl: "http://www.youaredope.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Nudity",
  "Violence"
  ],
  runTime: "PT01H55M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Dope (2015)",
  lang: "en"
  },
  uri: "assets/p11490851_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T18:05",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=147825&d=2015-09-07"
  },
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T22:30",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=147825&d=2015-09-07"
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T12:25",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T17:00",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T21:30",
  barg: false
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T10:35",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=147825&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T13:25",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=147825&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T16:25",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=147825&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T19:20",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=147825&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T22:05",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=147825&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T13:55",
  quals: "Reserved Seating|AMC Independent|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=147825&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T19:50",
  quals: "Reserved Seating|AMC Independent|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=147825&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T13:00",
  barg: false
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T19:00",
  quals: "AMC Independent|Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=147825&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T21:45",
  quals: "AMC Independent|Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=147825&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV007104600000",
  rootId: "11447189",
  subType: "Feature Film",
  title: "Southpaw",
  releaseYear: 2015,
  releaseDate: "2015-07-24",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Drama"
  ],
  longDescription: "Billy 'The Great' Hope (Jake Gyllenhaal), the reigning junior middleweight boxing champion, has an impressive career, a loving wife and daughter, and a lavish lifestyle. However, when tragedy strikes, Billy hits rock bottom, losing his family, his house and his manager. He soon finds an unlikely savior in Tick Willis (Forest Whitaker), a former fighter who trains the city's toughest amateur boxers. With his future on the line, Hope fights to reclaim the trust of those he loves the most.",
  shortDescription: "A retired boxer (Forest Whitaker) helps a down-and-out fighter (Jake Gyllenhaal) seek redemption.",
  topCast: [
  "Jake Gyllenhaal",
  "Forest Whitaker",
  "Naomie Harris"
  ],
  directors: [
  "Antoine Fuqua"
  ],
  officialUrl: "http://southpawfilm.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Violence"
  ],
  runTime: "PT02H03M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Southpaw (2015)",
  lang: "en"
  },
  uri: "assets/p11447189_p_v5_ab.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "4865",
  name: "Pacific The Grove Stadium 14"
  },
  dateTime: "2015-09-07T21:50",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAQGT&m=147239&d=2015-09-07"
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T16:35",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T22:05",
  barg: false
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T18:50",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=147239&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T21:50",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=147239&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:40",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=147239&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T17:20",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=147239&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T23:00",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=147239&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV000035250000",
  rootId: "2163",
  subType: "Feature Film",
  title: "The Maltese Falcon",
  releaseYear: 1941,
  releaseDate: "1941-10-03",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Crime drama"
  ],
  longDescription: "In this noir classic, detective Sam Spade (Humphrey Bogart) gets more than he bargained for when he takes a case brought to him by a beautiful but secretive woman (Mary Astor). As soon as Miss Wonderly shows up, trouble follows as Sam's partner is murdered and Sam is accosted by a man (Peter Lorre) demanding he locate a valuable statuette. Sam, entangled in a dangerous web of crime and intrigue, soon realizes he must find the one thing they all seem to want: the bejeweled Maltese falcon.",
  shortDescription: "Private eye Sam Spade (Humphrey Bogart) and others (Mary Astor, Peter Lorre) seek a statuette.",
  topCast: [
  "Humphrey Bogart",
  "Mary Astor",
  "Peter Lorre"
  ],
  directors: [
  "John Huston"
  ],
  qualityRating: {
  ratingsBody: "TMS",
  value: "4"
  },
  runTime: "PT01H40M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "The Maltese Falcon (1941)",
  lang: "en"
  },
  uri: "assets/p2163_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "6099",
  name: "New Beverly Cinema"
  },
  dateTime: "2015-09-07T19:30",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV000093300000",
  rootId: "5336",
  subType: "Feature Film",
  title: "The Mask of Dimitrios",
  releaseYear: 1944,
  releaseDate: "1944-06-08",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Thriller"
  ],
  longDescription: "While on vacation in Istanbul, mystery novelist Cornelius Leyden (Peter Lorre) is given the opportunity to view the body of the recently deceased criminal mastermind Dimitrios Makropoulos (Zachary Scott). Upon seeing the body, Leyden becomes obsessed with uncovering the story behind the crime lord's rise to power. With the help of local police Colonel Haki (Kurt Katch), Leyden journeys across Europe, piecing together a sordid narrative of Makropoulos' life and uncovering long-buried secrets.",
  shortDescription: "A smuggler (Sydney Greenstreet) and a writer (Peter Lorre) trace a criminal's (Zachary Scott) life.",
  topCast: [
  "Sydney Greenstreet",
  "Peter Lorre",
  "Zachary Scott"
  ],
  directors: [
  "Jean Negulesco"
  ],
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  runTime: "PT01H35M",
  preferredImage: {
  width: "240",
  height: "360",
  uri: "assets/p5336_st_v5_aa.jpg",
  category: "Staple",
  text: "yes"
  },
  showtimes: [
  {
  theatre: {
  id: "6099",
  name: "New Beverly Cinema"
  },
  dateTime: "2015-09-07T21:35",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007629600000",
  rootId: "11804231",
  subType: "Feature Film",
  title: "Dude Bro Party Massacre III",
  releaseYear: 2015,
  releaseDate: "2015-06-13",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy",
  "Horror"
  ],
  longDescription: "A young man (Alec Owen) infiltrates a fraternity after the serial killer Motherface murders his twin brother.",
  shortDescription: "A young man infiltrates a fraternity after the serial killer Motherface murders his twin brother.",
  topCast: [
  "Alec Owen",
  "Olivia Taylor Dudley",
  "Paul Prado"
  ],
  directors: [
  "Michael Rousselet",
  "Tomm Jacobsen",
  "Jon Salmon"
  ],
  officialUrl: "http://www.dudebropartymassacre3.com/",
  advisories: [
  "Adult Situations",
  "Graphic Violence"
  ],
  runTime: "PT01H43M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Dude Bro Party Massacre III (2015)",
  lang: "en"
  },
  uri: "assets/p11804231_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "6385",
  name: "The Cinefamily at the Silent Movie Theatre"
  },
  dateTime: "2015-09-07T17:00",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007441390000",
  rootId: "11663654",
  subType: "Feature Film",
  title: "Best of Enemies",
  releaseYear: 2015,
  releaseDate: "2015-07-31",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Documentary"
  ],
  longDescription: "In 1968, ideological opposites William F. Buckley Jr. and Gore Vidal hold a series of riveting, nationally televised debates that usher in a new era of public discourse and pundit TV.",
  shortDescription: "Ideological opposites William F. Buckley Jr. and Gore Vidal hold riveting debates in 1968.",
  directors: [
  "Morgan Neville",
  "Robert Gordon"
  ],
  officialUrl: "http://www.bestofenemiesfilm.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Nudity"
  ],
  runTime: "PT01H28M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Best of Enemies (2015)",
  lang: "en"
  },
  uri: "assets/p11663654_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T11:45",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T19:15",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007480790000",
  rootId: "11696949",
  subType: "Feature Film",
  title: "Learning to Drive",
  releaseYear: 2014,
  releaseDate: "2014-09-09",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Romance",
  "Comedy drama"
  ],
  longDescription: "A literary agent (Patricia Clarkson) whose husband left her and a Sikh driving instructor (Ben Kingsley) on the verge of an arranged marriage find that each has something to learn from the other about starting life anew.",
  shortDescription: "A literary agent and the Sikh gentleman who's teaching her to drive learn the joy of starting anew.",
  topCast: [
  "Patricia Clarkson",
  "Ben Kingsley",
  "Grace Gummer"
  ],
  directors: [
  "Isabel Coixet"
  ],
  officialUrl: "http://learningtodrivemovie.com/desktop",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations"
  ],
  runTime: "PT01H30M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Learning to Drive (2014)",
  lang: "en"
  },
  uri: "assets/p11696949_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T12:00",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T14:15",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T16:30",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T19:30",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T21:40",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T10:05",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating",
  barg: true
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T12:20",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T14:35",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T16:50",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T19:10",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T21:20",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007164190000",
  rootId: "11483484",
  subType: "Feature Film",
  title: "Mr. Holmes",
  releaseYear: 2015,
  releaseDate: "2015-02-08",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Mystery",
  "Drama"
  ],
  longDescription: "Long-retired and near the end of his life, Sherlock Holmes (Ian McKellen) grapples with an unreliable memory and must rely on his housekeeper's son as he revisits the still-unsolved case that led to his retirement.",
  shortDescription: "An unreliable memory plagues aged Sherlock Holmes as he grapples with a long-unsolved case.",
  topCast: [
  "Ian McKellen",
  "Laura Linney",
  "Milo Parker"
  ],
  directors: [
  "Bill Condon"
  ],
  officialUrl: "http://www.mrholmesfilm.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG"
  }
  ],
  advisories: [
  "Adult Situations"
  ],
  runTime: "PT01H45M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Mr. Holmes (2015)",
  lang: "en"
  },
  uri: "assets/p11483484_p_v5_ab.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T12:15",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T19:00",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T15:50",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T11:40",
  quals: "Descriptive Video Services|Handicap Accessible|Reserved Seating|Closed Captioned",
  barg: true
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T14:10",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T16:40",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T19:05",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Screening Lounge",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T21:30",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Screening Lounge",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007734720000",
  rootId: "11886854",
  subType: "Feature Film",
  title: "Queen of Earth",
  releaseYear: 2015,
  releaseDate: "2015-02-06",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy drama"
  ],
  longDescription: "Tensions rise when an emotionally fragile woman (Elisabeth Moss) spends one week with her best friend (Katherine Waterston).",
  shortDescription: "Tensions rise when an emotionally fragile woman spends one week with her best friend.",
  topCast: [
  "Elisabeth Moss",
  "Katherine Waterston",
  "Patrick Fugit"
  ],
  directors: [
  "Alex Ross Perry"
  ],
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  advisories: [
  "Adult Situations"
  ],
  runTime: "PT01H29M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Queen of Earth (2015)",
  lang: "en"
  },
  uri: "assets/p11886854_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T12:30",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T14:45",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T17:00",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T19:45",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T22:00",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007821270000",
  rootId: "11952410",
  subType: "Feature Film",
  title: "7 Chinese Brothers",
  releaseYear: 2015,
  releaseDate: "2015-03-15",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy"
  ],
  longDescription: "Fired from a restaurant, a hard-drinking slacker (Jason Schwartzman) lands a job at a garage and becomes smitten with his lovely, new boss (Eleanore Pienta).",
  shortDescription: "A hard-drinking slacker lands a job at a garage and becomes smitten with his lovely, new boss.",
  topCast: [
  "Jason Schwartzman",
  "Olympia Dukakis",
  "Tunde Adebimpe"
  ],
  directors: [
  "Bob Byington"
  ],
  qualityRating: {
  ratingsBody: "TMS",
  value: "2.5"
  },
  advisories: [
  "Adult Situations"
  ],
  runTime: "PT01H15M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "7 Chinese Brothers (2015)",
  lang: "en"
  },
  uri: "assets/p11952410_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T12:45",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T17:25",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T20:00",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007117820000",
  rootId: "11455471",
  subType: "Feature Film",
  title: "The Diary of a Teenage Girl",
  releaseYear: 2015,
  releaseDate: "2015-01-24",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Drama"
  ],
  longDescription: "In 1970s San Francisco, a precocious 15-year-old (Bel Powley) embarks on an enthusiastic sexual odyssey, beginning with her mother's current lover (Alexander Skarsgård).",
  shortDescription: "In 1970s San Francisco, a precocious 15-year-old embarks on an enthusiastic sexual odyssey.",
  topCast: [
  "Bel Powley",
  "Alexander Skarsgård",
  "Kristen Wiig"
  ],
  directors: [
  "Marielle Heller"
  ],
  officialUrl: "http://www.sonyclassics.com/thediaryofateenagegirl/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Nudity",
  "Strong Sexual Content"
  ],
  runTime: "PT01H42M",
  preferredImage: {
  width: "240",
  height: "360",
  uri: "assets/p11455471_i_v5_aa.jpg",
  category: "Iconic",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T13:50",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T21:30",
  barg: false
  },
  {
  theatre: {
  id: "7925",
  name: "Laemmle Music Hall 3"
  },
  dateTime: "2015-09-07T14:20",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007441150000",
  rootId: "11663255",
  subType: "Feature Film",
  title: "Tangerine",
  releaseYear: 2015,
  releaseDate: "2015-07-10",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy drama"
  ],
  longDescription: "After hearing that her boyfriend/pimp cheated on her while she was in jail, a hooker and her best friend set out to find him and teach him and his new lover a lesson.",
  shortDescription: "A hooker scours Los Angeles for the pimp/boyfriend who cheated on her while she was in jail.",
  topCast: [
  "Kitana Kiki Rodriguez",
  "Mya Taylor",
  "Karren Karagulian"
  ],
  directors: [
  "Sean Baker"
  ],
  officialUrl: "http://www.magpictures.com/tangerine/",
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Nudity",
  "Strong Sexual Content"
  ],
  runTime: "PT01H27M",
  preferredImage: {
  uri: "tvbanners/generic/generic_tvbanners_v5.png"
  },
  showtimes: [
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T14:30",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T16:45",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T21:20",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV005931290000",
  rootId: "10856978",
  subType: "Feature Film",
  title: "The Mend",
  releaseYear: 2014,
  releaseDate: "2014",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy drama"
  ],
  longDescription: "Mat and Alan, estranged brothers, reunite just before Alan leaves for a vacation with his girlfriend. When he returns sooner than expected without his girlfriend, Alan finds Mat and his family have moved into his apartment.",
  shortDescription: "Mat and Alan, estranged brothers, reunite just before Alan leaves for a vacation.",
  topCast: [
  "Josh Lucas",
  "Stephen Plunkett",
  "Lucy Owen"
  ],
  directors: [
  "John Magary"
  ],
  runTime: "PT01H51M",
  preferredImage: {
  uri: "tvbanners/generic/generic_tvbanners_v5.png"
  },
  showtimes: [
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T15:00",
  barg: false
  },
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T21:50",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007543190000",
  rootId: "11737681",
  subType: "Feature Film",
  title: "Digging for Fire",
  releaseYear: 2015,
  releaseDate: "2015-01-26",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Drama",
  "Mystery"
  ],
  longDescription: "A house sitter (Jake Johnson) becomes an amateur sleuth after finding a bone and a gun on the property.",
  shortDescription: "A house sitter becomes an amateur sleuth after finding a bone and a gun on the property.",
  topCast: [
  "Jake Johnson",
  "Rosemarie DeWitt",
  "Orlando Bloom"
  ],
  directors: [
  "Joe Swanberg"
  ],
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Nudity"
  ],
  runTime: "PT01H23M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Digging for Fire (2015)",
  lang: "en"
  },
  uri: "assets/p11737681_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7605",
  name: "Sundance Sunset Cinemas"
  },
  dateTime: "2015-09-07T16:15",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007912620000",
  rootId: "12021217",
  subType: "Feature Film",
  title: "Dirty Weekend",
  releaseYear: 2015,
  releaseDate: "2015",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy drama"
  ],
  longDescription: "Coworkers Les Moore and Natalie Hamilton become stranded in a city where a year earlier, Les had too many drinks and had an unexpected encounter that haunts him. With Natalie at his side, Les sets out to figure out what happened that night.",
  shortDescription: "Les becomes stranded in a city and decides to find out what happened one drunken night a year ago.",
  topCast: [
  "Matthew Broderick",
  "Alice Eve",
  "Phil Burke"
  ],
  directors: [
  "Neil LaBute"
  ],
  runTime: "PT01H33M",
  preferredImage: {
  uri: "tvbanners/generic/generic_tvbanners_v5.png"
  },
  showtimes: [
  {
  theatre: {
  id: "7925",
  name: "Laemmle Music Hall 3"
  },
  dateTime: "2015-09-07T12:00",
  barg: false
  },
  {
  theatre: {
  id: "7925",
  name: "Laemmle Music Hall 3"
  },
  dateTime: "2015-09-07T14:30",
  barg: false
  },
  {
  theatre: {
  id: "7925",
  name: "Laemmle Music Hall 3"
  },
  dateTime: "2015-09-07T17:00",
  barg: false
  },
  {
  theatre: {
  id: "7925",
  name: "Laemmle Music Hall 3"
  },
  dateTime: "2015-09-07T22:00",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007875450000",
  rootId: "11992217",
  subType: "Feature Film",
  title: "Chloe & Theo",
  releaseYear: 2015,
  releaseDate: "2015-09-04",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Drama"
  ],
  longDescription: "A homeless woman (Dakota Johnson) and a lawyer (Mira Sorvino) help an Eskimo (Theo Ikummaq) bring his message of change to the United Nations.",
  shortDescription: "A homeless woman and a lawyer help an Eskimo bring his message of change to the United Nations.",
  topCast: [
  "Dakota Johnson",
  "Theo Ikummaq",
  "Ashley Springer"
  ],
  directors: [
  "Ezna Sands"
  ],
  officialUrl: "http://www.chloeandtheo.com/",
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG-13"
  }
  ],
  advisories: [
  "Adult Situations",
  "Violence"
  ],
  runTime: "PT01H21M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Chloe & Theo (2015)",
  lang: "en"
  },
  uri: "assets/p11992217_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7925",
  name: "Laemmle Music Hall 3"
  },
  dateTime: "2015-09-07T12:10",
  barg: false
  },
  {
  theatre: {
  id: "7925",
  name: "Laemmle Music Hall 3"
  },
  dateTime: "2015-09-07T19:40",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007368400000",
  rootId: "11618071",
  subType: "Feature Film",
  title: "My Voice, My Life",
  releaseYear: 2014,
  releaseDate: "2014",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Documentary"
  ],
  longDescription: "Underprivileged middle school students undergo six months of vigorous training to produce a musical on stage.",
  shortDescription: "Underprivileged middle school students undergo six months of training to produce a musical.",
  directors: [
  "Ruby Yang"
  ],
  runTime: "PT01H31M",
  preferredImage: {
  uri: "tvbanners/generic/generic_tvbanners_v5.png"
  },
  showtimes: [
  {
  theatre: {
  id: "7925",
  name: "Laemmle Music Hall 3"
  },
  dateTime: "2015-09-07T12:20",
  barg: false
  },
  {
  theatre: {
  id: "7925",
  name: "Laemmle Music Hall 3"
  },
  dateTime: "2015-09-07T14:40",
  barg: false
  },
  {
  theatre: {
  id: "7925",
  name: "Laemmle Music Hall 3"
  },
  dateTime: "2015-09-07T17:00",
  barg: false
  },
  {
  theatre: {
  id: "7925",
  name: "Laemmle Music Hall 3"
  },
  dateTime: "2015-09-07T19:20",
  barg: false
  },
  {
  theatre: {
  id: "7925",
  name: "Laemmle Music Hall 3"
  },
  dateTime: "2015-09-07T21:40",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007175790000",
  rootId: "11491034",
  subType: "Feature Film",
  title: "Irrational Man",
  releaseYear: 2015,
  releaseDate: "2015-05-15",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Dark comedy"
  ],
  longDescription: "A tormented philosophy professor (Joaquin Phoenix) considers murdering a corrupt judge to find meaning in his life.",
  shortDescription: "A tormented philosophy professor considers murdering a corrupt judge to find meaning in his life.",
  topCast: [
  "Jamie Blackley",
  "Joaquin Phoenix",
  "Parker Posey"
  ],
  directors: [
  "Woody Allen"
  ],
  officialUrl: "http://sonyclassics.com/irrationalman/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations"
  ],
  runTime: "PT01H34M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Irrational Man (2015)",
  lang: "en"
  },
  uri: "assets/p11491034_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7925",
  name: "Laemmle Music Hall 3"
  },
  dateTime: "2015-09-07T16:50",
  barg: false
  }
  ]
  },
  {
  tmsId: "EV000005410335",
  rootId: "11496689",
  subType: "Theatre Event",
  title: "Gran Teatre del Liceu in Barcelona, Live: Norma",
  titleLang: "en",
  entityType: "Movie",
  preferredImage: {
  uri: "tvbanners/generic/generic_tvbanners_v5.png"
  },
  showtimes: [
  {
  theatre: {
  id: "7925",
  name: "Laemmle Music Hall 3"
  },
  dateTime: "2015-09-07T19:30",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007448120000",
  rootId: "11670095",
  subType: "Feature Film",
  title: "Sinister 2",
  releaseYear: 2015,
  releaseDate: "2015-08-21",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Thriller",
  "Horror"
  ],
  longDescription: "Hiding from her abusive, estranged husband, Courtney Collins lives in a rural house with her 9-year-old twins, Dylan and Zach. Young Dylan receives nightly visits from ghoulish kids who show him disturbing images of families being slaughtered. It's all part of the grand plan of Bughuul, the evil spirit who recruits innocent children to murder their loved ones. The only hope for his intended new victims may be a former deputy who's familiar with Bughuul's fiendish work from the past.",
  shortDescription: "A woman and her 9-year-old twin sons encounter the evil spirit of Bughuul in a rural house.",
  topCast: [
  "James Ransone",
  "Shannyn Sossamon",
  "Robert Sloan"
  ],
  directors: [
  "Ciarán Foy"
  ],
  officialUrl: "http://www.sinistermovie.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Graphic Violence"
  ],
  runTime: "PT01H37M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Sinister 2 (2015)",
  lang: "en"
  },
  uri: "assets/p11670095_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T12:10",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T14:30",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T17:00",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T19:40",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T22:15",
  barg: false
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T12:00",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149897&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T14:40",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149897&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T17:10",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149897&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T19:55",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149897&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T22:25",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149897&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:45",
  quals: "Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149897&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:20",
  quals: "Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149897&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T16:45",
  quals: "Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149897&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T19:15",
  quals: "Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149897&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T21:40",
  quals: "Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149897&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV005834930000",
  rootId: "10815284",
  subType: "Feature Film",
  title: "Jurassic World",
  releaseYear: 2015,
  releaseDate: "2015-06-12",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Science fiction",
  "Adventure",
  "Action",
  "Thriller"
  ],
  longDescription: "Located off the coast of Costa Rica, the Jurassic World luxury resort provides a habitat for an array of genetically engineered dinosaurs, including the vicious and intelligent Indominus rex. When the massive creature escapes, it sets off a chain reaction that causes the other dinos to run amok. Now, it's up to a former military man and animal expert (Chris Pratt) to use his special skills to save two young brothers and the rest of the tourists from an all-out, prehistoric assault.",
  shortDescription: "An animal expert must save tourists on an island from rampaging, genetically engineered dinosaurs.",
  topCast: [
  "Chris Pratt",
  "Bryce Dallas Howard",
  "Irrfan Khan"
  ],
  directors: [
  "Colin Trevorrow"
  ],
  officialUrl: "http://www.jurassicworld.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG-13"
  }
  ],
  advisories: [
  "Adult Situations",
  "Violence"
  ],
  runTime: "PT02H04M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Jurassic World: An IMAX 3D Experience (2015)",
  lang: "en"
  },
  uri: "assets/p10815284_p_v5_ab.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T13:20",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T16:20",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T19:20",
  barg: false
  },
  {
  theatre: {
  id: "7883",
  name: "Chinese 6 Theatres"
  },
  dateTime: "2015-09-07T22:20",
  barg: false
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T19:10",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=139827&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T22:15",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=139827&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T10:50",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=139827&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T16:50",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=139827&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T22:35",
  quals: "Closed Captioned|Reserved Seating|Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=139827&d=2015-09-07"
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T11:00",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T13:05",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T17:55",
  barg: false
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:30",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=139827&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T16:40",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=139827&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T22:00",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=139827&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV007441800000",
  rootId: "11664690",
  subType: "Feature Film",
  title: "Paper Planes",
  releaseYear: 2014,
  releaseDate: "2014",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Adventure"
  ],
  longDescription: "After he wins his school's paper plane making contest, 11-year-old Dylan and his father bond as Dylan prepares for the World Paper Plane Championships in Tokyo.",
  shortDescription: "Dylan bonds with his father while preparing for the World Paper Plane Championships in Tokyo.",
  topCast: [
  "Sam Worthington",
  "Ed Oxenbould",
  "Deborah Mailman"
  ],
  directors: [
  "Robert Connolly"
  ],
  runTime: "PT01H36M",
  preferredImage: {
  width: "240",
  height: "360",
  uri: "assets/p11664690_st_v5_aa.jpg",
  category: "Staple",
  text: "yes"
  },
  showtimes: [
  {
  theatre: {
  id: "10697",
  name: "Arena Cinema"
  },
  dateTime: "2015-09-07T17:00",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWVU&m=149814&d=2015-09-07"
  },
  {
  theatre: {
  id: "10697",
  name: "Arena Cinema"
  },
  dateTime: "2015-09-07T18:45",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWVU&m=149814&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV005230750000",
  rootId: "10301600",
  subType: "Feature Film",
  title: "Contracted",
  releaseYear: 2013,
  releaseDate: "2013",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Horror",
  "Thriller"
  ],
  longDescription: "A young woman (Najarra Townsend) develops horrifying symptoms after she indulges in a one-night stand with a random stranger.",
  shortDescription: "A young woman develops horrifying symptoms after having sex with a random stranger.",
  topCast: [
  "Najarra Townsend",
  "Caroline Williams",
  "Alice Macdonald"
  ],
  directors: [
  "Eric England"
  ],
  qualityRating: {
  ratingsBody: "TMS",
  value: "2.5"
  },
  advisories: [
  "Adult Situations"
  ],
  runTime: "PT01H24M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Contracted (2013)",
  lang: "en"
  },
  uri: "assets/p10301600_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "10697",
  name: "Arena Cinema"
  },
  dateTime: "2015-09-07T20:20",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWVU&m=134608&d=2015-09-07"
  },
  {
  theatre: {
  id: "10697",
  name: "Arena Cinema"
  },
  dateTime: "2015-09-07T22:10",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWVU&m=134608&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV007876110000",
  rootId: "10967531",
  subType: "Feature Film",
  title: "The Transporter Refueled: The IMAX Experience",
  releaseYear: 2015,
  releaseDate: "2015-09-04",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Action",
  "Thriller"
  ],
  longDescription: "Frank Martin is living a less perilous lifestyle, or so he thinks, transporting classified packages for questionable people. Things get complicated when femme fatale Anna and her three accomplices orchestrate a bank heist and the kidnapping of Frank's father. It's all part of a grand plan to take down the human trafficker who victimized her years earlier. Now a pawn in her vengeful scheme, the former special-operations mercenary must use his covert skills to play Anna's dangerous game.",
  shortDescription: "Former special-ops mercenary Frank Martin becomes a pawn in a scheme against a human trafficker.",
  topCast: [
  "Ed Skrein",
  "Ray Stevenson",
  "Loan Chabanol"
  ],
  directors: [
  "Camille Delamarre"
  ],
  officialUrl: "http://www.thetransporterrefueled.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG-13"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Violence"
  ],
  runTime: "PT01H36M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "The Transporter Refueled (2015)",
  lang: "en"
  },
  uri: "assets/p10967531_p_v5_ab.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "6710",
  name: "TCL Chinese Theatre"
  },
  dateTime: "2015-09-07T12:00",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAACD&m=152952&d=2015-09-07"
  },
  {
  theatre: {
  id: "6710",
  name: "TCL Chinese Theatre"
  },
  dateTime: "2015-09-07T14:30",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAACD&m=152952&d=2015-09-07"
  },
  {
  theatre: {
  id: "6710",
  name: "TCL Chinese Theatre"
  },
  dateTime: "2015-09-07T17:00",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAACD&m=152952&d=2015-09-07"
  },
  {
  theatre: {
  id: "6710",
  name: "TCL Chinese Theatre"
  },
  dateTime: "2015-09-07T19:30",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAACD&m=152952&d=2015-09-07"
  },
  {
  theatre: {
  id: "6710",
  name: "TCL Chinese Theatre"
  },
  dateTime: "2015-09-07T22:00",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAACD&m=152952&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T11:20",
  quals: "Reserved Seating|AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=152952&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T14:05",
  quals: "Reserved Seating|AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=152952&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T16:45",
  quals: "Reserved Seating|AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=152952&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T19:30",
  quals: "Reserved Seating|AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=152952&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T22:15",
  quals: "Reserved Seating|AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=152952&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV005986970000",
  rootId: "10893302",
  subType: "Feature Film",
  title: "Frozen Sing-Along",
  releaseYear: 2013,
  releaseDate: "2013",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Musical comedy",
  "Adventure",
  "Fantasy",
  "Animated"
  ],
  longDescription: "A fearless young princess (Kristen Bell) sets out with a mountaineer (Jonathan Groff) to find her sister (Idina Menzel), whose icy powers have trapped their kingdom in eternal winter. With on-screen lyrics and a bouncing snowflake to follow along.",
  shortDescription: "A princess and a mountaineer must free their kingdom from eternal winter. With onscreen lyrics.",
  topCast: [
  "Kristen Bell",
  "Idina Menzel",
  "Jonathan Groff"
  ],
  directors: [
  "Chris Buck",
  "Jennifer Lee"
  ],
  qualityRating: {
  ratingsBody: "TMS",
  value: "3.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG"
  }
  ],
  advisories: [
  "Adult Situations"
  ],
  runTime: "PT01H42M",
  animation: "Animated",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Frozen Sing-Along (2013)",
  lang: "en"
  },
  uri: "assets/p10893302_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "8974",
  name: "El Capitan"
  },
  dateTime: "2015-09-07T10:00",
  barg: false
  },
  {
  theatre: {
  id: "8974",
  name: "El Capitan"
  },
  dateTime: "2015-09-07T13:00",
  barg: false
  },
  {
  theatre: {
  id: "8974",
  name: "El Capitan"
  },
  dateTime: "2015-09-07T16:00",
  barg: false
  },
  {
  theatre: {
  id: "8974",
  name: "El Capitan"
  },
  dateTime: "2015-09-07T19:00",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007133940000",
  rootId: "11465115",
  subType: "Feature Film",
  title: "Grandma",
  releaseYear: 2015,
  releaseDate: "2015-01-26",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy drama"
  ],
  longDescription: "A misanthropic poet (Lily Tomlin) takes her granddaughter (Julia Garner) across Los Angeles in search of the money she needs to terminate her unwanted pregnancy.",
  shortDescription: "A bad-tempered poet tries to help her granddaughter obtain the $600 she needs for an abortion.",
  topCast: [
  "Lily Tomlin",
  "Julia Garner",
  "Marcia Gay Harden"
  ],
  directors: [
  "Paul Weitz"
  ],
  officialUrl: "http://sonyclassics.com/grandma/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations"
  ],
  runTime: "PT01H18M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Grandma (2015)",
  lang: "en"
  },
  uri: "assets/p11465115_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T10:00",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T13:00",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T16:10",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T19:40",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T21:05",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T10:55",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T12:50",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T14:35",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T16:20",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T18:05",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T20:00",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T21:50",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T11:15",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating",
  barg: true
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T13:20",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T15:25",
  quals: "Handicap Accessible|Reserved Seating|Closed Captioned|Descriptive Video Services",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T17:30",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T19:40",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T21:40",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007117600000",
  rootId: "11455248",
  subType: "Feature Film",
  title: "Z for Zachariah",
  releaseYear: 2015,
  releaseDate: "2015-01-23",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Drama"
  ],
  longDescription: "Following a disaster that wipes out most of civilization, a scientist (Chiwetel Ejiofor) and a miner (Chris Pine) compete for the love of a woman (Margot Robbie) who may be the last female on Earth.",
  shortDescription: "Two apocalyptic survivors vie for the love of the last woman (Margot Robbie) on Earth.",
  topCast: [
  "Chiwetel Ejiofor",
  "Margot Robbie",
  "Chris Pine"
  ],
  directors: [
  "Craig Zobel"
  ],
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG-13"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Brief Nudity"
  ],
  runTime: "PT01H37M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Z for Zachariah (2015)",
  lang: "en"
  },
  uri: "assets/p11455248_p_v5_ab.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T10:05",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T12:50",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T14:40",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T16:45",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T19:30",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T22:20",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV006295860000",
  rootId: "11082042",
  subType: "Feature Film",
  title: "Before We Go",
  releaseYear: 2014,
  releaseDate: "2014-09-05",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy drama",
  "Romance"
  ],
  longDescription: "A chance encounter between two strangers (Chris Evans, Alice Eve) in Grand Central Terminal sparks a life-changing, nighttime sojourn through New York City.",
  shortDescription: "A chance encounter between two strangers sparks a nighttime adventure in New York City.",
  topCast: [
  "Chris Evans",
  "Alice Eve",
  "Emma Fitzpatrick"
  ],
  directors: [
  "Chris Evans"
  ],
  qualityRating: {
  ratingsBody: "TMS",
  value: "2"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG-13"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations"
  ],
  runTime: "PT01H35M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Before We Go (2014)",
  lang: "en"
  },
  uri: "assets/p11082042_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T10:10",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T14:45",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T17:25",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T19:35",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T22:10",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007112270000",
  rootId: "11451372",
  subType: "Feature Film",
  title: "Mistress America",
  releaseYear: 2015,
  releaseDate: "2015-01-24",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy"
  ],
  longDescription: "A college freshman (Lola Kirke) cures her disappointment and loneliness by allowing herself to be pulled into the wacky schemes of her future stepsister (Greta Gerwig).",
  shortDescription: "A lonely college student allows herself to be pulled into her future stepsister's wacky schemes.",
  topCast: [
  "Greta Gerwig",
  "Lola Kirke",
  "Matthew Shear"
  ],
  directors: [
  "Noah Baumbach"
  ],
  officialUrl: "http://www.foxsearchlight.com/mistressamerica/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations"
  ],
  runTime: "PT01H24M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Mistress America (2015)",
  lang: "en"
  },
  uri: "assets/p11451372_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T10:40",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T13:15",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T16:05",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T19:10",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T21:35",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T19:40",
  barg: false
  },
  {
  theatre: {
  id: "8074",
  name: "Arclight Culver City"
  },
  dateTime: "2015-09-07T21:45",
  barg: false
  },
  {
  theatre: {
  id: "6324",
  name: "Los Feliz 3"
  },
  dateTime: "2015-09-07T14:00",
  barg: false
  },
  {
  theatre: {
  id: "6324",
  name: "Los Feliz 3"
  },
  dateTime: "2015-09-07T17:00",
  barg: false
  },
  {
  theatre: {
  id: "6324",
  name: "Los Feliz 3"
  },
  dateTime: "2015-09-07T19:30",
  barg: false
  },
  {
  theatre: {
  id: "6324",
  name: "Los Feliz 3"
  },
  dateTime: "2015-09-07T21:45",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T11:10",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: true
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T13:20",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T15:30",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T17:40",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T19:50",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T21:55",
  quals: "Closed Captioned|Descriptive Video Services|Handicap Accessible|Reserved Seating|Hearing Impaired",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007378400000",
  rootId: "11623960",
  subType: "Feature Film",
  title: "The End of the Tour",
  releaseYear: 2015,
  releaseDate: "2015-01-23",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Drama"
  ],
  longDescription: "Writer and journalist David Lipsky (Jesse Eisenberg) interviews author David Foster Wallace (Jason Segel) for Rolling Stone magazine.",
  shortDescription: "Writer David Lipsky interviews author David Foster Wallace (Jason Segel) for Rolling Stone magazine.",
  topCast: [
  "Jesse Eisenberg",
  "Jason Segel",
  "Becky Ann Baker"
  ],
  directors: [
  "James Ponsoldt"
  ],
  officialUrl: "http://www.endofthetour-movie.com/#/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations"
  ],
  runTime: "PT01H46M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "The End of the Tour (2015)",
  lang: "en"
  },
  uri: "assets/p11623960_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T10:55",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T15:00",
  barg: false
  },
  {
  theatre: {
  id: "6324",
  name: "Los Feliz 3"
  },
  dateTime: "2015-09-07T14:00",
  barg: false
  },
  {
  theatre: {
  id: "6324",
  name: "Los Feliz 3"
  },
  dateTime: "2015-09-07T19:30",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T12:10",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating",
  barg: true
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T14:35",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T17:00",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating|Screening Lounge",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T19:30",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating|Screening Lounge",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T21:55",
  quals: "Closed Captioned|Handicap Accessible|Reserved Seating",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007600360000",
  rootId: "11780062",
  subType: "Feature Film",
  title: "Amy",
  releaseYear: 2015,
  releaseDate: "2015-05-16",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Documentary"
  ],
  longDescription: "Archival footage and personal testimonials present an intimate portrait of the life and career of British singer/songwriter Amy Winehouse.",
  shortDescription: "Archival footage presents an intimate portrait of the life of singer/songwriter Amy Winehouse.",
  directors: [
  "Asif Kapadia"
  ],
  officialUrl: "http://www.amy-movie.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "3.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations"
  ],
  runTime: "PT02H08M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Amy (2015)",
  lang: "en"
  },
  uri: "assets/p11780062_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T11:20",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T15:10",
  barg: false
  },
  {
  theatre: {
  id: "7159",
  name: "ArcLight Hollywood"
  },
  dateTime: "2015-09-07T18:00",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV007445780000",
  rootId: "11667784",
  subType: "Feature Film",
  title: "War Room",
  releaseYear: 2015,
  releaseDate: "2015-08-28",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Drama"
  ],
  longDescription: "With great jobs, a beautiful daughter (Alena Pitts) and a dream house, the Jordans seem to have it all. Appearances can be deceiving, however, as husband Tony (T.C. Stallings) flirts with temptation and wife Elizabeth (Priscilla Shirer) becomes increasingly bitter, crumbling under the strain of a failing marriage. Their lives take an unexpected turn for the better when Elizabeth meets her newest client, Miss Clara (Karen Abercrombie), who encourages the couple to find happiness through prayer.",
  shortDescription: "Encouraged by her newest client, a woman turns to prayer to save her failing marriage.",
  topCast: [
  "Priscilla Shirer",
  "T.C. Stallings",
  "Karen Abercrombie"
  ],
  directors: [
  "Alex Kendrick"
  ],
  officialUrl: "http://warroomthemovie.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG"
  }
  ],
  advisories: [
  "Adult Situations"
  ],
  runTime: "PT02H00M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "War Room (2015)",
  lang: "en"
  },
  uri: "assets/p11667784_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T10:20",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149849&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T13:30",
  quals: "Digital Cinema|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149849&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T16:30",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149849&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T19:30",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149849&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T22:30",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=149849&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T10:00",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149849&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T13:00",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149849&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T16:00",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149849&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T19:00",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149849&d=2015-09-07"
  },
  {
  theatre: {
  id: "8458",
  name: "AMC Century City 15"
  },
  dateTime: "2015-09-07T22:00",
  quals: "Reserved Seating|Descriptive Video Services|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAOZ&m=149849&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:35",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149849&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:25",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149849&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T17:20",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149849&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T20:10",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149849&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T23:00",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=149849&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV005926900000",
  rootId: "10854519",
  subType: "Feature Film",
  title: "Fantastic Four",
  releaseYear: 2015,
  releaseDate: "2015-08-06",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Science fiction",
  "Action",
  "Adventure"
  ],
  longDescription: "Transported to an alternate universe, four young outsiders gain superhuman powers as they alter their physical form in shocking ways. Reed Richards becomes Mr. Fantastic, able to stretch and twist his body at will, while pal Ben Grimm gains immense strength as the Thing. Johnny Storm becomes the Human Torch, able to control and project fire, while his sister Sue becomes the Invisible Woman. Together, the team must harness their new abilities to prevent Doctor Doom from destroying the Earth.",
  shortDescription: "Mr. Fantastic (Miles Teller), the Thing, the Human Torch and the Invisible Woman battle Doctor Doom.",
  topCast: [
  "Miles Teller",
  "Michael B. Jordan",
  "Kate Mara"
  ],
  directors: [
  "Josh Trank"
  ],
  officialUrl: "http://www.fantasticfourmovie.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "1.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG-13"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations",
  "Violence"
  ],
  runTime: "PT01H40M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Fantastic Four (2015)",
  lang: "en"
  },
  uri: "assets/p10854519_p_v5_ac.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T10:45",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=140379&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T13:20",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=140379&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T16:20",
  quals: "Digital Cinema|Closed Captioned",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=140379&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T19:05",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=140379&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T21:40",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=140379&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV006046590000",
  rootId: "10933531",
  subType: "Feature Film",
  title: "Pixels",
  releaseYear: 2015,
  releaseDate: "2015-07-24",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Action",
  "Science fiction",
  "Comedy",
  "Animated",
  "Adventure",
  "Fantasy"
  ],
  longDescription: "When aliens intercept video feeds of classic arcade games and misinterpret them as a declaration of war, they attack Earth, using the games as models. Knowing that he must employ a similar strategy, President Will Cooper (Kevin James) recruits his childhood pal, former video-game champ and home-theater installer Sam Brenner (Adam Sandler), to lead a team of old-school arcade players and a military specialist (Michelle Monaghan) in an all-out battle to save the planet.",
  shortDescription: "Old-school arcade champs must defend the planet from aliens who base their attacks on video games.",
  topCast: [
  "Adam Sandler",
  "Kevin James",
  "Michelle Monaghan"
  ],
  directors: [
  "Chris Columbus"
  ],
  officialUrl: "http://pixelsmovie.tumblr.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG-13"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations"
  ],
  runTime: "PT01H46M",
  animation: "Live action/animated",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Pixels (2015)",
  lang: "en"
  },
  uri: "assets/p10933531_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T10:50",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141217&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T13:40",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141217&d=2015-09-07"
  },
  {
  theatre: {
  id: "10436",
  name: "Baldwin Hills 15 and Xtreme"
  },
  dateTime: "2015-09-07T16:15",
  quals: "Closed Captioned|Digital Cinema",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAWJU&m=141217&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:55",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141217&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:30",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141217&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T17:10",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141217&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T19:50",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141217&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T22:35",
  quals: "Descriptive Video Services",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=141217&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV007170100000",
  rootId: "11487791",
  subType: "Feature Film",
  title: "Ricki and the Flash",
  releaseYear: 2015,
  releaseDate: "2015-08-07",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy drama"
  ],
  longDescription: "It's been a roller-coaster ride for Ricki Rendazzo (Meryl Streep), a one-time wife and mother of three who left her family behind to follow her dreams of rock 'n' roll stardom in California. Now, the singer and guitarist must face the music when she returns home to Indiana to reconnect with ex-husband Pete (Kevin Kline), troubled daughter Julie, engaged son Josh and younger son Adam. Filled with regret, Ricki hopes to find redemption for all of the bad choices that she made in the past.",
  shortDescription: "A rock singer (Meryl Streep) returns home to reconnect with the family that she left behind.",
  topCast: [
  "Meryl Streep",
  "Kevin Kline",
  "Rick Springfield"
  ],
  directors: [
  "Jonathan Demme"
  ],
  officialUrl: "http://www.sonypictures.com/movies/rickiandtheflash/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "PG-13"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations"
  ],
  runTime: "PT01H40M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Ricki and the Flash (2015)",
  lang: "en"
  },
  uri: "assets/p11487791_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "6324",
  name: "Los Feliz 3"
  },
  dateTime: "2015-09-07T14:00",
  barg: false
  },
  {
  theatre: {
  id: "6324",
  name: "Los Feliz 3"
  },
  dateTime: "2015-09-07T17:00",
  barg: false
  },
  {
  theatre: {
  id: "6324",
  name: "Los Feliz 3"
  },
  dateTime: "2015-09-07T21:45",
  barg: false
  }
  ]
  },
  {
  tmsId: "MV005708280000",
  rootId: "10744832",
  subType: "Feature Film",
  title: "Break Point",
  releaseYear: 2014,
  releaseDate: "2014-03-08",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Comedy"
  ],
  longDescription: "A rough around the edges tennis pro is making one final crack at a major doubles tournament. Due to his drinking and on court attitude, other pros shy away from being his partner. He'll have to ask his younger brother for help if he wants to succeed.",
  shortDescription: "A tennis pro wanting to take one final crack at a major tournament looks to his brother for help.",
  topCast: [
  "Jeremy Sisto",
  "David Walton",
  "Amy Smart"
  ],
  directors: [
  "Jay Karas"
  ],
  officialUrl: "http://www.thebreakpointfilm.com/",
  qualityRating: {
  ratingsBody: "TMS",
  value: "2.5"
  },
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations"
  ],
  runTime: "PT01H30M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Break Point (2014)",
  lang: "en"
  },
  uri: "assets/p10744832_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T11:50",
  quals: "AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=138820&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T14:10",
  quals: "AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=138820&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T16:35",
  quals: "AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=138820&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T19:05",
  quals: "AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=138820&d=2015-09-07"
  },
  {
  theatre: {
  id: "8100",
  name: "AMC Universal Citywalk Stadium 19"
  },
  dateTime: "2015-09-07T21:30",
  quals: "AMC Independent",
  barg: false,
  ticketURI: "http://www.fandango.com/tms.asp?t=AAAWX&m=138820&d=2015-09-07"
  }
  ]
  },
  {
  tmsId: "MV007544580000",
  rootId: "11738496",
  subType: "Feature Film",
  title: "Meru",
  releaseYear: 2015,
  releaseDate: "2015-01-23",
  titleLang: "en",
  descriptionLang: "en",
  entityType: "Movie",
  genres: [
  "Documentary"
  ],
  longDescription: "Believe in the impossible.",
  shortDescription: "Three elite climbers fight through obsession and loss as they struggle to climb Mount Meru.",
  directors: [
  "Jimmy Chin",
  "Elizabeth Chai Vasarhelyi"
  ],
  officialUrl: "http://www.merufilm.com/",
  ratings: [
  {
  body: "Motion Picture Association of America",
  code: "R"
  }
  ],
  advisories: [
  "Adult Language",
  "Adult Situations"
  ],
  runTime: "PT01H30M",
  preferredImage: {
  width: "240",
  height: "360",
  caption: {
  content: "Meru (2015)",
  lang: "en"
  },
  uri: "assets/p11738496_p_v5_aa.jpg",
  category: "Poster Art",
  text: "yes",
  primary: "true"
  },
  showtimes: [
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T10:50",
  quals: "Handicap Accessible|Reserved Seating",
  barg: true
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T13:00",
  quals: "Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T15:10",
  quals: "Reserved Seating|Handicap Accessible",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T17:25",
  quals: "Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T19:40",
  quals: "Handicap Accessible|Reserved Seating",
  barg: false
  },
  {
  theatre: {
  id: "9393",
  name: "The Landmark"
  },
  dateTime: "2015-09-07T21:50",
  quals: "Handicap Accessible|Reserved Seating",
  barg: false
  }
  ]
  }
  ]
  console.log($scope.list);
})


;
