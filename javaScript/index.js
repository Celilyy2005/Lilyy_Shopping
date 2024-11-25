// Change page start
var allMenu = document.querySelectorAll(".menu ");
for (let i = 0; i < allMenu.length; i++) {
    allMenu[i].addEventListener("click", () => {
        // pel joch tv ler menu muy na trov remove sen
        let menuActive = document.querySelector(".menu.active");

        menuActive.classList.remove("active");
        // remove hx add back-gro jo
        allMenu[i].classList.add("active");


        //  menu name jea page="contact , product" yg jng dak name="" kr bn page="" kr bn
        //yk all menu tv compare all page sen 
        //text content for jab name menu
        let menuName = allMenu[i].textContent.toLowerCase();
        //even kert pel click ler page class
        let allPage = document.querySelectorAll(".page");
        for (let i = 0; i < allPage.length; i++) {
            //jab rk attribute page="" is page not "...."
            let pageName = allPage[i].getAttribute('page');
            // console.log(pageName)
            //if joch ler product name = attribute page="product" bn pit
            if (menuName === pageName) {
                let pageActive = document.querySelector(".page.active");
                pageActive.classList.remove("active");
                allPage[i].classList.add("active");
            }
        }


    })
}
// change page end 

//   view and like product start 
var card = document.querySelectorAll(".card");
card.forEach((value) => {
    let heartIcon = value.querySelector(".heart-icon");
    let numLike = value.querySelector(".numLike");
    let btnView = value.querySelector(".btn_view")
    let active = 1;
    heartIcon.addEventListener("click", () => {
        heartIcon.classList.toggle("bi-heart");
        heartIcon.classList.toggle("bi-heart-fill");

        // Convert the string "11.10k" to a float (e.g., 11.10)
        // let currentLikes = parseFloat(numLike.textContent.replace("k" ,""));
        let currentLikes;
        let suffix = numLike.textContent.includes("k") ? "k" : numLike.textContent.includes("M") ? "M" : "";
        if (suffix === "k") {
            //or use inner text
            currentLikes = parseFloat(numLike.textContent.replace("k", ""));
            if (active == 1) {
                currentLikes += 0.01; //Increase by 0.01k
                active = 0;
            } else {
                currentLikes -= 0.01;
                active = 1;
            }
            numLike.textContent = currentLikes.toFixed(2) + "k";


        }
        else if (suffix === "M") {
            currentLikes = parseFloat(numLike.textContent.replace("M", ""));
            if (active == 1) {
                currentLikes += 0.01;
                active = 0;
            }
            else {
                currentLikes -= 0.01;
                active = 1;
            }
            numLike.textContent = currentLikes.toFixed(2) + "M";

        }
        else {
            if (active == 1) {
                //or use inner text
                numLike.textContent = parseInt(numLike.textContent) + 1;
                //click again -1 vin
                active = 0;
            }
            else {
                numLike.textContent = parseInt(numLike.textContent) - 1;
                active = 1;
            }
        }
    });

    // For view btn
    let close_icon = document.querySelector(".close_icon");
    let boxBlur = document.querySelector(".box-blur");
    let boxModal = document.querySelector(".box-modal");
    let imgShow = document.querySelector(".imgShow");
    let cardTitle = document.querySelector(".box-modal .card-title"); // Target modal title specifically
    btnView.addEventListener("click", () => {
        //alert(1)
        boxBlur.classList.add("active");
        boxModal.classList.add("active");

        // let show img jab img jenh pi box (card) mean para(value)
        imgShow.src = value.querySelector("img").src;
        // Set the title in the modal dynamically
        cardTitle.textContent = value.querySelector(".card-title").textContent;

    });

    boxBlur.addEventListener("click", function () {
        boxBlur.classList.remove("active");
        boxModal.classList.remove("active");
    });
    close_icon.addEventListener("click", () => {
        boxBlur.classList.remove("active");
        boxModal.classList.remove("active");
    })



});


// view and like product end

// search product here
var container = document.querySelector(".container"); // Container for card elements
var searchProduct = document.querySelector(".search_product");
searchProduct.addEventListener("input",()=>{
    let searchValue=searchProduct.value.toLowerCase();
    let matchFound = false;
    //search Hello jenh jrerm 1-5 letters
    // console.log(searchValue);
    for(let i=0;i<card.length;i++){
        let titleSearch = card[i].querySelector(".card-title").textContent.toLowerCase();
       // console.log(titleSearch);
       //if title dl mean doch in value dl yg input ber mean >-1
       if(titleSearch.indexOf(searchValue) > -1){
        //closest() jab yk parent sen 
        card[i].closest(".card_parent").style.display="block";
        matchFound = true; // At least one match found

       }
       else{
        card[i].closest(".card_parent").style.display="none";
        
       }
    }

  // Display "No results" message if no matches are found
  let noResultMessage = document.querySelector(".no-result-message");
  if (!matchFound) {
      if (!noResultMessage) { 
          noResultMessage = document.createElement("p");
          noResultMessage.classList.add("no-result-message");
          noResultMessage.textContent = "No results found";
          container.appendChild(noResultMessage);
      }
  } else if (noResultMessage) {
      noResultMessage.remove(); // Remove message if matches are found
  }
});

function toggleMenu() {
    const menu = document.querySelector('.items');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }

