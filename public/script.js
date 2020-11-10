const source_url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const data = [];

fetch(source_url).then(blob => blob.json()).then(info => data.push(...info));
console.log(data);

function matchFinding(word, data_param){
    return data_param.filter(item => {
        const reword = new RegExp(word, 'gi');
        return item.city.match(reword) || item.category.match(reword)
    });
}

function displayMatches(){
    const matcharray = matchFinding(this.value, data);
    console.log(matcharray);
}

const searchInput = document.querySelector('.search');


document.body.addEventListener('keyup', displayMatches);
