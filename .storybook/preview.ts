import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
       values: [
	       {name: 'Dark', value: '#262626'}
       ]
    }
  },
};

export default preview;
