const levels = [
  {
    name: "Level 1: Workshop Lockup",
    themeClass: "theme-workshop",
    terminalPin: "731",
    keypadCode: "4582",
    hintSteps: [
      "Three locks guard the door. None are optional.",
      "Two torn clues can be combined into something usable.",
      "Wire and fuse can be combined before touching the keypad.",
    ],
    targets: {
      door: "Exit Door",
      scanner: "Badge Scanner",
      keypad: "Numeric Keypad",
      console: "Maintenance Console",
      panel: "Junction Panel",
      vent: "Ceiling Vent",
      breakable: "Table",
      chest: "Tool Locker",
    },
    items: {
      tool: "Hammer",
      magnet: "Magnet",
      battery: "Battery",
      boxKey: "Copper Key",
      screwdriver: "Flathead",
      wire: "Copper Wire",
      fuse: "Glass Fuse",
      powerModule: "Jumper Pack",
      doorKey: "Door Key",
      accessCard: "Staff Badge",
      clueA: "Torn Note A",
      clueB: "Torn Note B",
      terminalHint: "Decoded Cipher",
      clueC: "Code Strip",
    },
    inspect: {
      clueA: "Note A: Terminal PIN starts with 7.",
      clueB: "Note B: Terminal PIN ends with 31.",
      terminalHint: "Decoded terminal PIN: 731.",
      clueC: "Code strip: Keypad code is 4582.",
    },
  },
  {
    name: "Level 2: Boiler Maze",
    themeClass: "theme-boiler",
    terminalPin: "264",
    keypadCode: "9017",
    hintSteps: [
      "Unlocking the keypad alone will not open this door.",
      "If the console is powered but still useless, you are missing a decoded item.",
      "The chest and panel both gate components needed for electricity.",
    ],
    targets: {
      door: "Pressure Door",
      scanner: "Heat Scanner",
      keypad: "Control Pad",
      console: "Valve Console",
      panel: "Steam Panel",
      vent: "Duct Grille",
      breakable: "Pipe Crate",
      chest: "Wall Locker",
    },
    items: {
      tool: "Crowbar",
      magnet: "Electro Magnet",
      battery: "Fuse Cell",
      boxKey: "Iron Key",
      screwdriver: "Stub Driver",
      wire: "Insulated Wire",
      fuse: "Ceramic Fuse",
      powerModule: "Power Bridge",
      doorKey: "Pressure Key",
      accessCard: "Supervisor Badge",
      clueA: "Burned Slip A",
      clueB: "Burned Slip B",
      terminalHint: "Recovered PIN",
      clueC: "Stamped Ticket",
    },
    inspect: {
      clueA: "Slip A: Terminal PIN starts with 2.",
      clueB: "Slip B: Terminal PIN ends with 64.",
      terminalHint: "Recovered terminal PIN: 264.",
      clueC: "Ticket stamp: Keypad code 9017.",
    },
  },
  {
    name: "Level 3: Observatory",
    themeClass: "theme-observatory",
    terminalPin: "845",
    keypadCode: "3264",
    hintSteps: [
      "Power first, then authentication, then access.",
      "A scanner card appears only after terminal authorization succeeds.",
      "The combined clue tells the terminal PIN, not the keypad code.",
    ],
    targets: {
      door: "Roof Hatch",
      scanner: "Orbital Scanner",
      keypad: "Laser Keypad",
      console: "Star Terminal",
      panel: "Relay Panel",
      vent: "Air Slot",
      breakable: "Display Case",
      chest: "Star Box",
    },
    items: {
      tool: "Wrench",
      magnet: "Compass Magnet",
      battery: "Power Cell",
      boxKey: "Silver Key",
      screwdriver: "Micro Driver",
      wire: "Signal Wire",
      fuse: "Photon Fuse",
      powerModule: "Circuit Pack",
      doorKey: "Hatch Key",
      accessCard: "Orbit Pass",
      clueA: "Chart Fragment A",
      clueB: "Chart Fragment B",
      terminalHint: "Merged Chart",
      clueC: "Constellation Tag",
    },
    inspect: {
      clueA: "Fragment A: Terminal PIN starts with 8.",
      clueB: "Fragment B: Terminal PIN ends with 45.",
      terminalHint: "Merged PIN value: 845.",
      clueC: "Constellation tag: Keypad code 3264.",
    },
  },
  {
    name: "Level 4: Archive Vault",
    themeClass: "theme-archive",
    terminalPin: "512",
    keypadCode: "7740",
    hintSteps: [
      "The archive door checks a key, card, and code in that order.",
      "The vent is not decoration; it hides electrical progress.",
      "No decoded cipher means no terminal access.",
    ],
    targets: {
      door: "Archive Door",
      scanner: "Record Scanner",
      keypad: "Vault Keypad",
      console: "Index Console",
      panel: "Binding Panel",
      vent: "Book Vent",
      breakable: "Ledger Crate",
      chest: "Binder Chest",
    },
    items: {
      tool: "Mallet",
      magnet: "Book Magnet",
      battery: "Archive Cell",
      boxKey: "Binder Key",
      screwdriver: "Precision Driver",
      wire: "Braided Wire",
      fuse: "Vault Fuse",
      powerModule: "Charge Link",
      doorKey: "Archive Key",
      accessCard: "Curator Card",
      clueA: "Ledger Piece A",
      clueB: "Ledger Piece B",
      terminalHint: "Decoded Ledger",
      clueC: "Vault Voucher",
    },
    inspect: {
      clueA: "Piece A: Terminal PIN starts with 5.",
      clueB: "Piece B: Terminal PIN ends with 12.",
      terminalHint: "Decoded terminal PIN: 512.",
      clueC: "Voucher print: Keypad code 7740.",
    },
  },
  {
    name: "Level 5: Reactor Lab",
    themeClass: "theme-reactor",
    terminalPin: "690",
    keypadCode: "1183",
    hintSteps: [
      "The reactor room expects repaired hardware, not raw parts.",
      "If the keypad says dark, build the missing module first.",
      "Console success is the only source of scanner access.",
    ],
    targets: {
      door: "Containment Door",
      scanner: "Bio Scanner",
      keypad: "Reactor Pad",
      console: "Reactor Console",
      panel: "Core Panel",
      vent: "Cooling Vent",
      breakable: "Alloy Crate",
      chest: "Research Locker",
    },
    items: {
      tool: "Impact Bar",
      magnet: "Field Magnet",
      battery: "Reactor Cell",
      boxKey: "Titan Key",
      screwdriver: "Torque Driver",
      wire: "Shielded Wire",
      fuse: "Core Fuse",
      powerModule: "Stabilizer",
      doorKey: "Containment Key",
      accessCard: "Lab Card",
      clueA: "Log Fragment A",
      clueB: "Log Fragment B",
      terminalHint: "Decoded Log",
      clueC: "Safety Ticket",
    },
    inspect: {
      clueA: "Fragment A: Terminal PIN starts with 6.",
      clueB: "Fragment B: Terminal PIN ends with 90.",
      terminalHint: "Decoded terminal PIN: 690.",
      clueC: "Safety ticket: Keypad code 1183.",
    },
  },
  {
    name: "Level 6: Hangar Deck",
    themeClass: "theme-hangar",
    terminalPin: "407",
    keypadCode: "2659",
    hintSteps: [
      "The chain is longer now: prepare the keypad before code entry.",
      "Read and combine clues before touching security devices.",
      "The door still needs all lock systems to clear.",
    ],
    targets: {
      door: "Hangar Gate",
      scanner: "Pilot Scanner",
      keypad: "Gate Keypad",
      console: "Flight Console",
      panel: "Power Panel",
      vent: "Intake Vent",
      breakable: "Cargo Crate",
      chest: "Pilot Locker",
    },
    items: {
      tool: "Breaker Bar",
      magnet: "Flux Magnet",
      battery: "Flight Cell",
      boxKey: "Cargo Key",
      screwdriver: "Aero Driver",
      wire: "Bus Wire",
      fuse: "Gate Fuse",
      powerModule: "Launch Module",
      doorKey: "Gate Key",
      accessCard: "Pilot Card",
      clueA: "Flight Scrap A",
      clueB: "Flight Scrap B",
      terminalHint: "Decoded Flight PIN",
      clueC: "Departure Note",
    },
    inspect: {
      clueA: "Scrap A: Terminal PIN starts with 4.",
      clueB: "Scrap B: Terminal PIN ends with 07.",
      terminalHint: "Decoded terminal PIN: 407.",
      clueC: "Departure note: Keypad code 2659.",
    },
  },
  {
    name: "Level 7: Drydock Control",
    themeClass: "theme-drydock",
    terminalPin: "583",
    keypadCode: "4402",
    hintSteps: [
      "Scanner security has hardened. A raw card is no longer enough.",
      "One extra inventory combination is required before scanner access.",
      "Terminal solve still reveals critical paper clues.",
    ],
    targets: {
      door: "Drydock Door",
      scanner: "Dock Scanner",
      keypad: "Dock Keypad",
      console: "Dock Console",
      panel: "Service Panel",
      vent: "Vent Shaft",
      breakable: "Shipping Crate",
      chest: "Dock Locker",
    },
    items: {
      tool: "Impact Hammer",
      magnet: "Polar Magnet",
      battery: "Dock Battery",
      boxKey: "Brass Key",
      screwdriver: "Slot Driver",
      wire: "Dock Wire",
      fuse: "Dock Fuse",
      powerModule: "Dock Power Pack",
      doorKey: "Dock Key",
      accessCard: "Dock Badge",
      clueA: "Dock Note A",
      clueB: "Dock Note B",
      terminalHint: "Dock Cipher",
      clueC: "Dock Slip",
    },
    inspect: {
      clueA: "Note A: Terminal PIN starts with 5.",
      clueB: "Note B: Terminal PIN ends with 83.",
      terminalHint: "Decoded terminal PIN: 583.",
      clueC: "Dock slip: Keypad code 4402.",
    },
  },
  {
    name: "Level 8: Catacomb Switchyard",
    themeClass: "theme-catacomb",
    terminalPin: "926",
    keypadCode: "7814",
    hintSteps: [
      "You now need both scanner prep and keypad prep.",
      "Do not spend clue papers too early, they gate later locks.",
      "Item-combination order starts to matter in this room.",
    ],
    targets: {
      door: "Switchyard Gate",
      scanner: "Bone Scanner",
      keypad: "Switch Keypad",
      console: "Relay Console",
      panel: "Grid Panel",
      vent: "Dust Vent",
      breakable: "Ancient Crate",
      chest: "Stone Locker",
    },
    items: {
      tool: "Stone Maul",
      magnet: "Rune Magnet",
      battery: "Relay Cell",
      boxKey: "Obsidian Key",
      screwdriver: "Grid Driver",
      wire: "Relay Wire",
      fuse: "Rune Fuse",
      powerModule: "Grid Module",
      doorKey: "Gate Key",
      accessCard: "Seal Card",
      clueA: "Shard A",
      clueB: "Shard B",
      terminalHint: "Merged Shard",
      clueC: "Switch Note",
    },
    inspect: {
      clueA: "Shard A: Terminal PIN starts with 9.",
      clueB: "Shard B: Terminal PIN ends with 26.",
      terminalHint: "Decoded terminal PIN: 926.",
      clueC: "Switch note: Keypad code 7814.",
    },
  },
  {
    name: "Level 9: Data Core Chamber",
    themeClass: "theme-data",
    terminalPin: "351",
    keypadCode: "6025",
    hintSteps: [
      "Door security now expects a crafted override seal after all locks.",
      "Keep both terminal clue outputs; they combine again at the end.",
      "This room has no shortcut around the override requirement.",
    ],
    targets: {
      door: "Core Door",
      scanner: "Core Scanner",
      keypad: "Core Keypad",
      console: "Core Console",
      panel: "Core Panel",
      vent: "Core Vent",
      breakable: "Core Crate",
      chest: "Core Locker",
    },
    items: {
      tool: "Breaker Hammer",
      magnet: "Flux Magnet",
      battery: "Core Battery",
      boxKey: "Core Key",
      screwdriver: "Precision Driver",
      wire: "Core Wire",
      fuse: "Core Fuse",
      powerModule: "Core Module",
      doorKey: "Core Door Key",
      accessCard: "Core Badge",
      clueA: "Core Fragment A",
      clueB: "Core Fragment B",
      terminalHint: "Core Decode",
      clueC: "Core Ticket",
    },
    inspect: {
      clueA: "Fragment A: Terminal PIN starts with 3.",
      clueB: "Fragment B: Terminal PIN ends with 51.",
      terminalHint: "Decoded terminal PIN: 351.",
      clueC: "Core ticket: Keypad code 6025.",
    },
  },
  {
    name: "Level 10: Zenith Exit Gate",
    themeClass: "theme-zenith",
    terminalPin: "748",
    keypadCode: "1936",
    exitCode: "570",
    hintSteps: [
      "Final room: all prior mechanics are active.",
      "After all three locks, craft the override and apply it to the door.",
      "The final door prompt needs a separate exit code from the papers.",
    ],
    targets: {
      door: "Zenith Gate",
      scanner: "Zenith Scanner",
      keypad: "Zenith Keypad",
      console: "Zenith Console",
      panel: "Zenith Panel",
      vent: "Zenith Vent",
      breakable: "Zenith Crate",
      chest: "Zenith Locker",
    },
    items: {
      tool: "Titan Hammer",
      magnet: "Zen Magnet",
      battery: "Zen Battery",
      boxKey: "Zen Key",
      screwdriver: "Zen Driver",
      wire: "Zen Wire",
      fuse: "Zen Fuse",
      powerModule: "Zen Module",
      doorKey: "Zen Door Key",
      accessCard: "Zen Badge",
      clueA: "Zen Fragment A",
      clueB: "Zen Fragment B",
      terminalHint: "Zen Decode",
      clueC: "Zen Exit Sheet",
    },
    inspect: {
      clueA: "Fragment A: Terminal PIN starts with 7.",
      clueB: "Fragment B: Terminal PIN ends with 48.",
      terminalHint: "Decoded terminal PIN: 748.",
      clueC: "Zen sheet: Keypad code 1936. Exit seal code 570.",
    },
  },
];

const PAPER_ITEMS = new Set(["clueA", "clueB", "clueC", "terminalHint"]);
const SPECIAL_ITEM_LABELS = {
  encodedCard: "Encoded Security Card",
  overrideKey: "Override Seal",
};
const roomThemes = levels.map((level) => level.themeClass);
const INVALID_FLASH_MS = 420;

const state = {
  currentLevelIndex: 0,
  inventory: [],
  selectedItem: null,
  draggingItemId: null,
  breakableOpened: false,
  chestOpened: false,
  panelOpened: false,
  ventOpened: false,
  consolePowered: false,
  consoleSolved: false,
  keypadPowered: false,
  keypadPrimed: false,
  keypadUnlocked: false,
  scannerUnlocked: false,
  doorKeyUsed: false,
  overrideUsed: false,
  finalExitVerified: false,
  doorOpen: false,
  hintStep: 0,
  gameFinished: false,
};

const levelNameEl = document.getElementById("level-name");
const inventoryEl = document.getElementById("inventory");
const roomEl = document.getElementById("room");
const hintBtn = document.getElementById("hint-btn");
const clearSelectionBtn = document.getElementById("clear-selection");
const statusEl = document.getElementById("status");
const logEl = document.getElementById("log");

const paperOverlayEl = document.getElementById("paper-overlay");
const paperTitleEl = document.getElementById("paper-title");
const paperBodyEl = document.getElementById("paper-body");
const paperCloseEl = document.getElementById("paper-close");

const targetEls = {
  door: document.getElementById("door"),
  scanner: document.getElementById("scanner"),
  keypad: document.getElementById("keypad"),
  console: document.getElementById("console"),
  panel: document.getElementById("panel"),
  vent: document.getElementById("vent"),
  breakable: document.getElementById("breakable"),
  chest: document.getElementById("chest"),
};

const pickupEls = {
  tool: document.getElementById("pickup-tool"),
  magnet: document.getElementById("pickup-magnet"),
  battery: document.getElementById("pickup-battery"),
  boxKey: document.getElementById("pickup-boxKey"),
  screwdriver: document.getElementById("pickup-screwdriver"),
  wire: document.getElementById("pickup-wire"),
  fuse: document.getElementById("pickup-fuse"),
  doorKey: document.getElementById("pickup-doorKey"),
  accessCard: document.getElementById("pickup-accessCard"),
  clueA: document.getElementById("pickup-clueA"),
  clueB: document.getElementById("pickup-clueB"),
  clueC: document.getElementById("pickup-clueC"),
};

function getLevel() {
  return levels[state.currentLevelIndex];
}

function getTier() {
  return state.currentLevelIndex + 1;
}

function requiresKeypadPrime() {
  return getTier() >= 4;
}

function requiresEncodedScanner() {
  return getTier() >= 7;
}

function requiresDoorOverride() {
  return getTier() >= 9;
}

function requiresFinalExitCode() {
  return getTier() >= 10;
}

function getItemLabel(itemId) {
  return getLevel().items[itemId] ?? SPECIAL_ITEM_LABELS[itemId] ?? itemId;
}

function hasItem(itemId) {
  return state.inventory.includes(itemId);
}

function isPaperItem(itemId) {
  return PAPER_ITEMS.has(itemId);
}

function getPaperText(itemId) {
  return getLevel().inspect[itemId] ?? `${getItemLabel(itemId)} has no writing.`;
}

function logMessage(message, tone = "") {
  const li = document.createElement("li");
  if (tone) {
    li.className = tone;
  }
  li.textContent = message;
  logEl.prepend(li);
}

function setStatus() {
  const selected = state.selectedItem ? getItemLabel(state.selectedItem) : "Nothing selected";
  const locksOpen = [state.doorKeyUsed, state.keypadUnlocked, state.scannerUnlocked].filter(Boolean)
    .length;
  const doorState = state.doorOpen ? "Open" : "Closed";
  const tierLabel = `T${getTier()}`;

  statusEl.innerHTML = [
    `<strong>Level:</strong> ${state.currentLevelIndex + 1}/${levels.length}`,
    `<strong>Tier:</strong> ${tierLabel}`,
    `<strong>Selected:</strong> ${selected}`,
    `<strong>Door:</strong> ${doorState}`,
    `<strong>Locks Open:</strong> ${locksOpen}/3`,
  ].join(" | ");
}

function addToInventory(itemId) {
  if (!hasItem(itemId)) {
    state.inventory.push(itemId);
  }
}

function removeFromInventory(itemId) {
  state.inventory = state.inventory.filter((item) => item !== itemId);
  if (state.selectedItem === itemId) {
    state.selectedItem = null;
  }
}

function clearTransientClasses() {
  document.querySelectorAll(".drop-hover, .invalid-drop, .break-hit, .fall-in").forEach((node) => {
    node.classList.remove("drop-hover", "invalid-drop", "break-hit", "fall-in");
  });
}

function flashInvalid(element) {
  if (!element) {
    return;
  }
  element.classList.remove("invalid-drop");
  void element.offsetWidth;
  element.classList.add("invalid-drop");
  window.setTimeout(() => {
    element.classList.remove("invalid-drop");
  }, INVALID_FLASH_MS);
}

function openPaperOverlay(itemId) {
  paperTitleEl.textContent = getItemLabel(itemId);
  paperBodyEl.textContent = getPaperText(itemId);
  paperOverlayEl.classList.remove("hidden");
  paperOverlayEl.setAttribute("aria-hidden", "false");
}

function closePaperOverlay() {
  paperOverlayEl.classList.add("hidden");
  paperOverlayEl.setAttribute("aria-hidden", "true");
}

function renderInventory() {
  inventoryEl.innerHTML = "";

  if (state.inventory.length === 0) {
    const empty = document.createElement("span");
    empty.textContent = "No items";
    inventoryEl.appendChild(empty);
    setStatus();
    return;
  }

  state.inventory.forEach((itemId) => {
    const btn = document.createElement("button");
    btn.className = "inv-item";
    btn.type = "button";
    btn.draggable = true;
    btn.dataset.itemId = itemId;
    btn.textContent = getItemLabel(itemId);

    if (state.selectedItem === itemId) {
      btn.classList.add("selected");
    }

    inventoryEl.appendChild(btn);
  });

  setStatus();
}

function revealPickup(itemId, withFall = false) {
  const el = pickupEls[itemId];
  if (!el) {
    return;
  }

  el.classList.remove("hidden");

  if (withFall) {
    el.classList.remove("fall-in");
    void el.offsetWidth;
    el.classList.add("fall-in");
    el.addEventListener(
      "animationend",
      () => {
        el.classList.remove("fall-in");
      },
      { once: true }
    );
  }
}

function hidePickup(itemId) {
  pickupEls[itemId]?.classList.add("hidden");
}

function animateBreakable() {
  const el = targetEls.breakable;
  el.classList.remove("break-hit");
  void el.offsetWidth;
  el.classList.add("break-hit");
  window.setTimeout(() => {
    el.classList.add("broken");
  }, 150);
}

function tryCombine(first, second) {
  const pair = [first, second].sort().join("+");

  if (pair === "clueA+clueB") {
    removeFromInventory("clueA");
    removeFromInventory("clueB");
    addToInventory("terminalHint");
    state.selectedItem = "terminalHint";
    logMessage(`You combine the papers into ${getItemLabel("terminalHint")}.`, "good");
    renderInventory();
    openPaperOverlay("terminalHint");
    return true;
  }

  if (pair === "fuse+wire") {
    removeFromInventory("wire");
    removeFromInventory("fuse");
    addToInventory("powerModule");
    state.selectedItem = "powerModule";
    logMessage(`You assemble ${getItemLabel("powerModule")}.`, "good");
    renderInventory();
    return true;
  }

  if (requiresEncodedScanner() && pair === "accessCard+magnet") {
    removeFromInventory("accessCard");
    addToInventory("encodedCard");
    state.selectedItem = "encodedCard";
    logMessage(`You encode the badge into ${getItemLabel("encodedCard")}.`, "good");
    renderInventory();
    return true;
  }

  if (
    requiresDoorOverride() &&
    pair === "clueC+terminalHint" &&
    state.keypadUnlocked &&
    state.scannerUnlocked
  ) {
    removeFromInventory("terminalHint");
    addToInventory("overrideKey");
    state.selectedItem = "overrideKey";
    logMessage(`You craft ${getItemLabel("overrideKey")}.`, "good");
    renderInventory();
    return true;
  }

  return false;
}

function handleInventorySelection(itemId) {
  if (!state.selectedItem) {
    state.selectedItem = itemId;
    renderInventory();
    return;
  }

  if (state.selectedItem === itemId) {
    state.selectedItem = null;
    renderInventory();
    return;
  }

  if (tryCombine(state.selectedItem, itemId)) {
    return;
  }

  state.selectedItem = itemId;
  renderInventory();
}

function checkDoorOpen() {
  const baseLocksOpen = state.doorKeyUsed && state.keypadUnlocked && state.scannerUnlocked;
  const overrideReady = !requiresDoorOverride() || state.overrideUsed;
  const finalReady = !requiresFinalExitCode() || state.finalExitVerified;

  if (baseLocksOpen && overrideReady && finalReady && !state.doorOpen) {
    state.doorOpen = true;
    logMessage("All locks disengage. The door opens.", "good");
  }
}

function resetLevelState() {
  state.inventory = [];
  state.selectedItem = null;
  state.draggingItemId = null;
  state.breakableOpened = false;
  state.chestOpened = false;
  state.panelOpened = false;
  state.ventOpened = false;
  state.consolePowered = false;
  state.consoleSolved = false;
  state.keypadPowered = false;
  state.keypadPrimed = false;
  state.keypadUnlocked = false;
  state.scannerUnlocked = false;
  state.doorKeyUsed = false;
  state.overrideUsed = false;
  state.finalExitVerified = false;
  state.doorOpen = false;
  state.hintStep = 0;
}

function applyLevelVisuals() {
  const level = getLevel();

  levelNameEl.textContent = level.name;
  roomEl.classList.remove(...roomThemes);
  roomEl.classList.add(level.themeClass);

  Object.keys(targetEls).forEach((key) => {
    targetEls[key].textContent = level.targets[key];
  });

  Object.keys(pickupEls).forEach((key) => {
    pickupEls[key].textContent = level.items[key];
  });

  targetEls.breakable.classList.remove("broken", "break-hit");
}

function loadLevel(index, fromDoor = false) {
  state.currentLevelIndex = index;
  resetLevelState();
  clearTransientClasses();
  closePaperOverlay();
  applyLevelVisuals();

  Object.keys(pickupEls).forEach((itemId) => hidePickup(itemId));
  revealPickup("tool");
  revealPickup("magnet");
  revealPickup("battery");

  renderInventory();

  if (fromDoor) {
    logMessage(`${getLevel().name} entered. Everything you carried is gone.`, "warn");
  } else {
    logMessage(`${getLevel().name} started.`);
  }
}

function enterNextLevel() {
  if (state.currentLevelIndex >= levels.length - 1) {
    state.gameFinished = true;
    logMessage("You cleared all rooms. Campaign complete.", "good");
    setStatus();
    return;
  }

  loadLevel(state.currentLevelIndex + 1, true);
}

function handlePickup(itemId, button) {
  addToInventory(itemId);
  button.classList.add("hidden");
  logMessage(`Picked up ${getItemLabel(itemId)}.`, "good");
  renderInventory();
}

function handleBreakable(itemId) {
  if (state.breakableOpened) {
    logMessage("It is already broken.");
    return true;
  }

  if (itemId === "tool") {
    state.breakableOpened = true;
    animateBreakable();
    revealPickup("boxKey", true);
    revealPickup("clueA", true);
    logMessage("It shatters and items drop out.", "good");
    return true;
  }

  if (itemId === null) {
    logMessage("It looks fragile.");
    return true;
  }

  logMessage("That item cannot break it.", "warn");
  return false;
}

function handleChest(itemId) {
  if (state.chestOpened) {
    logMessage("Chest already open.");
    return true;
  }

  if (itemId === "boxKey") {
    state.chestOpened = true;
    removeFromInventory("boxKey");
    revealPickup("screwdriver", true);
    revealPickup("doorKey", true);
    logMessage("The chest unlocks.", "good");
    renderInventory();
    return true;
  }

  if (itemId === null) {
    logMessage("The chest is locked.");
    return true;
  }

  logMessage("That item does not open the chest.", "warn");
  return false;
}

function handlePanel(itemId) {
  if (state.panelOpened) {
    logMessage("Panel already opened.");
    return true;
  }

  if (itemId === "screwdriver") {
    state.panelOpened = true;
    revealPickup("wire", true);
    revealPickup("clueB", true);
    logMessage("You remove the panel screws.", "good");
    return true;
  }

  if (itemId === null) {
    logMessage("The panel is fixed with screws.");
    return true;
  }

  logMessage("That does not work on the panel.", "warn");
  return false;
}

function handleVent(itemId) {
  if (state.ventOpened) {
    logMessage("Vent already cleared.");
    return true;
  }

  if (itemId === "magnet") {
    state.ventOpened = true;
    revealPickup("fuse", true);
    logMessage("You pull a fuse from the vent.", "good");
    return true;
  }

  if (itemId === null) {
    logMessage("Something metallic is stuck in there.");
    return true;
  }

  logMessage("That item cannot reach inside.", "warn");
  return false;
}

function handleConsole(itemId) {
  if (!state.consolePowered) {
    if (itemId === "battery") {
      state.consolePowered = true;
      removeFromInventory("battery");
      logMessage("Console powered.", "good");
      renderInventory();
      return true;
    }

    if (itemId === null) {
      logMessage("The console is offline.");
      return true;
    }

    logMessage("That item cannot power the console.", "warn");
    return false;
  }

  if (state.consoleSolved) {
    logMessage("Console already authorized.");
    return true;
  }

  if (itemId !== "terminalHint") {
    if (itemId === null) {
      logMessage("The console requests a decoded PIN source.");
      return true;
    }

    logMessage("Console rejects that item.", "warn");
    return false;
  }

  const entered = window.prompt("Enter terminal PIN:");
  if (entered === null) {
    return true;
  }

  if (entered.trim() === getLevel().terminalPin) {
    state.consoleSolved = true;
    revealPickup("accessCard", true);
    revealPickup("clueC", true);
    logMessage("Terminal access granted.", "good");
  } else {
    logMessage("Terminal PIN rejected.", "warn");
  }

  return true;
}

function handleKeypad(itemId) {
  if (!state.keypadPowered) {
    if (itemId === "powerModule") {
      state.keypadPowered = true;
      removeFromInventory("powerModule");
      logMessage("Keypad powered.", "good");
      renderInventory();
      return true;
    }

    if (itemId === null) {
      logMessage("The keypad is unpowered.");
      return true;
    }

    logMessage("That item cannot power the keypad.", "warn");
    return false;
  }

  if (requiresKeypadPrime() && !state.keypadPrimed) {
    if (itemId === "terminalHint") {
      state.keypadPrimed = true;
      logMessage("Keypad signature accepted. Numeric entry unlocked.", "good");
      return true;
    }

    if (itemId === null) {
      logMessage("Keypad requests cipher signature first.");
      return true;
    }

    logMessage("That item cannot sign the keypad session.", "warn");
    return false;
  }

  if (state.keypadUnlocked) {
    logMessage("Keypad lock already open.");
    return true;
  }

  if (itemId !== null) {
    logMessage("The keypad expects a code input, not an item.", "warn");
    return false;
  }

  const entered = window.prompt("Enter 4-digit keypad code:");
  if (entered === null) {
    return true;
  }

  if (entered.trim() === getLevel().keypadCode) {
    state.keypadUnlocked = true;
    logMessage("Keypad accepted.", "good");
    checkDoorOpen();
  } else {
    logMessage("Incorrect keypad code.", "warn");
  }

  return true;
}

function handleScanner(itemId) {
  if (state.scannerUnlocked) {
    logMessage("Scanner already cleared.");
    return true;
  }

  const requiredCard = requiresEncodedScanner() ? "encodedCard" : "accessCard";

  if (itemId === requiredCard) {
    state.scannerUnlocked = true;
    removeFromInventory(requiredCard);
    logMessage("Scanner lock disengaged.", "good");
    renderInventory();
    checkDoorOpen();
    return true;
  }

  if (itemId === null) {
    if (requiredCard === "encodedCard") {
      logMessage("Scanner requires an encoded security card.");
    } else {
      logMessage("Scanner requires an authorized card.");
    }
    return true;
  }

  logMessage("That item is not accepted by the scanner.", "warn");
  return false;
}

function handleDoor(itemId) {
  if (state.gameFinished) {
    logMessage("Game complete.");
    return true;
  }

  if (state.doorOpen) {
    enterNextLevel();
    return true;
  }

  if (!state.doorKeyUsed) {
    if (itemId === "doorKey") {
      state.doorKeyUsed = true;
      removeFromInventory("doorKey");
      logMessage("Mechanical lock opened.", "good");
      renderInventory();
      checkDoorOpen();
      return true;
    }

    if (itemId === null) {
      logMessage("The physical lock is still engaged.");
      return true;
    }

    logMessage("That cannot turn the physical lock.", "warn");
    return false;
  }

  const baseSystemsReady = state.keypadUnlocked && state.scannerUnlocked;
  if (!baseSystemsReady) {
    if (itemId !== null) {
      logMessage("That item has no effect on the remaining locks.", "warn");
      return false;
    }
    logMessage("Other locks still block the door.");
    return true;
  }

  if (requiresDoorOverride() && !state.overrideUsed) {
    if (itemId === "overrideKey") {
      state.overrideUsed = true;
      removeFromInventory("overrideKey");
      logMessage("Override seal accepted by the door.", "good");
      renderInventory();
      checkDoorOpen();
      return true;
    }

    if (itemId === null) {
      logMessage("Door seal still requires a crafted override.");
      return true;
    }

    logMessage("That cannot satisfy the override seal.", "warn");
    return false;
  }

  if (requiresFinalExitCode() && !state.finalExitVerified) {
    if (itemId !== null) {
      logMessage("Final gate expects direct code entry.", "warn");
      return false;
    }

    const entered = window.prompt("Enter final exit code:");
    if (entered === null) {
      return true;
    }

    if (entered.trim() === String(getLevel().exitCode ?? "")) {
      state.finalExitVerified = true;
      logMessage("Final exit code accepted.", "good");
      checkDoorOpen();
    } else {
      logMessage("Final exit code rejected.", "warn");
    }
    return true;
  }

  checkDoorOpen();
  if (!state.doorOpen) {
    logMessage("Door systems are not fully cleared yet.");
  }
  return true;
}

function useItemOnTarget(itemId, targetId) {
  if (state.gameFinished) {
    logMessage("Game complete.");
    return true;
  }

  let ok = true;

  if (targetId === "door") {
    ok = handleDoor(itemId);
  } else if (targetId === "scanner") {
    ok = handleScanner(itemId);
  } else if (targetId === "keypad") {
    ok = handleKeypad(itemId);
  } else if (targetId === "console") {
    ok = handleConsole(itemId);
  } else if (targetId === "panel") {
    ok = handlePanel(itemId);
  } else if (targetId === "vent") {
    ok = handleVent(itemId);
  } else if (targetId === "breakable") {
    ok = handleBreakable(itemId);
  } else if (targetId === "chest") {
    ok = handleChest(itemId);
  }

  setStatus();
  return ok;
}

function getDraggedItemId(event) {
  const transferItem = event.dataTransfer?.getData("text/plain");
  return transferItem || state.draggingItemId;
}

function clearDropHover() {
  document.querySelectorAll(".drop-hover").forEach((el) => {
    el.classList.remove("drop-hover");
  });
}

function getClosestFromEvent(event, selector) {
  if (!(event.target instanceof Element)) {
    return null;
  }
  return event.target.closest(selector);
}

roomEl.addEventListener("click", (event) => {
  const button = getClosestFromEvent(event, "button.object");
  if (!button || button.classList.contains("hidden")) {
    return;
  }

  if (button.classList.contains("pickup")) {
    handlePickup(button.dataset.item, button);
    return;
  }

  useItemOnTarget(state.selectedItem, button.dataset.target);
});

inventoryEl.addEventListener("click", (event) => {
  const button = getClosestFromEvent(event, "button.inv-item");
  if (!button) {
    return;
  }

  const itemId = button.dataset.itemId;
  if (isPaperItem(itemId)) {
    state.selectedItem = itemId;
    renderInventory();
    openPaperOverlay(itemId);
    return;
  }

  handleInventorySelection(itemId);
});

inventoryEl.addEventListener("dragstart", (event) => {
  const button = getClosestFromEvent(event, "button.inv-item");
  if (!button) {
    return;
  }

  const itemId = button.dataset.itemId;
  state.draggingItemId = itemId;

  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", itemId);
  button.classList.add("dragging");
});

inventoryEl.addEventListener("dragend", () => {
  state.draggingItemId = null;
  clearDropHover();
  inventoryEl.querySelectorAll(".inv-item.dragging").forEach((el) => {
    el.classList.remove("dragging");
  });
});

inventoryEl.addEventListener("dragover", (event) => {
  const button = getClosestFromEvent(event, "button.inv-item");
  if (!button) {
    return;
  }

  const draggedItemId = getDraggedItemId(event);
  if (!draggedItemId || draggedItemId === button.dataset.itemId) {
    return;
  }

  event.preventDefault();
  button.classList.add("drop-hover");
});

inventoryEl.addEventListener("dragleave", (event) => {
  const button = getClosestFromEvent(event, "button.inv-item");
  if (!button) {
    return;
  }

  button.classList.remove("drop-hover");
});

inventoryEl.addEventListener("drop", (event) => {
  const button = getClosestFromEvent(event, "button.inv-item");
  if (!button) {
    return;
  }

  event.preventDefault();
  clearDropHover();

  const targetItemId = button.dataset.itemId;
  const draggedItemId = getDraggedItemId(event);
  state.draggingItemId = null;

  if (!draggedItemId || draggedItemId === targetItemId) {
    return;
  }

  const combined = tryCombine(draggedItemId, targetItemId);
  if (!combined) {
    logMessage("Those items do not combine.", "warn");
    flashInvalid(button);
  }
});

roomEl.addEventListener("dragover", (event) => {
  const target = getClosestFromEvent(event, "button.target");
  if (!target || target.classList.contains("hidden")) {
    return;
  }

  event.preventDefault();
  target.classList.add("drop-hover");
});

roomEl.addEventListener("dragleave", (event) => {
  const target = getClosestFromEvent(event, "button.target");
  if (!target) {
    return;
  }

  target.classList.remove("drop-hover");
});

roomEl.addEventListener("drop", (event) => {
  const target = getClosestFromEvent(event, "button.target");
  if (!target || target.classList.contains("hidden")) {
    return;
  }

  event.preventDefault();
  clearDropHover();

  const itemId = getDraggedItemId(event);
  state.draggingItemId = null;

  if (!itemId || !hasItem(itemId)) {
    return;
  }

  const ok = useItemOnTarget(itemId, target.dataset.target);
  if (!ok) {
    flashInvalid(target);
  }
});

hintBtn.addEventListener("click", () => {
  if (state.gameFinished) {
    logMessage("No hints needed. You already escaped all rooms.");
    return;
  }

  const hints = getLevel().hintSteps;
  const hintIndex = Math.min(state.hintStep, hints.length - 1);
  logMessage(`Hint: ${hints[hintIndex]}`, "good");
  state.hintStep += 1;
});

clearSelectionBtn.addEventListener("click", () => {
  state.selectedItem = null;
  renderInventory();
});

paperCloseEl.addEventListener("click", closePaperOverlay);
paperOverlayEl.addEventListener("click", (event) => {
  if (event.target.dataset.closePaper === "true") {
    closePaperOverlay();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !paperOverlayEl.classList.contains("hidden")) {
    closePaperOverlay();
  }
});

loadLevel(0);
