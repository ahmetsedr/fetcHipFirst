
fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()
).then(responseJS => {
    for (let i = 0; i < responseJS.length; i++) {

        document.write("<div class='container'><h2>" + responseJS[i].name + " " + responseJS[i].username + "</h2><p>" + responseJS[i].website + "</p>");
        document.write("<div class='card' style='width:400px'><img class='card-img-top' src='https://www.w3schools.com/bootstrap4/img_avatar1.png' alt='Card image'style='width:100%'>");
        document.write("<div class='card-body'><p class='card-text'>" + responseJS[i].phone + " " + responseJS[i].email + " " + responseJS[i].phone + " id :  " + responseJS[i].id + "</p><a href='#' class='btn btn-primary'>See Profile</a></div>");
        document.write("</div>");
    }
    console.log(responseJS[0]);

})



{/* CSS'i uygulayamadım oda sonraki güne kaldı :/ */ }