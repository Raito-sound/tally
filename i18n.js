
'use strict';
const TRANSLATIONS = {
  "原稿・歌詞・概要欄テキストを貼り付け": {
    "ja": "原稿・歌詞・概要欄テキストを貼り付け",
    "en": "Paste drafts, lyrics or descriptions"
  },
  "OPEN": {
    "ja": "開く",
    "en": "OPEN"
  },
  "SNAPSHOT": {
    "ja": "スナップショット",
    "en": "SNAPSHOT"
  },
  "SAVE .txt": {
    "ja": "保存 .txt",
    "en": "SAVE .txt"
  },
  "COPY": {
    "ja": "コピー",
    "en": "COPY"
  },
  "CLEAR": {
    "ja": "クリア",
    "en": "CLEAR"
  },
  "日本語原稿": {
    "ja": "日本語原稿",
    "en": "Japanese draft"
  },
  "作詞": {
    "ja": "作詞",
    "en": "Lyrics"
  },
  "SNS/X": {
    "ja": "Social / X",
    "en": "SNS/X"
  },
  "YT概要欄": {
    "ja": "YT概要欄",
    "en": "YouTube description"
  },
  "汎用": {
    "ja": "汎用",
    "en": "General"
  },
  "CJKのみ計数": {
    "ja": "CJKのみ計数",
    "en": "Count CJK only"
  },
  "行末モーラ": {
    "ja": "行末モーラ",
    "en": "Mora per line"
  },
  "小書ァを1拍": {
    "ja": "小書ァを1拍",
    "en": "Count small vowels separately"
  },
  "空白可視化": {
    "ja": "空白可視化",
    "en": "Show whitespace"
  },
  "目標": {
    "ja": "目標",
    "en": "Target"
  },
  "一時保存": {
    "ja": "一時保存",
    "en": "Temporary storage"
  },
  "空き": {
    "ja": "空き",
    "en": "Empty"
  },
  "空き=本文を退避 / 保持=カーソル位置へ差し戻し": {
    "ja": "空き=本文を退避 / 保持=カーソル位置へ差し戻し",
    "en": "Empty slot: store text / Filled slot: insert at cursor"
  },
  "Characters": {
    "ja": "文字数",
    "en": "Characters"
  },
  "字": {
    "ja": "字",
    "en": " chars"
  },
  "空白除く": {
    "ja": "空白除く",
    "en": "Excl. whitespace"
  },
  "／ 改行除く": {
    "ja": "／ 改行除く",
    "en": " / Excl. line breaks"
  },
  "前回比": {
    "ja": "前回比",
    "en": "Since snapshot"
  },
  "Target": {
    "ja": "目標",
    "en": "Target"
  },
  "Mora": {
    "ja": "モーラ",
    "en": "Mora"
  },
  "作詞モード": {
    "ja": "作詞モード",
    "en": "Lyrics mode"
  },
  "総モーラ数": {
    "ja": "総モーラ数",
    "en": "Total mora"
  },
  "拍": {
    "ja": "拍",
    "en": "beats"
  },
  "行あたり平均": {
    "ja": "行あたり平均",
    "en": "Average per line"
  },
  "最長行 / 最短行": {
    "ja": "最長行 / 最短行",
    "en": "Longest / shortest line"
  },
  "拗音(きゃ)は1拍、促音(っ)・撥音(ん)・長音(ー)は各1拍。漢字は読みが確定しないため計数対象外 ——": {
    "ja": "拗音(きゃ)は1拍、促音(っ)・撥音(ん)・長音(ー)は各1拍。漢字は読みが確定しないため計数対象外 ——",
    "en": "Combined kana (きゃ) count as one mora; っ, ん and ー each count as one. Kanji are excluded because their readings are unknown. Use "
  },
  "歌詞はひらがな表記": {
    "ja": "歌詞はひらがな表記",
    "en": "hiragana lyrics"
  },
  "を前提に、行末の": {
    "ja": "を前提に、行末の",
    "en": " and check "
  },
  "で拍数を表示します。": {
    "ja": "で拍数を表示します。",
    "en": " at each line end for its mora count."
  },
  "Counts": {
    "ja": "内訳",
    "en": "Counts"
  },
  "単語数": {
    "ja": "単語数",
    "en": "Words"
  },
  "行数": {
    "ja": "行数",
    "en": "Lines"
  },
  "段落数": {
    "ja": "段落数",
    "en": "Paragraphs"
  },
  "文数": {
    "ja": "文数",
    "en": "Sentences"
  },
  "Composition": {
    "ja": "文字種",
    "en": "Composition"
  },
  "漢字": {
    "ja": "漢字",
    "en": "Kanji"
  },
  "ひらがな": {
    "ja": "ひらがな",
    "en": "Hiragana"
  },
  "カタカナ": {
    "ja": "カタカナ",
    "en": "Katakana"
  },
  "英数字": {
    "ja": "英数字",
    "en": "Letters / digits"
  },
  "記号": {
    "ja": "記号",
    "en": "Symbols"
  },
  "記号・その他": {
    "ja": "記号・その他",
    "en": "Symbols / other"
  },
  "Readability": {
    "ja": "読みやすさ",
    "en": "Readability"
  },
  "可読性": {
    "ja": "可読性",
    "en": "Japanese text"
  },
  "平均文長": {
    "ja": "平均文長",
    "en": "Average sentence"
  },
  "字/文": {
    "ja": "字/文",
    "en": "chars / sentence"
  },
  "漢字比率": {
    "ja": "漢字比率",
    "en": "Kanji ratio"
  },
  "SNS": {
    "ja": "SNS",
    "en": "Social"
  },
  "X / 概要欄": {
    "ja": "X / 概要欄",
    "en": "X / Description"
  },
  "X実効文字数": {
    "ja": "X実効文字数",
    "en": "X effective count"
  },
  "全角=2,URL=23": {
    "ja": "全角=2,URL=23",
    "en": "Full-width=2, URL=23"
  },
  "ハッシュタグ": {
    "ja": "ハッシュタグ",
    "en": "Hashtags"
  },
  "メンション": {
    "ja": "メンション",
    "en": "Mentions"
  },
  "絵文字": {
    "ja": "絵文字",
    "en": "Emoji"
  },
  "Estimates": {
    "ja": "目安",
    "en": "Estimates"
  },
  "音読時間": {
    "ja": "音読時間",
    "en": "Reading aloud"
  },
  "@400字/分": {
    "ja": "@400字/分",
    "en": "@400 chars/min"
  },
  "原稿用紙": {
    "ja": "原稿用紙",
    "en": "Manuscript pages"
  },
  "400字": {
    "ja": "400字",
    "en": "400 chars"
  },
  "バイト数": {
    "ja": "バイト数",
    "en": "Bytes"
  },
  "MODE": {
    "ja": "モード",
    "en": "MODE"
  },
  "CURSOR": {
    "ja": "カーソル",
    "en": "CURSOR"
  },
  "SEL": {
    "ja": "選択",
    "en": "SEL"
  },
  "ライト/ダーク切替": {
    "ja": "ライト/ダーク切替",
    "en": "Toggle light / dark theme"
  },
  "ファ・ねぇ等の小書き母音を独立1拍として数える": {
    "ja": "ファ・ねぇ等の小書き母音を独立1拍として数える",
    "en": "Count small vowels in kana such as ファ and ねぇ as separate mora"
  },
  "半角␣・全角□・改行↵ を可視化": {
    "ja": "半角␣・全角□・改行↵ を可視化",
    "en": "Show spaces ␣, full-width spaces □ and line breaks ↵"
  },
  "ここにテキストを入力 / 貼り付け…": {
    "ja": "ここにテキストを入力 / 貼り付け…",
    "en": "Type or paste your text here…"
  },
  "枚": {
    "ja": "枚",
    "en": " pages"
  },
  "残り ": {
    "ja": "残り ",
    "en": "Remaining "
  },
  " 超過": {
    "ja": " 超過",
    "en": " over limit"
  },
  "平均文長が長め（": {
    "ja": "平均文長が長め（",
    "en": "Long average sentence ("
  },
  "字）。一文を分割すると読みやすくなります": {
    "ja": "字）。一文を分割すると読みやすくなります",
    "en": " chars). Try splitting sentences."
  },
  "80字超の長文が ": {
    "ja": "80字超の長文が ",
    "en": "Sentences over 80 characters: "
  },
  " 箇所": {
    "ja": " 箇所",
    "en": ""
  },
  "漢字比率が高め（": {
    "ja": "漢字比率が高め（",
    "en": "High kanji ratio ("
  },
  "%）。硬い印象になりがちです": {
    "ja": "%）。硬い印象になりがちです",
    "en": "%). This can make Japanese prose feel formal."
  },
  "文長・漢字比率ともに読みやすい範囲です": {
    "ja": "文長・漢字比率ともに読みやすい範囲です",
    "en": "Sentence length and kanji ratio are within the suggested range for Japanese prose."
  },
  "テキストをクリアしますか？": {
    "ja": "テキストをクリアしますか？",
    "en": "Clear the text?"
  },
  "5MBを超えるファイルは開けません：": {
    "ja": "5MBを超えるファイルは開けません：",
    "en": "Cannot open files larger than 5 MB: "
  },
  "現在のテキストを破棄して「": {
    "ja": "現在のテキストを破棄して「",
    "en": "Discard the current text and open “"
  },
  "」を開きますか？": {
    "ja": "」を開きますか？",
    "en": "”?"
  },
  "ファイルの読み込みに失敗しました：": {
    "ja": "ファイルの読み込みに失敗しました：",
    "en": "Failed to read file: "
  },
  "(空白のみ)": {
    "ja": "(空白のみ)",
    "en": "(Whitespace only)"
  },
  "クリックでカーソル位置に差し戻し：": {
    "ja": "クリックでカーソル位置に差し戻し：",
    "en": "Click to insert at cursor: "
  },
  "クリックで現在の本文をここに退避": {
    "ja": "クリックで現在の本文をここに退避",
    "en": "Click to move the current text into this slot"
  },
  "SAVED": {
    "ja": "保存済み",
    "en": "SAVED"
  },
  "COPIED": {
    "ja": "コピー済み",
    "en": "COPIED"
  },
  "OPENED": {
    "ja": "読込済み",
    "en": "OPENED"
  },
  "● SAVED": {
    "ja": "● SAVED",
    "en": "● 保存済み"
  }
};
function resolveLanguage(preference, languages){
  if(preference==='ja'||preference==='en')return preference;
  const primary=languages?.[0]||'en';
  return /^ja(?:-|$)/i.test(primary)?'ja':'en';
}
let languagePreference='auto';
try{const saved=localStorage.getItem('tally.language');if(['auto','ja','en'].includes(saved))languagePreference=saved;}catch{}
let uiLanguage=resolveLanguage(languagePreference,navigator.languages?.length?navigator.languages:[navigator.language]);
function tr(key){return TRANSLATIONS[key]?.[uiLanguage]??key;}
function applyLanguage(){
  uiLanguage=resolveLanguage(languagePreference,navigator.languages?.length?navigator.languages:[navigator.language]);
  document.documentElement.lang=uiLanguage;
  document.title=uiLanguage==='ja'?'TALLY — テキストエディタ・文字数分析':'TALLY — Text Editor / Analyzer';
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=tr(el.dataset.i18n);});
  for(const attr of ['title','placeholder'])document.querySelectorAll('[data-i18n-'+attr+']').forEach(el=>el.setAttribute(attr,tr(el.getAttribute('data-i18n-'+attr))));
  for(const [id,key] of Object.entries({openbtn:'OPEN',snapBtn:'SNAPSHOT',savebtn:'SAVE .txt',copybtn:'COPY',clearbtn:'CLEAR'}))document.getElementById(id).textContent=tr(key);
  document.getElementById('languageSelect').value=languagePreference;
}
function refreshLanguage(){
  applyLanguage();applyModeUI();renderSlots();
  layout.valid=false;analyzeNow();cursorInfo();
}
