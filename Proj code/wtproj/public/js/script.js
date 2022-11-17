const _html = `
<div class="nav">
<h2>Logged in as: <span id="username">Username</span></h2>
<a href="#" id="logout">
    <h2>Log out</h2>
</a>
</div>
<h1 class="collapsible">Sharks</h1>
<div class="picture-container card-container hide">
<div class="card">
    <img src="./assets/sharks/aman-gupta.jpg" alt="">
    <div class="container">
        <h2>Aman Gupta</h2>
    </div>
</div>
<div class="card">
    <img src="./assets/sharks/anupam_mittal.jpg" alt="">
    <div class="container">
        <h2>Anupam Mittal</h2>
    </div>
</div>
<div class="card">
    <img src="./assets/sharks/ashneer-grover.jpg" alt="">
    <div class="container">
        <h2>Ashneer Grover</h2>
    </div>
</div>
<div class="card">
    <img src="./assets/sharks/ghazal.jpg" alt="">
    <div class="container">
        <h2>Ghazal Alagh</h2>
    </div>
</div>
<div class="card">
    <img src="./assets/sharks/namita-thapar.webp" alt="">
    <div class="container">
        <h2>Namita Thapar</h2>
    </div>
</div>
<div class="card">
    <img src="./assets/sharks/peyush-bansal.jpg" alt="">
    <div class="container">
        <h2>Peyush Bansal</h2>
    </div>
</div>
<div class="card">
    <img src="./assets/sharks/Vineeta-Singh.webp" alt="">
    <div class="container">
        <h2>Vineeta Singh</h2>
    </div>
</div>
</div>
<h1>Start-up Fundings in Shark Tank</h1>
<div class="picture-container">
<form>
    <div>
        <label for="totalfunded.jpeg">Total funded bar plot</label>
        <input type="checkbox" checked name="show" id="totalfunded.jpeg">
    </div>
    <div>
        <label for="piechart.jpeg">Startups funded pie chart</label>
        <input type="checkbox" checked name="show" id="piechart.jpeg">
    </div>
    <div>
        <label for="askvaluation.jpeg">Ask valuation box plot</label>
        <input type="checkbox" checked name="show" id="askvaluation.jpeg">
    </div>
    <div>
        <label for="dealvaluation.jpeg">Deal valuation box plot</label>
        <input type="checkbox" checked name="show" id="dealvaluation.jpeg">
    </div>
    <div>
        <label for="dealequity.jpeg">Deal equity box plot</label>
        <input type="checkbox" checked name="show" id="dealequity.jpeg">
    </div>
    <div>
        <label for="deals_offered.jpeg">Deals offered pie chart</label>
        <input type="checkbox" checked name="show" id="deals_offered.jpeg">
    </div>
</form>
</div>
<div class="picture-container">
<h2>Start Ups Funded (Bar plot)</h2> <img src="./assets/totalfunded.jpeg" alt="" srcset="">
<div>
    <p>
        Bar plot shows each data category in a frequency distribution and estimates key values at glance. Here
        by looking at the bar plot, we can make the conclusion that the start-ups funded the highest were 29 and
        that by Shark Aman Gupta while least funded start-ups were by Ghazal Alag (7). The data for rest all
        Sharks is as follows:

        <li>Peyush: 16 deals</li>
        <li>Namita: 25 deals</li>
        <li>Ashneer: 24 deals</li>
        <li>Anupam: 24 deals</li>
        <li>Vineeta: 11 deals</li>
    </p>
</div>
</div>
<div class="picture-container">
<h2>Start Ups Funded (Pie chart)</h2> <img src="./assets/piechart.jpeg" alt="" srcset="">
<div>
    <p>Pie chart is used to analyze this data as it displays relative proportions of multiple classes of data
        and size of the circle can be made proportional to the total quantity it represents. It is very
        convenient as it can summarize a large dataset in visual form which can be easily understood and
        well-interpreted by even naïve people.</p>
    <p>From the above pie chart it can be concluded that Shark Aman Gupta (CEO of boAt) has funded most
        start-ups that came to pitch their idea.</p>
    <p>Whereas, Shark Ghazal Alag (CEO of Mama earth) has contributed least in the season. </p>
</div>
</div>
<div class="picture-container">
<h2>Start Up Ask Valuation</h2> <img src="./assets/askvaluation.jpeg" alt="" srcset="">
<p>From the above box plot we can see that almost all the companies who came to pitch their idea in shark tank,
    have a valuation in the range of 0 to 60 crores which is 6000 lakhs. But we can see that there are few
    outliers in the plot in which the valuation of company varies like for example one is having that of 300cr
    one is having around 400cr and the ice cream company named Gopal's 56 had the highest valuation among all
    the companies which was 1200 cr or 120000 lakhs.</p>
</div>
<div class="picture-container">
<h2>Start Up Deal Valuation</h2> <img src="./assets/dealvaluation.jpeg" alt="" srcset=""> <!-- <p></p> -->
</div>
<div class="picture-container">
<h2>Start Up Deal Equity</h2> <img src="./assets/dealequity.jpeg" alt="" srcset="">
<div>
    <p>From the above box plot it can be concluded that, most of the deals that were offered by the sharks were
        in
        exchange for about 3 to 15% of the equity (that is portion/ownership of the company). But few outliers
        are
        there in this case. These are those deals where the equity taken by the shark was higher than the
        average
        that is <li>40% for the company Hammer lifestyle.</li>
        <li>50% for Isak Fragrances.</li>
        <li>75 % for Sid07 Designs.</li> These were the outliers.
    </p>
</div>
</div>
<div class="picture-container">
<h2>Deals Offered</h2> <img src="./assets/deals_offered.jpeg" alt="" srcset="">
<div>
    <p>From the above pie chart it can be concluded that for more than 60% of the total business ideas that were
        pitched on the show, deal (fund) was done by the entrepreneurs and the sharks for money in exchange for
        a
        certain equity(ownership) of their company.</p>
    <p> Moreover, there were also many companies which didn't got any
        funding as the sharks didn't seem the idea that good. The red portion in the pie chart corresponds to
        the
        pitches that didn't receive funding and the blue portion corresponds to those who got the funds. </p>
</div>
</div>
`

const _html2 = `<meta http-equiv="refresh" content="0; URL=/unauthorized.html" />`
const _html3 = `<meta http-equiv="refresh" content="0; URL=/login.html" />`

if(window.localStorage.getItem('username') != null) {
    document.body.innerHTML = _html
    document.getElementById('username').innerText = window.localStorage.getItem('username')

    document.getElementById('logout').addEventListener('click', (e) => {
        e.preventDefault()
        window.localStorage.removeItem('username')
        window.localStorage.removeItem('token')
        document.body.innerHTML = _html3
    })

    const allids = []
    document.querySelector('form').querySelectorAll('input[type="checkbox"').forEach((checkbutton) => {
        allids.push(checkbutton.id)
        checkbutton.addEventListener('click', (event) => {
            console.log(event.target.id)
            // allids.forEach(id => {
            //     document.querySelector(`img[src="./assets/${id}"`).parentElement.classList.add('hide')
            // })
            if(event.target.checked) {
                document.querySelector(`img[src="./assets/${event.target.id}"`).parentElement.classList.remove('hide')
            } else {
                document.querySelector(`img[src="./assets/${event.target.id}"`).parentElement.classList.add('hide')
            }
        })
    })

    let coll = document.getElementsByClassName("collapsible");

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener('click', (event) => {
            event.target.classList.toggle('active');
            let content = event.target.nextElementSibling;
            content.classList.toggle('hide')
        });
    }
} else {
    document.body.innerHTML = _html2
}