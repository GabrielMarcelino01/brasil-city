// ===== Brasil City: conjunto de ícones próprio (SVG inline) =====
// Estilo único: contorno azul-marinho grosso (3px em 48), cantos arredondados, cores só da paleta.
export const PAL = {
  ink: '#1b2340', green: '#2fb14b', greenD: '#1d8a39', gold: '#ffc425', goldD: '#e8960c', blue: '#2f80ed', blueD: '#1e5fbf', sky: '#9fd3ff',
  red: '#ec4b47', orange: '#ff8a2a', cream: '#fff4d9', white: '#ffffff', brick: '#c9693f', wood: '#a7693e', gray: '#b3bccd', grayD: '#7d879c',
};
const P = PAL;
const star = (cx, cy, R, r, n = 5, rot = -90) => { let d = ''; for (let i = 0; i < n * 2; i++) { const a = (rot + i * 180 / n) * Math.PI / 180, q = i % 2 ? r : R; d += (i ? 'L' : 'M') + (cx + Math.cos(a) * q).toFixed(1) + ' ' + (cy + Math.sin(a) * q).toFixed(1); } return d + 'Z'; };
const gear = (cx, cy, R, r, n = 8) => { let d = ''; for (let i = 0; i < n * 4; i++) { const a = (i / (n * 4)) * Math.PI * 2 + 0.2, q = (i % 4 < 2) ? R : r; d += (i ? 'L' : 'M') + (cx + Math.cos(a) * q).toFixed(1) + ' ' + (cy + Math.sin(a) * q).toFixed(1); } return d + 'Z'; };
const hi = (x1, y1, x2, y2) => `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="#fff" stroke-opacity=".7" stroke-width="3"/>`; // brilho
const house = (roof, wall = P.cream) => `<path d="M8 23L24 9L40 23Z" fill="${roof}"/><path d="M12 22H36V41H12Z" fill="${wall}"/><path d="M20 41V31H28V41" fill="${P.wood}"/><path d="M5 24L24 7L43 24" fill="none"/>`;
const car = (body) => `<path d="M6 33V26L11 24L15 16H32L37 24L42 26V33Z" fill="${body}"/><path d="M17 18H23V24H14ZM26 18H31L34 24H26Z" fill="${P.sky}" stroke-width="2.5"/><circle cx="14" cy="34" r="5" fill="${P.ink}"/><circle cx="34" cy="34" r="5" fill="${P.ink}"/><circle cx="14" cy="34" r="1.6" fill="${P.gray}" stroke="none"/><circle cx="34" cy="34" r="1.6" fill="${P.gray}" stroke="none"/>`;
export const ICONS = {
  coin: `<circle cx="24" cy="24" r="18" fill="${P.gold}"/><circle cx="24" cy="24" r="11.5" fill="none" stroke="${P.goldD}" stroke-width="3"/><path d="${star(24, 24, 7, 3.2)}" fill="${P.goldD}" stroke="none"/><path d="M13 16a13 13 0 0 1 7-5" stroke="#fff" stroke-opacity=".8" fill="none"/>`,
  cash: `<path d="M4 14H44V36H4Z" fill="${P.green}"/><circle cx="24" cy="25" r="6" fill="${P.cream}" stroke-width="2.5"/><path d="M9 19V31M39 19V31" stroke="${P.greenD}"/>`,
  bolt: `<path d="M28 3L9 27H22L18 45L39 19H26Z" fill="${P.orange}"/><path d="M26 9L16 23" stroke="#fff" stroke-opacity=".7"/>`,
  star: `<path d="${star(24, 25, 20, 9.5)}" fill="${P.gold}"/><path d="M17 20L21 19" stroke="#fff" stroke-opacity=".8"/>`,
  starOff: `<path d="${star(24, 25, 20, 9.5)}" fill="${P.gray}"/>`,
  xp: `<path d="${star(24, 25, 20, 9.5)}" fill="${P.blue}"/><path d="M17 20L21 19" stroke="#fff" stroke-opacity=".8"/>`,
  sparkle: `<path d="M24 4C26 18 30 22 44 24C30 26 26 30 24 44C22 30 18 26 4 24C18 22 22 18 24 4Z" fill="${P.gold}"/>`,
  trophy: `<path d="M13 6H35V18C35 26 30 30 24 30C18 30 13 26 13 18Z" fill="${P.gold}"/><path d="M13 10H6C6 19 10 22 14 22M35 10H42C42 19 38 22 34 22" fill="none"/><path d="M21 30V35H27V30" fill="${P.goldD}"/><path d="M14 36H34V43H14Z" fill="${P.blue}"/><path d="M18 11V19" stroke="#fff" stroke-opacity=".8"/>`,
  medal: `<path d="M12 4H22L27 19H17ZM36 4H26L21 19H31Z" fill="${P.blue}"/><path d="M26 4H36L31 19H21Z" fill="${P.red}"/><circle cx="24" cy="31" r="12" fill="${P.gold}"/><path d="${star(24, 31, 6.5, 3)}" fill="${P.goldD}" stroke="none"/>`,
  crown: `<path d="M5 15L14 25L24 9L34 25L43 15L39 38H9Z" fill="${P.gold}"/><path d="M9 38H39V43H9Z" fill="${P.goldD}"/><circle cx="24" cy="30" r="3.5" fill="${P.red}" stroke-width="2"/><circle cx="14" cy="32" r="2.5" fill="${P.blue}" stroke-width="2"/><circle cx="34" cy="32" r="2.5" fill="${P.blue}" stroke-width="2"/>`,
  house: house(P.red),
  houseG: house(P.green),
  mansion: `<path d="M6 20H16V42H6ZM32 20H42V42H32Z" fill="${P.cream}"/><path d="M4 21L11 12L18 21ZM30 21L37 12L44 21Z" fill="${P.gold}"/><path d="M15 26H33V42H15Z" fill="${P.cream}"/><path d="M13 27L24 17L35 27Z" fill="${P.red}"/><path d="M21 42V34H27V42" fill="${P.wood}"/>`,
  houses: `<path d="M3 26L14 17L25 26Z" fill="${P.blue}"/><path d="M6 25H22V41H6Z" fill="${P.cream}"/><path d="M22 21L33 11L44 21Z" fill="${P.red}"/><path d="M25 20H41V41H25Z" fill="${P.cream}"/><path d="M30 41V32H36V41" fill="${P.wood}"/><path d="M11 30H16V35H11Z" fill="${P.sky}" stroke-width="2"/>`,
  hut: `<path d="M7 24L24 10L41 24Z" fill="${P.wood}"/><path d="M11 23H37V41H11Z" fill="${P.gray}"/><path d="M20 41V31H28V41" fill="${P.ink}"/><path d="M14 27L18 31M33 27L30 33" stroke-width="2.5"/>`,
  palace: `<path d="M8 17L24 7L40 17Z" fill="${P.gold}"/><path d="M8 17H40V21H8Z" fill="${P.cream}"/><path d="M11 21H16V37H11ZM21.5 21H26.5V37H21.5ZM32 21H37V37H32Z" fill="${P.white}"/><path d="M5 37H43V43H5Z" fill="${P.green}"/><circle cx="24" cy="13" r="2" fill="${P.blue}" stroke-width="2"/>`,
  city: `<path d="M5 43V22H16V43Z" fill="${P.blue}"/><path d="M16 43V8H30V43Z" fill="${P.gray}"/><path d="M30 43V17H43V43Z" fill="${P.green}"/><path d="M20 13H26M20 19H26M20 25H26M20 31H26M9 27H12M9 33H12M34 22H39M34 28H39" stroke="${P.gold}" stroke-width="2.5"/><path d="M3 43H45" fill="none"/>`,
  crane: `<path d="M12 43V8H17V43Z" fill="${P.gold}"/><path d="M8 8H42V13H8Z" fill="${P.gold}"/><path d="M36 13V24" fill="none"/><path d="M31 24H41V30H31Z" fill="${P.brick}"/><path d="M6 43H23" fill="none"/><path d="M12 13L17 20M17 20L12 27M12 27L17 34" stroke-width="2"/>`,
  hammer: `<path d="M22 20L36 42L41 39L27 17Z" fill="${P.wood}"/><path d="M8 13L22 5L31 10L28 15L22 13L14 22Z" fill="${P.gray}"/>`,
  brick: `<path d="M4 10H44V40H4Z" fill="${P.brick}"/><path d="M4 20H44M4 30H44M17 10V20M33 10V20M10 20V30M25 20V30M40 20V30M17 30V40M33 30V40" stroke="${P.cream}" stroke-width="2.5"/><path d="M4 10H44V40H4Z" fill="none"/>`,
  rock: `<path d="M5 37L10 20L22 11L36 15L43 30L38 40H9Z" fill="${P.gray}"/><path d="M14 22L21 17" stroke="#fff" stroke-opacity=".7"/>`,
  road: `<path d="M14 4H34L44 44H4Z" fill="${P.grayD}"/><path d="M24 8V14M24 20V27M24 33V41" stroke="${P.gold}" stroke-width="3.5"/>`,
  broom: `<path d="M30 3L35 5.5L26 26L21 23.5Z" fill="${P.wood}"/><path d="M15 21L31 28L27 44H5Z" fill="${P.gold}"/><path d="M12 32L10 43M18 33L16 44M23 34L22 44" stroke="${P.goldD}" stroke-width="2"/>`,
  tree: `<path d="M21 30H27V44H21Z" fill="${P.wood}"/><circle cx="24" cy="19" r="15" fill="${P.green}"/><path d="M15 15a9 9 0 0 1 6-6" stroke="#fff" stroke-opacity=".7" fill="none"/>`,
  palm: `<path d="M22 44C22 34 23 26 26 18L30 19C27 27 27 35 28 44Z" fill="${P.wood}"/><path d="M27 17C18 9 9 12 5 19C13 15 20 16 27 17ZM27 17C34 8 41 9 45 14C38 12 32 14 27 17ZM27 17C24 9 25 4 30 2C30 8 29 12 27 17ZM27 17C35 18 41 24 42 30C36 25 31 21 27 17Z" fill="${P.green}"/>`,
  sprout: `<path d="M24 44V22" fill="none"/><path d="M24 26C24 16 18 10 7 10C7 20 13 26 24 26Z" fill="${P.green}"/><path d="M24 22C24 12 30 7 41 7C41 17 35 22 24 22Z" fill="${P.green}"/><path d="M10 44H38V38H10Z" fill="${P.wood}"/>`,
  bag: `<path d="M8 16H40L37 44H11Z" fill="${P.green}"/><path d="M17 20V12C17 4 31 4 31 12V20" fill="none"/><path d="M13 22L14 38" stroke="#fff" stroke-opacity=".6"/>`,
  cart: `<path d="M3 7H10L15 31H38L43 14H12" fill="${P.blue}"/><path d="M15 31L13 37H39" fill="none"/><circle cx="17" cy="41" r="3.5" fill="${P.ink}"/><circle cx="35" cy="41" r="3.5" fill="${P.ink}"/>`,
  store: `<path d="M7 20H41V43H7Z" fill="${P.cream}"/><path d="M4 9H44L42 20C40 23 36 23 34.5 20C33 23 28 23 26.5 20C25 23 20 23 18.5 20C17 23 12 23 10.5 20C9 23 5 23 4 20Z" fill="${P.red}"/><path d="M14 9V20M24 9V20M34 9V20" stroke="${P.white}" stroke-width="3"/><path d="M18 43V30H30V43" fill="${P.blue}"/>`,
  briefcase: `<path d="M5 15H43V41H5Z" fill="${P.wood}"/><path d="M17 15V9H31V15" fill="none"/><path d="M5 25H43" fill="none"/><path d="M20 22H28V29H20Z" fill="${P.gold}" stroke-width="2.5"/>`,
  chart: `<path d="M6 42H42" fill="none"/><path d="M9 30H16V42H9Z" fill="${P.blue}"/><path d="M20.5 22H27.5V42H20.5Z" fill="${P.gold}"/><path d="M32 13H39V42H32Z" fill="${P.green}"/><path d="M8 19L19 10L26 15L38 4M31 4H38V11" fill="none" stroke="${P.red}" stroke-width="3.5"/>`,
  clipboard: `<path d="M8 8H40V44H8Z" fill="${P.wood}"/><path d="M12 12H36V40H12Z" fill="${P.cream}" stroke-width="2"/><path d="M17 4H31V12H17Z" fill="${P.gray}"/><path d="M16 21L19 24L24 18M16 32L19 35L24 29" stroke="${P.green}" fill="none"/><path d="M28 22H33M28 33H33" stroke="${P.grayD}" stroke-width="2.5"/>`,
  gear: `<path d="${gear(24, 24, 20, 15)}" fill="${P.gray}"/><circle cx="24" cy="24" r="6.5" fill="${P.cream}"/>`,
  help: `<circle cx="24" cy="24" r="19" fill="${P.blue}"/><path d="M18 18C18 11 30 11 30 18C30 23 24 23 24 28" stroke="#fff" stroke-width="4.5" fill="none"/><circle cx="24" cy="35" r="2.6" fill="#fff" stroke="none"/>`,
  pin: `<path d="M24 45C24 45 9 29 9 19A15 15 0 0 1 39 19C39 29 24 45 24 45Z" fill="${P.red}"/><circle cx="24" cy="19" r="6" fill="${P.white}"/>`,
  lock: `<path d="M15 21V14C15 4 33 4 33 14V21" fill="none" stroke-width="5"/><path d="M15 21V14C15 4 33 4 33 14V21" fill="none" stroke="${P.gray}" stroke-width="2"/><path d="M9 21H39V43H9Z" fill="${P.gold}"/><circle cx="24" cy="30" r="3" fill="${P.ink}" stroke="none"/><path d="M24 31V37" stroke-width="3.5"/>`,
  check: `<circle cx="24" cy="24" r="19" fill="${P.green}"/><path d="M14 24L21 31L34 17" stroke="#fff" stroke-width="5" fill="none"/>`,
  close: `<circle cx="24" cy="24" r="19" fill="${P.red}"/><path d="M17 17L31 31M31 17L17 31" stroke="#fff" stroke-width="5"/>`,
  fire: `<path d="M24 45C13 45 8 37 9 29C10 21 17 17 18 6C25 11 27 17 27 21C29 18 31 16 32 13C38 19 40 25 39 31C38 40 32 45 24 45Z" fill="${P.orange}"/><path d="M24 44C19 44 16 40 17 36C18 32 22 30 23 25C27 29 31 33 30 37C30 41 28 44 24 44Z" fill="${P.gold}" stroke-width="2.5"/>`,
  gift: `<path d="M6 17H42V26H6Z" fill="${P.red}"/><path d="M9 26H39V44H9Z" fill="${P.red}"/><path d="M21 17H27V44H21Z" fill="${P.gold}"/><path d="M24 17C20 7 11 8 13 14C14 17 20 17 24 17C28 17 34 17 35 14C37 8 28 7 24 17Z" fill="${P.gold}"/>`,
  party: `<path d="M6 43L17 14L34 31Z" fill="${P.gold}"/><path d="M11 30L22 38M14 22L28 34" stroke="${P.red}" stroke-width="3"/><path d="M26 10L29 4M35 18L43 15M33 9L38 6" stroke="${P.blue}" stroke-width="3"/><circle cx="40" cy="26" r="2.5" fill="${P.green}" stroke-width="2"/>`,
  car: car(P.red),
  carB: car(P.blue),
  taxi: car(P.gold),
  bike: `<circle cx="12" cy="31" r="8" fill="none"/><circle cx="36" cy="31" r="8" fill="none"/><path d="M12 31L19 18H31L36 31M19 18L24 31H12M31 18L28 11H33M24 31L31 18" fill="none" stroke="${P.blue}" stroke-width="3.5"/><path d="M17 13H23" stroke-width="3.5"/>`,
  rocket: `<path d="M24 3C33 10 34 24 30 34H18C14 24 15 10 24 3Z" fill="${P.white}"/><path d="M18 34L11 40L14 27ZM30 34L37 40L34 27Z" fill="${P.red}"/><circle cx="24" cy="18" r="4.5" fill="${P.blue}"/><path d="M20 35L24 45L28 35Z" fill="${P.orange}"/>`,
  team: `<circle cx="16" cy="15" r="7" fill="${P.green}"/><path d="M3 42C3 30 9 25 16 25C23 25 29 30 29 42Z" fill="${P.green}"/><circle cx="32" cy="17" r="7" fill="${P.blue}"/><path d="M19 43C19 32 25 27 32 27C39 27 45 32 45 43Z" fill="${P.blue}"/>`,
  sign: `<path d="M21 22H27V44H21Z" fill="${P.wood}"/><path d="M5 6H43V24H5Z" fill="${P.gold}"/><path d="M11 12H37M11 18H29" stroke="${P.goldD}" stroke-width="3"/>`,
  idcard: `<path d="M3 9H45V39H3Z" fill="${P.blue}"/><path d="M8 15H20V31H8Z" fill="${P.cream}" stroke-width="2.5"/><circle cx="14" cy="21" r="3" fill="${P.gold}" stroke-width="2"/><path d="M25 17H39M25 24H39M25 31H34" stroke="#fff" stroke-width="3"/>`,
  shield: `<path d="M24 3L41 9V22C41 33 33 41 24 45C15 41 7 33 7 22V9Z" fill="${P.blue}"/><path d="${star(24, 23, 9, 4)}" fill="${P.gold}" stroke-width="2"/>`,
  hero: `<path d="M24 3L41 9V22C41 33 33 41 24 45C15 41 7 33 7 22V9Z" fill="${P.red}"/><path d="${star(24, 23, 10, 4.5)}" fill="${P.gold}" stroke-width="2"/>`,
  clock: `<circle cx="24" cy="26" r="17" fill="${P.white}"/><path d="M24 15V26L31 31" fill="none"/><path d="M19 5H29" stroke-width="4"/><path d="M24 5V9" fill="none"/>`,
  gamepad: `<path d="M8 16H40C44 16 46 22 45 30C44 38 39 41 35 36L32 32H16L13 36C9 41 4 38 3 30C2 22 4 16 8 16Z" fill="${P.blue}"/><path d="M13 21V29M9 25H17" stroke="#fff" stroke-width="3.5"/><circle cx="32" cy="22" r="2.6" fill="${P.gold}" stroke-width="2"/><circle cx="37" cy="27" r="2.6" fill="${P.red}" stroke-width="2"/>`,
  phone: `<path d="M13 3H35V45H13Z" fill="${P.ink}"/><path d="M16 8H32V37H16Z" fill="${P.sky}" stroke="none"/><circle cx="24" cy="41" r="1.8" fill="#fff" stroke="none"/>`,
  play: `<path d="M13 7L39 24L13 41Z" fill="${P.gold}"/>`,
  arrow: `<path d="M6 24H38M27 12L39 24L27 36" fill="none" stroke="currentColor" stroke-width="6"/>`,
  arrowL: `<path d="M42 24H10M21 12L9 24L21 36" fill="none" stroke="currentColor" stroke-width="6"/>`,
  heart: `<path d="M24 43C11 33 4 26 4 17C4 10 10 5 16 5C20 5 23 8 24 11C25 8 28 5 32 5C38 5 44 10 44 17C44 26 37 33 24 43Z" fill="${P.red}"/><path d="M11 13a6 6 0 0 1 5-4" stroke="#fff" stroke-opacity=".7" fill="none"/>`,
  sun: `<circle cx="24" cy="24" r="10" fill="${P.gold}"/><path d="M24 3V8M24 40V45M3 24H8M40 24H45M9 9L12.5 12.5M35.5 35.5L39 39M9 39L12.5 35.5M35.5 12.5L39 9" stroke="${P.goldD}" stroke-width="3.5"/>`,
  moon: `<path d="M30 5C19 7 13 17 15 27C17 37 27 43 37 40C30 46 15 45 8 35C1 24 7 7 20 4C23 3 27 3 30 5Z" fill="${P.blue}"/>`,
  sound: `<path d="M5 18H14L25 8V40L14 30H5Z" fill="${P.blue}"/><path d="M31 17C35 21 35 27 31 31M36 12C43 19 43 29 36 36" fill="none" stroke-width="3.5"/>`,
  mute: `<path d="M5 18H14L25 8V40L14 30H5Z" fill="${P.grayD}"/><path d="M32 18L43 30M43 18L32 30" stroke="${P.red}" stroke-width="4"/>`,
  box: `<path d="M24 4L43 13V35L24 44L5 35V13Z" fill="${P.wood}"/><path d="M5 13L24 22L43 13M24 22V44" fill="none"/><path d="M14 8.5L33 17.5" stroke="${P.gold}" stroke-width="4"/>`,
  cloche: `<path d="M6 34C6 22 14 15 24 15C34 15 42 22 42 34Z" fill="${P.gray}"/><path d="M3 35H45V40H3Z" fill="${P.grayD}"/><circle cx="24" cy="11" r="3.5" fill="${P.gray}"/><path d="M13 29C13 24 17 21 21 20" stroke="#fff" stroke-opacity=".8" fill="none"/>`,
  brush: `<path d="M6 8H36V20H6Z" fill="${P.blue}"/><path d="M36 14H42V27H22V35" fill="none"/><path d="M18 34H26V45H18Z" fill="${P.wood}"/><path d="M10 12H24" stroke="#fff" stroke-opacity=".7"/>`,
  helmet: `<path d="M5 32C5 19 13 10 24 10C35 10 43 19 43 32Z" fill="${P.gold}"/><path d="M2 32H46V38H2Z" fill="${P.goldD}"/><path d="M20 10H28V22H20Z" fill="${P.gold}"/>`,
  fhelmet: `<path d="M5 32C5 19 13 10 24 10C35 10 43 19 43 32Z" fill="${P.red}"/><path d="M2 32H46V38H2Z" fill="${P.red}"/><path d="${star(24, 22, 7, 3)}" fill="${P.gold}" stroke-width="2"/>`,
  card: `<path d="M3 10H45V38H3Z" fill="${P.green}"/><path d="M3 17H45V23H3Z" fill="${P.ink}" stroke="none"/><path d="M9 30H20" stroke="#fff" stroke-width="3"/><path d="M32 28H39V33H32Z" fill="${P.gold}" stroke-width="2"/>`,
  pan: `<circle cx="20" cy="24" r="15" fill="${P.ink}"/><path d="M34 22L46 18V24L35 27Z" fill="${P.wood}"/><path d="M12 24C12 18 17 15 21 17C26 15 29 20 27 25C26 31 19 32 15 30C13 29 12 27 12 24Z" fill="${P.white}" stroke-width="2"/><circle cx="20" cy="24" r="4" fill="${P.gold}" stroke-width="2"/>`,
  wrench: `<path d="M30 4C24 4 20 10 22 16L5 33C3 35 3 39 5 41C7 43 11 43 13 41L30 24C36 26 42 22 42 16L35 21L29 19L27 13L32 6C31 5 31 4 30 4Z" fill="${P.gray}"/>`,
  book: `<path d="M6 8H22C24 8 24 10 24 10V43C24 41 22 40 20 40H6Z" fill="${P.blue}"/><path d="M42 8H26C24 8 24 10 24 10V43C24 41 26 40 28 40H42Z" fill="${P.green}"/><path d="M11 16H19M29 16H37M11 23H19" stroke="#fff" stroke-width="2.5"/>`,
  medkit: `<path d="M4 14H44V42H4Z" fill="${P.white}"/><path d="M16 14V8H32V14" fill="none"/><path d="M20 19H28V24H33V32H28V37H20V32H15V24H20Z" fill="${P.red}" stroke-width="2.5"/>`,
  laptop: `<path d="M8 8H40V32H8Z" fill="${P.blue}"/><path d="M3 32H45L42 40H6Z" fill="${P.gray}"/><path d="M14 16L18 20L14 24M22 24H30" stroke="#fff" stroke-width="3" fill="none"/>`,
  news: `<path d="M5 6H38V42H9C7 42 5 40 5 38Z" fill="${P.cream}"/><path d="M38 14H43V38C43 40 41 42 38 42" fill="${P.gray}"/><path d="M10 12H33V22H10Z" fill="${P.blue}" stroke-width="2"/><path d="M10 28H33M10 35H27" stroke="${P.grayD}" stroke-width="3"/>`,
  ruler: `<path d="M5 43V5L43 43Z" fill="${P.gold}"/><path d="M12 25V36H23Z" fill="${P.cream}" stroke-width="2.5"/><path d="M5 12H10M5 19H8M5 26H10M5 33H8" stroke-width="2.5"/>`,
  scale: `<path d="M24 6V40M10 12H38M14 40H34" fill="none" stroke-width="3.5"/><path d="M4 26L10 12L16 26ZM32 26L38 12L44 26Z" fill="none" stroke-width="2.5"/><path d="M3 26H17C17 31 3 31 3 26ZM31 26H45C45 31 31 31 31 26Z" fill="${P.gold}"/><circle cx="24" cy="7" r="3" fill="${P.gold}" stroke-width="2.5"/>`,
  gavel: `<path d="M20 22L38 40L42 36L24 18Z" fill="${P.wood}"/><path d="M8 18L20 6L28 14L16 26Z" fill="${P.wood}"/><path d="M6 44H28V38H6Z" fill="${P.gray}"/>`,
  ball: `<circle cx="24" cy="24" r="19" fill="${P.white}"/><path d="M24 15L31 20L28 28H20L17 20Z" fill="${P.ink}" stroke-width="2"/><path d="M24 15V6M31 20L41 17M28 28L33 37M20 28L15 37M17 20L7 17" fill="none" stroke-width="2.5"/>`,
  ballot: `<path d="M14 4H34V24H14Z" fill="${P.white}"/><path d="M18 14L22 18L30 9" stroke="${P.green}" fill="none"/><path d="M5 22H43V44H5Z" fill="${P.blue}"/><path d="M12 26H36" stroke-width="3.5"/>`,
  corn: `<path d="M24 4C31 8 32 22 28 36H20C16 22 17 8 24 4Z" fill="${P.gold}"/><path d="M20 12L28 12M19 18H29M19 24H29M20 30H28" stroke="${P.goldD}" stroke-width="2"/><path d="M20 36C14 30 10 26 9 20C15 24 19 28 22 36ZM28 36C34 30 38 26 39 20C33 24 29 28 26 36Z" fill="${P.green}"/><path d="M21 36H27V44H21Z" fill="${P.green}"/>`,
  pool: `<path d="M4 12H44V40H4Z" fill="${P.sky}"/><path d="M4 22C9 18 14 26 19 22C24 18 29 26 34 22C39 18 44 22 44 22M4 31C9 27 14 35 19 31C24 27 29 35 34 31C39 27 44 31 44 31" fill="none" stroke="${P.blue}" stroke-width="3"/><path d="M4 12H44V40H4Z" fill="none"/>`,
  paw: `<path d="M24 26C33 26 38 34 36 39C34 44 28 41 24 41C20 41 14 44 12 39C10 34 15 26 24 26Z" fill="${P.wood}"/><circle cx="11" cy="20" r="4.5" fill="${P.wood}"/><circle cx="19" cy="12" r="4.5" fill="${P.wood}"/><circle cx="29" cy="12" r="4.5" fill="${P.wood}"/><circle cx="37" cy="20" r="4.5" fill="${P.wood}"/>`,
  popcorn: `<path d="M10 18H38L34 44H14Z" fill="${P.red}"/><path d="M19 18L20 44M29 18L28 44" stroke="${P.white}" stroke-width="3"/><path d="M9 18C6 12 12 7 16 10C17 4 25 3 26 8C30 4 37 7 35 12C40 12 41 18 38 18Z" fill="${P.cream}"/>`,
  burger: `<path d="M5 22C5 12 13 7 24 7C35 7 43 12 43 22Z" fill="${P.gold}"/><path d="M4 25H44V30H4Z" fill="${P.green}"/><path d="M5 30H43V35H5Z" fill="${P.wood}"/><path d="M5 35H43C43 40 40 43 36 43H12C8 43 5 40 5 35Z" fill="${P.gold}"/>`,
  fountain: `<path d="M5 34H43V43H5Z" fill="${P.gray}"/><path d="M16 26H32V34H16Z" fill="${P.gray}"/><path d="M24 26V12M24 12C18 10 13 14 11 22M24 12C30 10 35 14 37 22" fill="none" stroke="${P.blue}" stroke-width="3.5"/><circle cx="24" cy="9" r="3" fill="${P.sky}" stroke-width="2"/>`,
  bulb: `<path d="M24 4C33 4 39 11 38 19C37 26 31 28 31 35H17C17 28 11 26 10 19C9 11 15 4 24 4Z" fill="${P.gold}"/><path d="M17 35H31V42H17Z" fill="${P.gray}"/><path d="M17 13C18 10 20 9 22 9" stroke="#fff" stroke-opacity=".8" fill="none"/>`,
  school: `<path d="M4 20H44V43H4Z" fill="${P.cream}"/><path d="M2 21L24 8L46 21Z" fill="${P.red}"/><path d="M19 43V31H29V43" fill="${P.blue}"/><path d="M9 26H15V32H9ZM33 26H39V32H33Z" fill="${P.sky}" stroke-width="2"/><path d="M24 8V2H31V6H24" fill="${P.green}" stroke-width="2"/>`,
  hospital: `<path d="M6 10H42V43H6Z" fill="${P.white}"/><path d="M20 15H28V21H34V29H28V35H20V29H14V21H20Z" fill="${P.red}" stroke-width="2.5"/>`,
  stadium: `<ellipse cx="24" cy="26" rx="21" ry="14" fill="${P.gray}"/><ellipse cx="24" cy="26" rx="14" ry="8" fill="${P.green}"/><path d="M24 18V34" stroke="#fff" stroke-width="2"/><path d="M8 12V6M40 12V6" stroke-width="3"/>`,
  shirt: `<path d="M16 5L4 12L9 22L13 20V43H35V20L39 22L44 12L32 5C30 9 27 10 24 10C21 10 18 9 16 5Z" fill="${P.blue}"/>`,
  cap: `<path d="M8 28C8 16 15 9 24 9C33 9 40 16 40 28Z" fill="${P.blue}"/><path d="M8 28H46C46 33 40 34 34 32H8Z" fill="${P.blueD}"/>`,
  hat: `<path d="M3 34C3 29 13 27 24 27C35 27 45 29 45 34C45 38 3 38 3 34Z" fill="${P.gold}"/><path d="M13 28C13 17 17 11 24 11C31 11 35 17 35 28Z" fill="${P.gold}"/><path d="M13 25H35" stroke="${P.red}" stroke-width="4"/>`,
  gem: `<path d="M12 7H36L45 18L24 43L3 18Z" fill="${P.blue}"/><path d="M3 18H45M17 18L24 43L31 18M12 7L17 18L24 7L31 18L36 7" fill="none" stroke-width="2"/><path d="M12 12L9 17" stroke="#fff" stroke-opacity=".8"/>`,
  target: `<circle cx="24" cy="24" r="19" fill="${P.red}"/><circle cx="24" cy="24" r="12" fill="${P.white}"/><circle cx="24" cy="24" r="5" fill="${P.red}"/>`,
  scroll: `<path d="M10 6H38V36C38 41 34 44 30 44H6C10 44 10 40 10 36Z" fill="${P.cream}"/><path d="M38 6C42 6 44 8 44 12H38" fill="${P.cream}"/><path d="M16 15H32M16 22H32M16 29H26" stroke="${P.grayD}" stroke-width="3"/>`,
  cone: `<path d="M18 6H30L39 40H9Z" fill="${P.orange}"/><path d="M15 18H33M12 29H36" stroke="#fff" stroke-width="4"/><path d="M4 40H44V45H4Z" fill="${P.ink}"/>`,
  cube: `<path d="M24 3L43 13L24 23L5 13Z" fill="${P.green}"/><path d="M5 13L24 23V45L5 35Z" fill="${P.wood}"/><path d="M43 13L24 23V45L43 35Z" fill="#8a5632"/>`,
  map: `<path d="M4 10L16 5L32 11L44 6V38L32 43L16 37L4 42Z" fill="${P.cream}"/><path d="M16 5V37M32 11V43" fill="none"/><path d="M8 25C12 20 18 30 24 24C28 20 34 26 40 21" fill="none" stroke="${P.green}" stroke-width="3"/>`,
  moto: `<circle cx="11" cy="34" r="7" fill="${P.ink}"/><circle cx="37" cy="34" r="7" fill="${P.ink}"/><path d="M11 34L19 22H31L37 34M28 13H34L37 34" fill="none" stroke="${P.red}" stroke-width="4"/><path d="M15 16H26V24H15Z" fill="${P.wood}"/>`,
  flagbr: `<path d="M3 9H45V39H3Z" fill="${P.green}"/><path d="M24 12L42 24L24 36L6 24Z" fill="${P.gold}" stroke-width="2"/><circle cx="24" cy="24" r="7" fill="${P.blueD}" stroke-width="2"/>`,
  flagch: `<path d="M6 6H42V42H6Z" fill="${P.red}"/><path d="M20 12H28V20H36V28H28V36H20V28H12V20H20Z" fill="#fff" stroke="none"/>`,
  flagjp: `<path d="M3 9H45V39H3Z" fill="#fff"/><circle cx="24" cy="24" r="8" fill="${P.red}" stroke="none"/>`,
  flagus: `<path d="M3 9H45V39H3Z" fill="#fff"/><path d="M3 13.3H45M3 21.9H45M3 30.5H45M3 37H45" stroke="${P.red}" stroke-width="4.3"/><path d="M3 9H22V25H3Z" fill="${P.blueD}" stroke="none"/><path d="M3 9H45V39H3Z" fill="none"/>`,
  vip: `<path d="${star(24, 24, 21, 17.5, 12)}" fill="${P.gold}"/><circle cx="24" cy="24" r="11.5" fill="${P.goldD}" stroke-width="2.5"/><path d="M18.5 24.5L22.5 28.5L30 20" stroke="#fff" stroke-width="4" fill="none"/>`,
  chat: `<path d="M5 8H43V32H22L12 42V32H5Z" fill="${P.white}"/><path d="M12 17H36M12 24H28" stroke="${P.blue}" stroke-width="3.5"/>`,
  at: `<circle cx="24" cy="24" r="20" fill="${P.blue}"/><circle cx="24" cy="24" r="5.5" fill="none" stroke="#fff" stroke-width="3.5"/><path d="M29.5 19V27C29.5 31 35.5 31 35.5 25C35.5 17.5 30.5 12.5 24 12.5C17.5 12.5 12.5 17.5 12.5 24C12.5 30.5 17.5 35.5 24 35.5C26.5 35.5 28.5 35 30.5 33.8" fill="none" stroke="#fff" stroke-width="3.5"/>`,
  send: `<path d="M4 22L44 5L35 43L23 30Z" fill="${P.gold}"/><path d="M23 30L44 5" fill="none"/><path d="M23 30L21 41L28 34Z" fill="${P.goldD}"/>`,
  carSilver: `<path d="M4 34V28C4 26 6 24.5 9 23.5L15 17C17.5 15 20.5 14 25 14C31 14 35 17 39 22C42 23 44.5 25 44.5 28.5V34Z" fill="#c3cad6"/><path d="M16.5 22L19.5 18.5C21 17.3 23 16.8 25 16.7V22ZM27.5 16.8C30.5 17.2 33 18.7 35.5 22H27.5Z" fill="${P.sky}" stroke-width="2.5"/><path d="M8 27H12" stroke="#fff" stroke-width="2.5"/><circle cx="13" cy="34" r="5" fill="${P.ink}"/><circle cx="36" cy="34" r="5" fill="${P.ink}"/><circle cx="13" cy="34" r="1.8" fill="${P.gray}" stroke="none"/><circle cx="36" cy="34" r="1.8" fill="${P.gray}" stroke="none"/>`,
  carWedge: `<path d="M3 34V29.5L10 27.5L27 18.5H33L45 26.5V34Z" fill="${P.gold}"/><path d="M22 25L28 21H32.5L37 25Z" fill="${P.sky}" stroke-width="2.5"/><path d="M29 29H37" stroke="${P.ink}" stroke-width="3.5"/><path d="M33 18.5L35 14H44V18" fill="${P.ink}" stroke-width="2.5"/><circle cx="12" cy="34" r="5" fill="${P.ink}"/><circle cx="37" cy="34" r="5" fill="${P.ink}"/><circle cx="12" cy="34" r="1.8" fill="${P.gray}" stroke="none"/><circle cx="37" cy="34" r="1.8" fill="${P.gray}" stroke="none"/>`,
  carRed: `<path d="M3 34V28.5L8 26.5L19 25.5L25 19H33L38.5 24.5L45 26.5V34Z" fill="${P.red}"/><path d="M26 21.5H32L35 24.5H23Z" fill="${P.sky}" stroke-width="2.5"/><path d="M8 29.5H18" stroke="#fff" stroke-opacity=".7" stroke-width="2.5"/><path d="M29 28.5H34" stroke="${P.ink}" stroke-width="3"/><circle cx="12" cy="34" r="5" fill="${P.ink}"/><circle cx="37" cy="34" r="5" fill="${P.ink}"/><circle cx="12" cy="34" r="1.8" fill="${P.gray}" stroke="none"/><circle cx="37" cy="34" r="1.8" fill="${P.gray}" stroke="none"/>`,
  heroBR: `<path d="M24 3L41 9V22C41 33 33 41 24 45C15 41 7 33 7 22V9Z" fill="${P.green}"/><path d="M24 11L37 24L24 37L11 24Z" fill="${P.gold}" stroke-width="2.5"/><circle cx="24" cy="24" r="6" fill="${P.blue}" stroke-width="2.5"/>`,
  racer: `<path d="M6 31C6 17 14 8 26 8C37 8 43 16 43 26V35H12C8 35 6 34 6 31Z" fill="${P.blue}"/><path d="M22 17H42V27H26C23.5 27 22 25 22 22.5Z" fill="${P.ink}" stroke="none"/><path d="M26 20H38" stroke="#fff" stroke-opacity=".6" stroke-width="2.5"/><path d="M8 27H20" stroke="${P.gold}" stroke-width="4"/>`,
  qr: (() => { const r = (x, y, w, h) => `M${x} ${y}h${w}v${h}h-${w}Z`; const f = (x, y) => r(x, y, 12, 12) + r(x + 3, y + 3, 6, 6); let cells = ''; const pat = [[18, 4], [22, 8], [18, 12], [26, 4], [30, 12], [4, 20], [12, 20], [20, 20], [28, 18], [36, 20], [40, 26], [18, 26], [24, 30], [32, 28], [20, 36], [28, 38], [36, 34], [40, 40], [32, 42], [18, 42]]; for (const [x, y] of pat) cells += r(x, y, 4, 4); return `<path d="M2 2H46V46H2Z" fill="#fff"/><path d="${f(4, 4) + f(32, 4) + f(4, 32)}" fill="${P.ink}" fill-rule="evenodd" stroke="none"/><path d="${cells}" fill="${P.ink}" stroke="none"/>`; })(),
  dot: `<circle cx="24" cy="24" r="8" fill="${P.gold}"/>`,
};
// emoji -> ícone (tudo que aparece na interface)
const MAP = {
  '💵': 'coin', '💰': 'coin', '💸': 'coin', '🪙': 'coin', '⚡': 'bolt', '⭐': 'star', '🌟': 'sparkle', '✨': 'sparkle', '🏆': 'trophy', '🏅': 'medal', '👑': 'crown',
  '🏠': 'house', '🏡': 'houseG', '🏘️': 'houses', '🏰': 'mansion', '🏚️': 'hut', '🏛️': 'palace', '🏙️': 'city', '🌆': 'city', '🏗️': 'crane', '🚧': 'cone', '🔨': 'hammer',
  '🧱': 'brick', '🪨': 'rock', '🛣️': 'road', '🧹': 'broom', '🌳': 'tree', '🌴': 'palm', '🌱': 'sprout', '🌿': 'sprout', '👶': 'sprout', '🛍️': 'bag', '🛒': 'cart',
  '🏪': 'store', '💼': 'briefcase', '📈': 'chart', '📊': 'chart', '📋': 'clipboard', '⚙️': 'gear', '❓': 'help', '🤔': 'help', '📍': 'pin', '🔒': 'lock', '✅': 'check', '✔': 'check', '✔️': 'check',
  '❌': 'close', '🔥': 'fire', '🎁': 'gift', '🎉': 'party', '🚗': 'car', '🚙': 'carB', '🏎️': 'car', '🚘': 'carB', '🚕': 'taxi', '🚲': 'bike', '🚀': 'rocket',
  '🤝': 'team', '👥': 'team', '🪧': 'sign', '🪪': 'idcard', '🛡️': 'shield', '🚓': 'shield', '🦸': 'hero', '⏱️': 'clock', '⏳': 'clock', '🎮': 'gamepad', '🕹️': 'gamepad',
  '📱': 'phone', '📲': 'phone', '🐢': 'phone', '▶': 'play', '▶️': 'play', '➜': 'arrow', '👉': 'arrow', '➡️': 'arrow', '◀': 'arrowL', '❤️': 'heart', '☀️': 'sun', '🌙': 'moon',
  '🔊': 'sound', '🔇': 'mute', '📦': 'box', '🛵': 'moto', '🍽️': 'cloche', '🎨': 'brush', '👷': 'helmet', '💳': 'card', '🍳': 'pan', '🔧': 'wrench', '📚': 'book',
  '🚒': 'fhelmet', '💉': 'medkit', '🩺': 'medkit', '💻': 'laptop', '📰': 'news', '📐': 'ruler', '⚖️': 'scale', '👨‍⚖️': 'gavel', '⚽': 'ball', '🗳️': 'ballot',
  '🌽': 'corn', '🏊': 'pool', '🐕': 'paw', '🍿': 'popcorn', '🍔': 'burger', '⛲': 'fountain', '💡': 'bulb', '🏫': 'school', '🏥': 'hospital', '🏟️': 'stadium',
  '👕': 'shirt', '🧢': 'cap', '👒': 'hat', '💎': 'gem', '🎯': 'target', '📜': 'scroll', '🧊': 'cube', '💪': 'medal', '🗺️': 'map', '💠': 'xp',
  '💬': 'chat', '🇧🇷': 'flagbr', '🇨🇭': 'flagch', '🇯🇵': 'flagjp', '🇺🇸': 'flagus',
};
export function ico(name, cls = '') { const s = ICONS[name]; if (!s) return ''; return `<svg class="ic ${cls}" viewBox="0 0 48 48" aria-hidden="true" stroke="${P.ink}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">${s}</svg>`; }
export const RE = /[\u{1F1E6}-\u{1F1FF}]{2}|(?:\p{Extended_Pictographic}|[➜▶◀])(?:\uFE0F|\u200D\p{Extended_Pictographic}\uFE0F?|[\u{1F3FB}-\u{1F3FF}])*/gu;
const KEEP = new Set(['©', '®', '™']);
export function emojiName(e) { return MAP[e] || MAP[e.replace(/\uFE0F/g, '')] || MAP[e + '\uFE0F'] || null; }
export const stripEmoji = (s) => String(s).replace(RE, (m) => KEEP.has(m) ? m : '').replace(/\s{2,}/g, ' ').trim();
// troca emojis por ícones dentro de uma string HTML (para templates)
export function iconHTML(html) { return String(html).replace(RE, (m) => { if (KEEP.has(m)) return m; const n = emojiName(m); return n ? ico(n) : ''; }); }
const SKIP = '.mg-area,script,style,textarea,input,svg,[data-raw]';
function iconizeText(node) {
  const t = node.nodeValue; if (!t) return; RE.lastIndex = 0; if (!RE.test(t)) return; const par = node.parentElement; if (!par || par.closest(SKIP)) return;
  RE.lastIndex = 0; const frag = document.createDocumentFragment(); let last = 0, m;
  while ((m = RE.exec(t))) {
    if (KEEP.has(m[0])) continue;
    if (m.index > last) frag.appendChild(document.createTextNode(t.slice(last, m.index)));
    const n = emojiName(m[0]); if (n) { const tpl = document.createElement('template'); tpl.innerHTML = ico(n); frag.appendChild(tpl.content.firstChild); }
    last = m.index + m[0].length;
  }
  if (last < t.length) frag.appendChild(document.createTextNode(t.slice(last)));
  // remove espaço duplo que sobra quando um emoji some
  par.replaceChild(frag, node);
}
export function iconize(root) {
  if (!root) return; if (root.nodeType === 3) return iconizeText(root); if (root.nodeType !== 1 || root.matches?.(SKIP)) return;
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT); const list = []; let n; while ((n = w.nextNode())) list.push(n); list.forEach(iconizeText);
}
export function startIconObserver(root = document.body) {
  iconize(root);
  const mo = new MutationObserver((recs) => { for (const r of recs) { if (r.type === 'characterData') iconizeText(r.target); else r.addedNodes.forEach(iconize); } });
  mo.observe(root, { childList: true, subtree: true, characterData: true }); return mo;
}
