import {
    ITALICS_BOLD_MAP,
    BOLD_MAP,
    GOTHIC_BOLD_MAP,
    GOTHIC_MAP,
    ITALICS_MAP,
    SERIF_BOLD_MAP,
    SERIF_ITALICS_MAP,
    MONOSPACE_MAP,
    SQUARED_MAP,
    CURSIVE_MAP,
    BLACKBOARD_MAP,
    WIDE_MAP,
    FLIPPED_MAP,
    CURSIVE_BOLD_MAP
} from "./maps"

type Map = { [key: string]: string }
export type Converter = (inputText: string) => (string)
export type Font = { key: string, name: string, converter: Converter }

const makeConverterFromMap = (map: Map): Converter => {
    return (inputText =>
            inputText.split('').map((character: string) => (
                map.hasOwnProperty(character) ? map[character] : map.hasOwnProperty(character.toLowerCase()) ? map[character.toLowerCase()] : character
            )).join('')
    );
};

export const fonts: Font[] = [
    {key: 'italics', name: 'ππ΅π’π­πͺπ€π΄', converter: makeConverterFromMap(ITALICS_MAP)},
    {key: 'bold', name: 'ππΌπΉπ±', converter: makeConverterFromMap(BOLD_MAP)},
    {key: 'italics-bold', name: 'ππ©ππ‘πππ¨ π½π€π‘π', converter: makeConverterFromMap(ITALICS_BOLD_MAP)},
    {key: 'monospace', name: 'πΌππππππππ', converter: makeConverterFromMap(MONOSPACE_MAP)},
    {key: 'wide', name: 'οΌ·ο½ο½ο½', converter: makeConverterFromMap(WIDE_MAP)},
    {key: 'blackboard', name: 'πΉππππππ ππ£π', converter: makeConverterFromMap(BLACKBOARD_MAP)},
    {key: 'squared', name: 'ππππ°ππ΄π³', converter: makeConverterFromMap(SQUARED_MAP)},
    {key: 'flipped', name: 'β²lΔ±ppΗp', converter: makeConverterFromMap(FLIPPED_MAP)},
    {key: 'serif-italics', name: 'πΊππππ π°ππππππ', converter: makeConverterFromMap(SERIF_ITALICS_MAP)},
    {key: 'serif-bold', name: 'πππ«π’π ππ¨π₯π', converter: makeConverterFromMap(SERIF_BOLD_MAP)},
    {key: 'gothic', name: 'ππ¬π±π₯π¦π ', converter: makeConverterFromMap(GOTHIC_MAP)},
    {key: 'gothic-bold', name: 'π²πππππ π­πππ', converter: makeConverterFromMap(GOTHIC_BOLD_MAP)},
    {key: 'cursive', name: 'πππππΎππ', converter: makeConverterFromMap(CURSIVE_MAP)},
    {key: 'cursive-bold', name: 'ππΎπ»πΌπ²πΏπ? ππΈπ΅π­', converter: makeConverterFromMap(CURSIVE_BOLD_MAP)},
]

export const fontKeys: string[] = fonts.map((font) => font.key);

export function getFont(key: string): Font | undefined {
    return fonts.find(font => font.key === key)
}



