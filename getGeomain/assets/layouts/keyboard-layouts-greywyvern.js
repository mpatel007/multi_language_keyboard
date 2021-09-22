/*! Layouts from greywyvern.com *//*
 All layouts in this file have been generated & modified from the
 Javascript Graphical / Virtual Keyboard Interface
 (http://www.greywyvern.com/code/javascript/keyboard)

 Copyright (c) 2014 - GreyWyvern
 Licenced for free distribution under the BSDL

  *** action key language translations not included ***

  Arabic keyboard layout by Srinivas Reddy
  Armenian Eastern and Western keyboard layouts by Hayastan Project (www.hayastan.co.uk)
  Assamese keyboard layout by Kanchan Gogoi
  Basic Japanese Hiragana/Katakana keyboard layout by Damjan
  Belarusian and Serbian Cyrillic keyboard layouts by Evgeniy Titov
  Bosnian/Croatian/Serbian Latin/Slovenian keyboard layout by Miran Zeljko
  Bulgarian BDS keyboard layout by Milen Georgiev
  Bulgarian Phonetic keyboard layout by Samuil Gospodinov
  Burmese keyboard layout by Cetanapa
  Danish keyboard layout by Verner Kjærsgaard
  Dari keyboard layout by Saif Fazel
  Dutch and US Int'l keyboard layouts by jerone
  Farsi (Persian) keyboard layout by Kaveh Bakhtiyari (www.bakhtiyari.com)
  French keyboard layout by Hidden Evil
  German keyboard layout by QuHno
  Hungarian keyboard layout by Antal Sall 'Hiromacu'
  Italian and Spanish (Spain) keyboard layouts by dictionarist.com
  Kazakh keyboard layout by Alex Madyankin
  Khmer keyboard layout by Sovann Heng (km-kh.com)
  Kurdish keyboard layout by Ara Qadir
  Lithuanian and Russian keyboard layouts by Ramunas
  Macedonian keyboard layout by Damjan Dimitrioski
  Pashto keyboard layout by Ahmad Wali Achakzai (qamosona.com)
  Pinyin keyboard layout from a collaboration with Lou Winklemann
  Polish Programmers layout by moose
  Romanian keyboard layout by Aurel
  Slovak keyboard layout by Daniel Lara (www.learningslovak.com)
  Swedish keyboard layout by Håkan Sandberg
  Turkish keyboard layouts by offcu
  Ukrainian keyboard layout by Dmitry Nikitin
  Urdu Phonetic keyboard layout by Khalid Malik
  Yiddish (Yidish Lebt) keyboard layout by Simche Taub (jidysz.net)
  Yiddish keyboard layout by Helmut Wollmersdorfer
*/
/*
 Zero-width characters
 U+200B ZWSP
 U+200C ZWNJ
 U+200D ZWJ
 U+200E LEFT-TO-RIGHT MARK
 U+200F RIGHT-TO-LEFT MARK
*/

/* Arabic Keyboard Layout (\u0627\u0644\u0639\u0631\u0628\u064a\u0629) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ar"] = {
	"name":"Arabic (\u0627\u0644\u0639\u0631\u0628\u064a\u0629)",
	"rtl":true,
	"normal":[
		"\u0630 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u0636 \u0635 \u062b \u0642 \u0641 \u063a \u0639 \u0647 \u062e \u062d \u062c \u062f \\",
		"\u0634 \u0633 \u064a \u0628 \u0644 \u0627 \u062a \u0646 \u0645 \u0643 \u0637 {enter}",
		"{s} \u0626 \u0621 \u0624 \u0631 \u0644 \u0649 \u0629 \u0648 \u0632 \u0638 {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"\u0651  ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} \u064e \u064b \u064f \u064c \u0644 \u0625 \u2018 \u00f7 \u00d7 \u061b < > |",
		"\u0650 \u064d ] [ \u0644 \u0623 \u0640 \u060c / : \" {enter}",
		"{s} ~ \u0652 } { \u0644 \u0622 \u2019 , . \u061f {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} \u00a1 \u00b2 \u00b3 \u00a4 \u20ac \u00bc \u00bd \u00be \u2018 \u2019 \u00a5 \u00d7 {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} \u00b9 {empty} {empty} \u00a3 {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u00f7 {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty}",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {s}",
		"{space} {alt} {accept}"
	],
	"lang":["ar"]
};
/* Chinese Bopomofo IME Keyboard Layout (\u4e2d\u6587\u6ce8\u97f3\u7b26\u53f7) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["zh-Bopo"] = {
	"name":"Chinese Bopomofo IME (\u4e2d\u6587\u6ce8\u97f3\u7b26\u53f7)",
	"normal":[
		"\u20AC \u3105 \u3109 \u02C7 \u02CB \u3113 \u02CA \u02D9 \u311A \u311E \u3122 \u3126 = {b}",
		"{t} \u3106 \u310A \u310D \u3110 \u3114 \u3117 \u3127 \u311B \u311F \u3123 [ ] \\",
		"\u3107 \u310B \u310E \u3111 \u3115 \u3118 \u3128 \u311C \u3120 \u3124 ' {enter}",
		"{s} \u3108 \u310C \u310F \u3112 \u3116 \u3119 \u3129 \u311D \u3121 \u3125 {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ) ( _ + {b}",
		"{t} q w e r t y u i o p { } |",
		"a s d f g h j k l : \" {enter}",
		"{s} z x c v b n m < > ? {s}",
		"{space} {accept}"
	],
	"lang":["zh-Bopo"]
};
/* Chinese Cangjie IME Keyboard Layout (\u4e2d\u6587\u4ed3\u9889\u8f93\u5165\u6cd5) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["zh"] = {
	"name":"Chinese Cangjie IME (\u4e2d\u6587\u4ed3\u9889\u8f93\u5165\u6cd5)",
	"normal":[
		"\u20AC 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u624B \u7530 \u6C34 \u53E3 \u5EFF \u535C \u5C71 \u6208 \u4EBA \u5FC3 [ ] \\",
		"\u65E5 \u5C38 \u6728 \u706B \u571F \u7AF9 \u5341 \u5927 \u4E2D ; ' {enter}",
		"{s} \uFF3A \u96E3 \u91D1 \u5973 \u6708 \u5F13 \u4E00 , . / {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ) ( _ + {b}",
		"{t} q w e r t y u i o p { } |",
		"a s d f g h j k l : \" {enter}",
		"{s} z x c v b n m < > ? {s}",
		"{space} {accept}"
	],
	"lang":["zh"]
};
/* Hindi Keyboard Layout (\u0939\u093f\u0902\u0926\u0940) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["hi"] = {
	"name":"Hindi (\u0939\u093f\u0902\u0926\u0940)",
	"normal":[
		"{ZWJ} 1 2 3 4 5 6 7 8 9 0 - \u0943 {b}",
		"{t} \u094C \u0948 \u093E \u0940 \u0942 \u092C \u0939 \u0917 \u0926 \u091C \u0921 \u093C \u0949",
		"\u094B \u0947 \u094D \u093F \u0941 \u092A \u0930 \u0915 \u0924 \u091A \u091F {enter}",
		"{s} {empty} \u0902 \u092E \u0928 \u0935 \u0932 \u0938 , . \u092F {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"{ZWNJ} \u090D \u0945 \u094D\u0930 \u0930\u094D \u091C\u094D\u091E \u0924\u094D\u0930 \u0915\u094D\u0937 \u0936\u094D\u0930 ( ) \u0903 \u090B {b}",
		"{t} \u0914 \u0910 \u0906 \u0908 \u090A \u092D \u0919 \u0918 \u0927 \u091D \u0922 \u091E \u0911",
		"\u0913 \u090F \u0905 \u0907 \u0909 \u092B \u0931 \u0916 \u0925 \u091B \u0920 {enter}",
		"{s} {empty} \u0901 \u0923 {empty} {empty} \u0933 \u0936 \u0937 \u0964 \u095F {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"` \u0967 \u0968 \u0969 \u096A \u096B \u096C \u096D \u096E \u096F \u0966 - = {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} [ ] \\",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} ; ' {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} , . / {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"~ ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} { } |",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} : \" {enter}",
		"{s} {empty} \u0950 {empty} {empty} {empty} {empty} {empty} < > ? {s}",
		"{space} {alt} {accept}"
	],
	"lang":["hi"]
};
/* Japanese Hiragana/Katakana Keyboard Layout (\u65e5\u672c\u8a9e) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ja"] = {
	"name":"Japanese Hiragana/Katakana (\u65e5\u672c\u8a9e)",
	"normal":[
		"\uff5e \u306c \u3075 \u3042 \u3046 \u3048 \u304a \u3084 \u3086 \u3088 \u308f \u307b \u3078 {b}",
		"{t} \u305f \u3066 \u3044 \u3059 \u304b \u3093 \u306a \u306b \u3089 \u305b \u3001 \u3002 \uffe5 \u309B",
		"\u3061 \u3068 \u3057 \u306f \u304d \u304f \u307e \u306e \u308c \u3051 \u3080 {enter}",
		"{s} \u3064 \u3055 \u305d \u3072 \u3053 \u307f \u3082 \u306d \u308b \u3081 \u308d {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"{empty} \u30cc \u30d5 \u30a2 \u30a6 \u30a8 \u30aa \u30e4 \u30e6 \u30e8 \u30ef \u30db \u30d8 {b}",
		"{t} \u30bf \u30c6 \u30a4 \u30b9 \u30ab \u30f3 \u30ca \u30cb \u30e9 \u30bb \u3001 \u3002 {empty} \"",
		"\u30c1 \u30c8 \u30b7 \u30cf \u30ad \u30af \u30de \u30ce \u30ec \u30b1 \u30e0 {enter}",
		"{s} \u30c4 \u30b5 \u30bd \u30d2 \u30b3 \u30df \u30e2 \u30cd \u30eb \u30e1 \u30ed {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"{empty} {empty} {empty} \u3041 \u3045 \u3047 \u3049 \u3083 \u3085 \u3087 \u3092 \u30fc \uff3e {b}",
		"{t} {empty} {empty} \u3043 {empty} {empty} {empty} {empty} {empty} {empty} {empty} \uff20 \u300c {empty} \uffe5",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \uff1b \uff1a \u300d {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u3001 \u3002 \u30fb {empty} {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"{empty} {empty} {empty} \u30a1 \u30a5 \u30a7 \u30a9 \u30e3 \u30e5 \u30e7 \u30f2 \uff1d \uff5e {b}",
		"{t} {empty} {empty} \u30a3 {empty} {empty} {empty} {empty} {empty} {empty} {empty} \u2018 \uff5b \uff0a \uff5c",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \uff0b \u30f6 \uff5d {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} \uff1c \uff1e \uff1f \uff3f {s}",
		"{space} {alt} {accept}"
	],
	"lang":["ja"]
};
/* Korean Keyboard Layout (\ud55c\uad6d\uc5b4) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ko"] = {
	"name":"Korean (\ud55c\uad6d\uc5b4)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = \u20A9 {b}",
		"{t} \u1107 \u110C \u1103 \u1100 \u1109 \u116D \u1167 \u1163 \u1162 \u1166 [ ]",
		"\u1106 \u1102 \u110B \u1105 \u1112 \u1169 \u1165 \u1161 \u1175 ; ' {enter}",
		"{s} \u110F \u1110 \u110E \u1111 \u1172 \u116E \u1173 , . / {s}",
		"{space} {alt} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ) ( _ + | {b}",
		"{t} \u1108 \u110D \u1104 \u1101 \u110A {empty} {empty} {empty} \u1164 \u1168 { }",
		"{empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} {empty} : \" {enter}",
		"{s} {empty} {empty} {empty} {empty} {empty} {empty} {empty} < > ? {s}",
		"{space} {alt} {accept}"
	],
	"alt":[
		"` 1 2 3 4 5 6 7 8 9 0 - = \u20A9 {b}",
		"{t} q w e r t y u i o p [ ]",
		"a s d f g h j k l ; ' {enter}",
		"{s} z x c v b n m , . / {s}",
		"{space} {alt} {accept}"
	],
	"alt-shift":[
		"~ ! @ # $ % ^ & * ) ( _ + | {b}",
		"{t} Q W E R T Y U I O P { }",
		"A S D F G H J K L : \" {enter}",
		"{s} Z X C V B N M < > ? {s}",
		"{space} {alt} {accept}"
	],
	"lang":["ko"]
};
/* Russian Keyboard Layout (\u0420\u0443\u0441\u0441\u043a\u0438\u0439) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["ru"] = {
	"name":"Russian (\u0420\u0443\u0441\u0441\u043a\u0438\u0439)",
	"normal":[
		"\u0451 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} \u0439 \u0446 \u0443 \u043A \u0435 \u043D \u0433 \u0448 \u0449 \u0437 \u0445 \u044A \\",
		"\u0444 \u044B \u0432 \u0430 \u043F \u0440 \u043E \u043B \u0434 \u0436 \u044D {enter}",
		"{s} / \u044F \u0447 \u0441 \u043C \u0438 \u0442 \u044C \u0431 \u044E . {s}",
		"{space} {accept}"
	],
	"shift":[
		"\u0401 ! \" \u2116 ; % : ? * ( ) _ + {b}",
		"{t} \u0419 \u0426 \u0423 \u041A \u0415 \u041D \u0413 \u0428 \u0429 \u0417 \u0425 \u042A /",
		"\u0424 \u042B \u0412 \u0410 \u041F \u0420 \u041E \u041B \u0414 \u0416 \u042D {enter}",
		"{s} | \u042F \u0427 \u0421 \u041C \u0418 \u0422 \u042C \u0411 \u042E , {s}",
		"{space} {accept}"
	],
	"lang":["ru"]
};
/* US Standard Keyboard Layout (US Standard) * generated from http://www.greywyvern.com/code/javascript/keyboard layouts */
jQuery.keyboard.layouts["en-us"] = {
	"name":"US Standard (US Standard)",
	"normal":[
		"` 1 2 3 4 5 6 7 8 9 0 - = {b}",
		"{t} q w e r t y u i o p [ ] \\",
		"a s d f g h j k l ; ' {enter}",
		"{s} z x c v b n m , . / {s}",
		"{space} {accept}"
	],
	"shift":[
		"~ ! @ # $ % ^ & * ( ) _ + {b}",
		"{t} Q W E R T Y U I O P { } |",
		"A S D F G H J K L : \" {enter}",
		"{s} Z X C V B N M < > ? {s}",
		"{space} {accept}"
	],
	"lang":["en-us"]
};
