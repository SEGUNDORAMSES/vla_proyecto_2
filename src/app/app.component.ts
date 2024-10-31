import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vla_proyecto_2';

  data = [
    { pais: "COSTA RICA", moneda: "colón", id: 506, capital: "SAN JOSÉ",},
    { pais: "USA", moneda: "DOLAR", id: 1, capital: "WASHINGTON" },
    { pais: "CANADÁ", moneda: "DOLAR CANADIENSE", id: 1, capital: "OTTAWA" },
    { pais: "MÉXICO", moneda: "PESO", id: 52, capital: "DISTRITO FEDERAL" },
    { pais: "FRANCIA", moneda: "EURO", id: 33, capital: "PARIS" },
    { pais: "BÉLGICA", moneda: "FRANCO BELGA", id: 32, capital: "BRUSSELAS" },
    { pais: "INGLATERRA", moneda: "LIBRA ESTERLINA", id: 44, capital: "LONDRES" },
    { pais: "ESPAÑA", moneda: "EURO", id: 34, capital: "MADRID" },
    { pais: "HOLANDA", moneda: "FLORÍN", id: 31, capital: "AMSTERDAN" },
    { pais: "SUIZA", moneda: "FRANCO SUIZO", id: 41, capital: "BERNA" },
  
  ];

  put = "";

  sent() {
    if (this.put == "FRANCIA" || this.put == "francia") {
      Swal.fire({
        imageUrl: "https://static01.nyt.com/images/2023/03/23/multimedia/23france-1-bkfp/23france-1-bkfp-jumbo.jpg?quality=75&auto=webp",
        imageHeight: 250,
        imageAlt: "A tall image",
        text: "Demonstrators in Paris on Thursday. It was the ninth day of nationwide strikes and protests over French pension changes."
      });
    }
    else if (this.put == "BÉLGICA" || this.put == "bélgica") {
      Swal.fire({
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/18th_International_Folklore_Festival_2012%2C_Plovdiv_%28Bulgaria%29_-_Belgian_folklore_ensemble_De_Boezeroenen%2C_Kuringen_15.jpg/330px-18th_International_Folklore_Festival_2012%2C_Plovdiv_%28Bulgaria%29_-_Belgian_folklore_ensemble_De_Boezeroenen%2C_Kuringen_15.jpg",
        imageHeight: 250,
        imageAlt: "A tall image",
        text: "Belgian folk dance group at the International Folklore Festival in Plovdiv, Bulgaria"
      });
    }
    else if (this.put == "INGLATERRA" || this.put == "inglaterra") {
      Swal.fire({
        imageUrl: "https://images.theconversation.com/files/611531/original/file-20240805-20-mlqj4t.jpg?ixlib=rb-4.1.0&rect=60%2C171%2C6720%2C3360&q=45&auto=format&w=668&h=324&fit=crop",
        imageHeight: 250,
        imageAlt: "A tall image",
        text: "A guide to York in five heritage pubs for historical interior enthusiasts"
      });
    }
    else if (this.put == "HOLANDA" || this.put == "holanda") {
      Swal.fire({
        imageUrl: "https://meltingpro.org/wp-content/uploads/2019/05/news-olanda-mep.jpg",
        imageHeight: 250,
        imageAlt: "A tall image",
        text: "New European round for Melting Pro’s staff. The New Skills For European Training Services project takes us to Netherlands to meet cultural organizations, public and private bodies including: National Association of Dutch Museums, Kennisland, Rotterdam Festivals, the City of Rotterdam  Sports and Culture Department."
      });
    }
    else if (this.put == "COSTA RICA" || this.put == "costa rica") {
      Swal.fire({
        imageUrl: "https://efeverde.com/wp-content/uploads/2024/04/0396d48f9ab6414dbea489679cc2c544e56a3f8dw-1536x1013.jpg",
        imageHeight: 250,
        imageAlt: "A tall image",
        text: "The indigenous community of Rey Curré/Yímba, located in Buenos Aires de Puntarenas, will host its most important cultural festivity of the year: the “Juego de los Diablitos,” an ancestral tradition that recalls the rebellious struggles of their ancestors against the conquest processes, more than 500 years ago."
      });
    }
    else if (this.put == "USA" || this.put == "usa") {
      Swal.fire({
        imageUrl: "https://internationalsupermarketnews.com/wp-content/uploads/1509254.jpg",
        imageHeight: 250,
        imageAlt: "A tall image",
        text: "Estados Unidos: un faro de innovación y generosidad para el mundo"
      });
    }
    else if (this.put == "canadá" || this.put == "CANADÁ") {
      Swal.fire({
        imageUrl: "https://cdn.britannica.com/21/20121-004-7155BD16/poles-tribes-British-Columbia-Canada-Stanley-Park.jpg?w=300",
        imageHeight: 250,
        imageAlt: "A tall image",
        text: "In 1951 the Royal Commission on National Development in the Arts, Letters, and Sciences issued a report (what became known as the Massey Report) warning that Canadian culture had become invisible"
      });
    }
    else if (this.put == "ESPAÑA" || this.put == "españa") {
      Swal.fire({
        imageUrl: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/fb2f/live/7277ed30-96d4-11ef-97ce-57e3591acfb3.jpg.webp",
        imageAlt: "A tall image",
        text: "Las impactantes imágenes de las graves inundaciones en España que han dejado más de 90 muertos y decenas de desaparecidos",

      });
    }
    else if (this.put == "méxico" || this.put == "MÉXICO") {
      Swal.fire({
        imageUrl: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/10/31/16/gettyimages-1054491458.jpg?quality=75&width=640&auto=webp",
        imageHeight: 250,
        imageAlt: "A tall image",
        text: "he celebration of Dia de los Muertos is a holiday that is deep-rooted in Mexican culture, observed predominantly in the central and southern regions of the country and across Latin America."
      });
    }
    else if (this.put == "SUIZA" || this.put == "suiza") {
      Swal.fire({
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Danse-helvetique-p1000764.jpg/375px-Danse-helvetique-p1000764.jpg",
        imageHeight: 250,
        imageAlt: "A tall image",
        text: "El primer gran parque solar comienza a construirse en los Alpes suizos."

      });
    }



  }












}