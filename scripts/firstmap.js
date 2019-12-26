var initMap = () => {
    var options = {
        zoom : 11.3,
        center : { lat:21.2214 ,lng:81.6296 }
    }
    // new Map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // // add marker
    // var marker = new google.maps.Marker({
    //     position:{lat: 21.1632, lng: 81.6591},
    //     map:map
    //     //icon:''
    // });

    // var infoWindow = new google.maps.InfoWindow({
    //     content: '<h1> Government Engineering College Raipur</h1>'
    // });

    // marker.addListener('click', ()=> {
    //     infoWindow.open(map, marker);
    // })

    var markers = [
        {
            coords : {lat: 21.1632, lng: 81.6591},
            content : '<h1> Government Engineering College Raipur</h1>'            
        },
        {
            coords : {lat: 21.2497, lng: 81.6050},
            content : '<h1>NIT Raipur</h1>'
        }
    ];

    for(let i=0;i<markers.length;i++) {
        addMarker(markers[i]);
    }

    function addMarker(props) {
        var marker = new google.maps.Marker({
        position:props.coords,
        map:map
        //icon:''
        });

        if(props.content){   
            var infoWindow = new google.maps.InfoWindow({
            content: props.content
            }); 
        }

        marker.addListener('click', ()=> {
            infoWindow.open(map, marker);
        })
    }

    // listen for click on map

    google.maps.event.addListener(map, 'click', event => {
        addMarker({coords:event.latLng});
    })
      
}    