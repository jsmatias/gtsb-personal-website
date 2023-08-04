/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.jsmatias.net",
    title: 'Jean Matias - Physicist and Data Analyst',
    name: 'Jean Matias',
    nickname: 'jsmatias',
    profession: 'Developer and Physicist',
    address: 'Cork/Ireland',
    email: 'smatias.jean@gmail.com',
    jobemail: 'jean.matias@tyndall.ie',
    phone: '+353 21 243 6511',
    mobile: '+353 83 066 1681',
    linkedin: 'https://www.linkedin.com/in/jean-matias-496526140/',
    facebook: '',
    lattes: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4043386A3',
    gitlab: 'https://gitlab.com/ibot.autom',
    github: 'https://github.com/jsmatias',
    web: 'https://www.jsmatias.net',
    lastUpdate: {
      year: '2023',
      month: 'Aug'
    },
  },
  plugins: ["gatsby-plugin-netlify-cms", "gatsby-plugin-styled-components"]
};