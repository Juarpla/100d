#!/usr/bin/env bash
set -euo pipefail

NODE_VERSION="${NODE_VERSION:-$(cat .nvmrc)}"
NODE_BIN="$HOME/.nvm/versions/node/v${NODE_VERSION}/bin"
NODE_PATH_LINE="export PATH=\"$NODE_BIN:\$PATH\""

if [[ ! -x "$NODE_BIN/node" || ! -x "$NODE_BIN/npm" ]]; then
  printf 'Node.js %s is not installed at %s\n' "$NODE_VERSION" "$NODE_BIN" >&2
  exit 1
fi

for profile in "$HOME/.profile" "$HOME/.bashrc"; do
  if [[ -f "$profile" ]] && ! grep -Fq "$NODE_PATH_LINE" "$profile"; then
    printf '\n# Cursor Cloud: use the repository Node.js version\n%s\n' "$NODE_PATH_LINE" >> "$profile"
  fi
done

export PATH="$NODE_BIN:$PATH"
"$NODE_BIN/node" --version
"$NODE_BIN/npm" ci
