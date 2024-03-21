const arrImg = document.querySelectorAll('div img');
const next = document.querySelector('.btn-next');
const prev = document.querySelector('.btn-prev');
const btn = document.querySelector('.btnImg');

next.addEventListener('click', (e) => {
    let returnFlag = false;
    arrImg.forEach((img,index,arr) => {
        if (!returnFlag) {
            if (index !== (arr.length - 1)) {
                if (img.style.display == 'block') {
                    img.style.display = 'none';
                    arr[++index].style.display = 'block';
                    returnFlag = true;
                }
            } else {
                if (img.style.display == 'block') {
                    img.style.display = 'none';
                    arr[0].style.display = 'block';
                    returnFlag = true;
                }
            }
        }
    })
});
prev.addEventListener('click', (e) => {
    let returnFlag = false;
    arrImg.forEach((img,index,arr) => {
        if (!returnFlag) {
            if (index !== 0) {
                if (img.style.display == 'block') {
                    img.style.display = 'none';
                    arr[--index].style.display = 'block';
                    returnFlag = true;
                }
            } else {
                if(img.style.display == 'block') {
                    img.style.display = 'none';
                    arr[arr.length - 1].style.display = 'block';
                    returnFlag = true;
                }
            }
        }
    })
});

btn.addEventListener('click', (e) => {
    let target = e.target.closest('.btn');
    arrImg.forEach((img) => {
        img.style.display = 'none';
        if (img.id == target.id) {
            img.style.display = 'block';
        }
    })
})