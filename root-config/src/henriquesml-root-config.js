import { registerApplication, start } from "single-spa"

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
})

registerApplication({
  name: "@henriquesml/react-single",
  app: () => System.import("@henriquesml/react-single"),
  activeWhen: (location) => location.pathname === "/react-single",
})

registerApplication({
  name: "@henriquesml/react-multiples",
  app: () => System.import("@henriquesml/react-multiples"),
  activeWhen: ["/react-multiples"],
})

registerApplication({
  name: "@henriquesml/react-parcel",
  app: () => System.import("@henriquesml/react-parcel"),
  activeWhen: (location) => location.pathname === "/react-parcel",
})

registerApplication({
  name: "@henriquesml/react-route",
  app: () => System.import("@henriquesml/react-route"),
  activeWhen: (location) => location.pathname === "/react-route",
})


start({
  urlRerouteOnly: true,
})
