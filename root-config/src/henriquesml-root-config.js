import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@henriquesml/react-single",
  app: () => System.import("@henriquesml/react-single"),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@henriquesml/react-multiples",
  app: () => System.import("@henriquesml/react-multiples"),
  activeWhen: ["/react-multiples"],
});

start({
  urlRerouteOnly: true,
});
