var mynodelist = document.getElementsByTagName("li");
    var close = document.getElementsByClassName("close");
    var list = document.querySelector('ul');
    document.addEventListener('DOMContentLoaded', function() {
        loadList();
    });


    for (var i = 0; i < mynodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        mynodelist[i].appendChild(span);
    }

    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            saveList();

        };
    }

    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
            saveList();
        }
    });

    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("taskInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        saveList();
        if (inputValue === '') {
            alert("Write something to do!");
        } else {
            list.appendChild(li);
            saveList();

        }

        document.getElementById("taskInput").value = '';

        var span = document.createElement("span");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        span.onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }; 

    }

    function loadList(){
        var saveList= localStorage.getItem('taskList');
        if (savedList) {
            list.innerHTML = savedList;
            addEventListeners();
            
        }
    }

    function saveList() {
        localStorage.setItem('taskList', list.innerHTML);
        
    }
    
    
    function Enter(event) {
        if (event.key === "Enter") {
            newElement();
            saveList();
        }
    }
    document.addEventListener('keydown', Enter);
    addEventListeners();