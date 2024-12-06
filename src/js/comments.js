export const comments = () => {
    const blokComment = document.querySelector('.comments-container');
    const elemComment = document.querySelectorAll('.comment-item');
    const usersArr = [];

    // const showLoading = () => {
    //     const loadingBlock = document.createElement('div');
    //     loadingBlock.classList.add('loading-block');
    
    //     const loadingImg = document.createElement('img');
    //     loadingImg.setAttribute('src', './public/images/loading.gif'); // Замените на ваш путь
    //     loadingImg.setAttribute('alt', 'Загрузка...');
    //     loadingImg.classList.add('loading-image');
    
    //     loadingBlock.appendChild(loadingImg);
    //     blokComment.appendChild(loadingBlock);
    
    //     return loadingBlock; // Возвращаем, чтобы позже удалить
    // };

    const getData = async () => {
  //      const loadingBlock = showLoading();

        const responseUsers = await fetch('./src/comments.json');
        const users = await responseUsers.json();

        for (let i=0; i<users.comments.length; i++) {
            const user = users.comments[i];
            usersArr.push(user);
        }

 //       loadingBlock.remove(); // Удаляем блок с загрузкой

       return usersArr
    };

    const rotateComments = () => {
        let currentIndex = Math.floor(Math.random() * usersArr.length); // Индекс текущего комментария
        const interval = 20000; // 20 секунд

        const imgAvatar = () => {
            if (usersArr[currentIndex].image == '') {
                usersArr[currentIndex].image = 'avatar.jpg'
            }
        };
    
        setInterval(() => {
            // Получаем первый комментарий
            const firstComment = blokComment.firstElementChild;
    
            // Если есть комментарии на странице
            if (firstComment) {
                // Удаляем первый комментарий
                blokComment.removeChild(firstComment);

                let two;

                if (currentIndex % 2 == 0) {
                    two = false
                } else {
                    two = true
                };

                imgAvatar();
    
                // Добавляем новый комментарий в конец
                if (two == true) {
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
    
                    // Увеличиваем индекс текущего комментария
                    currentIndex = (currentIndex + 1) % usersArr.length; // Зацикливаем индекс
                }

                if (two == false) {
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
    
                    // Увеличиваем индекс текущего комментария
                    currentIndex = (currentIndex + 1) % usersArr.length; // Зацикливаем индекс
                }
            }
        }, interval);
    };

    getData()
        .then(() => {
            usersArr.forEach((user, index) => {
    
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

            rotateComments();
            
        });       

}