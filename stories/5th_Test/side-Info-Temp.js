import "./side-Info-Temp.css"

export const sideInfo = (sideIconUrl, sideText, width, height, IconMarginLeft, TextMarginLeft, color="#000", bRadius=0, itemStyle="") => `
    <div class="sideIconDiv ${itemStyle}" >
        <div class="imageHolder">
            <img
                src="${sideIconUrl}" 
                alt="A profile Icon" 
                style="width:${width}px; 
                    height:${height}px; 
                    margin-left:${IconMarginLeft}px;
                    border-radius:${bRadius}px"
            >
        </div>
        
        <span class="sideText" style="margin-left:${TextMarginLeft}px; color:${color}">${sideText}</span>
    </div>
`

// export const sideInfo2 = (sideIconUrl, sideText) => `
//     <div class="sideIconDiv">        
//         <img class="imageHolder" src="${sideIconUrl}" alt="Shop Icon">
//         <span class="sideText ">${sideText}</span>
//     </div>
// `
