.PHONY: dev test lint build fmt preview clean help

help:
	@echo "Targets: dev / test / lint / build / preview / fmt / clean"

dev:
	npm install --no-audit --no-fund
	npm run dev

test:
	npx playwright install --with-deps chromium
	npm run test:e2e

lint:
	npm run lint
	npm run check

build:
	npm run build

preview:
	npm run preview

fmt:
	npm run format

clean:
	rm -rf node_modules dist .astro
