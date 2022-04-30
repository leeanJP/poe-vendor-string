export interface PoeStringSettings {
    anyThreeLink: boolean
    movement: {
        ten: boolean
        fifteen: boolean
    }
    colors: {
        rrr: boolean
        ggg: boolean
        bbb: boolean

        rrA: boolean
        ggA: boolean
        bbA: boolean

        ggr: boolean
        ggb: boolean
        rrg: boolean
        rrb: boolean
        bbg: boolean
        bbr: boolean

        rgb: boolean

        rr: boolean
        gg: boolean
        bb: boolean
    }
    plusGems: {
        lightning: boolean
        fire: boolean
        cold: boolean
        phys: boolean
        chaos: boolean
        any: boolean
    }
}

export function generateStr(settings: PoeStringSettings): string {
    const colors = settings.colors;
    const {rrr, ggg, bbb, rrg, rrb, ggr, ggb, bbr, bbg, rgb, rrA, ggA, bbA, rr, gg, bb} = colors;

    let result = "";
    if (settings.anyThreeLink) result = addExpression(result, "-[rgb]-");
    if (rrr) result = addExpression(result, "r-r-r");
    if (ggg) result = addExpression(result, "g-g-g");
    if (bbb) result = addExpression(result, "b-b-b");

    if (rrA) result = addExpression(result, twoAndAny("r"))
    if (ggA) result = addExpression(result, twoAndAny("g"))
    if (bbA) result = addExpression(result, twoAndAny("b"))

    if (rrg) result = addExpression(result, twoAndOne("r", "g"));
    if (rrb) result = addExpression(result, twoAndOne("r", "b"));
    if (ggb) result = addExpression(result, twoAndOne("g", "b"));
    if (ggr) result = addExpression(result, twoAndOne("g", "r"));
    if (bbg) result = addExpression(result, twoAndOne("b", "g"));
    if (bbr) result = addExpression(result, twoAndOne("b", "r"));

    if (rr) result = addExpression(result, "r-r");
    if (gg) result = addExpression(result, "g-g");
    if (bb) result = addExpression(result, "b-b");

    if (rgb) result = addExpression(result, "r-g-b|r-b-g|b-r-g|b-g-r|g-r-b|g-b-r");
    return result;
}

function twoAndOne(b: string, s2: string): string {
    return `${b}-${b}-${s2}|${b}-${s2}-${b}|${s2}-${b}-${b}`
}

function twoAndAny(b: string) {
    return `${b}-${b}-|-${b}-${b}|${b}-[rgb]-${b}`
}

export function simplify(search: string): string {
    let result = search;
    if (result.includes("|-[rgb]-|") || result.startsWith("-[rgb]-|")) return "-[rgb]-"

    result = simplifyTwoAndTwo(result, "g", "r");
    result = simplifyTwoAndTwo(result, "r", "b");
    result = simplifyTwoAndTwo(result, "b", "g");

    result = removeCCCWhenCCA(result, "r", "g", "b");
    result = removeCCCWhenCCA(result, "g", "b", "g");
    result = removeCCCWhenCCA(result, "b", "r", "g");

    result = simplifyThreeAndTwoAndAny(result, "r", "g", "b");
    result = simplifyThreeAndTwoAndAny(result, "g", "r", "b");
    result = simplifyThreeAndTwoAndAny(result, "b", "g", "r");

    result = simplifyCCCWhenCCB(result, "g", "r");
    result = simplifyCCCWhenCCB(result, "g", "b");
    result = simplifyCCCWhenCCB(result, "b", "r");
    result = simplifyCCCWhenCCB(result, "b", "g");
    result = simplifyCCCWhenCCB(result, "r", "g");
    result = simplifyCCCWhenCCB(result, "r", "b");


    let unique = Array.from(new Set(result.split("|")));
    return unique.join("|");
}

// g-g-g|g-g-r|g-r-g|r-g-g -> g-g-r|g-[rg]-g|r-g-g
function simplifyCCCWhenCCB(result: string, c: string, c2: string): string {
    let r = result;
    const search1 = `${c}-${c}-${c}`;
    const search2 = `${c}-${c}-${c2}|${c}-${c2}-${c}|${c2}-${c}-${c}`;

    if (result.includes(search1) && result.includes(search2)) {
        r = r.split("|").filter(v => !v.match(`${search1}|${search2}`)).join("|")
        r = addExpression(r, `${c}-${c}-${c2}|${c}-[${c}${c2}]-${c}|${c2}-${c}-${c}`);
    }

    return r;
}

// r-r-g|r-g-r|g-r-r|g-g-r|g-r-g|g-g-r -> g-[gr]-r|r-[gr]-g
function simplifyTwoAndTwo(result: string, c: string, c2: string): string {
    let r = result;
    const search1 = `${c}-${c}-${c2}|${c}-${c2}-${c}|${c2}-${c}-${c}`;
    const search2 = `${c2}-${c2}-${c}|${c2}-${c}-${c2}|${c}-${c2}-${c2}`;
    if (result.includes(search1) && result.includes(search2)) {
        console.log("includes ofc")
        r = r.split("|").filter(v => !v.match(`${search1}|${search2}`)).join("|")
        r = addExpression(r, `${c}-[${c}${c2}]-${c2}|${c2}-[${c}${c2}]-${c}`);
    }
    return r;
}

// r-r-r|r-r-|-r-r|r-[rgb]-r -> r-r-|-r-r|r-[rgb]-r
function removeCCCWhenCCA(result: string, c: string, c2: string, c3: string): string {
    let r = result;
    if (result.includes(`${c}-${c}-|-${c}-${c}|${c}-[rgb]-${c}`)) {
        const replaceStr = `${c}-${c}-${c}|${c}-${c}-[${c2}${c3}]|[${c2}${c3}]-${c}-${c}|${c}-[${c2}${c3}]-${c}`;
        r = r.split("|").filter(v => !v.match(new RegExp(replaceStr))).join("|");
    }
    return r;
}

// r-r-r|r-r-g|r-b-r|g-r-r|r-r-b|r-b-r|r... -> r-r-|-r-r|r-[rgb]-r
// return `${b}-${b}-|-${b}-${b}|${b}-[rgb]-${b}`
function simplifyThreeAndTwoAndAny(result: string, c: string, c2: string, c3: string): string {
    let r = result;
    if (result.includes(`${c}-${c}-${c}`) && result.includes(`${c}-${c}-${c2}`) && result.includes(`${c}-${c}-${c3}`)) {
        const replaceStr = `${c}-${c}-${c}|${c}-${c}-${c2}|${c}-${c2}-${c}|${c2}-${c}-${c}|${c}-${c}-${c3}|${c}-${c3}-${c}|${c3}-${c}-${c}|${c}-${c}-|-${c}-${c}|${c}-[rgb]-${c}`;
        r = r.split("|").filter(v => !v.match(new RegExp(replaceStr))).join("|");
        r = addExpression(r, twoAndAny(c))
    }
    return r;
}

export function addExpression(str: string, textToAdd: string | undefined): string {
    if (textToAdd === undefined || textToAdd.length === 0) {
        return str;
    }
    return str?.length === 0 ? textToAdd : `${str}|${textToAdd}`;
}

export function movementStr(settings: PoeStringSettings): string {
    const {ten, fifteen} = settings.movement;
    let result = "";
    if (ten) result = addExpression(result, "nne");
    if (fifteen) result = addExpression(result, "rint");
    return result;
}

export function gemStr(settings: PoeStringSettings): string  {
    const {lightning, chaos, cold, fire, phys, any} = settings.plusGems;
    if (any || (lightning && chaos && cold && fire && phys)) return "skill"
    let result = "";
    if (fire) result = addExpression(result, "Flam");
    if (cold) result = addExpression(result, "Sing");
    if (lightning) result = addExpression(result, "hund");
    if (chaos) result = addExpression(result, "Lord");
    if (phys) result = addExpression(result, "itho");
    return result;
}