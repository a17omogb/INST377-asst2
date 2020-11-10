const source_url = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const data = [];

fetch(source_url).then(blob => blob.json()).then(info => data.push(...info));
console.log(data);

function matchFinding(word, data_param){
    return data_param.filter(item => {
        const reword = new RegExp(word, 'gi');
        return item.city.match(reword) || item.category.match(reword) || item.zip.match(reword);
    });
}

function displayMatches(){
    const matcharray = matchFinding(this.value, data);
    const res = matcharray.map(item => {
        return `
            <li>
                <span class = "name">Name: ${item.name}</span>
                <span class = "category">Category: ${item.category}</span>
                <span class="address">Address: ${item.address_line_1}, ${item.city}, ${item.state} ${item.zip}
            </li>
        `;
    });
    console.log(matcharray);
    suggestions.innerHTML = res;
}

const searchInput = document.querySelector('.textentry');
const suggestions = document.querySelector('.flex-outer');

searchInput.addEventListener('keyup', displayMatches);

