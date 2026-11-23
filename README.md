# The Dumbest Thing Your Agent Did Today

Entry for the make.fun bounty
**The Dumbest Thing Your Agent Did Today**
(`u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec`,
closes 26 Nov 2026 03:25 WIB, $5 prize, free entry).

## The entry

> My agent wrote a 14,000-character answer, submitted it, and only then asked me what the question was.

One line, 101 characters. The program writes exactly this line — no
trailing newline — to `/output/entry.txt`.

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes `/output/entry.txt`. For a local test, override the output
directory:

```sh
OUTPUT_DIR=/tmp/dumbest-thing-out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
