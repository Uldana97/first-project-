const second = () =>{

    const swiper = new Swiper(".secondSwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        spaceBetween: 30,
    
        // effect: 'fade',
    
        // effect: "cube",
        // grabCursor: true,
        // cubeEffect: {
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94,
        // },
    
        // effect: 'flip',
        // grapCursor: true,
    
        // effect: 'cards',
        // grapCursor: true,
    
    
        // autoplay: {
        //     delay:2500,
        //     diabaleOnInteraction: true,
        // }
    
        // slidesPerView: 3,
    
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },

      });



      const data = [
        {
          name: 'ЛОФТ',
          img: 'https://static.tildacdn.com/tild6166-3934-4439-a638-303037656261/_4.jpg'
        },
        {
          name: 'МОДЕРН',
          img: 'https://www.ivd.ru/images/cache/2020/7/7/fit_930_519_false_crop_1800_1012_0_123_q90_1394641_9ab23ee7e85d710dd67422b0b.jpeg'
       
        },
        {
          name: 'КЛАССИЦИЗМ',
          img: 'https://heshi-design.com/images/stil-klassiczm--2-.jpg'
        },
        {
          name: 'ХАЙ-ТЕК',
          img: 'https://www.pitershopsvet.ru/assets/images/press-service/style-hi-tech-v-interiere/1.jpg'
        }
      ]
    
    
    
    
    
    
    const output = document.querySelectorAll('.swiper-wrapper')[1]
    
    
     data.forEach(el => {
        const slide =document.createElement('div')
        const text = document.createElement('p')
        const image = document.createElement('img')
    
    
        slide.className= 'swiper-slide'
        text.textContent = el.name
        image.src = el.img
    
        output.append(slide)
        slide.append(text,image)
    
        
    });
    
    



}

second()




 
   
    