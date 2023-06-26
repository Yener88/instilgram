async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


function show() {
    document.getElementById('postcontainer').innerHTML += /*html*/``;

    for (let i = 0; i < posts.length; i++) {
        let showroom = posts[i];

        document.getElementById('postcontainer').innerHTML += /*html*/`
        <div class="maincontent">
            <div class="postingheader">
                <div class="postheaderpostion"><img class="imgheader pointer" src="${showroom['imageheader']}">
                <div class="postheaderpostion2 pointer"><b>${showroom['author']}</b> <br> ${showroom['location']}</div></div>
                <div><img class="dotssize pointer" src="img/dots.png"></div>
            </div>
            <div>
                <img class="imginside" src="${showroom['image']}">

            </div>
            <div>
                <div class="iconunderpicpos">
                    <div>
                    <img class="headerimage2 pointer" src="img/iconheader5.png">
                    <img class="headerimage2 pointer" src="img/iconheader2.png">
                    <img class="headerimage2 pointer" src="img/share.png">
                    </div>
                    <div>
                    <img class="headerimage2 pointer" src="img/lesezeichen.png">
                    </div>
                </div>
            </div>
            <div class="paddingleft"><b>Gefällt&nbsp;${showroom['likes']}&nbsp;Mal</b></div>
            <div class="paddingleft"><b>${showroom['author']}</b>&nbsp;${showroom['description']}</div>
            <div id="comments${i}"></div>
            <div class="commentinputsec">
                <img class="headerimage2 pointer" src="img/happy.png">
                <input class="inputcommentsec" id="input${i}" type="text" placeholder="Kommentieren...">
                <button class="pointer" onclick="addPost(${i})">Posten</button>
            </div>
           
        </div>  
        `;
    }
}


function addPost(i) {
    let input = document.getElementById('input' + i);
    posts[i]['comments'].push(input.value);
    input.value = '';
    showComments(i);
}

function showComments(i) {
    let comment = document.getElementById('comments' + i);
    let post = posts[i];
    comment.innerHTML = '';
    for (let i = 0; i < post['comments'].length; i++) {
        comment.innerHTML += /*html*/`
        <div class="paddingleft">
        <b>Yener_Bas</b>&nbsp;${post.comments[i]}
        </div>
         `;
    }
}


