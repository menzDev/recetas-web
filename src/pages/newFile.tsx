import Layout from "../layouts/Layout.astro";

<Fragment>
<Layout title="Welcome to Astro.">
<main>
<div class="main-texto">
<div>
<h1>Classic Cheesecake Recipe</h1>
<p>
Look no further for a creamy and ultra smooth classic cheesecake
recipe! Paired <br /> with a buttery graham cracker crust, no one can
deny its simple decadence. For <br /> the best results, bake in a water
bath.
</p>
</div>
</div>
<div class="imagen"> <img src="./public/photo1.png" alt="" /></div>
<div class="ingredientes">
<div class="titulo-ingrediente"><h1>INGREDIENTS</h1>
<p>Graham Cracker Crust</p>
</div>
<div class="lista-ingredientes"></div>
</div>
</main>
</Layout>

<style>{`
.main-texto {
margin: 0 auto;
width: 62%;
}
.main-texto h1{
width: 587px;
font-family: Playfair Display;
font-size: 48px;
font-weight: 700;
line-height: 64px;
letter-spacing: 0em;
text-align: left;
margin: 0;

}
.main-texto p{
	width: 592px;
	height: 51px;
	font-family: Montserrat;
font-size: 14px;
font-style: italic;
font-weight: 500;
line-height: 17px;
letter-spacing: 0em;
text-align: left;

}
.imagen{
	max-width: 969px;
	margin: 0 auto; 
}
.imagen img{
	width: 900px;       /* Aprovecha el ancho completo del contenedor */
  height: auto;      /* Mantiene la proporción de la imagen */
  border-radius: 14px;
}	
.titulo-ingredientes{
text-align: center;
}
.titulo-ingredientes h1{
	
}
`}</style>

</Fragment>;
