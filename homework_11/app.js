var rootNode = document.getElementById("root");

// Your code goes here

rootNode.appendChild(processStructure(structure));


function processStructure(structure) {
    let list = document.createElement("ul");

    if (structure) {
        structure.forEach(e => {
            let element = createElement(e.title, e.folder);
            if (e.folder) element.appendChild(processStructure(e.children));
            list.appendChild(createListItem(element));
        });
    } else {
        list.appendChild(createListItem(createEmptyFolderElement()));
    }

    return list;
}

function createElement(title, isFolder) {
    let element = document.createElement("div");

    let p = document.createElement("p");
    let icon = document.createElement("i");
    icon.innerHTML = isFolder ? "folder" : "insert_drive_file";
    icon.className = `material-icons ${getElementType(isFolder)}`;
    p.appendChild(icon);

    let span = document.createElement("span");
    span.innerHTML = title;
    p.appendChild(span);

    if (isFolder) {
        p.addEventListener("click", e => {
            let isOpen = toggleVisibilityClass(element);
            icon.innerHTML = isOpen ? "folder_open" : "folder";
        });
    }

    element.appendChild(p);

    return element;
}

function createEmptyFolderElement() {
    let emptyFolder = document.createElement("span");
    emptyFolder.innerHTML = "Folder is empty";
    emptyFolder.className = "empty-folder";
    return emptyFolder;
}

function createListItem(innerElement) {
    let li = document.createElement("li");
    li.appendChild(innerElement);
    return li;
}

function getElementType(isFolder) {
    return isFolder ? "folder" : "file";
}

function toggleVisibilityClass(element) {
    element.className = element.className ? "" : "open";
    return element.className;
}

