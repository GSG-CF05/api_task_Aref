var afterr=['','t3_eb2lbc','t3_92uhu7','t3_t53k93','t3_r2h5po','t3_hh9cwp','t3_geaerh','t3_6llocd']
var i=0;


function fetchMemes(after){
    fetch(`https://www.reddit.com/r/programmerhumor/top.json?t=all&after=${after}`)
    .then((response) => response.json())
    .then((object) => {
        let page= object.data.children
        
        page.forEach((item)=>{
            if(item.data.post_hint=="image"){
                console.log('ayy')
                let title=item.data.title;
                let imgg=item.data.url_overridden_by_dest;
                console.log(imgg)
                let memeDiv=document.createElement('div');
                memeDiv.classList.add('memeStyle');
                let headerr=document.createElement('h4');
                headerr.innerText=title;
                let memeImg=document.createElement('img');
                memeImg.src=imgg;
                memeImg.classList.add('imgHolder');
                memeDiv.appendChild(headerr);
                memeDiv.appendChild(memeImg);
                document.getElementById('content').appendChild(memeDiv)
            }
            
        })

    })
    .catch(error =>console.log(error));
    

}
fetchMemes(afterr[i]);
document.querySelector('button').addEventListener('click',()=>{i++; fetchMemes(afterr[i])})