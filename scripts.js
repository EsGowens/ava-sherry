barba.use(barbaCss)

barba.init({
    transitions: [
        {
            name: 'fade',
            beforeEnter ({ current, next, trigger }) {
                
                const headerLinks = document.querySelectorAll("header a")

                headerLinks.forEach(link => {
                    link.classList.remove("selected")
                })

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }
        }
    ]
})