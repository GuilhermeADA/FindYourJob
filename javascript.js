      $(document).ready(function() {
 
        $("#owl-exemplo1").owlCarousel({
            
            paginationNumbers: true,
            navigation : true, // Show next and prev buttons
            navigationText: ["Anterior","Proximo"],
            slideSpeed : 400,
            paginationSpeed : 400,
            singleItem:true,
            autoPlay: 4000,
            stopOnHover: true,

        });
       
      }); 