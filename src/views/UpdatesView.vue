<script setup>
// Geen speciale logica nodig voor deze view
// In een latere versie zouden we hier API calls kunnen doen voor updates
</script>

<template>
  <div class="updates">
    <!-- Header section -->
    <section class="section-header bg-light">
      <div class="container">
        <h1>Journey Updates</h1>
        <p class="lead">
          Follow Lennert's 2500km journey from Thessaloniki to Ararat. Track his progress, view photos, and read stories from the road.
        </p>
      </div>
    </section>

    <!-- Map section with Polarsteps embed -->
    <section class="section">
      <div class="container">
        <h2>Live Route Tracking</h2>
        <div class="map-container">
          <!-- Polarsteps Embed Placeholder -->
          <iframe width="100%" height="500" src="https://www.polarsteps.com/LennertCarmen/17083263-expedition-sunrise/embed"></iframe>
          
          <div class="map-details">
            <div class="detail-item">
              <h4>Start</h4>
              <p>Thessaloniki, Greece</p>
            </div>
            <div class="detail-item">
              <h4>Destination</h4>
              <p>Mount Ararat</p>
            </div>
            <div class="detail-item">
              <h4>Total Distance</h4>
              <p>~2500 kilometers</p>
            </div>
            <div class="detail-item">
              <h4>Estimated Duration</h4>
              <p>7 weeks</p>
            </div>
          </div>
        </div>
        
        <div class="map-note">
          <p>
            For more detailed and interactive tracking, you can also follow the journey directly on 
            <a href="https://www.polarsteps.com/LennertCarmen/17083263-expedition-sunrise/" target="_blank" class="text-link">Polarsteps</a>
          </p>
        </div>
      </div>
    </section>

    <!-- Updates section -->
    <section class="section bg-light">
      <div class="container">
        <h2>Latest Updates</h2>
        <div class="updates-list">
          <!-- Real journey updates -->
          <div class="update-card">
            <div class="update-header">
              <span class="update-label">Update 1</span>
              <span class="update-date">21 April – Thessaloniki</span>
            </div>
            <div class="update-content">
              <h3>Vertrek uit Thessaloniki</h3>
              <p>Vandaag, maandag 21 april, vertrek ik uit mijn geliefde stad Thessaloniki. Na mijn vriend Christos gedag gezegd te hebben op de bazaar die hij organiseerde ten voordele van migranten die door de Balkan trekken, begon de klim naar de vallei van de twee meren. Deze regio is gekend voor de vogels die hierlangs trekken en ik spot jonge ooievaars die handig gebruik maken van de wind om hun grote vleugels te spreiden. Spijtig genoeg voor mij blaast de wind recht in mijn gezicht. Ik kampeer op het strand van Stavros en kijk uit naar mijn komende dagen in Griekenland.</p>
            </div>
          </div>
          <div class="update-card">
            <div class="update-header">
              <span class="update-label">Update 2</span>
              <span class="update-date">Loutra Eleftheron</span>
            </div>
            <div class="update-content">
              <h3>Loutra Eleftheron</h3>
              <p>Ik kies om een klein kiezelwegje langs de kust te volgen in plaats van de grote weg en vind verbaasd twee rugzakken op supermarkt-wieltjes die getrokken worden door twee studenten uit Athene. Ik ontmoet ze later bij de warmwaterbaden en ontdek dat ze te voet al 30 dagen onderweg zijn naar het magische eiland Samothraki, waar ze elke zomer meerdere weken doorbrengen en zich thuis voelen. Ze studeren aan het instituut of fine arts en documenteren hun trip als afstudeerproject. We eten en drinken samen; geslaagde avond.</p>
            </div>
          </div>
          <div class="update-card">
            <div class="update-header">
              <span class="update-label">Update 3</span>
              <span class="update-date">Samothraki</span>
            </div>
            <div class="update-content">
              <h3>SAMOTHRAKI</h3>
              <p>Dit eiland, dat me afgelopen dagen al zo vaak geprezen werd, stelt niet teleur. Bij aankomst flipperen 3 jonge dolfijnen onder de ferry door en ik kijk verbaasd naar de ruige rotsen op het eiland. 20 km breed maar het hoogste punt is 1650m hoog, ongelooflijke natuur. Ik ontmoet vrijwel meteen andere reizigers en iedereen komt uitrusten. Het dorpje Therma blijkt hiervoor een uitstekende plek, gratis camping op het strand, menig waterval met zwemmogelijkheden en een warmwater-bron in een verlaten badhuis. De sfeer is heel gemoedelijk en het tempo ligt hier aanzienlijk trager dan elders in Griekenland. Ik geniet 4 volle dagen en voel me verfrist voor mijn verdere tocht.</p>
            </div>
          </div>
          <div class="update-card">
            <div class="update-header">
              <span class="update-label">Update 4</span>
              <span class="update-date">Izmir</span>
            </div>
            <div class="update-content">
              <h3>Izmir</h3>
              <p>2 jaar geleden was ik vrijwilliger bij de Fix-In-Art organisatie in Thessaloniki. Dit team bestond voornamelijk uit Europese en Turkse twintigers. De graffiti-artieste Jaku uit Izmir werd een goede vriendin en ik beloofde haar te contacteren als ik langs de stad kwam. Haar collectief "Riot Girl Attack" draagt bij aan de heropwaardering van de wijk Darağaç. Hun culturele invloeden in deze (voornamelijk door auto-garages) bewoonde wijk maken het een kleurrijke, interessante plek. Ze zetten in op schilder en graffiti kunst, luistermomenten en workshops.</p>
            </div>
          </div>
          <div class="update-card">
            <div class="update-header">
              <span class="update-label">Update 5</span>
              <span class="update-date">Fethiye</span>
            </div>
            <div class="update-content">
              <h3>Fethiye</h3>
              <p>Afgelopen jaren groeide mijn interesse voor traditionele Turkse en oosterse muziek door het YouTube kanaal Elif'in Hecesi. Deze simpele maar krachtige opnames van getalenteerde muzikanten deden me dromen van een weidse wereld om te verkennen. Na wat onderzoek bleek dat het merendeel van deze opnames gemaakt te zijn rondom de stad Fethiye, met een bijeenkomst van alle muzikanten in de eco-farm Pastoral Vade. Ik was dan ook erg enthousiast toen ik hier aankwam met de fiets en deze plek me werkelijk deed voelen wat ik altijd droomde. Een prachtige verzameling gebouwtjes, rust-hoekjes en een gemeenschappelijke Mutfak (keuken) naast een rivier in een groene vallei. Ik ontdekte jonge mensen die geëngageerd werken aan de teelt van hun eigen groenten en fruit, daarnaast evenementen en workshops organiseren. We zaten rond het kampvuur en ze zongen, zangers en liederen van alle generaties.</p>
            </div>
          </div>
          <div class="update-card">
            <div class="update-header">
              <span class="update-label">Update 6</span>
              <span class="update-date">Işık Kapısı</span>
            </div>
            <div class="update-content">
              <h3>Işık Kapısı</h3>
              <p>Toen ik in de stad Fethiye bedrukt rondfietste door een verkeersincident , stuitte ik op een handcraft-marktje waar een koerdische artiest me aansprak en geruststelde. Hij, die prachtige armbandjes maakt met stenen van over heel Anatolië,  vertelde me dat er op een dag fietsen een werkplaats is van traditionele instrumenten. Aangekomen in het dorpje, vind ik niet meteen de "deur van licht" en vraag het aan een plaatselijke boer. Zijn zoon wijst me de weg met zijn brommer en ik arriveer in een atelier-leefplek volledig gevuld met Zas-instrumenten. In alle vormen en maten, in alle stadia van afwerking. Het is een prachtige werkplek waar jonge artiesten de kunst en traditie aangeleerd krijgen door hun leermeester. Ze eten, spelen en wonen samen om zich volledig over te geven aan hun passie. Ze spreken van het lot wanneer ik hen vertel over mijn interesse in geluidsopnames, aangezien ze daar zelf ook mee wilde experimenteren. We bouwen samen een kleine opnamestudio met wat er voor handen is en ik zie aan hun enthousiasme dat ze me dankbaar zijn.</p>
            </div>
          </div>
          <div class="update-card">
            <div class="update-header">
              <span class="update-label">Update 7</span>
              <span class="update-date">Karadiken</span>
            </div>
            <div class="update-content">
              <h3>Imam van Karadiken</h3>
              <p>Het blijft heet en humid aan de kust. Ik geraak er niet aan gewend en er is weinig ontsnappen aan. Na de enorme inspanningen om in Antalya te geraken en de moeite die het kost om daar uit te rusten door de aanhoudende hitte, beslis ik de bus te nemen inlands. Karaman blijkt die dag nog mogelijk te bereiken en ik voel hernieuwde energie door dit plan. Konya en Karaman zijn gekend voor hun conservatievere geloofsbeleving van de Islam en ik merk op hoe mensen me meer begroeten met Salam Alaikum dan Merhaba, meer met Ewala bedanken dan Teşekkürler. De natuur is hier droog, wijd en leeg, woestenij aan hoogvlaktes en occasioneel een grijze top die omhoog steekt. Ik fiets terug richting kust en bezlks om mijn nacht door te brengen in de moskee van Karadiken. Twee oudere vrouwen heten me welkom en zeggen dat als ik deze wens heb, het voorbestemd is dat ik juist hier aanklop. De imam arriveert rond zonsondergang en nodigt me uit voor het gebed. Het is een ervaring hem de oproep tot gebied te horen maken van zo dichtbij, wat een stem. Ik maak kennis met zijn gezin en we spelen PlayStation voor we samen aan tafel gaan (Türkiye 8 - 0 Belgica). We eten op de grond met een deken over onze benen tegen het morsen en delen een maaltijd. Daarna nodigen hij en zijn oudste zoon van 9 me uit voor het avondgebed en ben ik getuige van een zeer respectvolle handeling tussen vader en zoon, Imam en jonge gelovige. We drinken çay, praten over het reizen en de verantwoordelijkheden die gepaard gaan  met een familie. Ik kruip onder de wol en wordt om 5:23 wakker gezongen door mijn goede vriend die me glimlachend geruststelt dat het bijna gedaan is.</p>
            </div>
          </div>
          <div class="update-card">
            <div class="update-header">
              <span class="update-label">Update 8</span>
              <span class="update-date">Tarsus</span>
            </div>
            <div class="update-content">
              <h3>Warmshowers in Tarsus</h3>
              <p>Warmshowers is een platform dat ik soms gebruik om een slaapplaats te vinden. Het is een website waarbij reizende fietsers contact kunnen opnemen met fietsreizigers die thuis zijn en hun deuren openen voor gasten. Niets beter dan een warme douche na een dag in het zadel. Bade, een opvoedster die een doctoraat ambieert, neemt zowel mij als de Duitse fietser Wolfgang in huis voor een avond. Hij is gepensioneerd en volgt de queeste die Alexander De Grote ondernam door zijn machtszucht. Bade neemt ons beide mee naar haar English Night-les en we worden onthaald als officiële gasten. Het is meer een sociale bijeenkomst van lieve mensen die hun engels willen verbeteren, de verscheidenheid van de groep doet mijn hartje jubelen en hun beweegredenen om elke donderdag tot hier te komen geven me energie (hoewel sommigen "to escape" zeiden). Het is de laatste les van het jaar want de zomervakantie begint volgende week, dus iedereen vertelt zijn dierbaarste moment en ze prijzen hun vriendschappen herhaaldelijk. Het is een fijne groep en ik hoop mee met hen dat het project herhaald wordt.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter signup -->
    <section class="section">
      <div class="container">
        <div class="newsletter-box">
          <h2>Stay Updated</h2>
          <p>
            Check back regularly for new updates or follow on Polarsteps for the most up-to-date information on Lennert's journey.
          </p>
          <div class="social-links">
            <!-- Placeholder for social media links -->
            <p>Social media links will be added here soon.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-header {
  text-align: center;
  padding: 4rem 0;
}

.lead {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 1rem auto 0;
}

.map-container {
  margin-top: 2rem;
}

.polarsteps-placeholder {
  background-color: var(--light-color);
  border-radius: 8px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.placeholder-message {
  text-align: center;
  padding: 2rem;
  max-width: 600px;
}

.small {
  font-size: 0.9rem;
  opacity: 0.7;
  margin-top: 0.5rem;
}

.map-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.detail-item {
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.detail-item h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.map-note {
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  background-color: rgba(52, 152, 219, 0.1);
  border-radius: 8px;
}

.text-link {
  color: var(--primary-color);
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.3s;
}

.text-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.updates-list {
  margin-top: 2rem;
}

.update-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.update-card.coming-soon {
  border: 2px dashed #ddd;
  box-shadow: none;
}

.update-card.example {
  position: relative;
}

.update-header {
  background-color: var(--light-color);
  padding: 0.5rem 1rem;
}

.update-label {
  display: inline-block;
  background-color: var(--secondary-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.update-image img {
  width: 100%;
  height: auto;
  display: block;
}

.update-content {
  padding: 2rem;
}

.update-date {
  color: var(--primary-color);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
}

.update-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-label {
  font-size: 0.8rem;
  opacity: 0.7;
}

.stat-value {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--dark-color);
}

.newsletter-box {
  background-color: var(--primary-color);
  color: white;
  padding: 3rem;
  border-radius: 8px;
  text-align: center;
}

.newsletter-box h2 {
  margin-bottom: 1rem;
}

.newsletter-box p {
  max-width: 600px;
  margin: 0 auto 1.5rem;
}

.social-links {
  margin-top: 1.5rem;
}

.rounded-image {
  border-radius: 8px 8px 0 0;
}

@media (max-width: 768px) {
  .section-header {
    padding: 3rem 0;
  }
  
  .polarsteps-placeholder {
    height: 350px;
  }
  
  .newsletter-box {
    padding: 2rem;
  }
}
</style> 