import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "owaeaGY8AFFVSWEuNpKGHC",  // ID of a project you are using
      token: "r6dEJs4VHfkoeX4q0P3jzrL90h6N6ATB4yNzSLKKwUapBVhWRlUmIOfzpnDLvZuowk3qnu9T3VIqsP9fYrdw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})