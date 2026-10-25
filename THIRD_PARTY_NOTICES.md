# Third-party notices

## Converter core — MIT

`src/vendor/converter.js` adapts the pure decoder/converter section of
[honvl/Majsoul-to-NAGA](https://github.com/honvl/Majsoul-to-NAGA),
commit `0b66fcab200c99f02bc189ed8dc4fe8029c4792d`, `downloadlogsnaga.js`.
That file declares `@license MIT` and credits
[AsaChiri/majsoul-naga](https://github.com/AsaChiri/majsoul-naga), commit
`1eb3c4519716ffa3cfdd0b8b0529aace77913458`, Copyright (c) 2026 AsaChiri.
The supplied MIT license is reproduced in `licenses/AsaChiri-MIT.txt`.

Local modifications: converted the pure functions to ESM; bounded protobuf
reads; tile, rule, event, and incomplete-round validation; support for
`records[]` with recent detail versions; preserved red-tile rule metadata; URI-encoded output for NAGA URL parsing.
No NAGA API submission, cookie access, login automation, userscript UI, or
legacy `index.js` code from that repository is included.

## Integration test data — Apache-2.0

`tests/fixtures/standard-four-player.res.b64` and
`tests/fixtures/standard-four-player.expected.json` are derived from
[kbkn3/MahjongSoul-review-supporter](https://github.com/kbkn3/MahjongSoul-review-supporter),
commit `e0be684b77de1e0be4f0cc76091e6900fa0fd2eb`,
`tests/fixtures/record-raw.base64.txt` and `tests/snapshots/parse.txt`.
The repository is licensed under Apache License 2.0; full text is in
`licenses/Apache-2.0.txt`.

Modifications: response frame/header metadata replaced with a synthetic ID
and pseudonymous names; end time, account identifiers and final-result metadata
omitted; event bytes retained. Expected output includes only the round logs,
not the original identity metadata. These fixtures are for conversion tests,
not for NAGA orders. The source repository attributes the original communication
data to Mahjong Soul (Cat Food Studio / Yostar). No rights to the services,
brands, or underlying gameplay data are asserted here.

No implementation code from MahjongSoul-review-supporter or tensoul is copied.
They were consulted to understand the protocols and compare the output.

## Dependencies

The application has no runtime npm dependencies. Vite, esbuild and Playwright
are development dependencies; their licenses are included in their npm
packages. Consult `package-lock.json` for the exact dependency graph.

Mahjong Soul and NAGA are independent third-party services. This project is
not affiliated with or endorsed by their operators.
