import {GraphQLClient,gql} from 'graphql-request'
import {Config} from './config'

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`

const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.CDA_TOKEN}`,
    },
  })

 // PAISAJE CENTINELA DESCRIPCION

 export const getPaisajeCentinela = async () => {

    const query = gql`{
  paisajeCentinelaCollection {
    items {
      tipoDeContenido
      excerp
      desarrolloDelContenido{
        json
      }
      imagen{
        url
      }
    }
  }
}`

    return graphQLClient.request(query)
}


  // PUBLICACIONES FUCNTIONS

export const getPublicaciones = async () => {

    const query = gql`{
  publicacionesCollection (order:sys_firstPublishedAt_DESC) {
    items {
      titulo 
      slug
      foto {
          url
          width
          height
        }
      fotoPdf {
        url
        width
        height
      }
      aoDePublicacin
      sys {
        id
      }
      
    }
    total
    }}`

    return graphQLClient.request(query)
}


export const getPublicacion = async (slug) => {

const query = gql`
    query getPublicacion($slug: String!){
  publicacionesCollection(
    limit: 1
    where: {
      slug: $slug
    }
  ) {
     items {
      titulo
      categoria
      resumen {
        json
      }
      foto {
        url
        width
        height
      }
      fotoPdf {
        url
      }
      aoDePublicacin
      pdfCollection {
        items {
          url
        }
      }
      autoresCollection {
        items{... on Autor{
          nombre 
          slug 
          foto{
            url(transform:{
              cornerRadius:-1,
              format: PNG
            }) 
            width 
            height
          }
        }
      }
      }
      sys {
        id
        firstPublishedAt
      }
    }
  }
}`

return graphQLClient.request(query,{slug})
}

export const getTotalPublicaciones = async () => {
  
    const query = gql`
      {
        publicacionesCollection {
          total
        }
      }
    `;

    
    const data = await graphQLClient.request(query)

    const totalPublicaciones = data.publicacionesCollection.total
      ? data.publicacionesCollection.total
      : 0;

    return totalPublicaciones;

}



// export const getPaginatedPublicaciones = async (query) => {

//         const skipMultiplier = page === 1 ? 0 : page - 1;
//         const skip =
//           skipMultiplier > 0 ? Config.pagination.pageSize * skipMultiplier : 0;

//       const query = query


//        const data = await graphQLClient.request(query, {page})

//        const paginatedPublicaciones = data.publicacionesCollection
//       ? data.publicacionesCollection
//       : { total: 0, items: [] };

//     return paginatedPublicaciones;
//     }





// ARTICULOS FUNCTIONS


export const getArticulos = async () => {

    const query = gql`{
  articuloCollection (order: sys_firstPublishedAt_DESC){
    items{
      titulo
      imagen{
        url
        width
        height
      }
      slug
      sys{
        id
        firstPublishedAt
      }
    }
  }
}`

    return graphQLClient.request(query)
}

export const getArticulo = async (slug) => {

const query = gql`
    query getArticulo($slug: String!){
  articuloCollection(
    limit: 1
    where: {
      slug: $slug
    }
  ) {
     items {
      titulo
      imagen{
        url
      }
      contenido{
        json
      }
      publicador{
        ... on Autor{
          nombre
          slug
        }
      }
      sys{
        firstPublishedAt
      }
    }
  }
}`

return graphQLClient.request(query,{slug})
}


// INVESTIGADORES FUNCTIONS


export const getInvestigadores = async () => {

    const query = gql`{
  autorCollection {
    items {
      nombre
      foto {
        url
        width
        height
      }
      staffPrimario
      organizacion
      rol
      slug
      sys {
        id
      }
    }
  }
}
`

    return graphQLClient.request(query)
}


export const getInvestigador = async (slug) => {

const query = gql`
    query getInvestigador($slug: String!){
  autorCollection(
    limit: 1
    where: {
      slug: $slug
    }
  ) {
     items {
      nombre
      foto {
        url
        width
        height
      }
      correo
      organizacion
      rol
      descripcion {
        json
      }
      slug
      sys {
        id
      }
        linkedFrom{entryCollection{
        items{... on Publicaciones{
          titulo
          fotoPdf{
            url
          }
          slug
          __typename
          sys{
            id
            publishedAt
          }
        }}
      }}
    }
  }
}`

return graphQLClient.request(query,{slug})
}

// Utility functions 








