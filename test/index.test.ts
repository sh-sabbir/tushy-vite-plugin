import { describe, expect, it } from 'vitest'
import path from 'node:path'
import { build, normalizePath } from 'vite'
import shopify from '../src'
import fs from 'node:fs/promises'

describe('tushy-vite-plugin', () => {
  it('builds out .liquid files for production', async () => {
    await build({
      logLevel: 'silent',
      plugins: [
        shopify({
          themeRoot: path.join(__dirname, '__fixtures__'),
          sourceCodeDir: path.join(__dirname, '__fixtures__', 'frontend'),
          snippetFile: 'vite-tag.liquid'
        })
      ],
      resolve: {
        alias: {
          '@@': normalizePath(path.resolve(path.join(__dirname, '__fixtures__', 'resources', 'js')))
        }
      }
    })

    const tagsHtml = await fs.readFile(path.join(__dirname, '__fixtures__', 'snippets', 'vite-tag.liquid'), { encoding: 'utf8' })

    expect(tagsHtml).toMatchSnapshot()
  })
})
