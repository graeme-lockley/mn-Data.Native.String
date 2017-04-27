const Maybe = mrequire("core:Data.Native.Maybe:1.0.0");


//= at :: Int -> String -> Maybe String
const at = i => s =>
    i < s.length
        ? Maybe.Just(s[i])
        : Maybe.Nothing;
assumptionEqual(at(0)("Hello"), Maybe.Just("H"));
assumptionEqual(at(1)("Hello"), Maybe.Just("e"));
assumptionEqual(at(5)("Hello"), Maybe.Nothing);


//= indexOfFrom :: Int -> String -> String  -> Maybe Int
const indexOfFrom = pattern => start => s => {
    const index = s.indexOf(pattern, start);

    return index === -1
        ? Maybe.Nothing
        : Maybe.Just(index);
};
assumptionEqual(indexOfFrom("world")(2)("hello"), Maybe.Nothing);
assumptionEqual(indexOfFrom("hello")(2)("hello"), Maybe.Nothing);
assumptionEqual(indexOfFrom("ll")(2)("hello"), Maybe.Just(2));



//= indexOf :: String -> String -> Maybe Int
const indexOf = pattern => s =>  {
    const index = s.indexOf(pattern);

    return index === -1
        ? Maybe.Nothing
        : Maybe.Just(index);
};
assumptionEqual(indexOf("world")("hello"), Maybe.Nothing);
assumptionEqual(indexOf("hello")("hello"), Maybe.Just(0));
assumptionEqual(indexOf("ll")("hello"), Maybe.Just(2));



//= length :: String -> Int
const length = s =>
    s.length;


//= match :: RegExp -> String -> Maybe (Array String)
const match = regexp => s => {
    const match = s.match(regexp);
    return match
        ? Maybe.Just(match)
        : Maybe.Nothing;
};


//= split :: RegExp -> String -> Array String
const split = regex => s =>
    s.split(regex);


//= startsWith :: String -> String -> Bool
const startsWith = prefix => s =>
    s.startsWith(prefix);


//= substring :: Int -> Int -> String -> String
const substring = start => end => s =>
    s.substring(start, end);


//= substringFrom :: Int -> String -> String
const substringFrom = start => s =>
    s.substring(start);


//= trim :: String -> String
const trim = s =>
    s.trim();


module.exports = {
    at,
    indexOf,
    indexOfFrom,
    length,
    match,
    split,
    startsWith,
    substring,
    substringFrom,
    trim
};