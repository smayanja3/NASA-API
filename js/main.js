//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
 

document.querySelector('button').addEventListener('click',weatherWatch)
/// vvvvv on page load the video control 
document.querySelector('img').style.display = 'none'
document.querySelector('video').style.display = 'none'

function weatherWatch(){
    const inputVal = document.querySelector('input').value.replaceAll('-','').slice(2)
    
    const url = `https://science.nasa.gov/wp-json/wp/v2/apod-basic/${inputVal}`
    //document.querySelector('h2').innerText
    fetch(url)
        .then(res => res.json())
        .then((data) => {
            //console.log(data)
            document.querySelector('h2').innerText = data.title
            if(data.media_type === 'video'){
                let basicHTML = data.basic_html;
                let parser = new DOMParser();

                let doc = parser.parseFromString(basicHTML, 'text/html');
                let videoLink = doc.querySelector('source').src;
                console.log(videoLink);
                document.querySelector('video').src = videoLink;
                document.querySelector('video').style.display = 'block'
                document.querySelector('img').style.display = 'none'

            }else if(data.media_type === 'image'){
                document.querySelector('img').src = data.hdurl
                document.querySelector('img').style.display = 'block'
                document.querySelector('video').style.display = 'none'

            }

            document.querySelector('h3').innerHTML = data.explanation
        
        }) 
 }
//h2 name.   document.querySelector('h2').innerText = data.....
//img src
//h3 description

//MAY 24TH 2026 