// List of domains to prepend with 12ft.io
const domainsToPrepend = [
  "wsj.com",               // Wall Street Journal
  "nytimes.com",           // New York Times
  "washingtonpost.com",     // Washington Post
  "businessinsider.com",    // Business Insider
  "ft.com",                // Financial Times
  "economist.com",         // The Economist
  "bloomberg.com",         // Bloomberg
  "theatlantic.com",       // The Atlantic
  "newyorker.com",         // The New Yorker
  "latimes.com",           // Los Angeles Times
  "forbes.com",            // Forbes
  "newsweek.com",          // Newsweek
  "nationalgeographic.com", // National Geographic
  "usatoday.com",          // USA Today
  "time.com",              // Time
  "reuters.com",           // Reuters
  "vox.com",               // Vox
  "slate.com",             // Slate
  "theguardian.com",       // The Guardian
  "foreignpolicy.com",     // Foreign Policy
  "politico.com",          // Politico
  "chicagotribune.com",    // Chicago Tribune
  "barrons.com",           // Barron's
  "axios.com",             // Axios
  "techcrunch.com",        // TechCrunch
  "theinformation.com",    // The Information
  "seattletimes.com",      // Seattle Times
  "startribune.com",       // Star Tribune
  "miamiherald.com",       // Miami Herald
  "bostonglobe.com",       // Boston Globe
  "nypost.com",            // New York Post
  "dallasnews.com",        // Dallas Morning News
  "sfchronicle.com",       // San Francisco Chronicle
  "denverpost.com",        // Denver Post
  "thetimes.co.uk",        // The Times (UK)
  "telegraph.co.uk",       // The Telegraph
  "independent.co.uk",     // The Independent
  "lemonde.fr",            // Le Monde
  "elpais.com",            // El País
  "corriere.it",           // Corriere della Sera
  "globo.com",             // Globo (Brazil)
  "nikkei.com",            // Nikkei Asian Review
  "smh.com.au",            // Sydney Morning Herald
  "theage.com.au"          // The Age (Australia)
];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    
    if (domainsToPrepend.some(domain => url.hostname.includes(domain))) {
      return {redirectUrl: `https://12ft.io/${url.href}`};
    }
    return {};
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
