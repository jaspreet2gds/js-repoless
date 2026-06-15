const { defineConfig } = require("cypress");
const baseConfig = require("./cypress.base.config");

// A private user used with AEM Assets testing suite.
const AEM_ASSETS_PRIVATE_USER = JSON.parse(
  process.env.AEM_ASSETS_PRIVATE_USER ?? "{}"
);

module.exports = defineConfig({
  ...baseConfig,
  env: {
    ...baseConfig.env,
    graphqlEndPoint: "https://na1-sandbox.api.commerce.adobe.com/Xun223LbRqWUYemTUEBb8y/graphql",
    giftCardA: "00419VQ5C341",
    productUrlWithOptions:
      "/products/cypress-configurable-product-latest/cypress456?optionsUIDs=Y29uZmlndXJhYmxlLzkzLzEz",
    stateShippingId: "TX,57",
    stateBillingId: "NY,43",
    productImageName: "/adb150.jpg",
    productImageNameConfigurable: "/adb124_1.jpg",
    productWithOptionImageNameConfigurable: "/adb192_1.jpg",

    aemAssetsConfig: {
      commerceConfig: {
        coreEndpoint: "https://na1-sandbox.api.commerce.adobe.com/Xun223LbRqWUYemTUEBb8y/graphql",
        endpoint: "https://na1-sandbox.api.commerce.adobe.com/Xun223LbRqWUYemTUEBb8y/graphql",
      },

      author: {
        programId: "p153424",
        environmentId: "e1601770",
        isStage: false,
      },

      credentials: {
        xPublicApiKey: "",
        magentoEnvironmentId: "Xun223LbRqWUYemTUEBb8y",
      },

      user: {
        ...AEM_ASSETS_PRIVATE_USER,
        order: "000000001",
        returnedOrder: "000000002",
      },

      // For PREX we need a custom recommendation unit id.
      // Because AEM Assets uses a different Commerce instance
      // the hardcoded one in the default content source will not work.
      // To test PREX, we will render a custom draft page with our own recommendation unit id.
      prexDraft: "/drafts/decepticons/products/saas/adb125",
    },
  },
});
