import { defineRoute } from '@remix-run/react';

export default defineRoute({
  async loader() {
    // Implement loader function if needed
    // This function can load data before rendering the component
    return { /* data */ };
  },
  async action() {

    return {
      redirect: '/address-added', // Redirect to success page after adding address
    };
  },
});
