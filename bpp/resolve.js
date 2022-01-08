const spellsPage = ["Acid Splash", "Approximate", "Bullhorn", "Chill Touch", "Dancing Lights", "Daze", "Detect Magic", "Disrupt Undead", "Divine Lance", "Electric Arc", "Forbidding Ward", "Gale Blast", "Ghost Sound", "Gouging Claw", "Guidance", "Haunting Hymn", "Healing Plaster", "Infectious Enthusiasm", "Invoke True Name", "Join Pasts", "Know Direction", "Light", "Mage Hand", "Message", "Prestidigitation", "Produce Flame", "Protect Companion", "Puff of Poison", "Ray of Frost", "Read Aura", "Read the Air", "Scatter Scree", "Shield", "Sigil", "Spout", "Stabilize", "Summon Instrument", "Tame", "Tanglefoot", "Telekinetic Projectile", "Wash Your Luck", "Acidic Burst", "Admonishing Ray", "Agitate", "Air Bubble", "Airburst", "Alarm", "Animal Allies", "Animate Dead", "Animate Rope", "Ant Haul", "Anticipate Peril", "Bane", "Befuddle", "Biting Words", "Bless", "Breadcrumbs", "Burning Hands", "Charm", "Chilling Spray", "Color Spray", "Command", "Concordant Choir", "Create Water", "Déjà Vu", "Detect Alignment", "Detect Poison", "Disrupting Weapons", "Draw Ire", "Echoing Weapon", "Endure", "Exchange Image", "Fear", "Feather Fall", "Fleet Step", "Floating Disk", "Friendfetch", "Goblin Pox", "Gravitational Pull", "Grease", "Grim Tendrils", "Gust of Wind", "Harm", "Heal", "Horizon Thunder Sphere", "Hydraulic Push", "Ill Omen", "Illusory Disguise", "Illusory Object", "Imprint Message", "Invisible Item", "Item Facade", "Jump", "Juvenile Companion", "Liberating Command", "Lock", "Longstrider", "Lose the Path", "Mage Armor", "Magic Aura", "Magic Fang", "Magic Missile", "Magic Stone", "Magic Weapon", "Mending", "Message Rune", "Mindlink", "Mud Pit", "Necromancer's Generosity", "Negate Aroma", "Noxious Vapors", "Nudge the Odds", "Object Reading", "Pass Without Trace", "Penumbral Shroud", "Personal Rain Cloud", "Pest Form", "Pet Cache", "Phantom Pain", "Pocket Library", "Protection", "Protector Tree", "Pummeling Rubble", "Purify Food and Drink", "Putrefy Food and Drink", "Quick Sort", "Ray of Enfeeblement", "Restyle", "Sanctuary", "Schadenfreude", "Scouring Sand", "Seashell of Stolen Sound", "Share Lore", "Shattering Gem", "Shillelagh", "Shocking Grasp", "Shockwave", "Sleep", "Snowball", "Soothe", "Spider Sting", "Spirit Link", "Summon Animal", "Summon Construct", "Summon Fey", "Summon Lesser Servitor", "Summon Plant or Fungus", "Synchronize", "Temporary Tool", "Tether", "Thicket of Knives", "Thoughtful Gift", "True Strike", "Unseen Servant", "Ventriloquism", "Verdant Sprout", "Verminous Lure", "Acid Arrow", "Animal Form", "Animal Messenger", "Animated Assault", "Animus Mine", "Ash Cloud", "Augury", "Barkskin", "Befitting Attire", "Blistering Invective", "Blood Vendetta", "Blur", "Brand the Impenitent", "Breath of Drought", "Calm Emotions", "Charitable Urge", "Comprehend Language", "Continual Flame", "Create Food", "Darkness", "Darkvision", "Deafness", "Death Knell", "Dismantle", "Dispel Magic", "Elemental Zone", "Endure Elements", "Enhance Victuals", "Enlarge", "Entangle", "Expeditious Excavation", "Extract Poison", "Faerie Fire", "False Life", "Feast of Ashes", "Feral Shades", "Final Sacrifice", "Flame Wisp", "Flaming Sphere", "Fungal Hyphae", "Fungal Infestation", "Gentle Repose", "Ghoulish Cravings", "Glitterdust", "Grave Impressions", "Guiding Star", "Heat Metal", "Hideous Laughter", "Humanoid Form", "Ignite Fireworks", "Illusory Creature", "Imp Sting", "Impeccable Flow", "Inner Radiance Torrent", "Instant Armor", "Invisibility", "Iron Gut", "Knock", "Lucky Number", "Magic Mouth", "Magnetic Attraction", "Magnetic Repulsion", "Mimic Undead", "Mind Games", "Mirror Image", "Misdirection", "Obscuring Mist", "Paranoia", "Persistent Servant", "Phantasmal Treasure", "Phantom Crowd", "Phantom Steed", "Quench", "Rapid Adaptation", "Reaper's Lantern", "Remove Fear", "Remove Paralysis", "Resist Energy", "Restoration", "Restore Senses", "Rime Slick", "Scorching Ray", "Sea Surge", "See Invisibility", "Shape Wood", "Shatter", "Shield Other", "Shrink", "Silence", "Slough Skin", "Sonata Span", "Sound Burst", "Speak with Animals", "Spectral Hand", "Spider Climb", "Spirit Sense", "Spiritual Weapon", "Status", "Sudden Blight", "Sudden Bolt", "Summon Elemental", "Summoner's Precaution", "Summoner's Visage", "Telekinetic Maneuver", "Thundering Dominance", "Timely Tutor", "Touch of Idiocy", "Tree Shape", "Umbral Extraction", "Undetectable Alignment", "Vomit Swarm", "Warrior's Regret", "Water Breathing", "Water Walk", "Web", "Worm's Repast", "Agonizing Despair", "Animal Vision", "Aqueous Orb", "Bind Undead", "Blazing Dive", "Blindness", "Bottomless Stomach", "Chilling Darkness", "Circle of Protection", "Claim Curse", "Clairaudience", "Cozy Cabin", "Crashing Wave", "Crisis of Faith", "Cup of Dust", "Curse of Lost Time", "Day's Weight", "Distracting Chatter", "Dream Message", "Earthbind", "Elemental Absorption", "Elemental Annihilation Wave", "Enthrall", "Envenom Companion", "Familiar's Face", "Feet to Fins", "Fireball", "Ghostly Weapon", "Glyph of Warding", "Gravity Well", "Haste", "Heroism", "Hypercognition", "Hypnotic Pattern", "Impending Doom", "Insect Form", "Invisibility Sphere", "Levitate", "Life Connection", "Lightning Bolt", "Locate", "Mad Monkeys", "Magical Fetters", "Magnetic Acceleration", "Meld into Stone", "Mind of Menace", "Mind Reading", "Neutralize Poison", "Nondetection", "Oneiric Mire", "Ooze Form", "Organsight", "Paralyze", "Perseis's Precautions", "Phantom Prison", "Pillar of Water", "Positive Attunement", "Pyrotechnics", "Remove Disease", "Roaring Applause", "Rouse Skeletons", "Safe Passage", "Sanctified Ground", "Sculpt Sound", "Searing Light", "Secret Page", "Shadow Projectile", "Shift Blame", "Shifting Sand", "Show the Way", "Shrink Item", "Slow", "Soothing Blossoms", "Stinking Cloud", "Sudden Recollection", "Threefold Aspect", "Time Jump", "Unseasonable Squall", "Vampiric Touch", "Wall of Thorns", "Wall of Water", "Wall of Wind", "Wanderer's Guide", "Warding Aggression", "Web of Eyes", "Whirling Scarves", "Zone of Truth", "Aerial Form", "Air Walk", "Anathematic Reprisal", "Aromatic Lure", "Bestial Curse", "Blink", "Bloodspray Curse", "Call the Blood", "Chroma Leach", "Chromatic Armor", "Chromatic Ray", "Clairvoyance", "Clownish Curse", "Compel True Name", "Confusion", "Coral Eruption", "Countless Eyes", "Creation", "Daydreamer's Curse", "Detect Scrying", "Dimension Door", "Dimensional Anchor", "Dinosaur Form", "Discern Lies", "Divine Wrath", "Draw the Lightning", "Dull Ambition", "Elemental Gift", "Enervation", "Favorable Review", "Fey Form", "Fire Shield", "Fly", "Forgotten Lines", "Freedom of Movement", "Gaseous Form", "Ghostly Tragedy", "Glibness", "Globe of Invulnerability", "Hallucinatory Terrain", "Holy Cascade", "Hydraulic Torrent", "Ice Storm", "Infectious Melody", "Internal Insurrection", "Invisibility Curtain", "Magic Mailbox", "Mirror's Misfortune", "Modify Memory", "Murderous Vine", "Necrotic Radiation", "Nightmare", "Ocular Overload", "Outcast's Curse", "Painful Vibrations", "Pernicious Poltergeist", "Petal Storm", "Phantasmal Killer", "Private Sanctum", "Ravenous Portal", "Read Omens", "Rebounding Barrier", "Reflective Scales", "Remove Curse", "Replicate", "Resilient Sphere", "Rope Trick", "Rusting Grasp", "Sanguine Mist", "Savant's Curse", "Seal Fate", "Shape Stone", "Solid Fog", "Soothing Spring", "Speak with Plants", "Spell Immunity", "Spike Stones", "Spiritual Anamnesis", "Spiritual Attunement", "Stoneskin", "Suggestion", "Swarming Wasp Stings", "Talking Corpse", "Telepathy", "Tortoise and the Hare", "Umbral Graft", "Vampiric Maiden", "Variable Gravity", "Veil", "Vital Beacon", "Wall of Fire", "Weapon Storm", "Winning Streak", "Aberrant Form", "Abyssal Plague", "Acid Storm", "Bandit's Doom", "Banishment", "Black Tentacles", "Blazing Fissure", "Blessing of Defiance", "Blink Charge", "Blister", "Blood Feast", "Breath of Life", "Chameleon Coat", "Chromatic Wall", "Cloak of Colors", "Cloudkill", "Cone of Cold", "Control Water", "Crushing Despair", "Death Ward", "Dreaming Potential", "Drop Dead", "Ectoplasmic Expulsion", "Elemental Form", "False Vision", "Flame Strike", "Flammable Fumes", "Flowing Strike", "Forceful Hand", "Geyser", "Glimmer of Charm", "Grisly Growths", "Hallucination", "Healing Well", "Illusory Scene", "Impaling Spike", "Inevitable Disaster", "Invoke Spirits", "Lightning Storm", "Mantle of the Frozen Heart", "Mantle of the Magma Heart", "Mariner's Curse", "Mind Probe", "Mirror Malefactors", "Moon Frenzy", "Passwall", "Pillars of Sand", "Plant Form", "Portrait of the Artist", "Prying Eye", "Ravening Maw", "Repelling Pulse", "Return Beacon", "Rewinding Step", "Rip the Spirit", "Secret Chest", "Sending", "Shadow Blast", "Shadow Siphon", "Shadow Walk", "Spiritual Guardian", "Strange Geometry", "Subconscious Suggestion", "Summon Anarch", "Summon Axiom", "Summon Celestial", "Summon Dragon", "Summon Entity", "Summon Fiend", "Summon Giant", "Synaptic Pulse", "Synesthesia", "Telekinetic Haul", "Telepathic Bond", "Temporary Glyph", "Tongues", "Transmute Rock and Mud", "Tree Stride", "Wall of Flesh", "Wall of Ice", "Wall of Stone", "Wyvern Sting", "Aura of the Unremarkable", "Baleful Polymorph", "Blade Barrier", "Blanket of Stars", "Blinding Fury", "Cast into Time", "Catch Your Name", "Chain Lightning", "Chromatic Image", "Collective Transposition", "Daemon Form", "Demon Form", "Devil Form", "Disintegrate", "Dominate", "Dragon Form", "Elemental Confluence", "Feeblemind", "Field of Life", "Fire Seeds", "Flame Vortex", "Flesh to Stone", "Halcyon Infusion", "Mislead", "Nature's Reprisal", "Necrotize", "Phantasmal Calamity", "Purple Worm Sting", "Raise Dead", "Repulsion", "Righteous Might", "Scintillating Safeguard", "Scrying", "Spellwrack", "Spirit Blast", "Stone Tell", "Stone to Flesh", "Tangling Creepers", "Teleport", "True Seeing", "Unexpected Transposition", "Vampiric Exsanguination", "Vibrant Pattern", "Wall of Force", "Zealous Conviction", "Zero Gravity", "Angel Form", "Blightburn Blast", "Contingency", "Control Sand", "Corrosive Body", "Cosmic Form", "Deity's Strike", "Dimensional Lock", "Divine Decree", "Divine Vessel", "Duplicate Foe", "Eclipse Burst", "Energy Aegis", "Entrancing Eyes", "Ethereal Jaunt", "Fiery Body", "Finger of Death", "Force Cage", "Frigid Flurry", "Inexhaustible Cynicism", "Leng Sting", "Magnificent Mansion", "Mask of Terror", "Maze of Locked Doors", "Plane Shift", "Possession", "Power Word Blind", "Prismatic Armor", "Prismatic Spray", "Project Image", "Regenerate", "Retrocognition", "Reverse Gravity", "Shadow Raid", "Spell Turning", "Sunburst", "Tempest of Shades", "Time Beacon", "True Target", "Unfettered Pack", "Visions of Danger", "Volcanic Eruption", "Warp Mind", "All is One, One is All", "Antimagic Field", "Boil Blood", "Burning Blossoms", "Canticle of Everlasting Grief", "Clone Companion", "Deluge", "Devour Life", "Disappearance", "Discern Location", "Divine Armageddon", "Divine Aura", "Divine Inspiration", "Dream Council", "Earthquake", "Horrid Wilting", "Maze", "Mind Blank", "Moment of Renewal", "Monstrosity Form", "Polar Ray", "Power Word Stun", "Prismatic Wall", "Prying Survey", "Punishing Winds", "Scintillating Pattern", "Spirit Song", "Spiritual Epidemic", "Summon Archmage", "Summon Deific Herald", "Uncontrollable Dance", "Undermine Reality", "Unrelenting Observation", "Whirlwind", "Wind Walk", "Astral Labyrinth", "Bind Soul", "Crusade", "Disjunction", "Divinity Leech", "Foresight", "Implosion", "Linnorm Sting", "Massacre", "Meteor Swarm", "Nature's Enmity", "One with the Land", "Overwhelming Presence", "Power Word Kill", "Prismatic Shield", "Prismatic Sphere", "Proliferating Eyes", "Resplendent Mansion", "Shapechange", "Storm of Vengeance", "Summon Draconic Legion", "Telepathic Demand", "Unfathomable Song", "Unspeakable Shadow", "Upheaval", "Voracious Gestalt", "Wail of the Banshee", "Weapon of Judgment", "Weird", "Alter Reality", "Avatar", "Cataclysm", "Element Embodied", "Fabricated Truth", "Fated Confrontation", "Gate", "Indestructibility", "Miracle", "Nature Incarnate", "Nullify", "Primal Herd", "Primal Phenomenon", "Remake", "Revival", "Shadow Army", "Summon Kaiju", "Time Stop", "Wish"];

const spellsAlpha = ["Aberrant Form", "Abyssal Plague", "Acid Arrow", "Acid Splash", "Acid Storm", "Acidic Burst", "Admonishing Ray", "Aerial Form", "Agitate", "Agonizing Despair", "Air Bubble", "Air Walk", "Airburst", "Alarm", "All is One, One is All", "Alter Reality", "Anathematic Reprisal", "Angel Form", "Animal Allies", "Animal Form", "Animal Messenger", "Animal Vision", "Animate Dead", "Animate Rope", "Animated Assault", "Animus Mine", "Ant Haul", "Anticipate Peril", "Antimagic Field", "Approximate", "Aqueous Orb", "Aromatic Lure", "Ash Cloud", "Astral Labyrinth", "Augury", "Aura of the Unremarkable", "Avatar", "Baleful Polymorph", "Bandit's Doom", "Bane", "Banishment", "Barkskin", "Befitting Attire", "Befuddle", "Bestial Curse", "Bind Soul", "Bind Undead", "Biting Words", "Black Tentacles", "Blade Barrier", "Blanket of Stars", "Blazing Dive", "Blazing Fissure", "Bless", "Blessing of Defiance", "Blightburn Blast", "Blinding Fury", "Blindness", "Blink", "Blink Charge", "Blister", "Blistering Invective", "Blood Feast", "Blood Vendetta", "Bloodspray Curse", "Blur", "Boil Blood", "Bottomless Stomach", "Brand the Impenitent", "Breadcrumbs", "Breath of Drought", "Breath of Life", "Bullhorn", "Burning Blossoms", "Burning Hands", "Call the Blood", "Calm Emotions", "Canticle of Everlasting Grief", "Cast into Time", "Cataclysm", "Catch Your Name", "Chain Lightning", "Chameleon Coat", "Charitable Urge", "Charm", "Chill Touch", "Chilling Darkness", "Chilling Spray", "Chroma Leach", "Chromatic Armor", "Chromatic Image", "Chromatic Ray", "Chromatic Wall", "Circle of Protection", "Claim Curse", "Clairaudience", "Clairvoyance", "Cloak of Colors", "Clone Companion", "Cloudkill", "Clownish Curse", "Collective Transposition", "Color Spray", "Command", "Compel True Name", "Comprehend Language", "Concordant Choir", "Cone of Cold", "Confusion", "Contingency", "Continual Flame", "Control Sand", "Control Water", "Coral Eruption", "Corrosive Body", "Cosmic Form", "Countless Eyes", "Cozy Cabin", "Crashing Wave", "Create Food", "Create Water", "Creation", "Crisis of Faith", "Crusade", "Crushing Despair", "Cup of Dust", "Curse of Lost Time", "Daemon Form", "Dancing Lights", "Darkness", "Darkvision", "Daydreamer's Curse", "Day's Weight", "Daze", "Deafness", "Death Knell", "Death Ward", "Deity's Strike", "Déjà Vu", "Deluge", "Demon Form", "Detect Alignment", "Detect Magic", "Detect Poison", "Detect Scrying", "Devil Form", "Devour Life", "Dimension Door", "Dimensional Anchor", "Dimensional Lock", "Dinosaur Form", "Disappearance", "Discern Lies", "Discern Location", "Disintegrate", "Disjunction", "Dismantle", "Dispel Magic", "Disrupt Undead", "Disrupting Weapons", "Distracting Chatter", "Divine Armageddon", "Divine Aura", "Divine Decree", "Divine Inspiration", "Divine Lance", "Divine Vessel", "Divine Wrath", "Divinity Leech", "Dominate", "Dragon Form", "Draw Ire", "Draw the Lightning", "Dream Council", "Dream Message", "Dreaming Potential", "Drop Dead", "Dull Ambition", "Duplicate Foe", "Earthbind", "Earthquake", "Echoing Weapon", "Eclipse Burst", "Ectoplasmic Expulsion", "Electric Arc", "Element Embodied", "Elemental Absorption", "Elemental Annihilation Wave", "Elemental Confluence", "Elemental Form", "Elemental Gift", "Elemental Zone", "Endure", "Endure Elements", "Energy Aegis", "Enervation", "Enhance Victuals", "Enlarge", "Entangle", "Enthrall", "Entrancing Eyes", "Envenom Companion", "Ethereal Jaunt", "Exchange Image", "Expeditious Excavation", "Extract Poison", "Fabricated Truth", "Faerie Fire", "False Life", "False Vision", "Familiar's Face", "Fated Confrontation", "Favorable Review", "Fear", "Feast of Ashes", "Feather Fall", "Feeblemind", "Feet to Fins", "Feral Shades", "Fey Form", "Field of Life", "Fiery Body", "Final Sacrifice", "Finger of Death", "Fire Seeds", "Fire Shield", "Fireball", "Flame Strike", "Flame Vortex", "Flame Wisp", "Flaming Sphere", "Flammable Fumes", "Fleet Step", "Flesh to Stone", "Floating Disk", "Flowing Strike", "Fly", "Forbidding Ward", "Force Cage", "Forceful Hand", "Foresight", "Forgotten Lines", "Freedom of Movement", "Friendfetch", "Frigid Flurry", "Fungal Hyphae", "Fungal Infestation", "Gale Blast", "Gaseous Form", "Gate", "Gentle Repose", "Geyser", "Ghost Sound", "Ghostly Tragedy", "Ghostly Weapon", "Ghoulish Cravings", "Glibness", "Glimmer of Charm", "Glitterdust", "Globe of Invulnerability", "Glyph of Warding", "Goblin Pox", "Gouging Claw", "Grave Impressions", "Gravitational Pull", "Gravity Well", "Grease", "Grim Tendrils", "Grisly Growths", "Guidance", "Guiding Star", "Gust of Wind", "Halcyon Infusion", "Hallucination", "Hallucinatory Terrain", "Harm", "Haste", "Haunting Hymn", "Heal", "Healing Plaster", "Healing Well", "Heat Metal", "Heroism", "Hideous Laughter", "Holy Cascade", "Horizon Thunder Sphere", "Horrid Wilting", "Humanoid Form", "Hydraulic Push", "Hydraulic Torrent", "Hypercognition", "Hypnotic Pattern", "Ice Storm", "Ignite Fireworks", "Ill Omen", "Illusory Creature", "Illusory Disguise", "Illusory Object", "Illusory Scene", "Imp Sting", "Impaling Spike", "Impeccable Flow", "Impending Doom", "Implosion", "Imprint Message", "Indestructibility", "Inevitable Disaster", "Inexhaustible Cynicism", "Infectious Enthusiasm", "Infectious Melody", "Inner Radiance Torrent", "Insect Form", "Instant Armor", "Internal Insurrection", "Invisibility", "Invisibility Curtain", "Invisibility Sphere", "Invisible Item", "Invoke Spirits", "Invoke True Name", "Iron Gut", "Item Facade", "Join Pasts", "Jump", "Juvenile Companion", "Knock", "Know Direction", "Leng Sting", "Levitate", "Liberating Command", "Life Connection", "Light", "Lightning Bolt", "Lightning Storm", "Linnorm Sting", "Locate", "Lock", "Longstrider", "Lose the Path", "Lucky Number", "Mad Monkeys", "Mage Armor", "Mage Hand", "Magic Aura", "Magic Fang", "Magic Mailbox", "Magic Missile", "Magic Mouth", "Magic Stone", "Magic Weapon", "Magical Fetters", "Magnetic Acceleration", "Magnetic Attraction", "Magnetic Repulsion", "Magnificent Mansion", "Mantle of the Frozen Heart", "Mantle of the Magma Heart", "Mariner's Curse", "Mask of Terror", "Massacre", "Maze", "Maze of Locked Doors", "Meld into Stone", "Mending", "Message", "Message Rune", "Meteor Swarm", "Mimic Undead", "Mind Blank", "Mind Games", "Mind of Menace", "Mind Probe", "Mind Reading", "Mindlink", "Miracle", "Mirror Image", "Mirror Malefactors", "Mirror's Misfortune", "Misdirection", "Mislead", "Modify Memory", "Moment of Renewal", "Monstrosity Form", "Moon Frenzy", "Mud Pit", "Murderous Vine", "Nature Incarnate", "Nature's Enmity", "Nature's Reprisal", "Necromancer's Generosity", "Necrotic Radiation", "Necrotize", "Negate Aroma", "Neutralize Poison", "Nightmare", "Nondetection", "Noxious Vapors", "Nudge the Odds", "Nullify", "Object Reading", "Obscuring Mist", "Ocular Overload", "One with the Land", "Oneiric Mire", "Ooze Form", "Organsight", "Outcast's Curse", "Overwhelming Presence", "Painful Vibrations", "Paralyze", "Paranoia", "Pass Without Trace", "Passwall", "Penumbral Shroud", "Pernicious Poltergeist", "Perseis's Precautions", "Persistent Servant", "Personal Rain Cloud", "Pest Form", "Pet Cache", "Petal Storm", "Phantasmal Calamity", "Phantasmal Killer", "Phantasmal Treasure", "Phantom Crowd", "Phantom Pain", "Phantom Prison", "Phantom Steed", "Pillar of Water", "Pillars of Sand", "Plane Shift", "Plant Form", "Pocket Library", "Polar Ray", "Portrait of the Artist", "Positive Attunement", "Possession", "Power Word Blind", "Power Word Kill", "Power Word Stun", "Prestidigitation", "Primal Herd", "Primal Phenomenon", "Prismatic Armor", "Prismatic Shield", "Prismatic Sphere", "Prismatic Spray", "Prismatic Wall", "Private Sanctum", "Produce Flame", "Project Image", "Proliferating Eyes", "Protect Companion", "Protection", "Protector Tree", "Prying Eye", "Prying Survey", "Puff of Poison", "Pummeling Rubble", "Punishing Winds", "Purify Food and Drink", "Purple Worm Sting", "Putrefy Food and Drink", "Pyrotechnics", "Quench", "Quick Sort", "Raise Dead", "Rapid Adaptation", "Ravening Maw", "Ravenous Portal", "Ray of Enfeeblement", "Ray of Frost", "Read Aura", "Read Omens", "Read the Air", "Reaper's Lantern", "Rebounding Barrier", "Reflective Scales", "Regenerate", "Remake", "Remove Curse", "Remove Disease", "Remove Fear", "Remove Paralysis", "Repelling Pulse", "Replicate", "Repulsion", "Resilient Sphere", "Resist Energy", "Resplendent Mansion", "Restoration", "Restore Senses", "Restyle", "Retrocognition", "Return Beacon", "Reverse Gravity", "Revival", "Rewinding Step", "Righteous Might", "Rime Slick", "Rip the Spirit", "Roaring Applause", "Rope Trick", "Rouse Skeletons", "Rusting Grasp", "Safe Passage", "Sanctified Ground", "Sanctuary", "Sanguine Mist", "Savant's Curse", "Scatter Scree", "Schadenfreude", "Scintillating Pattern", "Scintillating Safeguard", "Scorching Ray", "Scouring Sand", "Scrying", "Sculpt Sound", "Sea Surge", "Seal Fate", "Searing Light", "Seashell of Stolen Sound", "Secret Chest", "Secret Page", "See Invisibility", "Sending", "Shadow Army", "Shadow Blast", "Shadow Projectile", "Shadow Raid", "Shadow Siphon", "Shadow Walk", "Shape Stone", "Shape Wood", "Shapechange", "Share Lore", "Shatter", "Shattering Gem", "Shield", "Shield Other", "Shift Blame", "Shifting Sand", "Shillelagh", "Shocking Grasp", "Shockwave", "Show the Way", "Shrink", "Shrink Item", "Sigil", "Silence", "Sleep", "Slough Skin", "Slow", "Snowball", "Solid Fog", "Sonata Span", "Soothe", "Soothing Blossoms", "Soothing Spring", "Sound Burst", "Speak with Animals", "Speak with Plants", "Spectral Hand", "Spell Immunity", "Spell Turning", "Spellwrack", "Spider Climb", "Spider Sting", "Spike Stones", "Spirit Blast", "Spirit Link", "Spirit Sense", "Spirit Song", "Spiritual Anamnesis", "Spiritual Attunement", "Spiritual Epidemic", "Spiritual Guardian", "Spiritual Weapon", "Spout", "Stabilize", "Status", "Stinking Cloud", "Stone Tell", "Stone to Flesh", "Stoneskin", "Storm of Vengeance", "Strange Geometry", "Subconscious Suggestion", "Sudden Blight", "Sudden Bolt", "Sudden Recollection", "Suggestion", "Summon Anarch", "Summon Animal", "Summon Archmage", "Summon Axiom", "Summon Celestial", "Summon Construct", "Summon Deific Herald", "Summon Draconic Legion", "Summon Dragon", "Summon Elemental", "Summon Entity", "Summon Fey", "Summon Fiend", "Summon Giant", "Summon Instrument", "Summon Kaiju", "Summon Lesser Servitor", "Summon Plant or Fungus", "Summoner's Precaution", "Summoner's Visage", "Sunburst", "Swarming Wasp Stings", "Synaptic Pulse", "Synchronize", "Synesthesia", "Talking Corpse", "Tame", "Tanglefoot", "Tangling Creepers", "Telekinetic Haul", "Telekinetic Maneuver", "Telekinetic Projectile", "Telepathic Bond", "Telepathic Demand", "Telepathy", "Teleport", "Tempest of Shades", "Temporary Glyph", "Temporary Tool", "Tether", "Thicket of Knives", "Thoughtful Gift", "Threefold Aspect", "Thundering Dominance", "Time Beacon", "Time Jump", "Time Stop", "Timely Tutor", "Tongues", "Tortoise and the Hare", "Touch of Idiocy", "Transmute Rock and Mud", "Tree Shape", "Tree Stride", "True Seeing", "True Strike", "True Target", "Umbral Extraction", "Umbral Graft", "Uncontrollable Dance", "Undermine Reality", "Undetectable Alignment", "Unexpected Transposition", "Unfathomable Song", "Unfettered Pack", "Unrelenting Observation", "Unseasonable Squall", "Unseen Servant", "Unspeakable Shadow", "Upheaval", "Vampiric Exsanguination", "Vampiric Maiden", "Vampiric Touch", "Variable Gravity", "Veil", "Ventriloquism", "Verdant Sprout", "Verminous Lure", "Vibrant Pattern", "Visions of Danger", "Vital Beacon", "Volcanic Eruption", "Vomit Swarm", "Voracious Gestalt", "Wail of the Banshee", "Wall of Fire", "Wall of Flesh", "Wall of Force", "Wall of Ice", "Wall of Stone", "Wall of Thorns", "Wall of Water", "Wall of Wind", "Wanderer's Guide", "Warding Aggression", "Warp Mind", "Warrior's Regret", "Wash Your Luck", "Water Breathing", "Water Walk", "Weapon of Judgment", "Weapon Storm", "Web", "Web of Eyes", "Weird", "Whirling Scarves", "Whirlwind", "Wind Walk", "Winning Streak", "Wish", "Worm's Repast", "Wyvern Sting", "Zealous Conviction", "Zero Gravity", "Zone of Truth"];

function loadRound() {
  let roundNumber = document.getElementById("roundNumber").value;
  switch(roundNumber) {
    case "1":
      document.getElementById("wizardResponse").innerHTML = "<b>Results:</b><br><br>";
      document.getElementById("fighterHeading").innerHTML = "<h2>Locked 🔒</h2>";
      document.getElementById("fighterExplanation").style.display = "none";
      document.getElementById("clericHeading").innerHTML = "<h2>Locked 🔒</h2>";
      document.getElementById("clericExplanation").style.display = "none";
      document.getElementById("rogueHeading").innerHTML = "<h2>Locked 🔒</h2>";
      document.getElementById("rogueExplanation").style.display = "none";
    break;
    case "2":
      document.getElementById("wizardResponse").innerHTML = "<b>Results:</b><br><br>";
      document.getElementById("fighterHeading").innerHTML = "<h2>Fighter 💂‍♀️</h2>";
      document.getElementById("fighterExplanation").style.display = "block";
      document.getElementById("fighterResponse").innerHTML = "<b>Results:</b><br><br>";
      document.getElementById("clericHeading").innerHTML = "<h2>Locked 🔒</h2>";
      document.getElementById("clericExplanation").style.display = "none";
      document.getElementById("rogueHeading").innerHTML = "<h2>Locked 🔒</h2>";
      document.getElementById("rogueExplanation").style.display = "none";
    break;
    case "3":
      document.getElementById("wizardResponse").innerHTML = "<b>Results:</b><br><br>";
      document.getElementById("fighterHeading").innerHTML = "<h2>Fighter 💂‍♀️</h2>";
      document.getElementById("fighterExplanation").style.display = "block";
      document.getElementById("fighterResponse").innerHTML = "<b>Results:</b><br><br>";
      document.getElementById("clericHeading").innerHTML = "<h2>Cleric 👩‍⚕️</h2>";
      document.getElementById("clericExplanation").style.display = "block";
      document.getElementById("clericChant").innerHTML = "refacing, diffract, stiffneck";
      document.getElementById("clericResponse").innerHTML = "<b>Results:</b><br><br>";
      document.getElementById("rogueHeading").innerHTML = "<h2>Locked 🔒</h2>";
      document.getElementById("rogueExplanation").style.display = "none";
    break;
    case "4":
      document.getElementById("wizardResponse").innerHTML = "<b>Results:</b><br><br>";
      document.getElementById("fighterHeading").innerHTML = "<h2>Fighter 💂‍♀️</h2>";
      document.getElementById("fighterExplanation").style.display = "block";
      document.getElementById("fighterResponse").innerHTML = "<b>Results:</b><br><br>";
      document.getElementById("clericHeading").innerHTML = "<h2>Cleric 👩‍⚕️</h2>";
      document.getElementById("clericExplanation").style.display = "block";
      document.getElementById("clericChant").innerHTML = "nerd rice moon rout taxi runs moat, spice whole magic shape slope water years house, bitmap choice - morgue groovy";
      document.getElementById("clericResponse").innerHTML = "<b>Results:</b><br><br>";
      document.getElementById("rogueHeading").innerHTML = "<h2>Rogue 👩‍🎓</h2>";
      document.getElementById("rogueExplanation").style.display = "block";
      document.getElementById("rogueLink").innerHTML = "<a href=\"https://2e.aonprd.com/Monsters.aspx?ID=252\" target=\"_blank\">stat block for gugs</a>";
      document.getElementById("rogueQuestion").innerHTML = "How might the gug feel when it eats its favorite food? (6)";
      document.getElementById("rogueResponse").innerHTML = "<b>Results:</b><br><br>";
    break;
    case "5":
      document.getElementById("wizardResponse").innerHTML = "Oops, looks like you dropped your spellbook and now the spells are in a different order. Sorry about that. I'm sure you'll figure it out. <br><br><b>Results:</b><br><br>";
      document.getElementById("fighterHeading").innerHTML = "<h2>Fighter 💂‍♀️</h2>";
      document.getElementById("fighterExplanation").style.display = "block";
      document.getElementById("fighterResponse").innerHTML = "<b>Results:</b><br><br>";
      document.getElementById("clericHeading").innerHTML = "<h2>Cleric 👩‍⚕️</h2>";
      document.getElementById("clericExplanation").style.display = "block";
      document.getElementById("clericChant").innerHTML = "bra vents chap ins sol els";
      document.getElementById("clericResponse").innerHTML = "<b>Results:</b><br><br>";
      document.getElementById("rogueHeading").innerHTML = "<h2>Rogue 👩‍🎓</h2>";
      document.getElementById("rogueExplanation").style.display = "block";
      document.getElementById("rogueLink").innerHTML = "<a href=\"https://2e.aonprd.com/Monsters.aspx?ID=328\" target=\"_blank\">stat block for owlbears</a>";
      document.getElementById("rogueQuestion").innerHTML = "What does an Owlbear clean its breath with? (1 7 6-4)";
      document.getElementById("rogueResponse").innerHTML = "<b>Results:</b><br><br>";
    break;
    case "6":
      document.getElementById("wizardResponse").innerHTML = "Oops, looks like you dropped your spellbook and now the spells are in a different order. Sorry about that. I'm sure you'll figure it out. <br><br><b>Results:</b><br><br>";
      document.getElementById("fighterHeading").innerHTML = "<h2>Fighter 💂‍♀️</h2>";
      document.getElementById("fighterExplanation").style.display = "block";
      document.getElementById("fighterResponse").innerHTML = "Wait, isn't this supposed to get harder? <br><br><b>Results:</b><br><br>";
      document.getElementById("clericHeading").innerHTML = "<h2>Cleric 👩‍⚕️</h2>";
      document.getElementById("clericExplanation").style.display = "block";
      document.getElementById("clericChant").innerHTML = "chills, delves, ladder";
      document.getElementById("clericResponse").innerHTML = "<b>Results:</b><br><br>";
      document.getElementById("rogueHeading").innerHTML = "<h2>Rogue 👩‍🎓</h2>";
      document.getElementById("rogueExplanation").style.display = "block";
      document.getElementById("rogueLink").innerHTML = "<a href=\"https://2e.aonprd.com/Monsters.aspx?ID=171\" target=\"_blank\">stat block for dullahans</a>";
      document.getElementById("rogueQuestion").innerHTML = "When an observer witness an execution by a dullahan, what does their face look like? (8 3 3)";
      document.getElementById("rogueResponse").innerHTML = "<b>Results:</b><br><br>";
    break;
    case "7":
      document.getElementById("wizardResponse").innerHTML = "Oops, looks like you dropped your spellbook and now the spells are in a different order. Sorry about that. I'm sure you'll figure it out. <br><br><b>Results:</b><br><br>";
      document.getElementById("fighterHeading").innerHTML = "<h2>Fighter 💂‍♀️</h2>";
      document.getElementById("fighterExplanation").style.display = "block";
      document.getElementById("fighterResponse").innerHTML = "Wait, isn't this supposed to get harder? <br><br><b>Results:</b><br><br>";
      document.getElementById("clericHeading").innerHTML = "<h2>Cleric 👩‍⚕️</h2>";
      document.getElementById("clericExplanation").style.display = "block";
      document.getElementById("clericChant").innerHTML = "idea oriole telescoping echidna, piled interest sprites magnolia continue, ostiary foodie graphics important shirt queuings, enigma isolate bison siege inform turquoise catnip";
      document.getElementById("clericResponse").innerHTML = "Against these more powerful creatures, you'll need to include more in your diagram.<br><br><b>Results:</b><br><br>";
      document.getElementById("rogueHeading").innerHTML = "<h2>Rogue 👩‍🎓</h2>";
      document.getElementById("rogueExplanation").style.display = "block";
      document.getElementById("rogueLink").innerHTML = "<a href=\"https://2e.aonprd.com/Monsters.aspx?ID=86\" target=\"_blank\">stat block for cyclops</a>";
      document.getElementById("rogueQuestion").innerHTML = "Where would you find details about the cyclops' god of spice? (6 2 5)";
      document.getElementById("rogueResponse").innerHTML = "<b>Results:</b><br><br>";
    break;
    case "8":
      document.getElementById("wizardResponse").innerHTML = "Oops, looks like you dropped your spellbook and now the spells are in a different order. Sorry about that. I'm sure you'll figure it out. <br><br><b>Results:</b><br><br>";
      document.getElementById("fighterHeading").innerHTML = "<h2>Fighter 💂‍♀️</h2>";
      document.getElementById("fighterExplanation").style.display = "block";
      document.getElementById("fighterResponse").innerHTML = "Wait, isn't this supposed to get harder? <br><br><b>Results:</b><br><br>";
      document.getElementById("clericHeading").innerHTML = "<h2>Cleric 👩‍⚕️</h2>";
      document.getElementById("clericExplanation").style.display = "block";
      document.getElementById("clericChant").innerHTML = "pieces, belt, covers, snares";
      document.getElementById("clericResponse").innerHTML = "Against these more powerful creatures, you'll need to include more in your diagram.<br><br><b>Results:</b><br><br>";
      document.getElementById("rogueHeading").innerHTML = "<h2>Rogue 👩‍🎓</h2>";
      document.getElementById("rogueExplanation").style.display = "block";
      document.getElementById("rogueLink").innerHTML = "<a href=\"https://2e.aonprd.com/Monsters.aspx?ID=300\" target=\"_blank\">stat block for mimics</a>";
      document.getElementById("rogueQuestion").innerHTML = "What would a mimic give a guest lecture about? (2 6 6)";
      document.getElementById("rogueResponse").innerHTML = "Mimics are a little more complicated than other creatures. You may need to dig further down on the page to find this answer. <br><br> <b>Results:</b><br><br>";
    break;
  }

}


function checkWizard() {
  let roundNumber = document.getElementById("roundNumber").value;
  let attemptedSpell = document.getElementById("wizardGuess").value;

  var winningNumber = 1000;
  var method = "";

  switch(roundNumber) {
    case "1":
      winningNumber = 417; //Phantasmal Killer
      method = "page";
    break;
    case "2":
      winningNumber = 221; //Mirror Image
      method = "page";
    break;
    case "3":
      winningNumber = 236; //Restore Senses
      method = "page";
    break;
    case "4":
      winningNumber = 216; //Magic Mouth
      method = "page";
    break;
    case "5":
      winningNumber = 14; //All is One, One is All
      method = "alpha";
    break;
    case "6":
      winningNumber = 427; //Phantom Steed
      method = "alpha";
    break;
    case "7":
      winningNumber = 58; //Blink
      method = "alpha";
    break;
    case "8":
      winningNumber = 367; //Mimic Undead
      method = "alpha";
    break;
  }

    var cleanedUpSpell = attemptedSpell.toLowerCase();
    cleanedUpSpell = cleanedUpSpell.replace(/[^a-z0-9]/g, "");
    var spellExist = false;
    var attemptedNumber = 1000;
    var outputString = "";

  if(method == "page") {
    for(var i = 0; i < spellsPage.length; i++) {
      var currentSpell = spellsPage[i].toLowerCase();
      currentSpell = currentSpell.replace(/[^a-z0-9]/g, "");
      if(currentSpell == cleanedUpSpell) {
        spellExist = true;
        attemptedNumber = i;
      }
    }
  }

  if(method == "alpha") {
    for(var i = 0; i < spellsAlpha.length; i++) {
      var currentSpell = spellsAlpha[i].toLowerCase();
      currentSpell = currentSpell.replace(/[^a-z0-9]/g, "");
      if(currentSpell == cleanedUpSpell) {
        spellExist = true;
        attemptedNumber = i;
      }
    }
  }

  if(!spellExist) {
    outputString = "<b>" + attemptedSpell + "</b>: That spell doesn't exist. Check your spelling. Get it? Spelling!";
  }

  if(spellExist && (attemptedNumber == winningNumber)) {
    outputString = "<b>" + attemptedSpell + "</b>: Congrats! That's it. Post in your team's Discord channel with @Wizard and the name of the spell to claim success for your team.<br><br>";
  }

  if (spellExist && (attemptedNumber < winningNumber)) {
    outputString = "<b>" + attemptedSpell + "</b>: This spell didn't quite seem to do it - it didn't quite have the energy needed. Perhaps try something with a higher power level?<br><br>";
  }

  if (spellExist && (attemptedNumber > winningNumber)) {
    outputString = "<b>" + attemptedSpell + "</b>: This spell didn't quite seem to do it - there was so much energy that it was hard to aim. Perhaps try something with a lower power level?<br><br>";
  }

  document.getElementById("wizardResponse").innerHTML = document.getElementById("wizardResponse").innerHTML + outputString;

}

function checkCleric() {
  let roundNumber = document.getElementById("roundNumber").value;
  let attemptedChant = document.getElementById("clericGuess").value;

  var cleanedUpChant = attemptedChant.toLowerCase();
  cleanedUpChant = cleanedUpChant.replace(/[^a-z0-9]/g, "");

  var answerChant = "";
  var outputString = "";

  switch(roundNumber) {
    case "3":
      answerChant = "dirtringstink";
    break;
    case "4":
      answerChant = "clippersdentistmigo";
    break;
    case "5":
      answerChant = "brainschapelssolvents";
    break;
    case "6":
      answerChant = "adderelveshills";
    break;
    case "7":
      answerChant = "acidbadgecabbagedeface";
    break;
    case "8":
      answerChant = "partsstraptarpstraps";
    break;
  }

  if(cleanedUpChant == answerChant) {
    outputString = "<b>" + attemptedChant + "</b>: Congratulations - you believe you have interpreted your god correctly! Now please go onto your team's jamboard (pinned in the discord channel) and draw a sigil with those things!<br><br>";
  } else {
    outputString = "<b>" + attemptedChant + "</b>: That doesn't seem to be correct. Make sure that you entered the words in alphabetical order.<br><br>";
  }

  document.getElementById("clericResponse").innerHTML = document.getElementById("clericResponse").innerHTML + outputString;
}

function checkRogue() {
  let roundNumber = document.getElementById("roundNumber").value;
  let attemptedAnswer = document.getElementById("rogueGuess").value;

  var cleanedUpAnswer = attemptedAnswer.toLowerCase();
  cleanedUpAnswer = cleanedUpAnswer.replace(/[^a-z0-9]/g, "");

  var actualAnswer = "";
  var hintString = "";
  var outputString = "";

  switch(roundNumber) {
    case "4":
      actualAnswer = "aghast";
      hintString = "This is a pun. What kind of food does a gug like to eat?";
    break;
    case "5":
      actualAnswer = "amagicalexperiment";
      hintString = "This is a pun. This is about how an owlbear is created.";
    break;
    case "6":
      actualAnswer = "appalledandred";
      hintString = "This is kind of a pun. This answer sounds like a particular phrase from the description. The middle word of the answer is AND.";
    break;
    case "7":
      actualAnswer = "annalsofthyme";
      hintString = "This is a pun. It's a very obvious pun when you find the right phrase.";
    break;
    case "8":
      actualAnswer = "anobjectlesson";
      hintString = "You'll actually need to look in the stat block for this one.";
    break;
  }

  if(cleanedUpAnswer == actualAnswer) {
    outputString = "<b>" + attemptedAnswer + "</b>: Congratulations - you have shown that you can use your knowledge about this monster! Message @Rogue in your team's channel with this answer to claim your credit.<br><br>";
  } else {
    outputString = "<b>" + attemptedAnswer + "</b>: That doesn't seem to be correct.<br>" + hintString + "<br><br>";
  }

  document.getElementById("rogueResponse").innerHTML = document.getElementById("rogueResponse").innerHTML + outputString;
}

function checkFighter() {
  let roundNumber = document.getElementById("roundNumber").value;
  let attemptedWeapon = document.getElementById("fighterGuess").value;

  var cleanedUpWeapon = attemptedWeapon.toUpperCase();
  cleanedUpWeapon = cleanedUpWeapon.replace(/[^A-Z]/g, "");

  var isAWord = false;
  var correctWeapon = false;
  var weaponScore = 0;
  var outputString = "";
  var flanking = false;
  var damageNeeded = 0;

  if (enable.has(cleanedUpWeapon)) {
    isAWord = true;
  }

  switch(roundNumber) {
    case "2":
      for(var i = 0; i < cleanedUpWeapon.length; i++) {
        if(cleanedUpWeapon.charAt(i) == cleanedUpWeapon.charAt(i+1)) {weaponScore += 1;}
      }
      damageNeeded = 3;
    break;
    case "3":
      weaponScore = 2;
      for(var i = 0; i < cleanedUpWeapon.length; i++) {
        if(cleanedUpWeapon.charAt(i) == 'F' || cleanedUpWeapon.charAt(i) == 'A' || cleanedUpWeapon.charAt(i) == 'C' || cleanedUpWeapon.charAt(i) == 'E') {weaponScore -= 1;}
      }
      damageNeeded = 4;
    break;
    case "4":
      weaponScore = longestPalindrome(cleanedUpWeapon).length;
      damageNeeded = 6;
    break;
    case "5":
    weaponScore = cleanedUpWeapon.length;
      for(var i = 1; i < cleanedUpWeapon.length; i++) {
        var string1 = cleanedUpWeapon.slice(0,i);
        var string2 = cleanedUpWeapon.slice(i,cleanedUpWeapon.length);
        if(enable.has(string1) && enable.has(string2)) {
          if(string1.length < string2.length) {
            if(weaponScore > string1.length) {weaponScore = string1.length;}
          } else {
            if(weaponScore > string2.length) {weaponScore = string2.length;}
          }
        }
      }
      if (weaponScore == cleanedUpWeapon.length) {weaponScore = 0;}
      damageNeeded = 6;
    break;
    case "6":
      for(var i = 0; i < cleanedUpWeapon.length; i++) {
        var newWord = "";
        for(var j = 0; j < cleanedUpWeapon.length; j++) {
          if(i !=j) {newWord += cleanedUpWeapon.charAt(j);}
        }
        if(enable.has(newWord)) {weaponScore++;}
      }
      damageNeeded = 4;
      flanking = true;
    break;
    case "7":
      weaponScore = cleanedUpWeapon.length - cleanedUpWeapon.replace(/I/g, "").length;
      damageNeeded = 8;
      flanking = true;
    break;
    case "8":
      var anagrams = permutation("",cleanedUpWeapon);
      for(let anagram of anagrams) {
        if(anagram != cleanedUpWeapon && enable.has(anagram)) {weaponScore++;}
      }
      flanking = true;
      damageNeeded = 5;
    break;
  }
  //alert("correctWeapon: " + correctWeapon + ", isAWord: " + isAWord + ", flanking: " + flanking);
  /*if(correctWeapon && !flanking) {
    outputString = "<b>" + attemptedWeapon + "</b>: Congratulations - you have found a weapon that this monster is weak to! Now it's time to attack it! Take a picture of yourself holding this weapon, and upload it to your team's Discord channel, tagging @Fighter and mentioning the name of the weapon. If you don't like this weapon, you are free to keep guessing to get a weapon you can take a picture with.<br><br>";
  }
  if(correctWeapon && flanking) {
    outputString = "<b>" + attemptedWeapon + "</b>: Congratulations - you have found a weapon that this monster is weak to! However, with more powerful monsters, you'll need to attack with flanking. Two different members of your team musy take a picture of themselves holding this weapon, and upload it to your team's Discord channel, tagging @Fighter and mentioning the name of the weapon. As before, if you don't like this weapon, you are free to keep guessing to get a weapon you can take a picture with.<br><br>";
  }
  if(!correctWeapon && isAWord) {
    outputString = "<b>" + attemptedWeapon + "</b>: While that is a reliable weapon, it doesn't particularly aim at this creature's weakness.<br><br>";
  }*/

  outputString = "<b>" + attemptedWeapon + "</b>: This weapon deals " + weaponScore + " damage to the monster. You need to deal " + damageNeeded + " damage to this monster to defeat it. You may need to find other weapons to help defeat this monster. When you have a set of weapons that will defeat this monster, take a picture of yourself holding all of the weapons, and upload it to your team's Discord channel, tagging @Fighter and mentioning the name of the weapon(s). If you don't like this weapon, you are free to keep guessing to get a weapon you can take a picture with.<br><br>";

  if (flanking) {
    outputString = "<b>" + attemptedWeapon + "</b>: This weapon deals " + weaponScore + " damage to the monster. You need to deal " + damageNeeded + " damage to this monster to defeat it. You may need to find other weapons to help defeat this monster. When you have a set of weapons that will defeat this monster, take a picture of yourself holding all of the weapons, and upload it to your team's Discord channel, tagging @Fighter and mentioning the name of the weapon(s). In addition, with more powerful monsters, you'll need to attack with flanking. Two different members of your team must take the appropriate picture with the same weapons.<br><br>";
  }

  if(!isAWord) {
    outputString = "<b>" + attemptedWeapon + "</b>: Unfortunately, that is not a weapon in the famous list of all weapons - ENABLE. The ENABLE weapon list is exactly the same as the ENABLE word list, except that the weapon one hurts more.<br><br>";
  }

  document.getElementById("fighterResponse").innerHTML = document.getElementById("fighterResponse").innerHTML + outputString;
}

function permutation(start, string) {

    //base case
    if ( string.length == 1 ) {
        return [ start + string ];
    } else {

        var returnResult = [];
        for (var i=0; i < string.length; i++) {
            var result = permutation (string[i], string.substr(0, i) + string.substr(i+1));
            for (var j=0; j<result.length; j++) {
                returnResult.push(start + result[j]);
            }
        }

        return returnResult;
    }
}

function longestPalindrome(s) {
  if (s.length < 1) return "";
  let maxSubStart = 0;
  let maxSubLength = 0;
  for (let i = 0; i < s.length; i++) {
    const lengthCenteredAtChar = expandAroundCenter(s, i, i);
    const lengthCenteredAtSpace = expandAroundCenter(s, i, i + 1);
    const longestSubAtChar = Math.max(lengthCenteredAtChar, lengthCenteredAtSpace)
    if (longestSubAtChar > maxSubLength) {
      maxSubLength = longestSubAtChar;
      maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
    }
  }
  return s.substr(maxSubStart, maxSubLength);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}
