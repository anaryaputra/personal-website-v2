import { gql } from '@apollo/client';

export const GET_EXPERIENCES = gql(`query {
  experiences(
    filters: {},
    pagination: {},
    sort: [],
    publicationState: LIVE
  ) {
    data {
      id
      attributes {
        role
        institution {
          data {
            attributes {
              name
              logo {
                data {
                  attributes {
                    alternativeText
                    hash
                    url
                  }
                }
              }
            }
          }
        }
        short_desc
        desc
        start_date
        end_date
      }
    }
  }
}`);

export const GET_FEATURED_PROJECTS = gql(`query {
  projects(
    filters: {
      featured: { eq: true }
    }
    pagination: {}
    sort: []
    publicationState: LIVE
  ) {
    data {
      id
      attributes {
        title
        type
        institution {
          data {
            attributes {
              name
            }
          }
        }
        url
        thumbnail {
          data {
            attributes {
              alternativeText
              hash
              url
            }
          }
        }
        teches {
          data {
            attributes {
              name
              logo {
                data {
                  attributes {
                    alternativeText
                    url
                  }
                }
              }
            }
          }
        }
        short_desc
      }
    }
  }
}`);

export const GET_PROJECT_COLLABORATIONS = gql(`query {
  projects(
    filters: {
      type: {
        eq: "collaborative"
      }
    }
    pagination: {}
    sort: []
    publicationState: LIVE
  ) {
    data {
      id
      attributes {
        institution {
          data {
            attributes {
              name
            }
          }
        }
        type
        url
      }
    }
  }
}
`);

export const GET_SPECIALIZATIONS = gql(`query {
  specializations(
    filters: {}
    pagination: {}
    sort: []
    publicationState: LIVE
  ) {
    data {
      attributes {
        name
        description
        highlighted_name
        icon {
          data {
            attributes {
              alternativeText
              hash
              url
            }
          }
        }
      }
    }
  }
}`);

export const GET_TECHES = gql(`query {
  teches(filters: {}, pagination: {
    limit: 100
  }, sort: [], publicationState: LIVE) {
    data {
      id
      attributes {
        name
        logo {
          data {
            attributes {
              alternativeText
              hash
              url
            }
          }
        }
      }
    }
  }
}`);
