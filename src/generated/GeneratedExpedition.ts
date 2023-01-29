export interface BaseTypeRegex {
  baseType: string
  regex: string
  items: Item[]
}
 
export interface Item {
  id: string,
  name: string,
  baseType: string,
  icon: string,
}

export const baseTypeRegex: { [key: string]: BaseTypeRegex } = {
 "Viridian Jewel": {
   baseType: "Viridian Jewel", regex: "vir",
   items: [{ id: "677", name: "Intuitive Leap", baseType: "Viridian Jewel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL3VuaXF1ZTYiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/f2dc5c37a5/unique6.png" },{ id: "754", name: "Lioneye's Fall", baseType: "Viridian Jewel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0xpb25leWVzRmFsbCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/164c5c1080/LioneyesFall.png" },{ id: "2284", name: "Pure Talent", baseType: "Viridian Jewel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1B1cmVUYWxlbnQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/64b53e536e/PureTalent.png" },{ id: "100432", name: "Stormshroud", baseType: "Viridian Jewel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL0dyZWVuSmV3ZWwyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/75f171fff6/GreenJewel2.png" },{ id: "7376", name: "Unnatural Instinct", baseType: "Viridian Jewel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1VubmF0dXJhbEluc3RpbmN0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/c37fa5c2b6/UnnaturalInstinct.png" }],
 },
 "Crimson Jewel": {
   baseType: "Crimson Jewel", regex: "\"on j\"",
   items: [{ id: "100353", name: "Firesong", baseType: "Crimson Jewel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1JlZEpld2VsNyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/dd6b13c77c/RedJewel7.png" },{ id: "100351", name: "Immutable Force", baseType: "Crimson Jewel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1JlZEpld2VsMiIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/87ba4f5e53/RedJewel2.png" },{ id: "676", name: "Inspired Learning", baseType: "Crimson Jewel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL3VuaXF1ZTciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/05e61f124f/unique7.png" },{ id: "4858", name: "Might of the Meek", baseType: "Crimson Jewel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1BvdGVuY3lPZlRoZVVucmVtYXJrYWJsZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/10117c9173/PotencyOfTheUnremarkable.png" }],
 },
 "Cobalt Jewel": {
   baseType: "Cobalt Jewel", regex: "cob",
   items: [{ id: "1745", name: "Unending Hunger", baseType: "Cobalt Jewel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL1NwZWN0cmVKZXdlbCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/4e2d72df55/SpectreJewel.png" },{ id: "100439", name: "Witchbane", baseType: "Cobalt Jewel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvSmV3ZWxzL3VuaXF1ZTEzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/9cc73bdf26/unique13.png" }],
 },
 "Opal Wand": {
   baseType: "Opal Wand", regex: "\"pal w\"",
   items: [{ id: "60196", name: "Apep's Rage", baseType: "Opal Wand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9BcGVwc1JhZ2UiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/247664776d/ApepsRage.png" }],
 },
 "Siege Axe": {
   baseType: "Siege Axe", regex: "\"ge a\"",
   items: [{ id: "2143", name: "Soul Taker", baseType: "Siege Axe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9BbGV4YXhlIiwidyI6MiwiaCI6Mywic2NhbGUiOjEsInJlbGljIjowfV0/8780cf95c7/Alexaxe.png" }],
 },
 "Great Mallet": {
   baseType: "Great Mallet", regex: "\"at m\"",
   items: [{ id: "272", name: "Chober Chaber", baseType: "Great Mallet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvQ2hvYmVyQ2hhYmVyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/77d9d3e30a/ChoberChaber.png" },{ id: "7553", name: "Trypanon", baseType: "Great Mallet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHJ5cGFub24iLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/b1e0103982/Trypanon.png" }],
 },
 "Crystal Sceptre": {
   baseType: "Crystal Sceptre", regex: "\"tal s\"",
   items: [{ id: "876", name: "Nycta's Lantern", baseType: "Crystal Sceptre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9MeWNobnVzbHlhZWkiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/c69b77ef8a/Lychnuslyaei.png" },{ id: "2156", name: "The Supreme Truth", baseType: "Crystal Sceptre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9UaGVzdXByZW1ldHJ1dGgiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/a0e7d78751/Thesupremetruth.png" }],
 },
 "Ritual Sceptre": {
   baseType: "Ritual Sceptre", regex: "itu",
   items: [{ id: "7501", name: "Brutus' Lead Sprinkler", baseType: "Ritual Sceptre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvVGhlTGVhZFNwcmlua2xlciIsInciOjIsImgiOjMsInNjYWxlIjoxLCJyZWxpYyI6MH1d/ed1f4ca211/TheLeadSprinkler.png" }],
 },
 "Steelhead": {
   baseType: "Steelhead", regex: "lh",
   items: [{ id: "7427", name: "Jorrhast's Blacksteel", baseType: "Steelhead", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvSm9ycmhhc3RzQmxhY2tzdGVlbCIsInciOjIsImgiOjQsInNjYWxlIjoxLCJyZWxpYyI6MH1d/1c90a334bc/JorrhastsBlacksteel.png" }],
 },
 "Hellion's Paw": {
   baseType: "Hellion's Paw", regex: "hell",
   items: [{ id: "60181", name: "Bloodseeker", baseType: "Hellion's Paw", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9CbG9vZHNlZWtlciIsInciOjIsImgiOjIsInNjYWxlIjoxLCJyZWxpYyI6MH1d/785f435cec/Bloodseeker.png" }],
 },
 "Dusk Blade": {
   baseType: "Dusk Blade", regex: "du",
   items: [{ id: "2119", name: "Ephemeral Edge", baseType: "Dusk Blade", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDhVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/b36c255071/OneHandSword8Unique.png" }],
 },
 "Ezomyte Staff": {
   baseType: "Ezomyte Staff", regex: "\"te st\"",
   items: [{ id: "60187", name: "Cane of Unravelling", baseType: "Ezomyte Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvQ2FuZU9mVW5yYXZlbGxpbmciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/7c143c1f0f/CaneOfUnravelling.png" },{ id: "7377", name: "Soulwrest", baseType: "Ezomyte Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvVG9wRG93blN0YXZlSWNvbiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/f62cfea775/TopDownStaveIcon.png" }],
 },
 "Fiend Dagger": {
   baseType: "Fiend Dagger", regex: "fien",
   items: [{ id: "60186", name: "Arakaali's Fang", baseType: "Fiend Dagger", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0ZhbmdVbmlxdWUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/7ca059e094/FangUnique.png" },{ id: "1461", name: "The Consuming Dark", baseType: "Fiend Dagger", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0NvbnN1bWluZ3RoZURhcmsiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/71882cbd42/ConsumingtheDark.png" }],
 },
 "Crude Bow": {
   baseType: "Crude Bow", regex: "rud",
   items: [{ id: "2117", name: "Silverbranch", baseType: "Crude Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzFVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/339f5e126e/Bow1Unique.png" }],
 },
 "Maelström Staff": {
   baseType: "Maelström Staff", regex: "ö",
   items: [{ id: "2106", name: "Taryn's Shiver", baseType: "Maelström Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvVGFyeW5zc2hpdmVyIiwidyI6MiwiaCI6NCwic2NhbGUiOjEsInJlbGljIjowfV0/c347c6ec62/Tarynsshiver.png" }],
 },
 "Thresher Claw": {
   baseType: "Thresher Claw", regex: "thre",
   items: [{ id: "2103", name: "Cybil's Paw", baseType: "Thresher Claw", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DeWJpbHNDbGF3IiwidyI6MiwiaCI6Miwic2NhbGUiOjEsInJlbGljIjowfV0/bf523db78a/CybilsClaw.png" }],
 },
 "Imbued Wand": {
   baseType: "Imbued Wand", regex: "bue",
   items: [{ id: "2109", name: "Moonsorrow", baseType: "Imbued Wand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kVW5pcXVlMiIsInciOjEsImgiOjMsInNjYWxlIjoxLCJyZWxpYyI6MH1d/e0731bfd15/WandUnique2.png" }],
 },
 "Imperial Bow": {
   baseType: "Imperial Bow", regex: "\"ial bo\"",
   items: [{ id: "2097", name: "Lioneye's Glare", baseType: "Imperial Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0Jvdzh1bmlxdWUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/206ca29f09/Bow8unique.png" },{ id: "1882", name: "Windripper", baseType: "Imperial Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0VhZ2xlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/01fdf37ac0/Eagle.png" }],
 },
 "Karui Maul": {
   baseType: "Karui Maul", regex: "\"i m\"",
   items: [{ id: "788", name: "Marohi Erqi", baseType: "Karui Maul", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2UydW5pcXVlMiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/6ae0a56923/TwoHandMace2unique2.png" }],
 },
 "Prophecy Wand": {
   baseType: "Prophecy Wand", regex: "ecy",
   items: [{ id: "1795", name: "Void Battery", baseType: "Prophecy Wand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9Wb2lkQmF0dGVyeSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/71a0fdc8db/VoidBattery.png" }],
 },
 "Void Axe": {
   baseType: "Void Axe", regex: "\"id a\"",
   items: [{ id: "1974", name: "Kitava's Feast", baseType: "Void Axe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9LaXRhdmFzSHVuZ2VyIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/7e0b7ac41a/KitavasHunger.png" }],
 },
 "Gavel": {
   baseType: "Gavel", regex: "gav",
   items: [{ id: "218", name: "Cameria's Maul", baseType: "Gavel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvQW1lcmljc01hdWwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/e1b9d35ca3/AmericsMaul.png" },{ id: "821", name: "Mjölner", baseType: "Gavel", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvTWpvbG5lciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/3e6fc15b26/Mjolner.png" }],
 },
 "Spine Bow": {
   baseType: "Spine Bow", regex: "spine",
   items: [{ id: "1018", name: "Reach of the Council", baseType: "Spine Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0Jvd09mVGhlQ291bmNpbCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/55dc65893e/BowOfTheCouncil.png" },{ id: "1813", name: "Voltaxic Rift", baseType: "Spine Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL1ZvaWRzaGFmdCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/aaa5cfdba1/Voidshaft.png" }],
 },
 "Highborn Staff": {
   baseType: "Highborn Staff", regex: "\"rn s\"",
   items: [{ id: "2084", name: "Martyr of Innocence", baseType: "Highborn Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvTWFydHlySW5ub2NlbmNlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/6fd4eee9df/MartyrInnocence.png" }],
 },
 "Jewelled Foil": {
   baseType: "Jewelled Foil", regex: "well",
   items: [{ id: "307", name: "Cospri's Malice", baseType: "Jewelled Foil", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0Nvc3ByaXNNYWxpY2UiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/e9e517220b/CosprisMalice.png" }],
 },
 "Sage Wand": {
   baseType: "Sage Wand", regex: "\"ge w\"",
   items: [{ id: "1972", name: "Shade of Solaris", baseType: "Sage Wand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9Tb2xhcmlzV2FuZCIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/8f2f75ad2e/SolarisWand.png" },{ id: "1727", name: "Twyzel", baseType: "Sage Wand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kMVVuaXF1ZSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/086aeb214c/Wand1Unique.png" }],
 },
 "Assassin Bow": {
   baseType: "Assassin Bow", regex: "\"sin b\"",
   items: [{ id: "267", name: "Chin Sol", baseType: "Assassin Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzV1bmlxdWUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/199f28ea8d/Bow5unique.png" },{ id: "355", name: "Darkscorn", baseType: "Assassin Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0RhcmtzY29ybiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/5145b7feef/Darkscorn.png" }],
 },
 "Imperial Skean": {
   baseType: "Imperial Skean", regex: "\"ial sk\"",
   items: [{ id: "423", name: "Divinarius", baseType: "Imperial Skean", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjd1bmlxdWUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/3deec3773b/Dagger7unique.png" },{ id: "2255", name: "White Wind", baseType: "Imperial Skean", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL1doaXRlV2luZCIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/48866b1c7f/WhiteWind.png" }],
 },
 "Imperial Maul": {
   baseType: "Imperial Maul", regex: "\"rial m\"",
   items: [{ id: "2089", name: "Tidebreaker", baseType: "Imperial Maul", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVGlkZWJyZWFrZXIiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/25b69a132f/Tidebreaker.png" }],
 },
 "Carved Wand": {
   baseType: "Carved Wand", regex: "arve",
   items: [{ id: "1373", name: "Storm Prison", baseType: "Carved Wand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9TdG9ybVByaXNvbiIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/0fc4811c94/StormPrison.png" },{ id: "2258", name: "The Poet's Pen", baseType: "Carved Wand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9Qb2V0c1BlbiIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/f6f0645739/PoetsPen.png" }],
 },
 "Judgement Staff": {
   baseType: "Judgement Staff", regex: "jud",
   items: [{ id: "614", name: "Hegemony's Era", baseType: "Judgement Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvSGVnZW1vbnlzRXJhIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/85929506ae/HegemonysEra.png" },{ id: "7392", name: "The Grey Spire", baseType: "Judgement Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvVGhlR3JleVNwaXJlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/6e3a1c2c79/TheGreySpire.png" }],
 },
 "Vaal Blade": {
   baseType: "Vaal Blade", regex: "\"al bl\"",
   items: [{ id: "1032", name: "Rebuke of the Vaal", baseType: "Vaal Blade", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDdVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/90312b1e4a/OneHandSword7Unique.png" },{ id: "1765", name: "Varunastra", baseType: "Vaal Blade", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1ZhcnVuYXN0cmEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/ce779b1e41/Varunastra.png" }],
 },
 "Vaal Claw": {
   baseType: "Vaal Claw", regex: "\"aal c\"",
   items: [{ id: "45", name: "Allure", baseType: "Vaal Claw", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9BbGx1cmUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/ff5311676c/Allure.png" },{ id: "2085", name: "Essentia Sanguis", baseType: "Vaal Claw", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3NVVuaXF1ZTIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/8041876a9e/Claw5Unique2.png" }],
 },
 "Ezomyte Dagger": {
   baseType: "Ezomyte Dagger", regex: "\"yte d\"",
   items: [{ id: "22641", name: "Cold Iron Point", baseType: "Ezomyte Dagger", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0NvbGRJcm9uUG9pbnQiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/1a4002957b/ColdIronPoint.png" }],
 },
 "Eternal Sword": {
   baseType: "Eternal Sword", regex: "\"ternal s\"",
   items: [{ id: "2504", name: "Beltimber Blade", baseType: "Eternal Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL1ZlcmRhbnRHdWFyZGlhblN3b3JkMiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/3f09536952/VerdantGuardianSword2.png" },{ id: "446", name: "Dreamfeather", baseType: "Eternal Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0RyZWFtZmVhdGhlciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/89a3a7588c/Dreamfeather.png" },{ id: "2305", name: "Grelwood Shank", baseType: "Eternal Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL1ZlcmRhbnRHdWFyZGlhblN3b3JkMSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/b085f741a5/VerdantGuardianSword1.png" }],
 },
 "Shadow Sceptre": {
   baseType: "Shadow Sceptre", regex: "\"w sc\"",
   items: [{ id: "162", name: "Bitterdream", baseType: "Shadow Sceptre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9zY2VwdGVyOHVuaXF1ZTIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/085f7726de/scepter8unique2.png" },{ id: "1473", name: "The Dark Seer", baseType: "Shadow Sceptre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9Wb2lkR2F6ZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/e24a55cd27/VoidGaze.png" }],
 },
 "Vaal Hatchet": {
   baseType: "Vaal Hatchet", regex: "\"al h\"",
   items: [{ id: "687", name: "Jack, the Axe", baseType: "Vaal Hatchet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9KYWNrdGhlYXhlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f1f813fe9f/Jacktheaxe.png" }],
 },
 "Royal Skean": {
   baseType: "Royal Skean", regex: "\"yal sk\"",
   items: [{ id: "611", name: "Heartbreaker", baseType: "Royal Skean", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0hlYXJ0YnJlYWtlciIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/fa73c4d5b4/Heartbreaker.png" }],
 },
 "Lathi": {
   baseType: "Lathi", regex: "lath",
   items: [{ id: "1597", name: "The Searing Touch", baseType: "Lathi", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY0dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/5c7ddd5550/Staff4unique.png" }],
 },
 "Ranger Bow": {
   baseType: "Ranger Bow", regex: "rang",
   items: [{ id: "870", name: "Null's Inclination", baseType: "Ranger Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL051bGxCb3ciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/067d0e5884/NullBow.png" }],
 },
 "Abyssal Axe": {
   baseType: "Abyssal Axe", regex: "\"sal a\"",
   items: [{ id: "1957", name: "Ngamahu's Flame", baseType: "Abyssal Axe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvUmlyaVRlTmdhbWFodSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/55c2a170af/RiriTeNgamahu.png" }],
 },
 "Demon Dagger": {
   baseType: "Demon Dagger", regex: "\"on d\"",
   items: [{ id: "2322", name: "Vulconus", baseType: "Demon Dagger", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL1Z1bGNvbnVzIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/aefa0a977b/Vulconus.png" }],
 },
 "Terror Claw": {
   baseType: "Terror Claw", regex: "\"ror c\"",
   items: [{ id: "1065", name: "Rive", baseType: "Terror Claw", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9CbGVlZENsYXciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/085844fb05/BleedClaw.png" },{ id: "1594", name: "The Scourge", baseType: "Terror Claw", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9UaGVTY291cmdlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/598a9f9893/TheScourge.png" }],
 },
 "Slaughter Knife": {
   baseType: "Slaughter Knife", regex: "sla",
   items: [{ id: "160", name: "Bino's Kitchen Knife", baseType: "Slaughter Knife", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0Jpbm9zS2l0Y2hlbktuaWZlIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/499d39d615/BinosKitchenKnife.png" }],
 },
 "Rock Breaker": {
   baseType: "Rock Breaker", regex: "roc",
   items: [{ id: "276", name: "Clayshaper", baseType: "Rock Breaker", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvQ2xheVNoYXBlciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/9224ab6497/ClayShaper.png" }],
 },
 "Lion Sword": {
   baseType: "Lion Sword", regex: "\"lion s\"",
   items: [{ id: "437", name: "Doomsower", baseType: "Lion Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0Rvb21Tb3dlciIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/7d9d914b75/DoomSower.png" }],
 },
 "Demon's Horn": {
   baseType: "Demon's Horn", regex: "mon'",
   items: [{ id: "880", name: "Obliteration", baseType: "Demon's Horn", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9NYWxlZGljdCIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/2ddc131782/Maledict.png" }],
 },
 "Platinum Sceptre": {
   baseType: "Platinum Sceptre", regex: "\"m sc\"",
   items: [{ id: "1313", name: "Singularity", baseType: "Platinum Sceptre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9HbG9vbWV5ZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/12d7027e18/Gloomeye.png" }],
 },
 "Harbinger Bow": {
   baseType: "Harbinger Bow", regex: "bi",
   items: [{ id: "873", name: "Nuro's Harp", baseType: "Harbinger Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL051cm9zUHVyaWZ5aW5nSGFycCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/36ac89806c/NurosPurifyingHarp.png" },{ id: "1321", name: "Slivertongue", baseType: "Harbinger Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL1NpbHZlclRvbmd1ZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/15c7237f48/SilverTongue.png" }],
 },
 "Military Staff": {
   baseType: "Military Staff", regex: "mili",
   items: [{ id: "1713", name: "Tremor Rod", baseType: "Military Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvTWluZVN0YWZmIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/51a69e0959/MineStaff.png" }],
 },
 "Midnight Blade": {
   baseType: "Midnight Blade", regex: "dn",
   items: [{ id: "2316", name: "Ahn's Might", baseType: "Midnight Blade", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0FobnNNaWdodCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/ee9d3b45a4/AhnsMight.png" },{ id: "1017", name: "Razor of the Seventh Sun", baseType: "Midnight Blade", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1Jhem9yT2ZUaGVTZXZlbnRoU3VuIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/ef21dd7f97/RazorOfTheSeventhSun.png" },{ id: "1057", name: "Rigwald's Command", baseType: "Midnight Blade", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1JpZ3dhcmxTd29yZCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/90114046a7/RigwarlSword.png" }],
 },
 "Void Sceptre": {
   baseType: "Void Sceptre", regex: "\"id s\"",
   items: [{ id: "2481", name: "Augyre", baseType: "Void Sceptre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9FbGRlclNjZXB0cmUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/325c7b1591/ElderSceptre.png" },{ id: "824", name: "Mon'tregul's Grasp", baseType: "Void Sceptre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9Nb250cmVndWxzR3Jhc3AiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/c94034110b/MontregulsGrasp.png" }],
 },
 "Meatgrinder": {
   baseType: "Meatgrinder", regex: "tg",
   items: [{ id: "189", name: "Brain Rattler", baseType: "Meatgrinder", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvQnJhaW5TY3JhbWJsZXIiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/0749c07fa6/BrainScrambler.png" }],
 },
 "Iron Staff": {
   baseType: "Iron Staff", regex: "\"ron st\"",
   items: [{ id: "2061", name: "Dying Breath", baseType: "Iron Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvRHlpbmdCcmVhdGgiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/3b7be0c935/DyingBreath.png" },{ id: "21514", name: "Pillar of the Caged God", baseType: "Iron Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvUGlsbGFyb2Z0aGVDYWdlZEdvZCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/0451281624/PillaroftheCagedGod.png" },{ id: "1024", name: "Realmshaper", baseType: "Iron Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY1dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/33929e1979/Staff5unique.png" }],
 },
 "Imperial Staff": {
   baseType: "Imperial Staff", regex: "\"rial st\"",
   items: [{ id: "29", name: "Agnerod East", baseType: "Imperial Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY2dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/8b60f5a033/Staff6unique.png" },{ id: "32", name: "Agnerod North", baseType: "Imperial Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY2dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/8b60f5a033/Staff6unique.png" },{ id: "35", name: "Agnerod South", baseType: "Imperial Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY2dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/8b60f5a033/Staff6unique.png" },{ id: "38", name: "Agnerod West", baseType: "Imperial Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY2dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/8b60f5a033/Staff6unique.png" }],
 },
 "Spiraled Wand": {
   baseType: "Spiraled Wand", regex: "\"led w\"",
   items: [{ id: "1054", name: "Reverberation Rod", baseType: "Spiraled Wand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9SZXZlcmJlcmF0aW9uUm9kIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/676a395a5f/ReverberationRod.png" },{ id: "1951", name: "Tulborn", baseType: "Spiraled Wand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9UdWxib3JuIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/7c7cf3e1f2/Tulborn.png" }],
 },
 "Vile Staff": {
   baseType: "Vile Staff", regex: "\"ile s\"",
   items: [{ id: "1672", name: "The Whispering Ice", baseType: "Vile Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY4dW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/04e7459f43/Staff8unique.png" }],
 },
 "Vaal Sceptre": {
   baseType: "Vaal Sceptre", regex: "\"aal sc\"",
   items: [{ id: "440", name: "Doon Cuebiyari", baseType: "Vaal Sceptre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvRG9vbkN1ZWJpeWFyaSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/8a4a0ccb6b/DoonCuebiyari.png" }],
 },
 "Karui Chopper": {
   baseType: "Karui Chopper", regex: "\"ui c\"",
   items: [{ id: "704", name: "Kaom's Primacy", baseType: "Karui Chopper", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlMTFVbmlxdWUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/544409d7f6/TwoHandAxe11Unique.png" }],
 },
 "Short Bow": {
   baseType: "Short Bow", regex: "shor",
   items: [{ id: "1001", name: "Quill Rain", baseType: "Short Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0JvdzJ1bmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5c5cad82e8/Bow2unique.png" }],
 },
 "Royal Axe": {
   baseType: "Royal Axe", regex: "\"yal a\"",
   items: [{ id: "1061", name: "Rigwald's Savagery", baseType: "Royal Axe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9SaWd3YXJsQXhlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/e2ee95737e/RigwarlAxe.png" }],
 },
 "Terror Maul": {
   baseType: "Terror Maul", regex: "\"or m\"",
   items: [{ id: "727", name: "Kongor's Undying Rage", baseType: "Terror Maul", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvS29uZ29yc1VuZHlpbmdSYWdlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/5fa26110bc/KongorsUndyingRage.png" }],
 },
 "Carnal Sceptre": {
   baseType: "Carnal Sceptre", regex: "\"nal sc\"",
   items: [{ id: "196", name: "Breath of the Council", baseType: "Carnal Sceptre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9QbGFndWVicmluZ2VyIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/c22a70dd6e/Plaguebringer.png" }],
 },
 "Ambusher": {
   baseType: "Ambusher", regex: "ushe",
   items: [{ id: "54308", name: "Goblinedge", baseType: "Ambusher", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0dvYmxpbkVkZ2UiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/61d1382d07/GoblinEdge.png" },{ id: "2194", name: "Taproot", baseType: "Ambusher", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL01hcnJvd0dhc2hlciIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/22be181636/MarrowGasher.png" }],
 },
 "Goat's Horn": {
   baseType: "Goat's Horn", regex: "goat'",
   items: [{ id: "12", name: "Abberath's Horn", baseType: "Goat's Horn", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XeWNodmVyZ2UiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/ea4dd8a801/Wychverge.png" }],
 },
 "Gut Ripper": {
   baseType: "Gut Ripper", regex: "\"ut r\"",
   items: [{ id: "26", name: "Advancing Fortress", baseType: "Gut Ripper", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3c2hpZWxkMyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/a04190ca2b/Clawshield3.png" },{ id: "898", name: "Ornament of the East", baseType: "Gut Ripper", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9Pcm5hbWVudE9mVGhlRWFzdCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/5bea7643a2/OrnamentOfTheEast.png" }],
 },
 "Timeworn Claw": {
   baseType: "Timeworn Claw", regex: "mew",
   items: [{ id: "41", name: "Al Dhih", baseType: "Timeworn Claw", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9BbGRoaWgiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5af625fdd1/Aldhih.png" }],
 },
 "Quartz Wand": {
   baseType: "Quartz Wand", regex: "\"z w\"",
   items: [{ id: "101", name: "Ashcaller", baseType: "Quartz Wand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9Bc2h3YWtlciIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/a36e60acf6/Ashwaker.png" }],
 },
 "Basket Rapier": {
   baseType: "Basket Rapier", regex: "bask",
   items: [{ id: "133", name: "Aurumvorax", baseType: "Basket Rapier", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL0F1cnVtdm9yYXgiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/64b63c7413/Aurumvorax.png" }],
 },
 "Bronze Sceptre": {
   baseType: "Bronze Sceptre", regex: "\"ze s\"",
   items: [{ id: "135", name: "Axiom Perpetuum", baseType: "Bronze Sceptre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9BeGlvbVBlcnBldHV1bSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/da686b937b/AxiomPerpetuum.png" }],
 },
 "Stiletto": {
   baseType: "Stiletto", regex: "til",
   items: [{ id: "178", name: "Bloodplay", baseType: "Stiletto", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0Jsb29kUGxheSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/3c8258f393/BloodPlay.png" }],
 },
 "War Hammer": {
   baseType: "War Hammer", regex: "\"ar h\"",
   items: [{ id: "197", name: "Brightbeak", baseType: "War Hammer", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U1VW5pcXVlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/d3f763cad7/OneHandMace5Unique.png" },{ id: "740", name: "Lavianga's Wisdom", baseType: "War Hammer", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2UzYSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/3c0044c7be/OneHandMace3a.png" }],
 },
 "Auric Mace": {
   baseType: "Auric Mace", regex: "aur",
   items: [{ id: "217", name: "Callinellus Malleus", baseType: "Auric Mace", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvQ2FsbGluZWxsdXNNYWxsZXVzIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/54da9946c9/CallinellusMalleus.png" }],
 },
 "Estoc": {
   baseType: "Estoc", regex: "toc",
   items: [{ id: "348", name: "Daresso's Passion", baseType: "Estoc", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL0RhcmVzc29zIiwidyI6MSwiaCI6NCwic2NhbGUiOjF9XQ/d698c36c19/Daressos.png" }],
 },
 "Karui Sceptre": {
   baseType: "Karui Sceptre", regex: "\"i s\"",
   items: [{ id: "393", name: "Death's Hand", baseType: "Karui Sceptre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9FbmRPZkVyYSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/fbfd20f658/EndOfEra.png" }],
 },
 "Death Bow": {
   baseType: "Death Bow", regex: "dea",
   items: [{ id: "394", name: "Death's Harp", baseType: "Death Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0RlYXRoc2hhcnAiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/488e5f6267/Deathsharp.png" },{ id: "679", name: "Iron Commander", baseType: "Death Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0lyb25Db21tZW5kYW50IiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/001ca245e3/IronCommendant.png" }],
 },
 "Royal Bow": {
   baseType: "Royal Bow", regex: "\"yal bo\"",
   items: [{ id: "431", name: "Doomfletch", baseType: "Royal Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0Rvb21GbGV0Y2giLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/a284f1cdab/DoomFletch.png" }],
 },
 "Cleaver": {
   baseType: "Cleaver", regex: "clea",
   items: [{ id: "444", name: "Dreadarc", baseType: "Cleaver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9EcmVhZGFyYyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/fd1e188ee3/Dreadarc.png" }],
 },
 "Infernal Axe": {
   baseType: "Infernal Axe", regex: "\"nal ax\"",
   items: [{ id: "461", name: "Dyadus", baseType: "Infernal Axe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9EeWFkdXMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/e1b1cf2439/Dyadus.png" }],
 },
 "Crystal Wand": {
   baseType: "Crystal Wand", regex: "\"tal w\"",
   items: [{ id: "473", name: "Eclipse Solaris", baseType: "Crystal Wand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kVW5pcXVlMSIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/e1734b812d/WandUnique1.png" }],
 },
 "Etched Greatsword": {
   baseType: "Etched Greatsword", regex: "\"hed g\"",
   items: [{ id: "474", name: "Edge of Madness", baseType: "Etched Greatsword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0VkZ2VPZk1hZG5lc3MiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/5ab6c808b5/EdgeOfMadness.png" }],
 },
 "Primordial Staff": {
   baseType: "Primordial Staff", regex: "imo",
   items: [{ id: "521", name: "Femurs of the Saints", baseType: "Primordial Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvRmVtdXJzb2Z0aGVTYWludHMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/e275f87366/FemursoftheSaints.png" }],
 },
 "Gnarled Branch": {
   baseType: "Gnarled Branch", regex: "nch",
   items: [{ id: "524", name: "Fencoil", baseType: "Gnarled Branch", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmYxdW5pcXVlIiwidyI6MSwiaCI6NCwic2NhbGUiOjF9XQ/cff9022931/Staff1unique.png" },{ id: "1437", name: "The Blood Thorn", baseType: "Gnarled Branch", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvVGhlQmxvb2RUaG9ybiIsInciOjEsImgiOjQsInNjYWxlIjoxfV0/3dac5ee34b/TheBloodThorn.png" }],
 },
 "Jagged Foil": {
   baseType: "Jagged Foil", regex: "\"ged f\"",
   items: [{ id: "527", name: "Fidelitas' Spike", baseType: "Jagged Foil", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0ZpZGVsaXRhc1NwaWtlIiwidyI6MSwiaCI6NCwic2NhbGUiOjF9XQ/de1d15ceb1/FidelitasSpike.png" }],
 },
 "Dream Mace": {
   baseType: "Dream Mace", regex: "eam",
   items: [{ id: "535", name: "Flesh-Eater", baseType: "Dream Mace", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2U2VW5pcXVlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/2db8b10771/OneHandMace6Unique.png" }],
 },
 "Ornate Mace": {
   baseType: "Ornate Mace", regex: "\"te m\"",
   items: [{ id: "553", name: "Frostbreath", baseType: "Ornate Mace", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvRnJvc3RCcmVhdGgiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/8a6b305388/FrostBreath.png" }],
 },
 "Brass Maul": {
   baseType: "Brass Maul", regex: "\"ss m\"",
   items: [{ id: "557", name: "Geofri's Baptism", baseType: "Brass Maul", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U3VW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/378419527e/TwoHandMace7Unique.png" }],
 },
 "Spiked Club": {
   baseType: "Spiked Club", regex: "\"ked c\"",
   items: [{ id: "577", name: "Gorebreaker", baseType: "Spiked Club", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kTWFjZXMvT25lSGFuZE1hY2UzVW5pcXVlIiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/c3ca02cad8/OneHandMace3Unique.png" }],
 },
 "Vaal Axe": {
   baseType: "Vaal Axe", regex: "\"aal a\"",
   items: [{ id: "621", name: "Hezmana's Bloodlust", baseType: "Vaal Axe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9IZXptYW5hc0Jsb29kbHVzdCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/fdbd48147f/HezmanasBloodlust.png" }],
 },
 "Reaver Sword": {
   baseType: "Reaver Sword", regex: "\"aver s\"",
   items: [{ id: "629", name: "Hiltless", baseType: "Reaver Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0hpbHRsZXNzIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/04689b7d41/Hiltless.png" },{ id: "1469", name: "The Dancing Dervish", baseType: "Reaver Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1JoeXNibGFkZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/3ed974e708/Rhysblade.png" }],
 },
 "Sledgehammer": {
   baseType: "Sledgehammer", regex: "edg",
   items: [{ id: "640", name: "Hrimnor's Hymn", baseType: "Sledgehammer", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U2VW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/31ad6258ac/TwoHandMace6Unique.png" }],
 },
 "Legion Sword": {
   baseType: "Legion Sword", regex: "\"gion s\"",
   items: [{ id: "650", name: "Hyaon's Fury", baseType: "Legion Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0h5YW9uc0Z1cnkiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/1abaf6507b/HyaonsFury.png" }],
 },
 "Corsair Sword": {
   baseType: "Corsair Sword", regex: "ors",
   items: [{ id: "659", name: "Ichimonji", baseType: "Corsair Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0JsYWRlT2ZWYXN0cmkiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/a01d200e74/BladeOfVastri.png" }],
 },
 "Decimation Bow": {
   baseType: "Decimation Bow", regex: "eci",
   items: [{ id: "672", name: "Infractem", baseType: "Decimation Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL0luZnJhY3RlbSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ea06e13fb8/Infractem.png" }],
 },
 "Elder Sword": {
   baseType: "Elder Sword", regex: "elde",
   items: [{ id: "675", name: "Innsbury Edge", baseType: "Elder Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL0VsZGVyU3dvcmQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2bd26d4bf6/ElderSword.png" }],
 },
 "Ezomyte Blade": {
   baseType: "Ezomyte Blade", regex: "\"yte bl\"",
   items: [{ id: "723", name: "Kondo's Pride", baseType: "Ezomyte Blade", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL0tvbmRvc1ByaWRlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/59f41a868c/KondosPride.png" }],
 },
 "Elegant Sword": {
   baseType: "Elegant Sword", regex: "\"ant s\"",
   items: [{ id: "734", name: "Lakishu's Blade", baseType: "Elegant Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDVVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/5a5771852b/OneHandSword5Unique.png" }],
 },
 "Driftwood Wand": {
   baseType: "Driftwood Wand", regex: "\"od w\"",
   items: [{ id: "743", name: "Lifesprig", baseType: "Driftwood Wand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9MaWZlU3ByaWciLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/8e97a1d808/LifeSprig.png" }],
 },
 "Woodsplitter": {
   baseType: "Woodsplitter", regex: "ods",
   items: [{ id: "752", name: "Limbsplit", baseType: "Woodsplitter", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlX3NwYXJlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/6cc29798f1/TwoHandAxe_spare.png" }],
 },
 "Platinum Kris": {
   baseType: "Platinum Kris", regex: "\"m k\"",
   items: [{ id: "787", name: "Mark of the Doubting Knight", baseType: "Platinum Kris", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RvdWJ0aW5nS25pZ2h0IiwidyI6MSwiaCI6Mywic2NhbGUiOjF9XQ/a71d0de38e/DoubtingKnight.png" }],
 },
 "Engraved Wand": {
   baseType: "Engraved Wand", regex: "\"aved w\"",
   items: [{ id: "812", name: "Midnight Bargain", baseType: "Engraved Wand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9XYW5kVW5pcXVlMyIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/1db4fb5dbf/WandUnique3.png" }],
 },
 "Flaying Knife": {
   baseType: "Flaying Knife", regex: "yi",
   items: [{ id: "814", name: "Mightflay", baseType: "Flaying Knife", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjJ1bmlxdWUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/831b56800f/Dagger2unique.png" }],
 },
 "Tomahawk": {
   baseType: "Tomahawk", regex: "wk",
   items: [{ id: "825", name: "Moonbender's Wing", baseType: "Tomahawk", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9Nb29uYmVuZGVyc1dpbmciLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/68a04ccc3f/MoonbendersWing.png" }],
 },
 "Fright Claw": {
   baseType: "Fright Claw", regex: "\"ht c\"",
   items: [{ id: "831", name: "Mortem Morsu", baseType: "Fright Claw", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9DbGF3OHVuaXF1ZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/7294efb794/Claw8unique.png" }],
 },
 "Infernal Sword": {
   baseType: "Infernal Sword", regex: "\"fernal s\"",
   items: [{ id: "899", name: "Oro's Sacrifice", baseType: "Infernal Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL09yb3NTYWNyaWZpY2UiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/82b813f27d/OrosSacrifice.png" }],
 },
 "Tornado Wand": {
   baseType: "Tornado Wand", regex: "nad",
   items: [{ id: "937", name: "Piscator's Vigil", baseType: "Tornado Wand", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9XYW5kcy9QaXNjYXRvcnNWaWdpbCIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/332f80f7ac/PiscatorsVigil.png" }],
 },
 "Twilight Blade": {
   baseType: "Twilight Blade", regex: "twil",
   items: [{ id: "975", name: "Prismatic Eclipse", baseType: "Twilight Blade", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1ByaXNtYXRpY0VjbGlwc2UiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/d6243ca476/PrismaticEclipse.png" }],
 },
 "Jagged Maul": {
   baseType: "Jagged Maul", regex: "\"gged m\"",
   items: [{ id: "990", name: "Quecholli", baseType: "Jagged Maul", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVHdvSGFuZE1hY2U1VW5pcXVlIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/9361b8eb61/TwoHandMace5Unique.png" }],
 },
 "Ornate Sword": {
   baseType: "Ornate Sword", regex: "\"te sw\"",
   items: [{ id: "995", name: "Queen's Decree", baseType: "Ornate Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZFVuaXF1ZTMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/a79e04039c/TwoHandSwordUnique3.png" }],
 },
 "Shadow Axe": {
   baseType: "Shadow Axe", regex: "\"w ax\"",
   items: [{ id: "1027", name: "Reaper's Pursuit", baseType: "Shadow Axe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlVW5pcXVlMSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/d39a181d8d/TwoHandAxeUnique1.png" }],
 },
 "Rusted Sword": {
   baseType: "Rusted Sword", regex: "\"ted sw\"",
   items: [{ id: "1034", name: "Redbeak", baseType: "Rusted Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDFVbmlxdWUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/a3010a69f5/OneHandSword1Unique.png" }],
 },
 "Decorative Axe": {
   baseType: "Decorative Axe", regex: "deco",
   items: [{ id: "1045", name: "Relentless Fury", baseType: "Decorative Axe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9SZWxlbnRsZXNzRnVyeSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/8013c33f55/RelentlessFury.png" }],
 },
 "Highland Blade": {
   baseType: "Highland Blade", regex: "hl",
   items: [{ id: "1055", name: "Rigwald's Charge", baseType: "Highland Blade", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDVVbmlxdWUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/ce7492e94d/TwoHandSword5Unique.png" }],
 },
 "Recurve Bow": {
   baseType: "Recurve Bow", regex: "recu",
   items: [{ id: "1070", name: "Roth's Reach", baseType: "Recurve Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL1NhcmtoYW1zUmVhY2giLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/89bf0cff0b/SarkhamsReach.png" }],
 },
 "Gladius": {
   baseType: "Gladius", regex: "diu",
   items: [{ id: "1082", name: "Scaeva", baseType: "Gladius", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1NjYWV2YSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/320c7247e3/Scaeva.png" }],
 },
 "Serpentine Staff": {
   baseType: "Serpentine Staff", regex: "penti",
   items: [{ id: "1314", name: "Sire of Shards", baseType: "Serpentine Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvUmFkaWVuY2UiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/229388b736/Radience.png" }],
 },
 "Long Bow": {
   baseType: "Long Bow", regex: "\"g bo\"",
   items: [{ id: "1368", name: "Storm Cloud", baseType: "Long Bow", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Cb3dzL1N0b3JtY2xvdWQiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/003957da0c/Stormcloud.png" }],
 },
 "Tiger Sword": {
   baseType: "Tiger Sword", regex: "\"iger s\"",
   items: [{ id: "1401", name: "Terminus Est", baseType: "Tiger Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZFVuaXF1ZTIiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/c5d5843861/TwoHandSwordUnique2.png" }],
 },
 "Headsman Axe": {
   baseType: "Headsman Axe", regex: "ads",
   items: [{ id: "1434", name: "The Blood Reaper", baseType: "Headsman Axe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9Ud29IYW5kQXhlVW5pcXVlMiIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/3f8b59ec70/TwoHandAxeUnique2.png" }],
 },
 "Whalebone Rapier": {
   baseType: "Whalebone Rapier", regex: "wha",
   items: [{ id: "1512", name: "The Goddess Bound", baseType: "Whalebone Rapier", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL1VuaXF1ZVJhcGllcjYiLCJ3IjoxLCJoIjo0LCJzY2FsZSI6MX1d/b9f0cc5e60/UniqueRapier6.png" }],
 },
 "Jasper Chopper": {
   baseType: "Jasper Chopper", regex: "\"per c\"",
   items: [{ id: "1519", name: "The Harvest", baseType: "Jasper Chopper", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9UaGVFeHRyYWN0b3IiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/8452349a24/TheExtractor.png" }],
 },
 "Sabre": {
   baseType: "Sabre", regex: "sab",
   items: [{ id: "1575", name: "The Princess", baseType: "Sabre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL09uZUhhbmRTd29yZDNVbmlxdWUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/2ffa300730/OneHandSword3Unique.png" }],
 },
 "Jade Hatchet": {
   baseType: "Jade Hatchet", regex: "\"de ha\"",
   items: [{ id: "1596", name: "The Screaming Eagle", baseType: "Jade Hatchet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9TY3JlYW1pbmdlYWdsZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/1fd02e9312/Screamingeagle.png" }],
 },
 "Royal Staff": {
   baseType: "Royal Staff", regex: "\"yal st\"",
   items: [{ id: "1620", name: "The Stormheart", baseType: "Royal Staff", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9TdGF2ZXMvU3RhZmY4dW5pcXVlWCIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/fa0b46bc0c/Staff8uniqueX.png" }],
 },
 "War Sword": {
   baseType: "War Sword", regex: "\"war s\"",
   items: [{ id: "1632", name: "The Tempestuous Steel", baseType: "War Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kU3dvcmRzL1RlbXBlc3R1b3VzU3RlZWwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/72078201f9/TempestuousSteel.png" }],
 },
 "Imperial Claw": {
   baseType: "Imperial Claw", regex: "\"ial c\"",
   items: [{ id: "1705", name: "Touch of Anguish", baseType: "Imperial Claw", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9Ub3VjaE9mQW5ndWlzaCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/c3b67bc0c2/TouchOfAnguish.png" }],
 },
 "Boot Knife": {
   baseType: "Boot Knife", regex: "\"ot k\"",
   items: [{ id: "1746", name: "Ungil's Gauche", baseType: "Boot Knife", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0RhZ2dlcjN1bmlxdWUiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/ec0e6a82fb/Dagger3unique.png" }],
 },
 "Poleaxe": {
   baseType: "Poleaxe", regex: "ole",
   items: [{ id: "1877", name: "Wideswing", baseType: "Poleaxe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9XaWRlc3dpbmciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/e9dfcf58df/Wideswing.png" }],
 },
 "Boot Blade": {
   baseType: "Boot Blade", regex: "\"oot b\"",
   items: [{ id: "1879", name: "Widowmaker", baseType: "Boot Blade", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL1dpZG93bWFrZXIiLCJ3IjoxLCJoIjozLCJzY2FsZSI6MX1d/c581a2aec4/Widowmaker.png" }],
 },
 "Antique Rapier": {
   baseType: "Antique Rapier", regex: "\"ue ra\"",
   items: [{ id: "1955", name: "Ewar's Mirage", baseType: "Antique Rapier", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9SYXBpZXJzL0V3YXJzTWlyYWdlIiwidyI6MSwiaCI6NCwic2NhbGUiOjF9XQ/c7b916c7f4/EwarsMirage.png" }],
 },
 "Throat Stabber": {
   baseType: "Throat Stabber", regex: "tab",
   items: [{ id: "2197", name: "The Wasp Nest", baseType: "Throat Stabber", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9MZXZpYXRoYW5pdm9yeSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/8d31776c34/Leviathanivory.png" }],
 },
 "Despot Axe": {
   baseType: "Despot Axe", regex: "esp",
   items: [{ id: "2198", name: "Debeon's Dirge", baseType: "Despot Axe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9TdHJpbmdBeGUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/c3289a678a/StringAxe.png" }],
 },
 "Opal Sceptre": {
   baseType: "Opal Sceptre", regex: "\"pal s\"",
   items: [{ id: "2281", name: "Balefire", baseType: "Opal Sceptre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9CYWVsZmlyZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/082c0ee423/Baelfire.png" }],
 },
 "Grinning Fetish": {
   baseType: "Grinning Fetish", regex: "fet",
   items: [{ id: "6884", name: "Earendel's Embrace", baseType: "Grinning Fetish", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9FYXJlbmRlbHNFbWJyYWNlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/7fbecdb2b3/EarendelsEmbrace.png" }],
 },
 "Ezomyte Axe": {
   baseType: "Ezomyte Axe", regex: "\"yte a\"",
   items: [{ id: "6919", name: "Sinvicta's Mettle", baseType: "Ezomyte Axe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kQXhlcy9TaW52aWN0YXNNZXR0bGUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/f1eaf2346b/SinvictasMettle.png" },{ id: "42308", name: "Wings of Entropy", baseType: "Ezomyte Axe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9PbmVIYW5kQXhlcy9FbnRyb3B5d2luZ3MiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/86e128789a/Entropywings.png" }],
 },
 "Tyrant's Sekhem": {
   baseType: "Tyrant's Sekhem", regex: "ty",
   items: [{ id: "21588", name: "Sign of the Sin Eater", baseType: "Tyrant's Sekhem", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9TY2VwdGVyT2ZTdWZmZXJpbmciLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/49a06d1a23/ScepterOfSuffering.png" }],
 },
 "Royal Sceptre": {
   baseType: "Royal Sceptre", regex: "\"yal sc\"",
   items: [{ id: "24449", name: "The Black Cane", baseType: "Royal Sceptre", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9TY2VwdGVycy9UaGVCbGFja0NhbmUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/b2aa96460e/TheBlackCane.png" }],
 },
 "Skinning Knife": {
   baseType: "Skinning Knife", regex: "kinn",
   items: [{ id: "578", name: "Goredrill", baseType: "Skinning Knife", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9EYWdnZXJzL0dvcmVkcmlsbCIsInciOjEsImgiOjMsInNjYWxlIjoxfV0/e61d6f038e/Goredrill.png" }],
 },
 "Nailed Fist": {
   baseType: "Nailed Fist", regex: "nai",
   items: [{ id: "737", name: "Last Resort", baseType: "Nailed Fist", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9OZXJhc0xhc3RSZXNvcnQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/5f5a6bd205/NerasLastResort.png" }],
 },
 "Dread Maul": {
   baseType: "Dread Maul", regex: "read",
   items: [{ id: "1799", name: "Voidhome", baseType: "Dread Maul", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kTWFjZXMvVm9pZGhvbWUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/0122c9dcf4/Voidhome.png" }],
 },
 "Awl": {
   baseType: "Awl", regex: "wl",
   items: [{ id: "1880", name: "Wildslash", baseType: "Awl", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9PbmVIYW5kV2VhcG9ucy9DbGF3cy9XaWxkc2xhc2giLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/9dc7260a86/Wildslash.png" }],
 },
 "Bastard Sword": {
   baseType: "Bastard Sword", regex: "bast",
   items: [{ id: "1273", name: "Shiversting", baseType: "Bastard Sword", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9Ud29IYW5kU3dvcmRzL1R3b0hhbmRTd29yZDZVbmlxdWUiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/084a248453/TwoHandSword6Unique.png" }],
 },
 "Ironscale Gauntlets": {
   baseType: "Ironscale Gauntlets", regex: "\"ronscale g\"",
   items: [{ id: "7463", name: "Flesh and Spirit", baseType: "Ironscale Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRmxlc2hBbmRTcGlyaXQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/19ff6a7f36/FleshAndSpirit.png" }],
 },
 "Mosaic Kite Shield": {
   baseType: "Mosaic Kite Shield", regex: "mos",
   items: [{ id: "2115", name: "Rise of the Phoenix", baseType: "Mosaic Kite Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1Jpc2VvZnRoZXBob2VuaXgiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/3208388526/Riseofthephoenix.png" }],
 },
 "Hubris Circlet": {
   baseType: "Hubris Circlet", regex: "hub",
   items: [{ id: "329", name: "Crown of Eyes", baseType: "Hubris Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Nyb3dub2ZFeWVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/778182e367/CrownofEyes.png" },{ id: "2192", name: "Eber's Unification", baseType: "Hubris Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1BhbGVDb3VuY2lsSGVsbWV0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/4415fd6474/PaleCouncilHelmet.png" },{ id: "7484", name: "Ylfeban's Trickery", baseType: "Hubris Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1lsZmViYW4iLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/3bbfdb200a/Ylfeban.png" }],
 },
 "Nightmare Bascinet": {
   baseType: "Nightmare Bascinet", regex: "\"e ba\"",
   items: [{ id: "421", name: "Devoto's Devotion", baseType: "Nightmare Bascinet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldFN0ckRleDJ1bmlxdWUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/65fa7daa88/HelmetStrDex2unique.png" },{ id: "2136", name: "The Bringer of Rain", baseType: "Nightmare Bascinet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RoZUJyaW5nZXJvZlJhaW4iLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/6c96c88d83/TheBringerofRain.png" }],
 },
 "Champion Kite Shield": {
   baseType: "Champion Kite Shield", regex: "amp",
   items: [{ id: "2126", name: "Aegis Aurora", baseType: "Champion Kite Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludFVuaXF1ZTd1bmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/92760bfe47/ShieldStrIntUnique7unique.png" }],
 },
 "Spike-Point Arrow Quiver": {
   baseType: "Spike-Point Arrow Quiver", regex: "\"e-\"",
   items: [{ id: "1080", name: "Saemus' Gift", baseType: "Spike-Point Arrow Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9TZWFtdXNHaWZ0IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/7da61eeb8e/SeamusGift.png" },{ id: "2111", name: "Soul Strike", baseType: "Spike-Point Arrow Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9Tb3Vsc3RyaWtlIiwidyI6MiwiaCI6Mywic2NhbGUiOjEsInJlbGljIjowfV0/ee866a305c/Soulstrike.png" }],
 },
 "Harlequin Mask": {
   baseType: "Harlequin Mask", regex: "eq",
   items: [{ id: "7409", name: "Mind of the Council", baseType: "Harlequin Mask", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RodW5kZXJpbmdXaGlzcGVycyIsInciOjIsImgiOjIsInNjYWxlIjoxLCJyZWxpYyI6MH1d/f939936df1/ThunderingWhispers.png" }],
 },
 "Strapped Mitts": {
   baseType: "Strapped Mitts", regex: "\"trapped m\"",
   items: [{ id: "2150", name: "Facebreaker", baseType: "Strapped Mitts", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzRGV4SW50VW5pcXVlMSIsInciOjIsImgiOjIsInNjYWxlIjoxLCJyZWxpYyI6MH1d/5091da2ad7/GlovesDexIntUnique1.png" }],
 },
 "Two-Point Arrow Quiver": {
   baseType: "Two-Point Arrow Quiver", regex: "\"o-p\"",
   items: [{ id: "7473", name: "Rigwald's Quills", baseType: "Two-Point Arrow Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9SaWd3YWxkc1F1aWxscyIsInciOjIsImgiOjMsInNjYWxlIjoxLCJyZWxpYyI6MH1d/bddeda0ac9/RigwaldsQuills.png" },{ id: "1317", name: "Skirmish", baseType: "Two-Point Arrow Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9UaGVTa2lybWlzaCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/9fe8813a15/TheSkirmish.png" }],
 },
 "Regicide Mask": {
   baseType: "Regicide Mask", regex: "gic",
   items: [{ id: "7423", name: "Crown of the Pale King", baseType: "Regicide Mask", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Nyb3dub2Z0aGVQYWxlS2luZyIsInciOjIsImgiOjIsInNjYWxlIjoxLCJyZWxpYyI6MH1d/1867c4e9f8/CrownofthePaleKing.png" }],
 },
 "Archon Kite Shield": {
   baseType: "Archon Kite Shield", regex: "rch",
   items: [{ id: "2286", name: "Invictus Solaris", baseType: "Archon Kite Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0ludmljdHVzIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/98194c56fe/Invictus.png" },{ id: "2125", name: "Prism Guardian", baseType: "Archon Kite Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1RoZUNvcnVuZHVtIiwidyI6MiwiaCI6Mywic2NhbGUiOjEsInJlbGljIjowfV0/3b6ee9f714/TheCorundum.png" },{ id: "6996", name: "Unyielding Flame", baseType: "Archon Kite Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0RhbW5hdGlvQWV0ZXJuYSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/755ec1c5d8/DamnatioAeterna.png" }],
 },
 "Branded Kite Shield": {
   baseType: "Branded Kite Shield", regex: "rand",
   items: [{ id: "2129", name: "Saffell's Frame", baseType: "Branded Kite Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludFVuaXF1ZTYiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/0117273949/ShieldStrIntUnique6.png" }],
 },
 "Blunt Arrow Quiver": {
   baseType: "Blunt Arrow Quiver", regex: "blun",
   items: [{ id: "94469", name: "Rearguard", baseType: "Blunt Arrow Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9SZWFyZ3VhcmQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/5ccc77c269/Rearguard.png" }],
 },
 "Elegant Round Shield": {
   baseType: "Elegant Round Shield", regex: "\"nt ro\"",
   items: [{ id: "70856", name: "The Oppressor", baseType: "Elegant Round Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1RoZVN1cHByZXNzb3IiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/c8dcd744a2/TheSuppressor.png" },{ id: "71376", name: "The Squire", baseType: "Elegant Round Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0Nhc3Bpcm9zUmVzb25hbmNlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/94531d2461/CaspirosResonance.png" }],
 },
 "Penetrating Arrow Quiver": {
   baseType: "Penetrating Arrow Quiver", regex: "pene",
   items: [{ id: "60184", name: "Drillneck", baseType: "Penetrating Arrow Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9EcmlsbG5lY2siLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/aa6c8c4bb8/Drillneck.png" }],
 },
 "Deerskin Gloves": {
   baseType: "Deerskin Gloves", regex: "\"rskin g\"",
   items: [{ id: "2113", name: "Maligaro's Virtuosity", baseType: "Deerskin Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvTWFsaWdhcm9zVmlydG91c2l0eSIsInciOjIsImgiOjIsInNjYWxlIjoxLCJyZWxpYyI6MH1d/1fd7f942f2/MaligarosVirtousity.png" }],
 },
 "Nubuck Boots": {
   baseType: "Nubuck Boots", regex: "\"uck b\"",
   items: [{ id: "2112", name: "Goldwyrm", baseType: "Nubuck Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleFVuaXF1ZTIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/67e18d185a/BootsDexUnique2.png" }],
 },
 "Wool Gloves": {
   baseType: "Wool Gloves", regex: "\"ol g\"",
   items: [{ id: "2127", name: "Sadima's Touch", baseType: "Wool Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU2FkaW1hc1RvdWNoIiwidyI6MiwiaCI6Miwic2NhbGUiOjEsInJlbGljIjowfV0/4e5faca78a/SadimasTouch.png" }],
 },
 "Titanium Spirit Shield": {
   baseType: "Titanium Spirit Shield", regex: "niu",
   items: [{ id: "60083", name: "Rathpith Globe", baseType: "Titanium Spirit Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZEludDZ1bmlxdWUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/8b42cd2891/ShieldInt6unique.png" }],
 },
 "Steel Circlet": {
   baseType: "Steel Circlet", regex: "\"eel c\"",
   items: [{ id: "60129", name: "Maw of Conquest", baseType: "Steel Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01hd09mQ29ucXVlc3QiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/39dbcbf980/MawOfConquest.png" }],
 },
 "Vaal Gauntlets": {
   baseType: "Vaal Gauntlets", regex: "\"al ga\"",
   items: [{ id: "60175", name: "Doryani's Fist", baseType: "Vaal Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRG9yeWFuaXNGaXN0IiwidyI6MiwiaCI6Miwic2NhbGUiOjEsInJlbGljIjowfV0/a2754bf9c1/DoryanisFist.png" }],
 },
 "Satin Gloves": {
   baseType: "Satin Gloves", regex: "\"tin g\"",
   items: [{ id: "98276", name: "Allelopathy", baseType: "Satin Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRW1iYWxtZXJzR2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/62148488f8/EmbalmersGloves.png" },{ id: "60205", name: "Demon Stitcher", baseType: "Satin Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRGVtb25TdGljaGVyIiwidyI6MiwiaCI6Miwic2NhbGUiOjEsInJlbGljIjowfV0/a0e1243eba/DemonSticher.png" }],
 },
 "Sharkskin Tunic": {
   baseType: "Sharkskin Tunic", regex: "\"rkskin t\"",
   items: [{ id: "7396", name: "The Rat Cage", baseType: "Sharkskin Tunic", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaGVSYXRDYWdlIiwidyI6MiwiaCI6Mywic2NhbGUiOjEsInJlbGljIjowfV0/c9fc4f072d/TheRatCage.png" }],
 },
 "Zodiac Leather": {
   baseType: "Zodiac Leather", regex: "zod",
   items: [{ id: "2101", name: "Hyrri's Ire", baseType: "Zodiac Leather", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5RGV4M0NVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/7428149970/BodyDex3CUnique.png" }],
 },
 "Bronzescale Gauntlets": {
   baseType: "Bronzescale Gauntlets", regex: "\"escale g\"",
   items: [{ id: "1320", name: "Slitherpinch", baseType: "Bronzescale Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU2xpdGhlcnBpbmNoIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/8f23a9535d/Slitherpinch.png" },{ id: "7520", name: "Vaal Caress", baseType: "Bronzescale Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvVmFhbENhcmVzcyIsInciOjIsImgiOjIsInNjYWxlIjoxLCJyZWxpYyI6MH1d/0acd819c89/VaalCaress.png" }],
 },
 "Lacquered Garb": {
   baseType: "Lacquered Garb", regex: "\"red ga\"",
   items: [{ id: "2116", name: "Cloak of Defiance", baseType: "Lacquered Garb", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9DbG9ha09mRGVmaWFuY2UiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/f89ea3baf8/CloakOfDefiance.png" },{ id: "1779", name: "Victario's Influence", baseType: "Lacquered Garb", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9WaWN0YXJpb3NKYWNrZXQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/b50998d963/VictariosJacket.png" }],
 },
 "Spidersilk Robe": {
   baseType: "Spidersilk Robe", regex: "pid",
   items: [{ id: "1331", name: "Soul Mantle", baseType: "Spidersilk Robe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Tb3VsTWFudGxlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/19bb017ce4/SoulMantle.png" },{ id: "2107", name: "The Covenant", baseType: "Spidersilk Robe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9FbWJyYWNlIiwidyI6MiwiaCI6Mywic2NhbGUiOjEsInJlbGljIjowfV0/2c9fd3dfc0/Embrace.png" }],
 },
 "Sharkskin Boots": {
   baseType: "Sharkskin Boots", regex: "\"kskin b\"",
   items: [{ id: "2096", name: "The Blood Dance", baseType: "Sharkskin Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Hb3JlRnJlbnp5IiwidyI6MiwiaCI6Miwic2NhbGUiOjEsInJlbGljIjowfV0/bc4a0ea6eb/GoreFrenzy.png" }],
 },
 "Polished Spiked Shield": {
   baseType: "Polished Spiked Shield", regex: "poli",
   items: [{ id: "60154", name: "Zeel's Amplifier", baseType: "Polished Spiked Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1plYWxzQW1wbGlmaWVyIiwidyI6MiwiaCI6Miwic2NhbGUiOjEsInJlbGljIjowfV0/cd2b23e604/ZealsAmplifier.png" }],
 },
 "Prophet Crown": {
   baseType: "Prophet Crown", regex: "phet",
   items: [{ id: "2188", name: "Speaker's Wreath", baseType: "Prophet Crown", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01pbmlvbkhlbG1ldCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/7cf5db368e/MinionHelmet.png" },{ id: "1991", name: "The Brine Crown", baseType: "Prophet Crown", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RoZUJyaW5lQ3Jvd24iLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/785aa5f630/TheBrineCrown.png" },{ id: "1446", name: "The Broken Crown", baseType: "Prophet Crown", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Jyb2tlbkNyb3duIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/98b19a6cfb/BrokenCrown.png" }],
 },
 "Wyrmscale Doublet": {
   baseType: "Wyrmscale Doublet", regex: "\"mscale d\"",
   items: [{ id: "2079", name: "Gruthkul's Pelt", baseType: "Wyrmscale Doublet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9XaWxlZmFuZ3NQZWx0IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/e393dbd9af/WilefangsPelt.png" }],
 },
 "Stealth Boots": {
   baseType: "Stealth Boots", regex: "\"lth b\"",
   items: [{ id: "2092", name: "Garukhan's Flight", baseType: "Stealth Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Ud29Ub25lZEJvb3RzQUxUIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/4e0bb109ae/TwoTonedBootsALT.png" },{ id: "1312", name: "Sin Trek", baseType: "Stealth Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TaW5UcmVrIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/84281e0f84/SinTrek.png" }],
 },
 "Plank Kite Shield": {
   baseType: "Plank Kite Shield", regex: "plan",
   items: [{ id: "2099", name: "Springleaf", baseType: "Plank Kite Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckludFVuaXF1ZTIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/1632d4cc70/ShieldStrIntUnique2.png" }],
 },
 "Sage's Robe": {
   baseType: "Sage's Robe", regex: "sage'",
   items: [{ id: "2249", name: "Dialla's Malefaction", baseType: "Sage's Robe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9EaWFsbGFzTWFsZWZhY3Rpb24iLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/842ace4d64/DiallasMalefaction.png" },{ id: "1902", name: "Zahndethus' Cassock", baseType: "Sage's Robe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9aYWhuZGV0aHVzY2Fzc29jayIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/6de1273e49/Zahndethuscassock.png" }],
 },
 "Riveted Boots": {
   baseType: "Riveted Boots", regex: "\"eted b\"",
   items: [{ id: "2277", name: "Ralakesh's Impatience", baseType: "Riveted Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9SYWxha2VzaHNJbXBhdGllbmNlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/54540f0f3d/RalakeshsImpatience.png" }],
 },
 "Saint's Hauberk": {
   baseType: "Saint's Hauberk", regex: "int'",
   items: [{ id: "42341", name: "Doryani's Prototype", baseType: "Saint's Hauberk", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9TaG9ja0Nsb2FrIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/44e73cc73c/ShockCloak.png" },{ id: "24813", name: "The Ivory Tower", baseType: "Saint's Hauberk", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaGVJdm9yeVRvd2VyIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/26d71eb965/TheIvoryTower.png" }],
 },
 "Velvet Slippers": {
   baseType: "Velvet Slippers", regex: "\"vet s\"",
   items: [{ id: "2104", name: "Wondertrap", baseType: "Velvet Slippers", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Xb25kZXJ0cmFwIiwidyI6MiwiaCI6Miwic2NhbGUiOjEsInJlbGljIjowfV0/822b769ee5/Wondertrap.png" }],
 },
 "Gladiator Plate": {
   baseType: "Gladiator Plate", regex: "\"or p\"",
   items: [{ id: "1441", name: "The Brass Dome", baseType: "Gladiator Plate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Eb21lT2ZCcmFzcyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/41f06694f2/DomeOfBrass.png" }],
 },
 "Hydrascale Gauntlets": {
   baseType: "Hydrascale Gauntlets", regex: "\"ascale g\"",
   items: [{ id: "70949", name: "Gravebind", baseType: "Hydrascale Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRGVhdGhHcmlwIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/371752d95c/DeathGrip.png" }],
 },
 "Carnal Boots": {
   baseType: "Carnal Boots", regex: "\"nal bo\"",
   items: [{ id: "49366", name: "Corpsewalker", baseType: "Carnal Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9EaXN0dXJiVGhlRGVhZCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/fabb05d84e/DisturbTheDead.png" }],
 },
 "Pine Buckler": {
   baseType: "Pine Buckler", regex: "\"ne bu\"",
   items: [{ id: "2110", name: "Crest of Perandus", baseType: "Pine Buckler", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleFVuaXF1ZTUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/9d02de6592/ShieldDexUnique5.png" }],
 },
 "Ornate Quiver": {
   baseType: "Ornate Quiver", regex: "\"te q\"",
   items: [{ id: "21050", name: "Maloney's Mechanism", baseType: "Ornate Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9UcmlnZ2VyUXVpdmVyQmFzZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/1f3958bdb3/TriggerQuiverBase.png" }],
 },
 "Jingling Spirit Shield": {
   baseType: "Jingling Spirit Shield", regex: "ji",
   items: [{ id: "1967", name: "Light of Lunaris", baseType: "Jingling Spirit Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0x1bmFyaXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/a684af2793/Lunaris.png" }],
 },
 "Titan Gauntlets": {
   baseType: "Titan Gauntlets", regex: "\"an ga\"",
   items: [{ id: "98143", name: "Kaom's Spirit", baseType: "Titan Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvS2FvbXNTcGlyaXQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/eefa7c48f9/KaomsSpirit.png" },{ id: "1771", name: "Veruso's Battering Rams", baseType: "Titan Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvVmVydXNvc0JhdHRlcmluZ1JhbXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/e6727320e2/VerusosBatteringRams.png" }],
 },
 "Goathide Boots": {
   baseType: "Goathide Boots", regex: "\"thide bo\"",
   items: [{ id: "1971", name: "Abberath's Hooves", baseType: "Goathide Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9BYmJlcmF0aHNIb292ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/445b84d83c/AbberathsHooves.png" },{ id: "1778", name: "Victario's Flight", baseType: "Goathide Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleEludFVuaXF1ZTIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/11ab397d3d/BootsDexIntUnique2.png" }],
 },
 "Sadist Garb": {
   baseType: "Sadist Garb", regex: "dis",
   items: [{ id: "2289", name: "Inpulsa's Broken Heart", baseType: "Sadist Garb", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9PblNob2NrZWQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/ce499f7b0b/OnShocked.png" },{ id: "2195", name: "Tinkerskin", baseType: "Sadist Garb", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UcmFwcGVyQXJtb3VyIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/3e6bd8eefe/TrapperArmour.png" }],
 },
 "Zealot Gloves": {
   baseType: "Zealot Gloves", regex: "\"ot g\"",
   items: [{ id: "54439", name: "Hand of the Fervent", baseType: "Zealot Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR3JpcG9mU2FjcmlmaWNlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/9ac4073c28/GripofSacrifice.png" },{ id: "4750", name: "Volkuur's Guidance", baseType: "Zealot Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUGFsZUNvdW5jaWxHbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3271f5441a/PaleCouncilGloves.png" }],
 },
 "Silk Gloves": {
   baseType: "Silk Gloves", regex: "\"Silk Gloves\"",
   items: [{ id: "99", name: "Asenath's Gentle Touch", baseType: "Silk Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQXNlbmF0aHNHZW50bGVUb3VjaCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/ea6e822bbe/AsenathsGentleTouch.png" }],
 },
 "Murder Mitts": {
   baseType: "Murder Mitts", regex: "\"der m\"",
   items: [{ id: "22492", name: "Machina Mitts", baseType: "Murder Mitts", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvODU0NzkiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/360a5df732/85479.png" },{ id: "2248", name: "Malachai's Mark", baseType: "Murder Mitts", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvTWFsYWNoYWlzTWFyayIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/2f2a8c0dff/MalachaisMark.png" },{ id: "1693", name: "Thunderfist", baseType: "Murder Mitts", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvdGh1bmRlcmNsYXciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/c566a6b7aa/thunderclaw.png" }],
 },
 "Ebony Tower Shield": {
   baseType: "Ebony Tower Shield", regex: "bony",
   items: [{ id: "262", name: "Chernobog's Pillar", baseType: "Ebony Tower Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0NoZXJub2JvZ3NwaWxsYXIiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/8868d6add1/Chernobogspillar.png" },{ id: "1981", name: "Tukohama's Fortress", baseType: "Ebony Tower Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1R1a29oYW1hc0ZvcnRyZXNzIiwidyI6MiwiaCI6NCwic2NhbGUiOjF9XQ/e502c4bcf2/TukohamasFortress.png" }],
 },
 "Rawhide Boots": {
   baseType: "Rawhide Boots", regex: "\"whide b\"",
   items: [{ id: "1111", name: "Seven-League Step", baseType: "Rawhide Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleFVuaXF1ZTMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/23e4614336/BootsDexUnique3.png" }],
 },
 "Occultist's Vestment": {
   baseType: "Occultist's Vestment", regex: "cc",
   items: [{ id: "1266", name: "Shavronne's Wrappings", baseType: "Occultist's Vestment", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MUNVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/4f3e22a163/BodyInt1CUnique.png" }],
 },
 "Steel Kite Shield": {
   baseType: "Steel Kite Shield", regex: "\"el k\"",
   items: [{ id: "42312", name: "Emperor's Vigilance", baseType: "Steel Kite Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0hpZ2hQcmllc3RTaGllbGQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/4c24c383b8/HighPriestShield.png" }],
 },
 "Ezomyte Burgonet": {
   baseType: "Ezomyte Burgonet", regex: "\"e bur\"",
   items: [{ id: "17", name: "Abyssus", baseType: "Ezomyte Burgonet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0FieXNzdXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/a12f5424c8/Abyssus.png" }],
 },
 "Lacquered Helmet": {
   baseType: "Lacquered Helmet", regex: "\"uered h\"",
   items: [{ id: "163", name: "Black Sun Crest", baseType: "Lacquered Helmet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0JsYWNrc3VuY3Jlc3QiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/d5c3617a52/Blacksuncrest.png" }],
 },
 "Necromancer Silks": {
   baseType: "Necromancer Silks", regex: "lks",
   items: [{ id: "42333", name: "Fleshcrafter", baseType: "Necromancer Silks", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Fc3NlbmNlR2lmdGVyIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/3b3446e019/EssenceGifter.png" },{ id: "1790", name: "Vis Mortis", baseType: "Necromancer Silks", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9WaXNNb3J0aXMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/771efa547e/VisMortis.png" }],
 },
 "Sorcerer Boots": {
   baseType: "Sorcerer Boots", regex: "\"erer b\"",
   items: [{ id: "1319", name: "Skyforth", baseType: "Sorcerer Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Ta3lmb3J0aCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/56fee4545a/Skyforth.png" }],
 },
 "Reinforced Greaves": {
   baseType: "Reinforced Greaves", regex: "\"ced g\"",
   items: [{ id: "1886", name: "Windscream", baseType: "Reinforced Greaves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9XaW5kc2NyZWFtIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/7cc293769c/Windscream.png" }],
 },
 "Solaris Circlet": {
   baseType: "Solaris Circlet", regex: "lari",
   items: [{ id: "19016", name: "Flamesight", baseType: "Solaris Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0V4cGxvcmVyc1Zpc2lvbkZpcmUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/972275807c/ExplorersVisionFire.png" },{ id: "18982", name: "Galesight", baseType: "Solaris Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0V4cGxvcmVyc1Zpc2lvbkNvbGQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/702f0515fb/ExplorersVisionCold.png" },{ id: "18964", name: "Thundersight", baseType: "Solaris Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0V4cGxvcmVyc1Zpc2lvbkxpZ2h0bmluZyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/56f2f88c51/ExplorersVisionLightning.png" },{ id: "100453", name: "Wilma's Requital", baseType: "Solaris Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1dpbG1hc1JlcXVpdGFsIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/32cf26ca5b/WilmasRequital.png" }],
 },
 "Praetor Crown": {
   baseType: "Praetor Crown", regex: "pra",
   items: [{ id: "2282", name: "Ahn's Contempt", baseType: "Praetor Crown", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0FobnNDb250ZW1wdCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/a946d28e48/AhnsContempt.png" },{ id: "2298", name: "Memory Vault", baseType: "Praetor Crown", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0VsZGVyR3VhcmRpYW4iLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/efcf4a9c86/ElderGuardian.png" },{ id: "1962", name: "Voll's Vision", baseType: "Praetor Crown", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1ZvbGxzVmlzaW9uIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/c8dd3f6cf3/VollsVision.png" }],
 },
 "Necromancer Circlet": {
   baseType: "Necromancer Circlet", regex: "\"r ci\"",
   items: [{ id: "270", name: "Chitus' Apex", baseType: "Necromancer Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0NoaXR1c0FwZXgiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/65697b1d09/ChitusApex.png" }],
 },
 "Leather Hood": {
   baseType: "Leather Hood", regex: "\"her h\"",
   items: [{ id: "612", name: "Heatshiver", baseType: "Leather Hood", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlYXRzaGl2ZXIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/b1860c890e/Heatshiver.png" }],
 },
 "Saintly Chainmail": {
   baseType: "Saintly Chainmail", regex: "tly",
   items: [{ id: "5975", name: "Chains of Command", baseType: "Saintly Chainmail", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9DaGFpbnNPZkNvbW1hbmQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/3919d27d1b/ChainsOfCommand.png" },{ id: "662", name: "Incandescent Heart", baseType: "Saintly Chainmail", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9JbGx1bWluYXRpcyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/da0dbbc10a/Illuminatis.png" }],
 },
 "Glorious Plate": {
   baseType: "Glorious Plate", regex: "\"us p\"",
   items: [{ id: "703", name: "Kaom's Heart", baseType: "Glorious Plate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5U3RyM0NVbmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/1027cdf1ad/BodyStr3CUnique.png" },{ id: "40093", name: "Perfidy", baseType: "Glorious Plate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UYW5nbWF6dWFybW91cmJvZHlhcm1vdXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2170370e8f/Tangmazuarmourbodyarmour.png" }],
 },
 "Raven Mask": {
   baseType: "Raven Mask", regex: "raven",
   items: [{ id: "1517", name: "The Gull", baseType: "Raven Mask", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RoZUd1bGwiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/ca1678efd9/TheGull.png" }],
 },
 "Widowsilk Robe": {
   baseType: "Widowsilk Robe", regex: "ws",
   items: [{ id: "2321", name: "Doedre's Skin", baseType: "Widowsilk Robe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Eb2VkcmVzU2tpbiIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/a04f3c7a0a/DoedresSkin.png" }],
 },
 "Embroidered Gloves": {
   baseType: "Embroidered Gloves", regex: "emb",
   items: [{ id: "20692", name: "Vixen's Entrapment", baseType: "Embroidered Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvVml4ZW5zRW50cmFwbWVudCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/e2d77223f8/VixensEntrapment.png" }],
 },
 "Destiny Leather": {
   baseType: "Destiny Leather", regex: "stin",
   items: [{ id: "992", name: "Queen of the Forest", baseType: "Destiny Leather", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9RdWVlbm9mdGhlRm9yZXN0IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/bd3ec993e7/QueenoftheForest.png" }],
 },
 "Exquisite Leather": {
   baseType: "Exquisite Leather", regex: "\"te l\"",
   items: [{ id: "719", name: "Kintsugi", baseType: "Exquisite Leather", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9LaW50c3VnaSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/8fcd7ea593/Kintsugi.png" },{ id: "4760", name: "Yriel's Fostering", baseType: "Exquisite Leather", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9QYWxlQ291bmNpbEFybW91ciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/f3c31cf6b4/PaleCouncilArmour.png" }],
 },
 "Sinner Tricorne": {
   baseType: "Sinner Tricorne", regex: "nne",
   items: [{ id: "46", name: "Alpha's Howl", baseType: "Sinner Tricorne", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1dvbGZoZWFkIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/2acc10e593/Wolfhead.png" },{ id: "40041", name: "Assailum", baseType: "Sinner Tricorne", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RhbmdtYXp1YXJtb3VyaGVsbWV0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/6e327593b9/Tangmazuarmourhelmet.png" }],
 },
 "Deicide Mask": {
   baseType: "Deicide Mask", regex: "dei",
   items: [{ id: "619", name: "Heretic's Veil", baseType: "Deicide Mask", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0ZhY2VPZkRpdmluaXR5IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/dcefc8975e/FaceOfDivinity.png" }],
 },
 "Rawhide Tower Shield": {
   baseType: "Rawhide Tower Shield", regex: "\"ide t\"",
   items: [{ id: "1950", name: "Lycosidae", baseType: "Rawhide Tower Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0x5Y29zaWRhZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/ec38e32a56/Lycosidae.png" }],
 },
 "Vaal Mask": {
   baseType: "Vaal Mask", regex: "\"aal m\"",
   items: [{ id: "21533", name: "Fractal Thoughts", baseType: "Vaal Mask", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0ZyYWN0YWx0aG91Z2h0cyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/64d44c7c52/Fractalthoughts.png" }],
 },
 "Full Dragonscale": {
   baseType: "Full Dragonscale", regex: "\"ll d\"",
   items: [{ id: "345", name: "Daresso's Defiance", baseType: "Full Dragonscale", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9EYXJlc3Nvc0RlZmlhbmNlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/2e5802be5f/DaressosDefiance.png" }],
 },
 "Full Wyrmscale": {
   baseType: "Full Wyrmscale", regex: "\"ll w\"",
   items: [{ id: "149", name: "Belly of the Beast", baseType: "Full Wyrmscale", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9iZWxseW9mdGhlYmVhc3QiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/d38723f8b9/bellyofthebeast.png" }],
 },
 "Varnished Coat": {
   baseType: "Varnished Coat", regex: "varn",
   items: [{ id: "223", name: "Carcass Jack", baseType: "Varnished Coat", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9DYXJjYXNzSmFjayIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/e496ea8e6e/CarcassJack.png" }],
 },
 "Assassin's Garb": {
   baseType: "Assassin's Garb", regex: "\"n's g\"",
   items: [{ id: "308", name: "Cospri's Will", baseType: "Assassin's Garb", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Db3NwcmlzV2lsbCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/e7801b1322/CosprisWill.png" }],
 },
 "Astral Plate": {
   baseType: "Astral Plate", regex: "astr",
   items: [{ id: "44152", name: "Blunderbore", baseType: "Astral Plate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9CbHVuZGVyYm9yZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/4b34ebf3fe/Blunderbore.png" },{ id: "397", name: "Death's Oath", baseType: "Astral Plate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9EZWF0aHNvYXRoIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f81375e335/Deathsoath.png" }],
 },
 "Arcanist Gloves": {
   baseType: "Arcanist Gloves", regex: "\"st gl\"",
   items: [{ id: "598", name: "Grip of the Council", baseType: "Arcanist Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzSW50M1VuaXF1ZTIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/88338fac41/GlovesInt3Unique2.png" }],
 },
 "Desert Brigandine": {
   baseType: "Desert Brigandine", regex: "ese",
   items: [{ id: "748", name: "Lightning Coil", baseType: "Desert Brigandine", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9MaWdodG5pbmdDb2lsIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/1b36c39f5a/LightningCoil.png" }],
 },
 "Harmonic Spirit Shield": {
   baseType: "Harmonic Spirit Shield", regex: "harm",
   items: [{ id: "775", name: "Malachai's Loop", baseType: "Harmonic Spirit Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01hbGFjaGFpTG9vcCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/8c38fb6a4e/MalachaiLoop.png" }],
 },
 "Mind Cage": {
   baseType: "Mind Cage", regex: "mind",
   items: [{ id: "1062", name: "Rime Gaze", baseType: "Mind Cage", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludFVuaXF1ZTEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/607641b0c2/HelmetDexIntUnique1.png" },{ id: "1084", name: "Scold's Bridle", baseType: "Mind Cage", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1Njb2xkc0JyaWRsZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/d8277c58aa/ScoldsBridle.png" }],
 },
 "Silken Hood": {
   baseType: "Silken Hood", regex: "\"en h\"",
   items: [{ id: "1363", name: "Starkonja's Head", baseType: "Silken Hood", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Z1cnJ5aGVhZG9mc3RhcmtvbmphIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/ba13fa5202/Furryheadofstarkonja.png" }],
 },
 "Fossilised Spirit Shield": {
   baseType: "Fossilised Spirit Shield", regex: "fos",
   items: [{ id: "25350", name: "Manastorm", baseType: "Fossilised Spirit Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01hbmFzdG9ybSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/d816fe3053/Manastorm.png" }],
 },
 "Bone Helmet": {
   baseType: "Bone Helmet", regex: "\"bone h\"",
   items: [{ id: "54362", name: "Ancient Skull", baseType: "Bone Helmet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvRWZmZWN0cy9IYXRzL0NodWh1dGx1c1NrdWxsIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/65537c5ac3/ChuhutlusSkull.png" }],
 },
 "Pinnacle Tower Shield": {
   baseType: "Pinnacle Tower Shield", regex: "nna",
   items: [{ id: "759", name: "Lioneye's Remorse", baseType: "Pinnacle Tower Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0clVuaXF1ZTYiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/dd7ee8e1a0/ShieldStrUnique6.png" }],
 },
 "Lacquered Buckler": {
   baseType: "Lacquered Buckler", regex: "\"uered b\"",
   items: [{ id: "24986", name: "Mistwall", baseType: "Lacquered Buckler", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01pc3R3YWxsIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/d81f034c2d/Mistwall.png" }],
 },
 "Soldier Boots": {
   baseType: "Soldier Boots", regex: "\"dier b\"",
   items: [{ id: "42", name: "Alberon's Warpath", baseType: "Soldier Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9BbGJlcm9uc3dhcnBhdGgiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/be7b089ef3/Alberonswarpath.png" }],
 },
 "Festival Mask": {
   baseType: "Festival Mask", regex: "fes",
   items: [{ id: "742", name: "Leer Cast", baseType: "Festival Mask", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleEludDl4IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/6693f97fdf/HelmetDexInt9x.png" }],
 },
 "Serpentscale Gauntlets": {
   baseType: "Serpentscale Gauntlets", regex: "\"tscale g\"",
   items: [{ id: "2082", name: "Haemophilia", baseType: "Serpentscale Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvYmxlZWRnbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/005045bec7/bleedgloves.png" }],
 },
 "Arcanist Slippers": {
   baseType: "Arcanist Slippers", regex: "\"st sl\"",
   items: [{ id: "2186", name: "Inya's Epiphany", baseType: "Arcanist Slippers", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9QYWxlQ291bmNpbEJvb3RzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/78e277875f/PaleCouncilBoots.png" }],
 },
 "Triumphant Lamellar": {
   baseType: "Triumphant Lamellar", regex: "ump",
   items: [{ id: "263", name: "Cherrubim's Maleficence", baseType: "Triumphant Lamellar", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9DaGVycnViaW1zQ3JhdmUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/90d81e1e5b/CherrubimsCrave.png" }],
 },
 "Conjurer Boots": {
   baseType: "Conjurer Boots", regex: "\"urer b\"",
   items: [{ id: "1009", name: "Rainbowstride", baseType: "Conjurer Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9yYWluYm93c3RyaWRlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/bf663baf47/rainbowstride.png" }],
 },
 "Iron Circlet": {
   baseType: "Iron Circlet", regex: "\"on c\"",
   items: [{ id: "100", name: "Asenath's Mark", baseType: "Iron Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0h5cnJpc01hcmsiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/4e0f1cc6a8/HyrrisMark.png" },{ id: "21489", name: "Wreath of Phrecia", baseType: "Iron Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1dyZWF0aF9vZl9QaHJlY2lhIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/7ae5bac7c5/Wreath_of_Phrecia.png" }],
 },
 "Steelscale Gauntlets": {
   baseType: "Steelscale Gauntlets", regex: "\"lscale g\"",
   items: [{ id: "132", name: "Aurseize", baseType: "Steelscale Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQXVyc2VpemUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/4c0d010425/Aurseize.png" }],
 },
 "Dragonscale Boots": {
   baseType: "Dragonscale Boots", regex: "\"gonscale b\"",
   items: [{ id: "354", name: "Darkray Vectors", baseType: "Dragonscale Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9EYXJrcmF5VmVjdG9ycyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/e96f134d02/DarkrayVectors.png" }],
 },
 "Leather Cap": {
   baseType: "Leather Cap", regex: "cap",
   items: [{ id: "575", name: "Goldrim", baseType: "Leather Cap", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1ldERleFVuaXF1ZTIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/7f4908ef2f/HelmetDexUnique2.png" }],
 },
 "Titan Greaves": {
   baseType: "Titan Greaves", regex: "\"an gr\"",
   items: [{ id: "707", name: "Kaom's Roots", baseType: "Titan Greaves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9LYW9tc1Jvb3RzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/23b569d35e/KaomsRoots.png" }],
 },
 "Steel Gauntlets": {
   baseType: "Steel Gauntlets", regex: "\"el ga\"",
   items: [{ id: "808", name: "Meginord's Vise", baseType: "Steel Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR2xvdmVzU3RyNSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/2aaf87839e/GlovesStr5.png" }],
 },
 "Lion Pelt": {
   baseType: "Lion Pelt", regex: "\"on p\"",
   items: [{ id: "881", name: "Obscurantis", baseType: "Lion Pelt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL09ic2N1cmFudGlzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/95ebfbbef1/Obscurantis.png" }],
 },
 "Crusader Gloves": {
   baseType: "Crusader Gloves", regex: "\"der g\"",
   items: [{ id: "1047", name: "Repentance", baseType: "Crusader Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUmVwZW50YW5jZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/20af664d44/Repentance.png" }],
 },
 "Soldier Gloves": {
   baseType: "Soldier Gloves", regex: "\"ier g\"",
   items: [{ id: "1337", name: "Southbound", baseType: "Soldier Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvTm9ydGhib3VuZCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/7b4cbc713d/Northbound.png" }],
 },
 "Two-Toned Boots": {
   baseType: "Two-Toned Boots", regex: "oned",
   items: [{ id: "40114", name: "Beacon of Madness", baseType: "Two-Toned Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9UYW5nbWF6dWFybW91cmJvb3RzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/664521517c/Tangmazuarmourboots.png" }],
 },
 "Callous Mask": {
   baseType: "Callous Mask", regex: "lou",
   items: [{ id: "25117", name: "Eye of Malice", baseType: "Callous Mask", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0V5ZU9mRGVzaXJlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/4218c3cc66/EyeOfDesire.png" }],
 },
 "Lacewood Spirit Shield": {
   baseType: "Lacewood Spirit Shield", regex: "cew",
   items: [{ id: "98335", name: "Manastorm", baseType: "Lacewood Spirit Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01hbmFzdG9ybSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/d816fe3053/Manastorm.png" }],
 },
 "Legion Boots": {
   baseType: "Legion Boots", regex: "\"gion b\"",
   items: [{ id: "554", name: "Gang's Momentum", baseType: "Legion Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9HYW5nc0Jvb3RzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/4443459d14/GangsBoots.png" },{ id: "20758", name: "March of the Legion", baseType: "Legion Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9BdXJhQm9vdHMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/736eee69a4/AuraBoots.png" }],
 },
 "Golden Plate": {
   baseType: "Golden Plate", regex: "\"en p\"",
   items: [{ id: "595", name: "Greed's Embrace", baseType: "Golden Plate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9HcmVlZHNFbWJyYWNlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/0e8984128f/GreedsEmbrace.png" }],
 },
 "Golden Mask": {
   baseType: "Golden Mask", regex: "\"den m\"",
   items: [{ id: "1634", name: "The Three Dragons", baseType: "Golden Mask", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RocmVlRHJhZ29ucyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/50afe0768b/ThreeDragons.png" },{ id: "44081", name: "Willclash", baseType: "Golden Mask", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01pbmRCbG9ja01hc2siLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/aeb4a78ada/MindBlockMask.png" }],
 },
 "Goathide Gloves": {
   baseType: "Goathide Gloves", regex: "\"thide g\"",
   items: [{ id: "643", name: "Hrimsorrow", baseType: "Goathide Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvSHJpbXNvcnJvdyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/bc13b3487c/Hrimsorrow.png" }],
 },
 "Zealot Helmet": {
   baseType: "Zealot Helmet", regex: "\"ot h\"",
   items: [{ id: "722", name: "Kitava's Thirst", baseType: "Zealot Helmet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0tpdGF2YXNUaGlyc3QiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/585034f884/KitavasThirst.png" }],
 },
 "Crusader Plate": {
   baseType: "Crusader Plate", regex: "\"der p\"",
   items: [{ id: "760", name: "Lioneye's Vision", baseType: "Crusader Plate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9MaW9uZXllc0FybW91ciIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/b6e10a9216/LioneyesArmour.png" }],
 },
 "Close Helmet": {
   baseType: "Close Helmet", regex: "ose",
   items: [{ id: "2072", name: "The Baron", baseType: "Close Helmet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1RoZUJhcm9uIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/7a7ba87170/TheBaron.png" }],
 },
 "Sorcerer Gloves": {
   baseType: "Sorcerer Gloves", regex: "\"erer g\"",
   items: [{ id: "2200", name: "Allelopathy", baseType: "Sorcerer Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRW1iYWxtZXJzR2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/62148488f8/EmbalmersGloves.png" }],
 },
 "Nubuck Gloves": {
   baseType: "Nubuck Gloves", regex: "\"ck g\"",
   items: [{ id: "2259", name: "Oskarm", baseType: "Nubuck Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvWmVub0dsb3ZlcyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/a0056936c7/ZenoGloves.png" }],
 },
 "Carnal Mitts": {
   baseType: "Carnal Mitts", regex: "\"l mi\"",
   items: [{ id: "40122", name: "Algor Mortis", baseType: "Carnal Mitts", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvVGFuZ21henVhcm1vdXJnbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/fff14c8039/Tangmazuarmourgloves.png" },{ id: "2193", name: "The Embalmer", baseType: "Carnal Mitts", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQWxsZWxvcGF0aHkiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/bcf128d770/Allelopathy.png" }],
 },
 "Teak Round Shield": {
   baseType: "Teak Round Shield", regex: "teak",
   items: [{ id: "44133", name: "The Ghastly Theatre", baseType: "Teak Round Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1Ntb2tlQW5kTWlycm9ycyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/95eb622489/SmokeAndMirrors.png" }],
 },
 "Eternal Burgonet": {
   baseType: "Eternal Burgonet", regex: "\"nal bu\"",
   items: [{ id: "68765", name: "Usurper's Penance", baseType: "Eternal Burgonet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1VuYnJpZGxlZFJhZ2UiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3d6a6901bb/UnbridledRage.png" }],
 },
 "Silken Vest": {
   baseType: "Silken Vest", regex: "\"en v\"",
   items: [{ id: "98141", name: "Ghostwrithe", baseType: "Silken Vest", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9HaG9zdHdlYXZlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/95d1911033/Ghostweave.png" }],
 },
 "Primal Arrow Quiver": {
   baseType: "Primal Arrow Quiver", regex: "rima",
   items: [{ id: "98210", name: "The Poised Prism", baseType: "Primal Arrow Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9QcmlzbWF0aWNHbGVhbSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/25341c4e59/PrismaticGleam.png" }],
 },
 "Bronzescale Boots": {
   baseType: "Bronzescale Boots", regex: "\"escale b\"",
   items: [{ id: "758", name: "Lioneye's Paws", baseType: "Bronzescale Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9MaW9uZXllc1Bhd3MiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/550a8f59d4/LioneyesPaws.png" }],
 },
 "Aventail Helmet": {
   baseType: "Aventail Helmet", regex: "nta",
   items: [{ id: "816", name: "Mindspiral", baseType: "Aventail Helmet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01pbmRzcGlyYWwiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/e4b2c14ad7/Mindspiral.png" }],
 },
 "Cardinal Round Shield": {
   baseType: "Cardinal Round Shield", regex: "card",
   items: [{ id: "2295", name: "Vix Lunaris", baseType: "Cardinal Round Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleFVuaXF1ZTQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/24175c8ffb/ShieldStrDexUnique4.png" }],
 },
 "Holy Chainmail": {
   baseType: "Holy Chainmail", regex: "oly",
   items: [{ id: "1810", name: "Voll's Protector", baseType: "Holy Chainmail", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9TdHJJbnQzQVVuaXF1ZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/d79c6d5644/StrInt3AUnique.png" }],
 },
 "Bone Armour": {
   baseType: "Bone Armour", regex: "\"ne ar\"",
   items: [{ id: "2260", name: "Bloodbond", baseType: "Bone Armour", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Db21tdW5hbEZsZXNoIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/ad6a787fcf/CommunalFlesh.png" }],
 },
 "Mesh Gloves": {
   baseType: "Mesh Gloves", regex: "\"sh g\"",
   items: [{ id: "22344", name: "Triad Grip", baseType: "Mesh Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvTWluaW9uQ29udmVyc2lvbkdsb3ZlcyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/6b9b027d0f/MinionConversionGloves.png" }],
 },
 "Elegant Ringmail": {
   baseType: "Elegant Ringmail", regex: "\"nt ri\"",
   items: [{ id: "560", name: "Geofri's Sanctuary", baseType: "Elegant Ringmail", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9HZW9mcmlTYW5jdHVhcnkiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/6f94f74244/GeofriSanctuary.png" }],
 },
 "Crusader Chainmail": {
   baseType: "Crusader Chainmail", regex: "\"der c\"",
   items: [{ id: "48", name: "Ambu's Charge", baseType: "Crusader Chainmail", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9TdHJJbnQzQVVuaXF1ZTIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9928614b24/StrInt3AUnique2.png" }],
 },
 "Buckskin Tunic": {
   baseType: "Buckskin Tunic", regex: "\"ckskin tu\"",
   items: [{ id: "107", name: "Ashrend", baseType: "Buckskin Tunic", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Bc2hyZW5kIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/9755e9fe99/Ashrend.png" }],
 },
 "Silk Slippers": {
   baseType: "Silk Slippers", regex: "\"lk s\"",
   items: [{ id: "185", name: "Bones of Ullr", baseType: "Silk Slippers", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9ib290dW5pcXVlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/1dfabe3358/bootunique.png" }],
 },
 "Plate Vest": {
   baseType: "Plate Vest", regex: "\"te v\"",
   items: [{ id: "192", name: "Bramblejack", baseType: "Plate Vest", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9CcmFtYmxlamFjayIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/d2e07d1ed8/Bramblejack.png" }],
 },
 "Strapped Leather": {
   baseType: "Strapped Leather", regex: "\"ed l\"",
   items: [{ id: "201", name: "Briskwrap", baseType: "Strapped Leather", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Ccmlza3dyYXAiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/4a3c7d71e6/Briskwrap.png" }],
 },
 "Cutthroat's Garb": {
   baseType: "Cutthroat's Garb", regex: "tth",
   items: [{ id: "207", name: "Bronn's Lithe", baseType: "Cutthroat's Garb", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Ccm9ubnNsaXRoZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/80b9cf6b0b/Bronnslithe.png" }],
 },
 "War Buckler": {
   baseType: "War Buckler", regex: "\"war b\"",
   items: [{ id: "252", name: "Chalice of Horrors", baseType: "War Buckler", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0NoYWxpY2VvZmhvcnJvcnMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/532f7ec81c/Chaliceofhorrors.png" }],
 },
 "Scholar's Robe": {
   baseType: "Scholar's Robe", regex: "ar'",
   items: [{ id: "282", name: "Cloak of Flame", baseType: "Scholar's Robe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Cb2R5SW50MUF1bmlxdWUiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/41c15c6511/BodyInt1Aunique.png" }],
 },
 "Vine Circlet": {
   baseType: "Vine Circlet", regex: "vine",
   items: [{ id: "331", name: "Crown of Thorns", baseType: "Vine Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0Nyb3dub2ZUaG9ybnMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/23054b0443/CrownofThorns.png" }],
 },
 "Baroque Round Shield": {
   baseType: "Baroque Round Shield", regex: "oq",
   items: [{ id: "344", name: "Daresso's Courage", baseType: "Baroque Round Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0ckRleFVuaXF1ZTEiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/320f1e78fa/ShieldStrDexUnique1.png" }],
 },
 "Deerskin Boots": {
   baseType: "Deerskin Boots", regex: "\"rskin b\"",
   items: [{ id: "403", name: "Deerstalker", baseType: "Deerskin Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c0RleFVuaXF1ZTEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/8d8725b395/BootsDexUnique1.png" }],
 },
 "Gilded Sallet": {
   baseType: "Gilded Sallet", regex: "\"lded s\"",
   items: [{ id: "405", name: "Deidbell", baseType: "Gilded Sallet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0RlaWRiZWxsIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/fd66b0b28f/Deidbell.png" }],
 },
 "Lunaris Circlet": {
   baseType: "Lunaris Circlet", regex: "una",
   items: [{ id: "429", name: "Doedre's Scorn", baseType: "Lunaris Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0RvZWRyZXNTY29ybiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/16c4d034ee/DoedresScorn.png" }],
 },
 "Velvet Gloves": {
   baseType: "Velvet Gloves", regex: "\"vet g\"",
   items: [{ id: "430", name: "Doedre's Tenure", baseType: "Velvet Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRG9lZHJlc1RlbnVyZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/052a57aabd/DoedresTenure.png" }],
 },
 "Goliath Gauntlets": {
   baseType: "Goliath Gauntlets", regex: "\"h ga\"",
   items: [{ id: "486", name: "Empire's Grasp", baseType: "Goliath Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvSGl0aGVyIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/c23bccbc39/Hither.png" }],
 },
 "Iron Hat": {
   baseType: "Iron Hat", regex: "\"ron h\"",
   items: [{ id: "511", name: "Ezomyte Peak", baseType: "Iron Hat", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0V6b215dGVQZWFrIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/058b75e4e0/EzomytePeak.png" }],
 },
 "Tricorne": {
   baseType: "Tricorne", regex: "Tricorne",
   items: [{ id: "515", name: "Fairgraves' Tricorne", baseType: "Tricorne", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0ZhaXJncmF2ZXNUcmljb3JuZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/6a828c8150/FairgravesTricorne.png" }],
 },
 "Wild Leather": {
   baseType: "Wild Leather", regex: "wild",
   items: [{ id: "542", name: "Foxshade", baseType: "Wild Leather", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Gb3hzaGFkZSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/bf15e97218/Foxshade.png" }],
 },
 "Great Crown": {
   baseType: "Great Crown", regex: "\"at c\"",
   items: [{ id: "559", name: "Geofri's Crest", baseType: "Great Crown", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0dlb2ZyaXNDcmVzdCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/4daae52cf5/GeofrisCrest.png" }],
 },
 "Corrugated Buckler": {
   baseType: "Corrugated Buckler", regex: "rru",
   items: [{ id: "594", name: "Great Old One's Ward", baseType: "Corrugated Buckler", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0dyZWF0T2xkT25lc1dhcmQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3c0efbf6be/GreatOldOnesWard.png" }],
 },
 "Soldier Helmet": {
   baseType: "Soldier Helmet", regex: "\"ier h\"",
   items: [{ id: "633", name: "Honourhome", baseType: "Soldier Helmet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hvbm91cmhvbWUiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/11382c25e9/Honourhome.png" }],
 },
 "Sharktooth Arrow Quiver": {
   baseType: "Sharktooth Arrow Quiver", regex: "\"h ar\"",
   items: [{ id: "651", name: "Hyrri's Bite", baseType: "Sharktooth Arrow Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9Icnl5aXNCaXRlIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/91937737c4/HryyisBite.png" }],
 },
 "Latticed Ringmail": {
   baseType: "Latticed Ringmail", regex: "ice",
   items: [{ id: "656", name: "Icetomb", baseType: "Latticed Ringmail", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9JY2V0b21iIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/956a92a3fd/Icetomb.png" }],
 },
 "Supreme Spiked Shield": {
   baseType: "Supreme Spiked Shield", regex: "up",
   items: [{ id: "688", name: "Jaws of Agony", baseType: "Supreme Spiked Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0JlYXJUcmFwU2hpZWxkMiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/4d66593647/BearTrapShield2.png" }],
 },
 "Painted Buckler": {
   baseType: "Painted Buckler", regex: "\"nted b\"",
   items: [{ id: "701", name: "Kaltenhalt", baseType: "Painted Buckler", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleFVuaXF1ZTYiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/543c4a2444/ShieldDexUnique6.png" }],
 },
 "Ivory Spirit Shield": {
   baseType: "Ivory Spirit Shield", regex: "\"y sp\"",
   items: [{ id: "726", name: "Kongming's Stratagem", baseType: "Ivory Spirit Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0tvbmdtaW5nc1N0cmF0YWdlbSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/b7f1e57399/KongmingsStratagem.png" }],
 },
 "Ornate Ringmail": {
   baseType: "Ornate Ringmail", regex: "\"nate r\"",
   items: [{ id: "745", name: "Lightbane Raiment", baseType: "Ornate Ringmail", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9MaWdodGJhbmVyYWlubWVudCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/016757db31/Lightbanerainment.png" }],
 },
 "Iron Gauntlets": {
   baseType: "Iron Gauntlets", regex: "\"on ga\"",
   items: [{ id: "765", name: "Lochtonial Caress", baseType: "Iron Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvTG9jaHRvbmlhbENhcmVzcyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/4609116291/LochtonialCaress.png" }],
 },
 "Iron Mask": {
   baseType: "Iron Mask", regex: "\"ron m\"",
   items: [{ id: "776", name: "Malachai's Simula", baseType: "Iron Mask", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL01hbGFjaGFpc1NpbXVsYSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/8bf83455f4/MalachaisSimula.png" }],
 },
 "Compound Spiked Shield": {
   baseType: "Compound Spiked Shield", regex: "\"und sp\"",
   items: [{ id: "781", name: "Maligaro's Lens", baseType: "Compound Spiked Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01hbGlnYXJvc0xlbnMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/514791cb42/MaligarosLens.png" }],
 },
 "Tarnished Spirit Shield": {
   baseType: "Tarnished Spirit Shield", regex: "tarn",
   items: [{ id: "798", name: "Matua Tupuna", baseType: "Tarnished Spirit Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL01hdHVhdHVwdW5hIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/db1b66f81d/Matuatupuna.png" }],
 },
 "Strapped Boots": {
   baseType: "Strapped Boots", regex: "\"trapped b\"",
   items: [{ id: "867", name: "Nomic's Storm", baseType: "Strapped Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Ob21pY3NTdG9ybSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/33fedc8e3d/NomicsStorm.png" }],
 },
 "Legion Gloves": {
   baseType: "Legion Gloves", regex: "\"ion g\"",
   items: [{ id: "869", name: "Null and Void", baseType: "Legion Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvTnVsbEFuZFZvaWQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/4f851f97fc/NullAndVoid.png" }],
 },
 "Wrapped Mitts": {
   baseType: "Wrapped Mitts", regex: "\"wrapped m\"",
   items: [{ id: "884", name: "Ondar's Clasp", baseType: "Wrapped Mitts", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvT25kYXJzQ2xhc3AiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/029ff8ad2d/OndarsClasp.png" }],
 },
 "Ursine Pelt": {
   baseType: "Ursine Pelt", regex: "urs",
   items: [{ id: "1016", name: "Rat's Nest", baseType: "Ursine Pelt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1JhdHNOZXN0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/857976167e/RatsNest.png" }],
 },
 "Brass Spirit Shield": {
   baseType: "Brass Spirit Shield", regex: "\"ss sp\"",
   items: [{ id: "1110", name: "Sentari's Answer", baseType: "Brass Spirit Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NhbnRhcmlzQW5zd2VyIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/f4438d618f/SantarisAnswer.png" }],
 },
 "Chain Gloves": {
   baseType: "Chain Gloves", regex: "\"ain g\"",
   items: [{ id: "1118", name: "Shackles of the Wretched", baseType: "Chain Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvUmVjYWxsaW5ndGhlV3JldGNoZWQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/faf70b1bf0/RecallingtheWretched.png" }],
 },
 "Clasped Mitts": {
   baseType: "Clasped Mitts", regex: "\"sped m\"",
   items: [{ id: "21647", name: "Aukuna's Will", baseType: "Clasped Mitts", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvQXVrdW5hc1dpbGwiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/b3a94fe874/AukunasWill.png" },{ id: "1119", name: "Shadows and Dust", baseType: "Clasped Mitts", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU2hhZG93c0FuZER1c3QiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/80cb67dfe9/ShadowsAndDust.png" }],
 },
 "Scholar Boots": {
   baseType: "Scholar Boots", regex: "\"lar b\"",
   items: [{ id: "1264", name: "Shavronne's Pace", baseType: "Scholar Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TaGF2cm9ubmVzUGFjZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/065a61276a/ShavronnesPace.png" }],
 },
 "Secutor Helm": {
   baseType: "Secutor Helm", regex: "sec",
   items: [{ id: "1318", name: "Skullhead", baseType: "Secutor Helm", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1NrdWxsaGVhZCIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/55adeb7e35/Skullhead.png" }],
 },
 "Assassin's Mitts": {
   baseType: "Assassin's Mitts", regex: "\"'s m\"",
   items: [{ id: "1325", name: "Snakebite", baseType: "Assassin's Mitts", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvZnJlbnp5Z2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/2d25853f41/frenzygloves.png" }],
 },
 "Copper Plate": {
   baseType: "Copper Plate", regex: "\"per pl\"",
   items: [{ id: "1328", name: "Solaris Lorica", baseType: "Copper Plate", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy90b3JuZmxlc2hvZmdvZHMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/420988ec91/tornfleshofgods.png" }],
 },
 "Clasped Boots": {
   baseType: "Clasped Boots", regex: "\"sped b\"",
   items: [{ id: "1382", name: "Sundance", baseType: "Clasped Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TdW5kYW5jZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/b3a611197c/Sundance.png" }],
 },
 "Dragonscale Gauntlets": {
   baseType: "Dragonscale Gauntlets", regex: "\"gonscale g\"",
   items: [{ id: "1383", name: "Surgebinders", baseType: "Dragonscale Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU3VyZ2VCaW5kZXJzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/c0b8d5494e/SurgeBinders.png" }],
 },
 "Vaal Regalia": {
   baseType: "Vaal Regalia", regex: "\"l re\"",
   items: [{ id: "1426", name: "The Beast Fur Shawl", baseType: "Vaal Regalia", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9CZWFzdEZ1clNoYXdsIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/f2a30a7f0c/BeastFurShawl.png" }],
 },
 "Studded Round Shield": {
   baseType: "Studded Round Shield", regex: "\"ded r\"",
   items: [{ id: "1474", name: "The Deep One's Hide", baseType: "Studded Round Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0NoaXRpbmh1bGwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/90921c2a19/Chitinhull.png" }],
 },
 "Carnal Armour": {
   baseType: "Carnal Armour", regex: "\"l arm\"",
   items: [{ id: "1585", name: "The Restless Ward", baseType: "Carnal Armour", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaGVSZXN0bGVzc1dhcmQiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/2508832517/TheRestlessWard.png" }],
 },
 "Vaal Buckler": {
   baseType: "Vaal Buckler", regex: "\"aal bu\"",
   items: [{ id: "1690", name: "Thousand Teeth Temu", baseType: "Vaal Buckler", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZERleFVuaXF1ZTEiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/c466a1eb2a/ShieldDexUnique1.png" }],
 },
 "Shagreen Boots": {
   baseType: "Shagreen Boots", regex: "\"een b\"",
   items: [{ id: "1692", name: "Three-step Assault", baseType: "Shagreen Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9UaHJlZVN0ZXBBc3NhdWx0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/56daf8a36a/ThreeStepAssault.png" }],
 },
 "Reinforced Tower Shield": {
   baseType: "Reinforced Tower Shield", regex: "\"ced t\"",
   items: [{ id: "1698", name: "Titucius' Span", baseType: "Reinforced Tower Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0clVuaXF1ZTciLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/8dd443976b/ShieldStrUnique7.png" }],
 },
 "Cedar Tower Shield": {
   baseType: "Cedar Tower Shield", regex: "eda",
   items: [{ id: "1716", name: "Trolltimber Spire", baseType: "Cedar Tower Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1NoaWVsZFN0clVuaXF1ZTMiLCJ3IjoyLCJoIjo0LCJzY2FsZSI6MX1d/062f3d11c8/ShieldStrUnique3.png" }],
 },
 "Laminated Kite Shield": {
   baseType: "Laminated Kite Shield", regex: "lami",
   items: [{ id: "1777", name: "Victario's Charity", baseType: "Laminated Kite Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1ZpY3Rhcm9zQ2hhcml0eSIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/baf0e57fb2/VictarosCharity.png" }],
 },
 "Conjurer Gloves": {
   baseType: "Conjurer Gloves", regex: "\"urer g\"",
   items: [{ id: "1796", name: "Voidbringer", baseType: "Conjurer Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvSGVsbGJyaW5nZXIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/d82eb1cc3f/Hellbringer.png" }],
 },
 "Mesh Boots": {
   baseType: "Mesh Boots", regex: "\"esh b\"",
   items: [{ id: "1833", name: "Wake of Destruction", baseType: "Mesh Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9XYWtlT2ZEZXN0cnVjdGlvbiIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/5964f215f5/WakeOfDestruction.png" }],
 },
 "Wool Shoes": {
   baseType: "Wool Shoes", regex: "oe",
   items: [{ id: "1837", name: "Wanderlust", baseType: "Wool Shoes", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9XYW5kZXJsdXN0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/c83c1c3bdc/Wanderlust.png" }],
 },
 "Wyrmscale Gauntlets": {
   baseType: "Wyrmscale Gauntlets", regex: "\"mscale g\"",
   items: [{ id: "1896", name: "Wyrmsign", baseType: "Wyrmscale Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvV3lybXNpZ25HbG92ZXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/fe7ef54102/WyrmsignGloves.png" }],
 },
 "Colossal Tower Shield": {
   baseType: "Colossal Tower Shield", regex: "ossa",
   items: [{ id: "2081", name: "Ahn's Heritage", baseType: "Colossal Tower Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0FobnNIZXJpdGFnZSIsInciOjIsImgiOjQsInNjYWxlIjoxfV0/5a4ca9d54a/AhnsHeritage.png" }],
 },
 "Sentinel Jacket": {
   baseType: "Sentinel Jacket", regex: "sen",
   items: [{ id: "2196", name: "Dendrobate", baseType: "Sentinel Jacket", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9EZW5kcm9iYXRpcyIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/7c2d6dd5ce/Dendrobatis.png" }],
 },
 "Destroyer Regalia": {
   baseType: "Destroyer Regalia", regex: "tro",
   items: [{ id: "2199", name: "The Coming Calamity", baseType: "Destroyer Regalia", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9TcGlyaXRIYXJuZXNzIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/69c0a6780d/SpiritHarness.png" }],
 },
 "Bone Circlet": {
   baseType: "Bone Circlet", regex: "\"one c\"",
   items: [{ id: "2253", name: "Wraithlord", baseType: "Bone Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1dyYWl0aGxvcmQiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/090d3d6bb3/Wraithlord.png" }],
 },
 "Bronze Gauntlets": {
   baseType: "Bronze Gauntlets", regex: "\"ze g\"",
   items: [{ id: "2254", name: "Giantsbane", baseType: "Bronze Gauntlets", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvRGVhdGhmb3JnZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/88c0b6908a/Deathforge.png" }],
 },
 "Samite Gloves": {
   baseType: "Samite Gloves", regex: "\"ite g\"",
   items: [{ id: "2257", name: "Kalisa's Grace", baseType: "Samite Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvS2FsaXNhc0dyYWNlIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/b165e39eff/KalisasGrace.png" }],
 },
 "Plated Greaves": {
   baseType: "Plated Greaves", regex: "\"ted gr\"",
   items: [{ id: "2261", name: "Stormcharger", baseType: "Plated Greaves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9TdG9ybWNoYXJnZXIiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/4f1fe9a640/Stormcharger.png" }],
 },
 "Mirrored Spiked Shield": {
   baseType: "Mirrored Spiked Shield", regex: "mir",
   items: [{ id: "2299", name: "Leper's Alms", baseType: "Mirrored Spiked Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0xlcGVyc0FsbXMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/3f9c2a1cec/LepersAlms.png" }],
 },
 "Tribal Circlet": {
   baseType: "Tribal Circlet", regex: "\"al ci\"",
   items: [{ id: "4855", name: "Mark of the Red Covenant", baseType: "Tribal Circlet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1BoYW50YXNtbGFGbGFtZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/0d222d092f/PhantasmlaFlame.png" }],
 },
 "Chiming Spirit Shield": {
   baseType: "Chiming Spirit Shield", regex: "him",
   items: [{ id: "7359", name: "The Eternal Apple", baseType: "Chiming Spirit Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1RoZUV0ZXJuYWxBcHBsZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/0f1033587d/TheEternalApple.png" }],
 },
 "Plague Mask": {
   baseType: "Plague Mask", regex: "lag",
   items: [{ id: "7366", name: "Curtain Call", baseType: "Plague Mask", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0N1cnRhaW5DYWxsIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/5f3eb95031/CurtainCall.png" }],
 },
 "Antique Greaves": {
   baseType: "Antique Greaves", regex: "\"ue gr\"",
   items: [{ id: "22223", name: "Torchoak Step", baseType: "Antique Greaves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy84NTQ4MyIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/5d406f4285/85483.png" }],
 },
 "Shagreen Gloves": {
   baseType: "Shagreen Gloves", regex: "\"een g\"",
   items: [{ id: "25040", name: "Painseeker", baseType: "Shagreen Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvR3JpcE9mVW5tYWtpbmciLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/9a6348dc81/GripOfUnmaking.png" }],
 },
 "Eelskin Gloves": {
   baseType: "Eelskin Gloves", regex: "\"lskin g\"",
   items: [{ id: "42291", name: "Great Old One's Tentacles", baseType: "Eelskin Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvSW1wYWxlR2xvdmVzIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/37dd8738f8/ImpaleGloves.png" }],
 },
 "Slink Gloves": {
   baseType: "Slink Gloves", regex: "\"nk g\"",
   items: [{ id: "44128", name: "Mercenary's Lot", baseType: "Slink Gloves", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvU3RyaWtlVHJ1ZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/4a73ba7bf5/StrikeTrue.png" }],
 },
 "Samnite Helmet": {
   baseType: "Samnite Helmet", regex: "mn",
   items: [{ id: "53417", name: "Hrimnor's Resolve", baseType: "Samnite Helmet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hyaW1ub3JzUmVzb2x2ZSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/cb3ab90132/HrimnorsResolve.png" }],
 },
 "Blazing Arrow Quiver": {
   baseType: "Blazing Arrow Quiver", regex: "zi",
   items: [{ id: "93014", name: "Blackgleam", baseType: "Blazing Arrow Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9RdWl2ZXJVbmlxdWUxIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/797ce777ed/QuiverUnique1.png" }],
 },
 "Feathered Arrow Quiver": {
   baseType: "Feathered Arrow Quiver", regex: "here",
   items: [{ id: "93027", name: "Asphyxia's Wrath", baseType: "Feathered Arrow Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9Bc3BoeXhpYXNXcmF0aCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/e33bd46903/AsphyxiasWrath.png" },{ id: "93023", name: "Saemus' Gift", baseType: "Feathered Arrow Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9TZWFtdXNHaWZ0IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/7da61eeb8e/SeamusGift.png" }],
 },
 "Heavy Arrow Quiver": {
   baseType: "Heavy Arrow Quiver", regex: "\"y a\"",
   items: [{ id: "93150", name: "Scorpion's Call", baseType: "Heavy Arrow Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9CbG9vZFNhbmRRdWl2ZXIiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/57b1387b43/BloodSandQuiver.png" }],
 },
 "Vile Arrow Quiver": {
   baseType: "Vile Arrow Quiver", regex: "\"ile a\"",
   items: [{ id: "93178", name: "Maloney's Nightfall", baseType: "Vile Arrow Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9NYWxvbmV5c05pZ2h0ZmFsbCIsInciOjIsImgiOjMsInNjYWxlIjoxfV0/aad4bc5b10/MaloneysNightfall.png" }],
 },
 "Barbute Helmet": {
   baseType: "Barbute Helmet", regex: "rbu",
   items: [{ id: "98120", name: "Thrillsteel", baseType: "Barbute Helmet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL0hlbG1vZldhciIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/887e20115c/HelmofWar.png" }],
 },
 "Wolf Pelt": {
   baseType: "Wolf Pelt", regex: "\"lf p\"",
   items: [{ id: "98149", name: "Elevore", baseType: "Wolf Pelt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1dpbGRjYWxsIiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/bf0a462a3a/Wildcall.png" }],
 },
 "Sun Leather": {
   baseType: "Sun Leather", regex: "\"un l\"",
   items: [{ id: "98216", name: "Briskwrap", baseType: "Sun Leather", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9Ccmlza3dyYXAiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/4a3c7d71e6/Briskwrap.png" }],
 },
 "Ancient Spirit Shield": {
   baseType: "Ancient Spirit Shield", regex: "\"nt sp\"",
   items: [{ id: "98238", name: "Kongming's Stratagem", baseType: "Ancient Spirit Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL0tvbmdtaW5nc1N0cmF0YWdlbSIsInciOjIsImgiOjIsInNjYWxlIjoxfV0/b7f1e57399/KongmingsStratagem.png" }],
 },
 "Great Helmet": {
   baseType: "Great Helmet", regex: "\"at h\"",
   items: [{ id: "1769", name: "Veil of the Night", baseType: "Great Helmet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9IZWxtZXRzL1ZlaWxPZlRoZU5pZ2h0IiwidyI6MiwiaCI6Miwic2NhbGUiOjF9XQ/809ee0994f/VeilOfTheNight.png" }],
 },
 "Conquest Chainmail": {
   baseType: "Conquest Chainmail", regex: "nq",
   items: [{ id: "716", name: "Kingsguard", baseType: "Conquest Chainmail", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9LaW5nc2d1YXJkIiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/28d6e7ff11/Kingsguard.png" }],
 },
 "Simple Robe": {
   baseType: "Simple Robe", regex: "sim",
   items: [{ id: "1687", name: "Thousand Ribbons", baseType: "Simple Robe", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb2R5QXJtb3Vycy9UaG91c2FuZHJpYmJvbnMiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/65a99640e9/Thousandribbons.png" }],
 },
 "Ironscale Boots": {
   baseType: "Ironscale Boots", regex: "\"ronscale b\"",
   items: [{ id: "458", name: "Dusktoe", baseType: "Ironscale Boots", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9Cb290cy9Cb290c1N0ckRleFVuaXF1ZTMiLCJ3IjoyLCJoIjoyLCJzY2FsZSI6MX1d/39b842cf85/BootsStrDexUnique3.png" }],
 },
 "Serrated Arrow Quiver": {
   baseType: "Serrated Arrow Quiver", regex: "\"ted a\"",
   items: [{ id: "322", name: "Craghead", baseType: "Serrated Arrow Quiver", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUXVpdmVycy9RdWl2ZXJVbmlxdWU0IiwidyI6MiwiaCI6Mywic2NhbGUiOjF9XQ/dfccecb2ae/QuiverUnique4.png" }],
 },
 "Rotted Round Shield": {
   baseType: "Rotted Round Shield", regex: "ott",
   items: [{ id: "1872", name: "Wheel of the Stormsail", baseType: "Rotted Round Shield", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9TaGllbGRzL1doZWVsb2Z0aGVzdG9ybXNhaWwiLCJ3IjoyLCJoIjozLCJzY2FsZSI6MX1d/9ff4153db8/Wheelofthestormsail.png" }],
 },
 "Onyx Amulet": {
   baseType: "Onyx Amulet", regex: "yx",
   items: [{ id: "113", name: "Astramentis", baseType: "Onyx Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQzNiIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/95da0d04a4/Amulet36.png" },{ id: "227", name: "Carnage Heart", baseType: "Onyx Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQzNyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/451ac32a56/Amulet37.png" },{ id: "2114", name: "Eye of Chayula", baseType: "Onyx Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQ3VW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsInJlbGljIjowfV0/c2ba353041/Amulet7Unique.png" },{ id: "7443", name: "Hinekora's Sight", baseType: "Onyx Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9IaW5la29yYXNTaWdodCIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWxpYyI6MH1d/4b7a3dec42/HinekorasSight.png" },{ id: "2311", name: "Yoke of Suffering", baseType: "Onyx Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9Zb2tlT2ZTdWZmZXJpbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/80cc716213/YokeOfSuffering.png" }],
 },
 "Amethyst Ring": {
   baseType: "Amethyst Ring", regex: "thy",
   items: [{ id: "7455", name: "Death Rush", baseType: "Amethyst Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQW1ldGh5c3RSaW5nVW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsInJlbGljIjowfV0/9255d1261d/AmethystRingUnique.png" },{ id: "819", name: "Ming's Heart", baseType: "Amethyst Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTWluZ3NIZWFydCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/7395d98bba/MingsHeart.png" }],
 },
 "Sapphire Ring": {
   baseType: "Sapphire Ring", regex: "sap",
   items: [{ id: "60204", name: "Dream Fragments", baseType: "Sapphire Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzZVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/11a65465f0/Ring6Unique.png" },{ id: "984", name: "Pyre", baseType: "Sapphire Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQ2hlcnVmZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/08c38718a4/Cherufe.png" },{ id: "1326", name: "Snakepit", baseType: "Sapphire Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU2VycGVudHNlZWQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/634a5c8913/Serpentseed.png" },{ id: "7529", name: "Tasalio's Sign", baseType: "Sapphire Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGFzYWxpb3NTaWduIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsInJlbGljIjowfV0/67202d09c8/TasaliosSign.png" }],
 },
 "Unset Ring": {
   baseType: "Unset Ring", regex: "uns",
   items: [{ id: "497", name: "Essence Worm", baseType: "Unset Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvRXNzZW5jZVdvcm0iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/4455cc009b/EssenceWorm.png" },{ id: "774", name: "Malachai's Artifice", baseType: "Unset Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTWFsYWNoYWlzQXJ0aWZpY2UiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/dfbb52ebfe/MalachaisArtifice.png" },{ id: "60166", name: "Mark of Submission", baseType: "Unset Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmVkQnJhbmRSaW5nIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsInJlbGljIjowfV0/c971962e43/RedBrandRing.png" },{ id: "40030", name: "Profane Proxy", baseType: "Unset Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU2tpdHRlcmJvdFJpbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/20b7d215dd/SkitterbotRing.png" },{ id: "2312", name: "The Hungry Loop", baseType: "Unset Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGhlSHVuZ3J5TG9vcCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/2225980dc6/TheHungryLoop.png" },{ id: "7549", name: "Voideye", baseType: "Unset Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvdW51c2VkNCIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWxpYyI6MH1d/a05fb7a75c/unused4.png" }],
 },
 "Diamond Ring": {
   baseType: "Diamond Ring", regex: "iam",
   items: [{ id: "7567", name: "Gifts from Above", baseType: "Diamond Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvRGlhbW9uZFJpbmdVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/5a4a4e4cb2/DiamondRingUnique.png" },{ id: "1067", name: "Romira's Banquet", baseType: "Diamond Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUm9taXJhc0JhbnF1ZXQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/aa054b3ccd/RomirasBanquet.png" }],
 },
 "Heavy Belt": {
   baseType: "Heavy Belt", regex: "\"vy b\"",
   items: [{ id: "152", name: "Belt of the Deceiver", baseType: "Heavy Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdE9mVGhlRGVjaWV2ZXIiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/914fb37e8c/BeltOfTheDeciever.png" },{ id: "2080", name: "Bisco's Leash", baseType: "Heavy Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmlzY29zTGVhc2giLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/87b17c98e7/BiscosLeash.png" },{ id: "460", name: "Dyadian Dawn", baseType: "Heavy Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvTW90aGVyRHlhZHVzIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/ca299e5015/MotherDyadus.png" },{ id: "71072", name: "Mageblood", baseType: "Heavy Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSW5qZWN0b3JCZWx0IiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/21ec0269de/InjectorBelt.png" },{ id: "2095", name: "Meginord's Girdle", baseType: "Heavy Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdDdVbmlxdWUiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/6cbbc9e08f/Belt7Unique.png" },{ id: "22287", name: "Siegebreaker", baseType: "Heavy Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvODU0ODIiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/ee893f3cb8/85482.png" }],
 },
 "Cloth Belt": {
   baseType: "Cloth Belt", regex: "clot",
   items: [{ id: "2100", name: "Perandus Blazon", baseType: "Cloth Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQnVja2xlZEJlbHRVbmlxdWUyIiwidyI6MiwiaCI6MSwic2NhbGUiOjEsInJlbGljIjowfV0/45955da421/BuckledBeltUnique2.png" },{ id: "60249", name: "Soul Tether", baseType: "Cloth Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvU291bFRldGhlciIsInciOjIsImgiOjEsInNjYWxlIjoxLCJyZWxpYyI6MH1d/3caadd2ac5/SoulTether.png" },{ id: "60078", name: "Soulthirst", baseType: "Cloth Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvU291bHRoaXJzdCIsInciOjIsImgiOjEsInNjYWxlIjoxLCJyZWxpYyI6MH1d/04bbff7ca9/Soulthirst.png" },{ id: "1381", name: "Sunblast", baseType: "Cloth Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdDgiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/c50a807f09/Belt8.png" },{ id: "44073", name: "The Druggery", baseType: "Cloth Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvVGhlRHJ1Z2dlcnkiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/136b59f839/TheDruggery.png" }],
 },
 "Clutching Talisman": {
   baseType: "Clutching Talisman", regex: "hin",
   items: [{ id: "7552", name: "Blightwell", baseType: "Clutching Talisman", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UYWludGVkU3ByaW5ncyIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWxpYyI6MH1d/174f453533/TaintedSprings.png" }],
 },
 "Moonstone Ring": {
   baseType: "Moonstone Ring", regex: "nst",
   items: [{ id: "610", name: "Heartbound Loop", baseType: "Moonstone Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvSGVhcnRib3VuZFJpbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/c214aff507/HeartboundRing.png" },{ id: "2123", name: "Shavronne's Revelation", baseType: "Moonstone Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTW9vbnN0b25lUmluZ1VuaXF1ZSIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWxpYyI6MH1d/fc8751d72f/MoonstoneRingUnique.png" },{ id: "60202", name: "Timeclasp", baseType: "Moonstone Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGltZWNsYXNwIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsInJlbGljIjowfV0/6a2a7a8a55/Timeclasp.png" },{ id: "1764", name: "Valyrium", baseType: "Moonstone Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVmFseXJpdW0iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/dd9261042f/Valyrium.png" }],
 },
 "Two-Stone Ring": {
   baseType: "Two-Stone Ring", regex: "\"-s\"",
   items: [{ id: "153", name: "Berek's Grip", baseType: "Two-Stone Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmVyZWtzR3JpcCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/7abb06d839/BereksGrip.png" },{ id: "154", name: "Berek's Pass", baseType: "Two-Stone Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmVyZWtzUGFzcyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/efb7743eeb/BereksPass.png" },{ id: "7512", name: "Berek's Respite", baseType: "Two-Stone Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmVyZWtzUmVzcGl0ZSIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWxpYyI6MH1d/233688935f/BereksRespite.png" },{ id: "216", name: "Call of the Brotherhood", baseType: "Two-Stone Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQnJvdGhlcmhvb2QiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/956d645be0/Brotherhood.png" },{ id: "1058", name: "Rigwald's Crest", baseType: "Two-Stone Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmlnd2FsZHNDcmVzdCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/ba5e5c58a3/RigwaldsCrest.png" }],
 },
 "Rotfeather Talisman": {
   baseType: "Rotfeather Talisman", regex: "tf",
   items: [{ id: "17999", name: "Natural Hierarchy", baseType: "Rotfeather Talisman", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UYWxpc21hblVuaXF1ZTIiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/eac8913796/TalismanUnique2.png" }],
 },
 "Turquoise Amulet": {
   baseType: "Turquoise Amulet", regex: "rq",
   items: [{ id: "22499", name: "Badge of the Brotherhood", baseType: "Turquoise Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9Bc3Nhc3NpblVuaXF1ZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/3616219d7d/AssassinUnique.png" },{ id: "2190", name: "Maligaro's Cruelty", baseType: "Turquoise Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQxNSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/f1b938bbd1/Amulet15.png" },{ id: "1747", name: "Ungil's Harmony", baseType: "Turquoise Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9VbmdpbHNIYXJtb255IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/dfdaf30e66/UngilsHarmony.png" },{ id: "7481", name: "Victario's Acuity", baseType: "Turquoise Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UdXJxdW9pc2VBbXVsZXRVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/c7bfe1003b/TurquoiseAmuletUnique.png" },{ id: "1839", name: "Warped Timepiece", baseType: "Turquoise Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9XYXJwZWRUaW1lcGllY2UiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/abee67f17d/WarpedTimepiece.png" }],
 },
 "Greatwolf Talisman": {
   baseType: "Greatwolf Talisman", regex: "atw",
   items: [{ id: "7388", name: "Eyes of the Greatwolf", baseType: "Greatwolf Talisman", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9SaWd3YWxkc1RhbGlzbWFuIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsInJlbGljIjowfV0/e409200ab6/RigwaldsTalisman.png" }],
 },
 "Rustic Sash": {
   baseType: "Rustic Sash", regex: "ash",
   items: [{ id: "7557", name: "Faminebind", baseType: "Rustic Sash", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvRmFtaW5lYmluZCIsInciOjIsImgiOjEsInNjYWxlIjoxLCJyZWxpYyI6MH1d/1adfbcee20/Faminebind.png" },{ id: "520", name: "Feastbind", baseType: "Rustic Sash", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvRmVhc3RiaW5kIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/f5d1f232d6/Feastbind.png" },{ id: "976", name: "Prismweave", baseType: "Rustic Sash", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvUHJpc213ZWF2ZSIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/822582fe24/Prismweave.png" }],
 },
 "Leather Belt": {
   baseType: "Leather Belt", regex: "\"r be\"",
   items: [{ id: "5973", name: "Gluttony", baseType: "Leather Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvR2x1dHRvbnkiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/850a3a646d/Gluttony.png" },{ id: "607", name: "Headhunter", baseType: "Leather Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSGVhZGh1bnRlciIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/e9542ec6ee/Headhunter.png" },{ id: "660", name: "Immortal Flesh", baseType: "Leather Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvSW1tb3J0YWxGbGVzaCIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/fceb1b8f8c/ImmortalFlesh.png" },{ id: "24989", name: "Leash of Oblation", baseType: "Leather Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvTGVhc2hPZk9ibGF0aW9uIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/f865c7f643/LeashOfOblation.png" },{ id: "43979", name: "Pyroshock Clasp", baseType: "Leather Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvUHlyb3Nob2NrQ2xhc3AiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/42b1bcc3c8/PyroshockClasp.png" },{ id: "7496", name: "Umbilicus Immortalis", baseType: "Leather Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvVW1iaWxpY3VzSW1tb3J0YWxpcyIsInciOjIsImgiOjEsInNjYWxlIjoxLCJyZWxpYyI6MH1d/3b148562df/UmbilicusImmortalis.png" },{ id: "1895", name: "Wurm's Molt", baseType: "Leather Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmVsdDZVbmlxdWUiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/3307668b96/Belt6Unique.png" }],
 },
 "Ruby Ring": {
   baseType: "Ruby Ring", regex: "rub",
   items: [{ id: "479", name: "Emberwake", baseType: "Ruby Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzEwIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/55c8711fd7/Ring10.png" },{ id: "822", name: "Mokou's Embrace", baseType: "Ruby Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTW9rb3VzRW1icmFjZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/b3bd556d83/MokousEmbrace.png" },{ id: "7560", name: "Ngamahu's Sign", baseType: "Ruby Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTmdhbWFodXNTaWduIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsInJlbGljIjowfV0/c68e8070b8/NgamahusSign.png" }],
 },
 "Chain Belt": {
   baseType: "Chain Belt", regex: "\"n be\"",
   items: [{ id: "7407", name: "Ascent From Flesh", baseType: "Chain Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvVHVybmNvYXRzZm9ydHVuZSIsInciOjIsImgiOjEsInNjYWxlIjoxLCJyZWxpYyI6MH1d/19c824c0fb/Turncoatsfortune.png" },{ id: "139", name: "Bated Breath", baseType: "Chain Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQmF0ZWRCcmVhdGgiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/0a8cc4529f/BatedBreath.png" },{ id: "782", name: "Maligaro's Restraint", baseType: "Chain Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvTWFsaWdhcm9zUmVzdHJhaW50IiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/17a500cb6f/MaligarosRestraint.png" }],
 },
 "Amber Amulet": {
   baseType: "Amber Amulet", regex: "ambe",
   items: [{ id: "2122", name: "The Anvil", baseType: "Amber Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbnZpbCIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWxpYyI6MH1d/254833af42/Anvil.png" }],
 },
 "Prismatic Ring": {
   baseType: "Prismatic Ring", regex: "pris",
   items: [{ id: "766", name: "Lori's Lantern", baseType: "Prismatic Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTG9yaXNMYW50ZXJuIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/7abe3ca54f/LorisLantern.png" },{ id: "2098", name: "Thief's Torment", baseType: "Prismatic Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGhpZWZzVG9ybWVudCIsInciOjEsImgiOjEsInNjYWxlIjoxLCJyZWxpYyI6MH1d/4fd6b717d9/ThiefsTorment.png" }],
 },
 "Paua Amulet": {
   baseType: "Paua Amulet", regex: "\"a a\"",
   items: [{ id: "60218", name: "Atziri's Foible", baseType: "Paua Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9RdWlkIiwidyI6MSwiaCI6MSwic2NhbGUiOjEsInJlbGljIjowfV0/60cdc3a244/Quid.png" },{ id: "1304", name: "Sidhebreath", baseType: "Paua Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQxVW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/2a0f1c86cc/Amulet1Unique.png" }],
 },
 "Coral Ring": {
   baseType: "Coral Ring", regex: "\"ral r\"",
   items: [{ id: "2102", name: "Kaom's Sign", baseType: "Coral Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzJVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MSwicmVsaWMiOjB9XQ/7816f5ecc7/Ring2Unique.png" },{ id: "1303", name: "Sibyl's Lament", baseType: "Coral Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU2lieWxzTGFtZW50IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/73ccf7d7c4/SibylsLament.png" }],
 },
 "Studded Belt": {
   baseType: "Studded Belt", regex: "\"ed be\"",
   items: [{ id: "2078", name: "Ryslatha's Coil", baseType: "Studded Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvUnl1c2xhdGhhc0NsdXRjaGVzIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/5b990decd3/RyuslathasClutches.png" },{ id: "1551", name: "The Magnate", baseType: "Studded Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQnVja2xlZEJlbHRVbmlxdWUiLCJ3IjoyLCJoIjoxLCJzY2FsZSI6MX1d/10d87b7baf/BuckledBeltUnique.png" }],
 },
 "Coral Amulet": {
   baseType: "Coral Amulet", regex: "\"al am\"",
   items: [{ id: "76", name: "Araku Tiki", baseType: "Coral Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQyVW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/6468b95d6b/Amulet2Unique.png" },{ id: "177", name: "Bloodgrip", baseType: "Coral Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9CbG9vZEFtdWxldCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/546826e52b/BloodAmulet.png" },{ id: "21576", name: "Tavukai", baseType: "Coral Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UYXZ1a2FpIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/86cc756de2/Tavukai.png" },{ id: "7378", name: "The Primordial Chain", baseType: "Coral Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UaGVQcmltb3JkaWFsQ2hhaW4iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/cd566defdb/ThePrimordialChain.png" }],
 },
 "Gold Amulet": {
   baseType: "Gold Amulet", regex: "\"d am\"",
   items: [{ id: "2077", name: "Bisco's Collar", baseType: "Gold Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9CaXNjb3NDb2xsYXIiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/8aa730c40e/BiscosCollar.png" },{ id: "7373", name: "Perquil's Toe", baseType: "Gold Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9QZXJxdWlsc1RvZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/7509c4517f/PerquilsToe.png" },{ id: "1422", name: "The Ascetic", baseType: "Gold Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQxMyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/8dd083062d/Amulet13.png" },{ id: "1528", name: "The Ignomon", baseType: "Gold Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQ2VW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/41a964dea4/Amulet6Unique.png" },{ id: "1890", name: "Winterheart", baseType: "Gold Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9XaW50ZXJIZWFydEFMVCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/ff8c8c67f2/WinterHeartALT.png" }],
 },
 "Gold Ring": {
   baseType: "Gold Ring", regex: "\"old r\"",
   items: [{ id: "65", name: "Andvarius", baseType: "Gold Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzRVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/eea4645cf2/Ring4Unique.png" },{ id: "44064", name: "The Highwayman", baseType: "Gold Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmFuZGl0UmluZyIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/e08cd25657/BanditRing.png" },{ id: "1770", name: "Ventor's Gamble", baseType: "Gold Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvRGllT2ZEZXN0aW55IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/1470dfcdce/DieOfDestiny.png" }],
 },
 "Agate Amulet": {
   baseType: "Agate Amulet", regex: "agat",
   items: [{ id: "506", name: "Extractor Mentis", baseType: "Agate Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9FeHRyYWN0b3JNZW50aXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/af5684bd74/ExtractorMentis.png" },{ id: "1259", name: "Shaper's Seed", baseType: "Agate Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TaGFwZXJzU2VlZCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/99265d5594/ShapersSeed.png" },{ id: "1424", name: "The Aylardex", baseType: "Agate Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9YZWRyYWx5YXMiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/d9ae7f380f/Xedralyas.png" },{ id: "1809", name: "Voll's Devotion", baseType: "Agate Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BZ2F0ZUFtdWxldFVuaXF1ZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/a67e002c89/AgateAmuletUnique.png" }],
 },
 "Paua Ring": {
   baseType: "Paua Ring", regex: "\"a r\"",
   items: [{ id: "426", name: "Doedre's Damning", baseType: "Paua Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzNVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/d06b386d73/Ring3Unique.png" },{ id: "925", name: "Perandus Signet", baseType: "Paua Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTGFkeVJpbmciLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/d696be5b25/LadyRing.png" },{ id: "965", name: "Praxis", baseType: "Paua Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUHJheGlzIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/5098474fb7/Praxis.png" }],
 },
 "Blue Pearl Amulet": {
   baseType: "Blue Pearl Amulet", regex: "lue",
   items: [{ id: "2300", name: "Gloomfang", baseType: "Blue Pearl Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TaGFkb3dSYXkiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/9c05fb0b03/ShadowRay.png" }],
 },
 "Lapis Amulet": {
   baseType: "Lapis Amulet", regex: "lap",
   items: [{ id: "100487", name: "Doedre's Tongue", baseType: "Lapis Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9Eb2VkcmVzVG9uZ3VlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/434403db05/DoedresTongue.png" },{ id: "795", name: "Marylene's Fallacy", baseType: "Lapis Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9NYXJ5bGVuZXNGYWxsYWN5IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/1665e40d51/MarylenesFallacy.png" },{ id: "1367", name: "Stone of Lazhwar", baseType: "Lapis Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQ1VW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/c7c2e9bfcf/Amulet5Unique.png" },{ id: "1395", name: "Tear of Purity", baseType: "Lapis Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9UZWFyT2ZQdXJpdHkiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/8a2e6d3c61/TearOfPurity.png" },{ id: "43996", name: "The Ephemeral Bond", baseType: "Lapis Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9DaGFyZ2UgQW1wbGlmaWVyIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/a285d4c77a/Charge%20Amplifier.png" }],
 },
 "Citrine Amulet": {
   baseType: "Citrine Amulet", regex: "itr",
   items: [{ id: "349", name: "Daresso's Salute", baseType: "Citrine Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9DaXRyaW5lQW11bGV0VW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/ea232d0123/CitrineAmuletUnique.png" },{ id: "508", name: "Eye of Innocence", baseType: "Citrine Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9FeWVPZklubm9jZW5jZSIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/9544014b69/EyeOfInnocence.png" },{ id: "42249", name: "Retaliation Charm", baseType: "Citrine Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TaGFyZWRVbnNpZ2h0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/d12260a7ac/SharedUnsight.png" },{ id: "22414", name: "The Jinxed Juju", baseType: "Citrine Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9KdWp1c1NvdWwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/6d30276e6f/JujusSoul.png" }],
 },
 "Crystal Belt": {
   baseType: "Crystal Belt", regex: "\"l be\"",
   items: [{ id: "2094", name: "Auxium", baseType: "Crystal Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvQXV4aXVtIiwidyI6MiwiaCI6MSwic2NhbGUiOjF9XQ/acf784e82e/Auxium.png" }],
 },
 "Wereclaw Talisman": {
   baseType: "Wereclaw Talisman", regex: "were",
   items: [{ id: "1059", name: "Rigwald's Curse", baseType: "Wereclaw Talisman", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9VbmlxdWVEaXJlQ2xhd1RhbGlzbWFuIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/e8cd3f0898/UniqueDireClawTalisman.png" }],
 },
 "Opal Ring": {
   baseType: "Opal Ring", regex: "\"pal r\"",
   items: [{ id: "4886", name: "Stormfire", baseType: "Opal Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvU3Rvcm1GaXJlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/6b3db4e8df/StormFire.png" }],
 },
 "Iron Ring": {
   baseType: "Iron Ring", regex: "\"ron r\"",
   items: [{ id: "166", name: "Blackheart", baseType: "Iron Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvUmluZzFVbmlxdWUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/40666e2827/Ring1Unique.png" },{ id: "22444", name: "Icefang Orbit", baseType: "Iron Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvSWNlZmFuZ09yYml0IiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/da6e5eb5aa/IcefangOrbit.png" },{ id: "741", name: "Le Heup of All", baseType: "Iron Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvTGVoZXVwb2ZhbGwiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/6ea73cc7e4/Leheupofall.png" },{ id: "1661", name: "The Warden's Brand", baseType: "Iron Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGhlV2FyZGVuc0JhbmQiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/5d3830d11d/TheWardensBand.png" },{ id: "22419", name: "Venopuncture", baseType: "Iron Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvQmxvb2RmcmVlemUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/8873778384/Bloodfreeze.png" }],
 },
 "Topaz Ring": {
   baseType: "Topaz Ring", regex: "top",
   items: [{ id: "713", name: "Kikazaru", baseType: "Topaz Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvS2lrYXphcnUiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/911affa06b/Kikazaru.png" },{ id: "42246", name: "Storm Secret", baseType: "Topaz Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVGh1bmRlckxvb3AiLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/1322cee671/ThunderLoop.png" },{ id: "1763", name: "Valako's Sign", baseType: "Topaz Ring", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvUmluZ3MvVmFsYWtvc1NpZ24iLCJ3IjoxLCJoIjoxLCJzY2FsZSI6MX1d/cd646c8c54/ValakosSign.png" }],
 },
 "Jade Amulet": {
   baseType: "Jade Amulet", regex: "\"de am\"",
   items: [{ id: "20733", name: "Hyrri's Truth", baseType: "Jade Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TeW50aGVzaXNBY2N1cmFjeUFtdWxldCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/6062fd361e/SynthesisAccuracyAmulet.png" },{ id: "711", name: "Karui Ward", baseType: "Jade Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9BbXVsZXQ0VW5pcXVlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/069e4f76ea/Amulet4Unique.png" },{ id: "1013", name: "Rashkaldor's Patience", baseType: "Jade Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9SYXNoa2FsZG9yc1BhdGllbmNlIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/336e3419f4/RashkaldorsPatience.png" },{ id: "25192", name: "Willowgift", baseType: "Jade Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9TdGFybGlnaHRNYXJrIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/b956123acc/StarlightMark.png" }],
 },
 "Black Maw Talisman": {
   baseType: "Black Maw Talisman", regex: "maw",
   items: [{ id: "866", name: "Night's Hold", baseType: "Black Maw Talisman", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9Tb2NrZXRlZFRhbGlzbWFuIiwidyI6MSwiaCI6MSwic2NhbGUiOjF9XQ/89ef47ed1c/SocketedTalisman.png" }],
 },
 "Vanguard Belt": {
   baseType: "Vanguard Belt", regex: "ngu",
   items: [{ id: "1983", name: "Perseverance", baseType: "Vanguard Belt", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvUGVyc2VydmVyYW5jZSIsInciOjIsImgiOjEsInNjYWxlIjoxfV0/1ff634248a/Perserverance.png" }],
 },
 "Marble Amulet": {
   baseType: "Marble Amulet", regex: "rbl",
   items: [{ id: "2179", name: "Bloodgrip", baseType: "Marble Amulet", icon: "https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQW11bGV0cy9CbG9vZEFtdWxldCIsInciOjEsImgiOjEsInNjYWxlIjoxfV0/546826e52b/BloodAmulet.png" }],
 },
};