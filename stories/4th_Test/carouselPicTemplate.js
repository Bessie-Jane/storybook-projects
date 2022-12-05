import "./carousel.css";

export const pictureTemplate = (imgUrl, hairStyle, price) => `
    <div class="carouselImg" style="background-image: url(${ imgUrl })">
        <div class="styleAndPriceDiv">
            <div class="style">${ hairStyle }</div>
            <div class="price">$ ${ price }</div>
        </div>
    </div>
`