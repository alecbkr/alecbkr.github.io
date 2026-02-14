// function showAddNew();

let addNewToggle = false;
let filterToggle = false;
let articleFilterTypes = {
    opinion: true,
    recipe:  true,
    update:  true
};

function showFilter() {
    if (filterToggle == false) {
        document.getElementById("filterContent").style.display = "block";
        filterToggle = true;

        if (addNewToggle == true) {
            showAddNew();
        }
    }
    else {
        document.getElementById("filterContent").style.display = "none";
        filterToggle = false;
    }
}

function filterArticles() {
    filterArticle("opinionCheckbox", "opinion");
    filterArticle("recipeCheckbox", "recipe");
    filterArticle("updateCheckbox", "update");
}

function filterArticle(checkboxID, classname) {
    const newFilterVal = document.getElementById(checkboxID).checked;
    if (articleFilterTypes[classname] != newFilterVal) {
        const display = newFilterVal ? "block" : "none";

        for (const article of document.getElementsByClassName(classname)) {
            article.style.display = display;
        }
        articleFilterTypes[classname] = newFilterVal;
    }
}


function showAddNew() {
    if (addNewToggle == false) {
        document.getElementById("newContent").style.display = "block";
        addNewToggle = true;
        
        if (filterToggle == true) {
            showFilter();
        }
    }
    else {
        document.getElementById("newContent").style.display = "none";
        addNewToggle = false;
    }
}

function addNewArticle() {
    const title = document.getElementById("inputHeader").value;
    const type  = document.querySelector('input[name="articleType"]:checked');
    const text  = document.getElementById("inputArticle").value;

    switch (type.id) {
        case "opinionRadio": category = "opinion"; break;
        case "recipeRadio": category = "recipe"; break;
        case "lifeRadio": category = "update"; break;
    }

    const newArticle = document.createElement("article");
    newArticle.classList.add(category);

    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = category[0].toUpperCase() + category.slice(1);

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const p = document.createElement("p");
    p.textContent = text;

    newArticle.append(marker, h2, p);
    document.getElementById("articleList").appendChild(newArticle);
}

