var db = [
    {name:'Kirstan Hersh', email: 'kirhersh@gmail.com', age:34},
    {name:'Olivia Dannem', email: 'olidan@gmail.com', age:27},
    {name:'Grag Makinsi', email: 'makinsi@gmail.com', age:56}
]; 

(function Avatars (db) {
    
    this.init = function () {
        this.generateList();
        this.enterUser();
    };

    this.generateList = function () {

        var parent = document.querySelector('#parent_avatars');
        var template = '';

        for (var i = 0; i < db.length; i++) {

            template += '<div class="col-sm-4">';
            template +=      '<div class="card">';
            template +=          '<div class="card-delete" data-card="'+i+'">x</div>';
            template +=          '<div class="card-block">';
            template +=              '<h3 class="card-title">'+ db[i].name +'</h3>';
            template +=              '<p class="card-text"><strong>Email:</strong>'+ db[i].email +'</p>';
            template +=              '<p class="card-text"><strong>Age:</strong>'+ db[i].age +'</p>';
            template +=          '</div>';
            template +=      '</div>';
            template += '</div>';

        }

        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin', template);
        deleteCard();

    }

    this.enterUser = function () {

        function grabUser () {


            var name = document.querySelector('#user_name').value;
            var email = document.querySelector('#user_email').value;
            var age = document.querySelector('#user_age').value;

            list = [name, email, age];

            if (userValidate(list)) {
                document.querySelector('#myForm').reset();
                db.push({'name': name, 'email': email, 'age': age});
            } else {
                setTimeout(
                    function () {
                        document.querySelector('#error').style.display = 'block';
                    }, 1000
                );
            }

        }
        
        document.querySelector('#myForm').addEventListener('submit', function (e) {
            e.preventDefault();

            grabUser();
            generateList();
        });
    }

    this.userValidate = function(input){

        for (var i = 0; i < input.length; i++) {
            if (input[i] == ""){
                return false;
            }else{
                return true;
            }
        }

    }

    this.deleteCard = function (argument) {
        var buttons = document.querySelectorAll('.card-delete');

        function deleteThis (element) {
            var obj = parseInt(element.getAttribute('data-card'));
            db.splice(obj, 1);
            generateList();
        }

        
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function (e) {
                deleteThis(this);
            });
        }
    }

    this.init();

})(db);



