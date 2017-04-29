

### at

```haskell
at :: Int -> String -> Maybe String
```

The native string operations rewritten as functions.

```haskell
at(0)("Hello") == Maybe.Just("H")
```
```haskell
at(1)("Hello") == Maybe.Just("e")
```
```haskell
at(5)("Hello") == Maybe.Nothing
```


### indexOfFrom

```haskell
indexOfFrom :: Int -> String -> String  -> Maybe Int
```


```haskell
indexOfFrom("world")(2)("hello") == Maybe.Nothing
```
```haskell
indexOfFrom("hello")(2)("hello") == Maybe.Nothing
```
```haskell
indexOfFrom("ll")(2)("hello") == Maybe.Just(2)
```


### indexOf

```haskell
indexOf :: String -> String -> Maybe Int
```


```haskell
indexOf("world")("hello") == Maybe.Nothing
```
```haskell
indexOf("hello")("hello") == Maybe.Just(0)
```
```haskell
indexOf("ll")("hello") == Maybe.Just(2)
```


### length

```haskell
length :: String -> Int
```




### match

```haskell
match :: RegExp -> String -> Maybe (Array String)
```




### split

```haskell
split :: RegExp -> String -> Array String
```




### startsWith

```haskell
startsWith :: String -> String -> Bool
```




### substring

```haskell
substring :: Int -> Int -> String -> String
```




### substringFrom

```haskell
substringFrom :: Int -> String -> String
```




### trim

```haskell
trim :: String -> String
```




### replace

```haskell
replace :: String -> String -> String
```

Replaces the first occurrence of the first argument with the second argument.

```haskell
replace("l")("L")("hello") == "heLlo"
```
```haskell
replace("*")("=")("he**o") == "he=*o"
```


### replaceAll

```haskell
replaceAll :: String -> String -> String
```

Replaces all occurrence of the first argument with the second argument.

```haskell
replaceAll("l")("L")("hello") == "heLLo"
```
```haskell
replaceAll("*")("=")("he**o") == "he==o"
```



## Dependencies

* [Data.Native.Maybe (1.3.0)](https://github.com/graeme-lockley/mn-Data.Native.Maybe)