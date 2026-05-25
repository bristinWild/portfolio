export const data = {
  name: "Bristin",
  title: "Full Stack Web3 Developer",
  location: "Guwahati, Assam, India",
  email: "bristin.borah.7@gmail.com",
  phone: "+91 9678208395",
  github: "https://github.com/bristinWild",
  linkedin: "https://www.linkedin.com/in/bristin-borah-739b63179/",
  twitter: "https://x.com/borah_bristin",
  profileImage: "https://plum-labour-meadowlark-47.mypinata.cloud/ipfs/bafybeibjelns3uwhff3mwun4csdggvz3a7krzqg44mvhvfy7hrzj4qgrq4",
  cratesio: "https://crates.io/users/bristinWild",

  npmjs: "https://www.npmjs.com/~bristinwild",
  ipfsFallbacks: [
    "https://ipfs.io/ipfs/bafybeibjelns3uwhff3mwun4csdggvz3a7krzqg44mvhvfy7hrzj4qgrq4",
    "https://cloudflare-ipfs.com/ipfs/bafybeibjelns3uwhff3mwun4csdggvz3a7krzqg44mvhvfy7hrzj4qgrq4",
    "https://dweb.link/ipfs/bafybeibjelns3uwhff3mwun4csdggvz3a7krzqg44mvhvfy7hrzj4qgrq4",
    "https://gateway.pinata.cloud/ipfs/bafybeibjelns3uwhff3mwun4csdggvz3a7krzqg44mvhvfy7hrzj4qgrq4",
    "https://plum-labour-meadowlark-47.mypinata.cloud/ipfs/bafybeibjelns3uwhff3mwun4csdggvz3a7krzqg44mvhvfy7hrzj4qgrq4",
  ],
  about: [
    "I'm Bristin Borah, A Full Stack Web3 Developer from Guwahati, Assam with 4+ years of hands-on experience across DeFi, NFTs, GameFi, Infrastructure projects. I've collaborated with core teams on scalable blockchain architectures on both EVM chains and Solana.",
    "Proficient in Solidity for EVM and Rust for Solana, with deep expertise in Web3 Architectural Designs, SDKs, Backend infrastructures, Trustless Agents(ERC 8004), x402 payments, Account Abstraction(ERC 4337), gas optimisation, and secure dApp integration. Clean coding practices and a proven ability to deliver independently or in cross-functional Web3 teams.",
    "Currently leading the Web3 team at Wildchain, where I architected and developed their, Dynamic NFT Marketplace, GamiFi elements, LST stakings , Security protocol for restaker with proper consensus validation for offcahin data, multi-chain integration, and a full DAO system including pledging, treasury, and governance smart contracts.",
    "B.Tech in Computer Science from Assam Downtown University (2018–2022). Certified Blockchain Developer from Blockchain School.",
  ],
  stack: [
    {
      num: "01", name: "EVM · Solidity",
      tags: ["Solidity", "Ethereum", "Polygon", "BSC", "Celo", "BNB Chain", "CreditCoin", "Status Network", "Foundry"],
      note: "4+ years",
    },
    {
      num: "02", name: "Solana · Rust",
      tags: ["Rust", "Anchor", "PDAs", "CPIs", "SPL Tokens", "TOKEN2022", "Arcium"],
      note: "3+ years",
    },
    {
      num: "03", name: "Backend",
      tags: ["NestJS", "Express.js", "TypeScript", "JavaScript", "Axum", "tokio", "MongoDB", "PostgresSQL", "Redis", "graphql"],
      note: "3+ years",
    },
    {
      num: "04", name: "Frontend",
      tags: ["React.js", "Next.js", "Tailwind css", "TypeScript", "ethers.js", "web3.js"],
      note: "3+ years",
    },
    {
      num: "05", name: "Other chains and Protocols",
      tags: ["Algorand", "Logos", "Stellar", "Uniswap", "PancakeSwap", "Eigen Layer", "DEX Aggregators", "Lending Protocols"],
      note: "Explored",
    },
    {
      num: "06", name: "AI and Automations",
      tags: ["N8N", "LangChain", "ERC 8004", "OpenAI", "ERC 8183"],
      note: "Explored",
    },

  ],
  experience: [
    {
      num: "01",
      role: "Lead Web3 Developer",
      company: "Wildchain",
      period: "Oct 2022 — Present",
      bullets: [
        "Led the Web3 team and architected the Wildchain's Web3 side",
        "Built on-chain Auction systems for Dynamic and composable NFTs, and multi-chain integration",
        "Designed & Developed the Technical Architecture of the Wildchain DAO",
        "Worked on Ozon , the liquid staking protocol natively on Solana with shared security mechanisms for offchain data",
        "Developed SDKs and validator infrastructure tools in rust for consensus validation of offchain data and restaking security protocol",
        "Worked on the backend infrastructure and dApp integration for the all the above mentioned projects with frameworks and tools like NestJs , ExpressJs, GraphQL, MongoDB, PostgresSQL, Redis etc.",
        "Written test scripts for onchain contracts using Foundry and Hardhat , Both Invariant and unit tests with proper coverage and CI integration",
        "Researched and Documented on Different Token Standards and their Implementations. which includes ERC 8004 for trustless agents , ERC 4337 for account abstraction , x402 for gasless payments , ERC998 and ERC 6220 for composable and equippable NFTs etc.",
      ],
    },
    {
      num: "02",
      role: "Blockchain Developer",
      company: "Idea Usher",
      period: "Jul 2022 — Oct 2022",
      bullets: [
        "Worked on Order Book and Custodial Wallet module for a Centralised Exchange",
        "Contributed to Solana NFT project — Rust smart contracts in the ecosystem",
        "Integrated DEX aggregators for liquidity (Kyber Network)",
        "Created NFT Marketplace contract and integrated it with the backend",
      ],
    },
    {
      num: "03",
      role: "Blockchain Engineer Intern",
      company: "Impactional Games",
      period: "Mar 2022 — Jul 2022",
      bullets: [
        "Worked on GameFi projects — P2E games and escrow-based game contracts",
        "Researched centralised exchange architecture and DeFi protocol design",
      ],
    },
    {
      num: "04",
      role: "Co-Founder",
      company: "Luster.network",
      period: "Jun 2021 — Jul 2022",
      bullets: [
        "Built a Web3 learning community and contributed to a POE Platform",
        "Conducted workshops and events across colleges and communities",
        "Operated Web3 bootcamps to onboard developers into the ecosystem",
      ],
    },
  ],
  projects: [
    {
      num: "01",
      name: "CredGate Protocol",
      desc: "The financial system is being rewritten on-chain. CredGate is a cross-chain credit layer Powered by Creditcoin's USC Testnet, Turning wallet history into a verified identity that any protocol on any chain can trust.",
      href: "https://github.com/bristinWild/CredGate",
    },
    {
      num: "02",
      name: "Drox Social",
      desc: "Drox is a new-age web3 social and travel platform that helps people organize and join nearby real-world activities with friends and strangers. Built on the Status Network, it uses token-based commitment and reputation to make participation more reliable and community-driven.",
      href: "#",
      droxLinks: {
        backend: "https://github.com/bristinWild/drox-backend",
        frontend: "https://github.com/bristinWild/Drox",
      },
    },
    {
      num: "03",
      name: "Predicted AI",
      desc: "Predicted.ai is an AI-powered platform that predicts which individuals are most likely to engage with a product or community. It analyzes product context to generate per-user likelihood scores along with insights, helping businesses target high-intent users and improve acquisition efficiency.",
      href: "https://github.com/bristinWild/predictedAI",
    },
    {
      num: "04",
      name: "Credgate SDKs",
      desc: "Developer SDKs for integrating CredGate's on-chain credit layer ,verify wallet identities, query credit scores, and build trust-aware protocols across any EVM chain.",
      href: "#",
      credgateLinks: {
        docs: "https://credgate.vercel.app/docs",
        installation: "https://www.npmjs.com/package/credgate-sdk",
      },
    },
    {
      num: "05",
      name: "Ozon SDKs & Tool Kits",
      desc: "ozon-cli is a command-line tool that enables developers and operators to register, manage, and interact with Ozon's restaking protocol and AVS infrastructure on Solana. Operator Nodes Client is an Operator Slashboard helps to monitor operator nodes getting slashed for mishaving while validating. AVS SDK is Command-line tool for AVS (Actively Validated Service) owners to create, manage, and monitor oracle validation tasks on Solana which is a part of the Ozon Restaking Protocol.",
      href: "#",
      external: true,
    },
  ],
  awards: [
    {
      num: "01",
      name: "Awarded Logos LP-0012: Event/Log Mechanism",
      desc: "Designed and implemented a structured event system for LEZ programs, adding emit_event() API, atomic event flushing via ProgramOutput.events, and a getTransactionReceipt RPC returning events for both successful and failed transactions. Delivered lez-events-decoder CLI for human-readable event output, RejectedTxStore for failure-path event preservation, and 215 passing tests across the full LEZ workspace.",
      href: "#",
      LogosLinks12: {
        MergedPR: "https://github.com/logos-co/lambda-prize/pull/14",
        ForkedRepository: "https://github.com/bristinWild/logos-execution-zone",
      },
      external: true,
    },

  ],
};
