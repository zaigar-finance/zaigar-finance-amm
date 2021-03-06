import { MenuEntry } from '@zaigar-finance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "https://zaigar.finance",
  },
  {
    label: 'Project Info',
    icon: 'GroupsIcon',
    href: 'https://zaigar.finance/about',
  },
  {
    label: 'Exchange',
    icon: 'ExchangeIcon',
    href: "/swap",
  },  
  {
    label: 'Liquidity',
    icon: 'LiquidityIcon',
    href: "/pool",
  },   
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://zaigar.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://zaigar.finance/nests',
  },
  {
    label: 'Airdrop Raffle',
    icon: 'TicketIcon',
    href: 'https://zaigar.finance/airdrop',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Charts',
    icon: 'InfoIcon',
    items: [
    //  {
     //   label: 'CoinMarketCap',
    //    href: 'https://coinmarketcap.com/currencies/zaigar-finance/',
    //  },
      {
        label: 'ZFAI-Price Chart',
        href: 'https://dex.guru/token/0x205cD59eEA8e8c5083f16D20e1050fD4a7d72037-bsc',
      },      
      {
        label: 'ZFAI-PancakeSwap',
        href: 'https://pancakeswap.info/token/0x205cD59eEA8e8c5083f16D20e1050fD4a7d72037',
      },     
      {
        label: 'ZAIF-Price Chart',
        href: 'https://dex.guru/token/0x280c3fc949b1a1d7a470067ca6f7b48b3cb219c5-bsc',
      },      
      {
        label: 'ZAIF-PancakeSwap',
        href: 'https://pancakeswap.info/token/0x280C3Fc949b1a1D7a470067cA6F7b48b3CB219c5',
      },
  //    {
 //       label: 'Add to Metamask',
 //       href: 'https://bit.ly/3sSDdrB',
 //     },    
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Whitepaper(EN)',
        href: 'https://zaigar.finance/ZaigarFinancewpenglish.pdf',
      },
      {
        label: 'Whitepaper(PT)',
        href: 'https://zaigar.finance/ZaigarFinancewpportuguese.pdf',
      },
      {
        label: 'zaigar.com',
        href: 'https://zaigar.com',
      },
    ],
  }, 
  {
    label: 'Docs',
    icon: 'GitbookIcon',
    href: 'https://docs.zaigar.finance/',
  },
  {
    label: 'GitHub',
    icon: 'GithubIcon',
    href: 'https://github.com/zaigar-finance/',
  },
  {
    label: 'Audit By TechRate',
    icon: 'AuditIcon',
    href: 'https://zaigar.finance/ZaigarFinanceTechRateAudit.pdf',
  }, 
]

export default config
