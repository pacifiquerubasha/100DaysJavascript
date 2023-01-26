

const stars = document.querySelectorAll('.banner i');

stars.forEach((star)=>{
    const randomTranslate = Math.floor(Math.random() * 100);
    const randomRotationDegree = Math.floor(Math.random() * 360)
    console.log(randomTranslate, randomRotationDegree)

    star.style.transform = `translateX(${randomTranslate}vh) rotate(${randomRotationDegree}deg)`

})