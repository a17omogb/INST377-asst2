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
    const res = matcharray.map(item => {
        return `
            <li>
                <span class = "name"> ${item.name}, ${item.category}</span>
            </li>
        `;
    });
    console.log(matcharray);
}

const searchInput = document.querySelector('.textentry');


searchInput.addEventListener('keyup', displayMatches);
