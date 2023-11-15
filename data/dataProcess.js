const fs = require('fs')

function processCenters() {
  // Read the centers.json file
  const centersData = fs.readFileSync('./centers.json')
  const centers = JSON.parse(centersData)

  // Process the data
  const processedCenters = centers.map((center) => {
    return {
      id: center['ID FICHE'],
      brussHelp: center['LIEN SOCIAL.BRUSSELS'],
      name: center['NOM OFFICIEL'],
      address: {
        rue: center['RUE'],
        numero: center['NUMÉRO'],
        post: center['NUMÉRO DE BOÎTE'],
        zip: center['CODE POSTAL'],
        cityHole: center['COMMUNE'],
        coord: {
          x: center['XCOORD'],
          y: center['YCOORD'],
          lat: center['LATITUDE'],
          long: center['LONGITUDE'],
        },
      },
      tel: center['TEL'].split('\n').filter((s) => s !== ''),
      fax: center['FAX (FR)'],
      email: center['E-MAIL (FR)'],
      web: center['SITE(S) WEB'],
      acitvity: center['ACTIVITÉS'].split('\n'),
      target: center['PRÉCISIONS SUR LES BÉNÉFICIAIRES'].split('\n'),
      language: center['OFFRE LINGUISTIQUE'].split('\n'),
      contact: {
        channel: center['COMMENT PRENDRE CONTACT?'].split('\n'),
        time: center['QUAND PRENDRE CONTACT?'],
      },
      info: center['REMARQUES'].split('\n'),
      status: center['STATUT JURIDIQUE'],
      tva: center["NUMÉRO D'ENTREPRISE"],
      companyRegister: center['PUBLICATIONS MONITEUR BELGE'],
      sectors: center['SECTEUR(S)'].split('\n'),
      category: center['APPARTIENT AUX CATÉGORIES'].split('\n'),
    }
  })

  const data = {
    missing: {
      tel: {
        ids: processedCenters.filter((center) => !center.tel.length).map((center) => center.id),
        count: processedCenters.filter((center) => !center.tel.length).length,
      },
      fax: {
        ids: processedCenters.filter((center) => !center.fax).map((center) => center.id),
        count: processedCenters.filter((center) => !center.fax).length,
      },
      email: {
        ids: processedCenters.filter((center) => !center.email).map((center) => center.id),
        count: processedCenters.filter((center) => !center.email).length,
      },
      web: {
        ids: processedCenters.filter((center) => !center.web).map((center) => center.id),
        count: processedCenters.filter((center) => !center.web).length,
      },
      time: {
        ids: processedCenters.filter((center) => !center.contact.time).map((center) => center.id),
        count: processedCenters.filter((center) => !center.contact.time).length,
      },
    },
    sectors: processedCenters
      .map((center) => center.sectors)
      .flat()
      .filter((value, index, self) => self.indexOf(value) === index),
    centers: processedCenters,
  }

  // Save the processed data to a new file
  fs.writeFileSync('./processedCenters.json', JSON.stringify(data, null, 2))
}

processCenters()
