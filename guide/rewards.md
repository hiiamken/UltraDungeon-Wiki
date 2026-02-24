# Rewards

## Overview

UltraDungeon supports multiple reward types that are given to players upon dungeon completion.

## Reward Types

### 1. Default Rewards (Guaranteed)
Items and commands given to **every** player who completes the dungeon.

```yaml
DefaultRewards:
  enabled: true
  rewards:
    diamond_sword:
      type: item
      item: <serialized ItemStack>
    coins:
      type: command
      command: "eco give %player% 100"
      display-name: "&6100 Coins"
```

### 2. Card Flip Rewards (Random)
Players flip cards to reveal random rewards from a pool.

```yaml
CardFlip:
  enabled: true
  flips-override: -1    # -1 = use default from config.yml
  rewards:
    rare_sword:
      type: item
      rate: 10           # weight (higher = more common)
      item: <serialized ItemStack>
    empty:
      type: empty
      rate: 20
```

### 3. Legacy Rewards (Random Pool)
Classic random reward system. `RewardAmount` controls how many are picked.

```yaml
Reward:
  reward_1:
    Chance: 50
    Command: "eco give %player% 500"
  reward_2:
    Chance: 100
    Item: <serialized ItemStack>
RewardAmount: 1
```

### 4. Vault Money Reward
Requires [Vault](./vault) integration.

```yaml
MoneyReward: 500.0    # Money given on completion
```

### 5. MMOCore XP Reward
Requires [MMOCore](./mmocore) integration.

```yaml
MMOCoreExpReward: 200.0    # Class EXP given on completion
```

### 6. MMOItems Reward
Requires [MMOItems](./mmoitems) integration.

```yaml
MMOItemRewards:
  sword_1:
    Type: SWORD
    Id: FLAME_BLADE
    Amount: 1
```

### 7. Victory Commands
Raw commands executed on completion. Runs as console.

```yaml
VictoryCommands:
  - "broadcast %player% completed the dungeon!"
  - "title %player% title {\"text\":\"Victory!\"}"
```

## Configuring via GUI

The setup wizard provides a **Rewards** button that opens the reward editor. You can:
- Add item rewards (drag items from inventory)
- Add command rewards (type in chat)
- Set drop chance per reward
- Configure Money Reward and Entry Fee directly in the main wizard GUI

## Reward Flow Order

When a player completes a dungeon, rewards are given in this order:
1. Default Rewards (if enabled)
2. Legacy Reward pool
3. Vault Money Reward
4. MMOCore XP Reward
5. MMOItems Rewards
6. Victory Commands
