export const comments = () => {
    let container;

    const blokComment = document.querySelector('.comments-container');
    const elemComment = document.querySelectorAll('.comment-item');
    const loadingBlock = document.createElement('div');
    const usersArr = [];
    let numberArr = [];
    let currentIndex;
    let excludedComments = [];

    const showLoading = () => {
        loadingBlock.classList.add('loading-block');

        const loadingImg = document.createElement('img');
        loadingImg.setAttribute('src', './public/images/users/loading.gif');
        loadingImg.setAttribute('alt', 'Загрузка...');
        loadingImg.classList.add('loading-image');

        loadingBlock.appendChild(loadingImg);
        container.appendChild(loadingBlock);
    };

    const getData = async () => {
        const responseUsers = await fetch('./src/comments.json');
        const users = await responseUsers.json();

        for (let i = 0; i < users.comments.length; i++) {
            const user = users.comments[i];
            usersArr.push(user);
        }

        return usersArr
    };

    const rotateComments = () => {
        const randomIndex = Math.floor(Math.random() * numberArr.length); 
        const interval = 20000; 

        const imgAvatar = () => {
            if (usersArr[currentIndex].image == '') {
                usersArr[currentIndex].image = 'avatar.jpg'
            }
        };

        currentIndex = numberArr[randomIndex];

        setInterval(() => {
            const firstComment = blokComment.firstElementChild;

            if (firstComment) {
                blokComment.removeChild(firstComment);

                let two;

                if (currentIndex % 2 == 0) {
                    two = false
                } else {
                    two = true
                };

                imgAvatar();

                if (two == false) {
                    const newComment = document.createElement('div');
                    newComment.classList.add('comment-item');
                    newComment.classList.add('row');
                    newComment.classList.add('review-margin-bottom');
                    newComment.innerHTML = `
                        <div class="col-xs-3 col-sm-2">
                        <div class="review-user">
                            <img src="./public/images/users/${usersArr[currentIndex].image}" alt="" class="img-responsive avatar">
                        </div>
                        </div>
                        <div class="col-xs-9 col-sm-9">
                        <div class="review-inner review-orange review-arrow review-arrow-left">
                            <p class="text-normal">${usersArr[currentIndex].author}</p>
                            <p class="text-comment">${usersArr[currentIndex].comment}</p>
                        </div>
                        </div>
                    `;
                    blokComment.appendChild(newComment);

                    currentIndex = (currentIndex + 1) % usersArr.length; 
                };

                if (two == true) {
                    const newComment = document.createElement('div');
                    newComment.classList.add('comment-item');
                    newComment.classList.add('row');
                    newComment.classList.add('review-margin-bottom');
                    newComment.innerHTML = `
                    <div class="col-xs-9 col-sm-9">
                    <div class="review-inner review-gray review-arrow review-arrow-right">
                        <p class="text-normal">${usersArr[currentIndex].author}</p>
                        <p class="text-comment">${usersArr[currentIndex].comment}</p>
                    </div>
                    </div>
                    <div class="col-xs-3 col-sm-2">
                    <div class="review-user">
                        <img src="./public/images/users/${usersArr[currentIndex].image}" alt="" class="img-responsive avatar">
                    </div>
                    </div>
                    `;
                    blokComment.appendChild(newComment);

                    currentIndex = (currentIndex + 1) % usersArr.length; 
                }
            }
        }, interval);
    };

    if (window.location.pathname === '/balkony.html') {
        container = document.querySelectorAll('.container')[8];
    } else {
        container = document.querySelectorAll('.container')[7];
    }

    blokComment.style.display = 'none';
    showLoading();
    setInterval(() => {
        loadingBlock.remove();
        blokComment.style.display = 'block';
    }, 10000);

    setTimeout(() => {
        getData()
            .then(() => {

                usersArr.forEach((user, index) => {
                    numberArr.push(index);
                    console.log(numberArr)

                    if (elemComment[index]) {
                        const comment = elemComment[index];
                        const imgUser = comment.querySelector('.review-user img');
                        const pAuthor = comment.querySelector('.text-normal');
                        const pComment = comment.querySelector('.text-comment');

                        if (user.image != '') {
                            imgUser.setAttribute('src', `./public/images/users/${user.image}`);
                        } else {
                            imgUser.setAttribute('src', `./public/images/users/avatar.jpg`);
                        };
                        if (pAuthor) {
                            pAuthor.textContent = `${user.author}`;
                        };
                        if (pComment) {
                            pComment.textContent = `${user.comment}`;
                        };
                    }
                });

            excludedComments = numberArr.slice(0, 3); 
            numberArr = numberArr.slice(3);

            rotateComments();

            setTimeout(() => {
                numberArr = numberArr.concat(excludedComments); 
                excludedComments = []; 
            }, 60000);

        });
    }, 10000);
}