// Önce sayfamıza çekeceğğimiz json linkini bir değişkene atadım
const Placeholder_url = "https://jsonplaceholder.typicode.com";

// Html kısmında oluşturduğum row div'ini bu kod ile seçtim
const pageCard = document.getElementById("pageCard")


// alt kısımda asenkron olmayan yukarıda ki linklte bulunan json kodlarını çağırdım ve 
// onallrı senkron hale getirdim. Ayrıca aşağıda yukarda atadığım değişkenin içine uses 
// değerini entegre ettim  uses(ödevde istenen değerler linkin içinde kii uses kısmını ekledik) 
async function getTodo() {
    const response = await fetch(Placeholder_url + "/users");
    console.log(response)
    const data = await response.json();

    // Şİmdi bu kısımda ise kartları for of döngüsünün içine sokacak inner html diyip
    // html sayfamıızn iççine ekleyeceğim 
    for (user of data) {
        pageCard.innerHTML += `
        <div class=" col-lg-6">
        <div class="card border-success mb-3">
        <div class="card-header bg-transparent border-success">kullanıcı ismi, kendi ismi tel nno, web adres, email adres</div>
        <div class="card-body text-success">
          <h5 class="card-title">ikon koyup adres:</h5>
          <p class="card-text">adres kımı soakk vs ıvır zıvır</p>
        </div>
        <div class="card-footer bg-transparent border-success">şirketin adı slogon </div>
      </div>
    </div>

        `
    }
}

getTodo();