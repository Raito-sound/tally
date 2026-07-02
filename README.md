# TALLY — Text Editor / Analyzer

日本語テキストのためのブラウザ完結型エディタ／アナライザ。単一HTMLファイル、依存なし、データはローカルのみ。

**A single-file, browser-based text editor and analyzer for Japanese writing.** No installation, no server, no data leaves your machine.

## 使い方 / Usage

`index.html` をブラウザで開くだけ。 / Just open `index.html` in your browser.

## 機能 / Features

- **文字数カウント** — 総字数・空白除く・改行除く・CJKのみ計数
- **モーラ（拍）計数** — 作詞向け。行末に行別モーラ数を表示、小書き母音の扱いも切替可能
- **モード別分析** — 日本語原稿 / 作詞 / SNS(X) / YouTube概要欄 / 汎用
- **X実効文字数** — 全角=2、URL=23 の実効カウント、タグ・メンション・絵文字集計
- **読みやすさ指標** — 平均文長・漢字比率・長文警告
- **目標文字数メーター** — 進捗率をバー表示
- **スナップショット** — 前回比の増減を記録
- **一時保存スロット ×3** — localStorage に保持
- **ファイルを開く** — OPEN ボタン / ドラッグ&ドロップ（BOM除去・改行正規化）
- **書き出し** — UTF-8 BOM + CRLF の .txt（Windows / Mac 両対応で文字化けなし）

## プライバシー / Privacy

すべての処理はブラウザ内で完結します。テキストが外部に送信されることはありません。

All processing happens locally in your browser. Your text is never sent anywhere.

## License

MIT — © Lisa Records Co., Ltd. / RAITO
