const config = {
  siteTitle: "Nic Graton", // Site title.
  siteTitleShort: "Nic Graton", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Shit Nic Says", // Alternative site title for SEO.
  siteLogo: "/logos/flux_capacitor.svg", // Logo used for SEO and manifest.
  siteUrl: "https://gatsby-advanced-starter-demo.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Shit Nic Says.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Nic Graton", // Title of the RSS feed
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 0, // Amount of posts displayed per listing page.
  userName: "Nic Graton", // Username to display in the author segment.
  userEmail: "mail@ngraton.dev", // Email used for RSS feed's author segment
  userLocation: "Cleveland, Ohio", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "What the fuck is the author segment", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Vagr9K/gatsby-advanced-starter",
      iconClassName: "fa fa-github"
    },
    {
      label: "Email",
      url: "mailto:vagr9k@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2020. Nic Graton", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

module.exports = config;
