module.exports = {
  "plugins": [
    "react"
  ],
  "extends": [
    "airbnb",
    "plugin:shopify/react"
  ],
  "env": {
    "meteor": true,
    "node": true
  },
  "rules": {
    "no-console": 0,
    "jsx-a11y/img-has-alt": 0,
    "jsx-a11y/onclick-has-focus": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-marquee": 0
  },
  "plugins": [
    "jsx-a11y"
  ]
};
