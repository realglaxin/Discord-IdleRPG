module.exports = {
  client: {
    token:
      "MTIzMTYwNTA0MjAyMTEzODUzMg.GPeu4q.vDWMyaJkZYkinmT9NDjCO6bkElxm-S3MntUQps",
    id: "1231605042021138532",
    supportServer: "https://discord.gg/",
  },
  handler: {
    prefix: "?",
    deploy: true,
    commands: {
      prefix: false,
      slash: true,
      user: false,
      message: false,
    },
    mongodb: {
      enabled: true,
      uri: "mongodb+srv://admin:123@discord-bot.yq5hcav.mongodb.net/?retryWrites=true&w=majority&appName=Xianxia2",
    },
  },
  users: {
    developers: ["1191264521508110360", "254833691438743552"],
    ownerId: "254833691438743552",
  },
  channels: {
    modLogs: {
      enabled: false,
      channel: "1231080262079614987",
    },
  },
  development: {
    enabled: false,
    guild: "1229304088819142678",
  },
  color: {
    main: "#32CD32",
  },
  messageSettings: {
    nsfwMessage: "<:error:1229320037131882598> The current channel is not a NSFW channel.",
    ownerMessage:
      "<:error:1229320037131882598> The bot developer has the only permissions to use this command.",
    developerMessage: "<:error:1229320037131882598> You are not authorized to use this command.",
    cooldownMessage:
      "<:error:1229320037131882598> Slow down buddy! You're too fast to use this command ({cooldown}s).", // '{cooldown}' is a variable that shows the time to use the command again (in seconds)
    globalCooldownMessage:
      "<:error:1229320037131882598> Slow down buddy! This command is on a global cooldown ({cooldown}s).", // '{cooldown}' is a variable that shows the time to use the command again (in seconds)
    notHasPermissionMessage:
      "<:error:1229320037131882598> You do not have the permission to use this command.",
    notHasPermissionComponent:
      "<:error:1229320037131882598> You do not have the permission to use this component.",
    missingDevIDsMessage:
      "<:error:1229320037131882598> This is a developer only command, but unable to execute due to missing user IDs in configuration file.",
  },
  itemTypes: [
    {
      name: "Sword",
      rarity: "Common",
      attack: 10,
      quantity: 1,
      requiredLevel: 1,
      price: 100,
      upgradable: true,
      upgraded: false,
      upgradeCost: 2000,
      upgradeAttack: 30,
      uid: "192233",
      type: "weapon",
    },
    // { name: 'Potion', rarity: 'Uncommon', healthRestore: 20 },
    {
      name: "Scroll",
      rarity: "Rare",
      effect: "Increase XP by 400",
      quantity: 1,
      requiredLevel: 5,
      price: 200,
      upgradable: false,
      upgraded: false,
      uid: "122149",
      type: "item",
      powerXp: 60,
    },
    // { name: 'Ring', rarity: 'Epic', effect: 'Increase max health by 50' },
    {
      name: "Amulet",
      rarity: "Legendary",
      effect: "Increases XP by 800",
      quantity: 1,
      requiredLevel: 7,
      price: 500,
      upgradable: false,
      upgraded: false,
      uid: "193168",
      type: "item",
      powerXp: 60,
    },
    {
      name: "Artifact",
      rarity: "Mythical",
      effect: "Grants a random ability",
      quantity: 1,
      requiredLevel: 3,
      price: 300,
      upgradable: false,
      upgraded: false,
      uid: "073120",
      type: "item",
      powerXp: 100,
    },
    {
      name: "Treasure",
      rarity: "Divine",
      effect: "Grants a powerful blessing",
      quantity: 1,
      requiredLevel: 10,
      price: 1000,
      upgradable: false,
      upgraded: false,
      uid: "073128",
      type: "item",
      powerXp: 80,
    },
    {
      name: "Relic",
      rarity: "Celestial",
      effect: "Unlocks a hidden power",
      quantity: 1,
      requiredLevel: 8,
      price: 800,
      upgradable: false,
      upgraded: false,
      uid: "100268",
      type: "item",
      powerXp: 80,
    },
    // {
    //   name: "Talisman",
    //   rarity: "Ethereal",
    //   effect: "Blesses the user with divine protection",
    //   quantity: 1,
    //   requiredLevel: 14,
    //   price: 1200,
    //   upgradable: false,
    //   upgraded: false,
    //   uid: "7",
    //   type: "weapon"
    // },
    {
      name: "Charm",
      rarity: "Mystical",
      effect: "Increase Xp by 2000",
      quantity: 1,
      requiredLevel: 12,
      price: 1500,
      upgradable: false,
      upgraded: false,
      uid: "999120",
      type: "item",
      powerXp: 80,
    },
    // nothing
  ],
  crates: [
    {
      name: "Common Crate",
      rarity: "Common",
      price: 300,
      items: [
        { name: "Sword", chance: 0.5 },
        { name: "Artifact", chance: 0.3 },
        { name: "Scroll", chance: 0.2 },
      ],
      quantity: 1,
    },
    {
      name: "Uncommon Crate",
      rarity: "Uncommon",
      price: 200,
      items: [
        { name: "Charm", chance: 0.3 },
        { name: "Artifact", chance: 0.2 },
        { name: "Scroll", chance: 0.5 },
      ],
      quantity: 1,
    },
    {
      name: "Rare Crate",
      rarity: "Rare",
      price: 500,
      items: [
        // { name: "Talisman", chance: 0.2 },
        { name: "Relic", chance: 0.3 },
        { name: "Treasure", chance: 0.5 },
      ],
      quantity: 1,
    },
    {
      name: "Legendary Crate",
      rarity: "Legendary",
      price: 1000,
      items: [
        // { name: "Talisman", chance: 0.1 },
        { name: "Artifact", chance: 0.4 },
        { name: "Amulet", chance: 0.5 },
      ],
      quantity: 1,
    },
    {
      name: "Mythical Crate",
      rarity: "Mythical",
      price: 1500,
      items: [
        { name: "Artifact", chance: 0.1 },
        { name: "Amulet", chance: 0.3 },
        { name: "Legendary Crate", chance: 0.6 },
      ],
      quantity: 1,
    },
  ],
  techniques: [
    {
      name: "Swift Steps",
      type: "active",
      effect: "Strengthens agility and dodge chance.",
      effectIncrease: "10%", // Increase rate of effect
      uid: "1",
      equip: false,
      proficiency: 1,
      requiredProficiency: 30,
      stage: "Basic",
    },
    {
      name: "Furious Strikes",
      type: "active",
      effect: "Inflicts damage over time to the enemy.",
      effectIncrease: "15%", // Increase rate of effect
      uid: "2",
      equip: false,
      proficiency: 1,
      requiredProficiency: 30,
      stage: "Basic",
    },
    {
      name: "Tranquil Mind",
      type: "active",
      effect: "Increases cultivation success rate and improves mentality.",
      effectIncrease: "20%", // Increase rate of effect
      uid: "3",
      equip: false,
      proficiency: 1,
      requiredProficiency: 30,
      stage: "Basic",
    },
    {
      name: "Focused Breath",
      type: "active",
      effect: "Boosts energy recovery and enhances meditation efficiency.",
      effectIncrease: "12%", // Increase rate of effect
      uid: "4",
      equip: false,
      proficiency: 1,
      requiredProficiency: 30,
      stage: "Basic",
    },
    {
      name: "Breath of Enlightenment",
      type: "passive",
      effect: "Increases XP gained from cultivation and energy recovery.",
      effectIncrease: "5%", // Increase rate of effect
      uid: "5",
      equip: false,
      proficiency: 1,
      requiredProficiency: 30,
      stage: "Basic",
    },
    {
      name: "Iron Body",
      type: "passive",
      effect: "Enhances defense and resistance to damage.",
      effectIncrease: "8%", // Increase rate of effect
      uid: "6",
      equip: false,
      proficiency: 1,
      requiredProficiency: 30,
      stage: "Basic",
    },
    {
      name: "Masterful Mind",
      type: "passive",
      effect: "Improves focus and mental clarity, aiding in cultivation.",
      effectIncrease: "7%", // Increase rate of effect
      uid: "7",
      equip: false,
      proficiency: 1,
      requiredProficiency: 30,
      stage: "Basic",
    },
    {
      name: "Nimble Feet",
      type: "passive",
      effect: "Increases movement speed and evasion.",
      effectIncrease: "9%", // Increase rate of effect
      uid: "8",
      equip: false,
      proficiency: 1,
      requiredProficiency: 30,
      stage: "Basic",
    },
    {
      name: "Vital Spirit",
      type: "passive",
      effect: "Enhances vitality and stamina regeneration.",
      effectIncrease: "6%", // Increase rate of effect
      uid: "9",
      equip: false,
      proficiency: 1,
      requiredProficiency: 30,
      stage: "Basic",
    }
  ],
};
