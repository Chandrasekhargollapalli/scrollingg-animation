const articles = document.querySelectorAll('.article')


window.addEventListener('scroll', checkArticle)

checkArticle()

function checkArticle(){
    let endLine = window.innerHeight * 0.7;

    articles.forEach((article) => {
       
        let articleTop = article.getBoundingClientRect().top
        if(articleTop < endLine){
            article.classList.add('show')
        }else {
            article.classList.remove('show')
        }
    })
}
