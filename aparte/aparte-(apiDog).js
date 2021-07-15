// function getDog() { 
//     var selectedDog = $(".dog-selector").val(); 
//     dogURL = selectedDog.replace(/-/g, '/'); 
//     $.getJSON("https://dog.ceo/api/breed/" + dogURL + "/images/random", function (result) { 
//         $("#demo-image").html("<img src='" + result.message + "'>"); 
//     }); 
// }


// function loadDogs() {
//     $.getJSON("https://dog.ceo/api/breeds/list/all", function (result) {
//         var breeds = result.message; 
//         firstDog = Object.keys(breeds)[0]; 
//         $.each(breeds, function (dog) {
//             if (breeds[dog].length >= 1) {
//                 for(let i in breeds[dog]) {
//                       $(".dog-selector").append(`<option value="${dog}-${breeds[dog][i]}">${breeds[dog][i]} ${dog}</option>`);
//                     } 
//                 }

//             else if (breeds[dog].length < 1) {
//                  $(".dog-selector").append(`<option value="${dog}">${dog}</option>`);
//         }
//         }); 
        
//         $.getJSON(`https://dog.ceo/api/breed/"${firstDog}"/images/random`, function (result) {
//              $("#demo-image").html(`<img src="${result.message}">`); 
//     });
//     });
// }



// $(".dog-selector").change(function () {
//      $(".dog-selector").each(function () {
//           getDog(); 
//         }); 
//     }); 
    
//     $("#peticion").click(function () {
//          getDog(); 
//         }); 
        
//         $(document).ready(function () {
//              loadDogs(); 
//             });


            // const result = (result) => {
            //     $("#demo-image").html("<img src='" + result.message + "'>");
            // }
            // const notFound = () =>{
            //     $("#demo-image").html("no encontrado");
            //     $("#demo-image").
            // }
            // fetch("https://dog.ceo/api/breed/" + dogURL + "/images/random")
            // .then(result)
            // .catch()