import GraphQL from "./index";

export async function getBI(id: string) {
  try {
    const response: any = await GraphQL.get(
      `
     allPeople(id:"${id}") {
    edges {
      node {
        id
        tin
        firstName
        lastName
        gender
        birthDate
        socialSecurityNumber
        maritalState
        fullName
        identitycardsSet {
          edges {
            node {
              id
              fatherName
              motherName
              residenceAddress
              residenceCountry
              residenceProvince
              residenceMunicipality
              residenceCommune
              residenceNeighbor
              issuePlace
              birthProvince
              birthMunicipality
              height
              issueDate
              issuePlace
              validUntil
              signature
              cardImageFrontUrl
              cardImageBackUrl
              qrCode
            }
          }
        }
      }
    }
  }
      `
    );
    console.log("response: ", response);
    return response;
  } catch (err) {
    console.log(err);
  }
}
export async function getPermission() {
  try {
    const response: any = await GraphQL.get(
      `
        allDistricts {
          edges {
            node {
              id
            }
          }
        }
      `
    );
    return response?.allDistricts?.edges;
  } catch (err) {
    console.log(err);
  }
}

export async function getMenus() {
  try {
    const resultResponse: any = await GraphQL.get(
      `
        allMenus {
          edges {
            node {
              id
              menu
              icon
              submenusSet {
                edges {
                  node {
                    id
                    submenu
                  }
                }
              }
            }
          }
        }
      
      `
    );

    console.log("Resultado: ", resultResponse);

    return resultResponse?.allMenus?.edges;
  } catch (err) {
    console.log(err);
  }
}

export async function getPerson() {
  try {
    const resultResponse: any = await GraphQL.get(
      `
      allPerson{
        edges{
          node{
            id
            name
          }
        }
      }
      
      `
    );

    console.log("Resultado Pessoas: ", resultResponse);

    return resultResponse?.allPerson?.edges;
  } catch (err) {
    console.log(err);
  }
}
