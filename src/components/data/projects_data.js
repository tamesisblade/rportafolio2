
import clima from '../../assets/projects_images/clima.png'
import crudreactl from '../../assets/projects_images/crudreactl.png';
import peliculas from '../../assets/projects_images/peliculas.png';
import presupuesto from '../../assets/projects_images/presupuesto.png';
import cotizacion from '../../assets/projects_images/cotizacion.png';
import piano  from '../../assets/projects_images/piano.png';
import dado  from '../../assets/projects_images/dado.png';
import wdelivery  from '../../assets/projects_images/wdelivery.png';
import lgestionexcel from '../../assets/projects_images/lgestionexcel.jpg';
import pwpet from '../../assets/projects_images/pwpet.jpg';
import pwnumero1 from '../../assets/projects_images/pwnumero1.PNG';

const data_projects = [
    {
        name: 'App de Peliculas',
        image: peliculas,
        deployed_url: 'https://peliculas-steven-app.netlify.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['react.js']
    },

    {
        name: 'App de Presupuesto',
        image: presupuesto,
        deployed_url: 'https://presupuesto-steven-app.netlify.app/',
        github_url: 'https://github.com/Dey-Sumit/Dev-talks',
        category: ['node.js', 'mongoDB', 'react.js']
    },

  

    {
        name: 'App Clima',
        image: clima,
        deployed_url: 'https://clima-app-steven.netlify.app/',
        category: ['react.js']
    },

    {
        name: 'Crud laravel con ReactJs',
        image: crudreactl,
        deployed_url: 'https://crud-reactjs-steven-app.netlify.app/',
        category: ['laravel']
    },

    {
        name: 'Importar informacion desde un excel a una BD',
        image: lgestionexcel,
        deployed_url: 'https://lgestionexcel.herokuapp.com/clientes',
        category: ['laravel']
    },

    {
        name: 'Aplicacion de Cotizacion en php ',
        image: cotizacion,
        deployed_url: 'https://app-steven-cotizacion.herokuapp.com/',
        category: ['php']
    },

    {
        name: 'Aplicacion de Piano con angular',
        image: piano,
        deployed_url: 'https://steven-app-apiano.netlify.app/',
        category: ['angular']
    },

    {
        name: 'Aplicacion de  Juegos de dados con angular',
        image: dado,
        deployed_url: 'https://steven-app-adados.netlify.app/',
        category: ['angular']
    },
    {
        name: 'Delivery con Wordpress conectada a una app de pedidos',
        image: wdelivery,
        deployed_url: 'http://deliverysteven.great-site.net/',
        category: ['wordpress']
    },

    {
        name: 'Sitio web  con Nextjs',
        image: pwpet,
        deployed_url: 'https://rpet-4demzr9gq-tamesisblade.vercel.app/',
        category: ['web','nextjs']
    },
    {
        name: 'Sitio web1  con Html5 css3',
        image: pwnumero1,
        deployed_url: 'https://tamesisblade.github.io/pwnumero1/',
        category: ['web']
    },


   

   
]

export default data_projects;