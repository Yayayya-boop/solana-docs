module.exports = {

  //solidoSidebar: [{type: 'autogenerated', dirName: '.'}],
  solidoSidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Staking',
      items:[{type: 'autogenerated', dirName: 'staking',},],
    },
    {
      type: 'doc',
      id: 'governance',
      label: 'Governance',
    },
    {
      type: 'doc',
      id: 'administration',
      label: 'Administration',
    },
    {
      type: 'doc',
      id: 'fees',
      label: 'Fees',
    },
    {
      type: 'doc',
      id: 'validator-onboarding',
      label: 'Validator onboarding',
    },
    {
      type: 'category',
      label: 'Operation',
      items: [
        {
          type: 'doc',
          id: 'operation/the-solido-utility',
          label: 'The Solido utility',
        },
        {
          type: 'doc',
          id: 'operation/maintenance',
          label: 'Maintenance',
        },
        {
          type: 'doc',
          id: 'operation/multisig-guide',
          label: 'Multisig guide',
        },
      ],
    },
    {
      type: 'category',
      label: 'Development',
      items:[{type: 'autogenerated', dirName: 'development',},],
    },
    {
      type: 'category',
      label: 'Internals',
      items: [
        {
          type: 'doc',
          id: 'internals/solana-staking',
          label: 'Staking on Solana',
        },
        {
          type: 'doc',
          id: 'internals/commission',
          label: 'Commission',
        },
        {
          type: 'doc',
          id: 'internals/withdrawals',
          label: 'Withdrawals',
        },
        {
          type: 'doc',
          id: 'internals/exchange-rate',
          label: 'Exchange rate',
        },
      ],
    },
    {
      type: 'doc',
      id: 'incentives',
      label: 'Incentives',
    },
    {
      type: 'doc',
      id: 'deployments',
      label: 'Deployments',
    },
    {
      type: 'doc',
      id: 'security',
      label: 'Security',
    },
  ],
};
