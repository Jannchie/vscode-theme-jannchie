import { promises as fs } from 'node:fs'
import process from 'node:process'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeFile(
      './themes/jannchie-dark.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Jannchie Dark',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/jannchie-black.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Jannchie Black',
        black: true,
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/jannchie-dark-soft.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Jannchie Dark Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/jannchie-light.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Jannchie Light',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/jannchie-light-soft.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Jannchie Light Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
  ]))
  .catch(() => process.exit(1))
