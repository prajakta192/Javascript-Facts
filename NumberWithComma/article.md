# toLcaleString()
The JavaScript **'toLocaleString()'** method is from JavaScript **Date()** and Number **objects()**.
To Format a number / date into locale-sensitive(string) value , using locale settings.

## Syntax
*number*.toLocaleString(locales, options)

### Parameters
<*locales* : optional OR 
      a **'string'** value that represents the locale language and date format you want to use. The language specific format to use => e.g *en-IN, de-CH, fi-FI* etc.
  *option : optional OR
        object of options to customize the returned value    

**Note** : When you don’t pass (empty) any valid locales parameter, JavaScript will use the default locale from your computer.

### Return Type
**toLocaleString()** method returns a **string**. so you can't call Date()/ Number() object on return value. as it will give TypeError / NaN

# What is Intl in javascript

Intl object is an namespace for **ECMAscript Internationalization API**. for => 
1] language sensitive string comparison.

2] Number formatting.

3] date and time formatting. 

**Intl.NumberFormat()**  constructor creates *Intl.NumberFormat* objects that format Number/ Date to locale language.
## Syntax 
new Intl.NumberFormat().format(*number*)

### Return Type
*String*
**Note**: 

[for more Info refer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)

