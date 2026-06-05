/** @type {import('@commitlint/types').UserConfig} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  rules: {
    'jira-ticket-anywhere': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'jira-ticket-anywhere': (parsed) => {
          const message = parsed.raw || '';
          const jiraRegex = /(https:\/\/kurtgeiger\.atlassian\.net\/browse\/)?ENGS-\d+/;
          const valid = jiraRegex.test(message);
          return [valid, 'Commit message must contain a Jira ticket (ENGS-1234 or full Jira URL).'];
        },
      },
    },
  ],
};
