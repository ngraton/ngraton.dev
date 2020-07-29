const config = {
  siteTitle: "ngraton.dev", // Site title.
  siteTitleShort: "ngraton.dev", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "... and the quest for digital craftsmanship", // Alternative site title for SEO.
  siteLogo: "/logos/flux_capacitor.svg", // Logo used for SEO and manifest.
  siteUrl: "https://ngraton.dev", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "My grail-diary in the pursuit of digital craftsmanship", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Nic Graton", // Title of the RSS feed
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD MMM YYYY", // Date format for display.
  userName: "Nic Graton", // Username to display in the author segment.
  userEmail: "mail@ngraton.dev", // Email used for RSS feed's author segment
  userLocation: "Cleveland, Ohio", // User location to display in the author segment.
  userDescription:
    "What the fuck is the author segment", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/ngraton/ngraton.dev",
      iconClassName: "fa fa-github"
    },
    {
      label: "Email",
      url: "mailto:mail@ngraton.dev",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2020. Nic Graton", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#cb11e8" // Used for setting manifest background color.
};

module.exports = config;
