import {writeFile} from "fs"
import {join} from "path"
import puppeteer from "puppeteer"
import {promisify} from "util"

import {startServer} from "./server"

const ROOT_PATH = "gen/"

const writeFileAsync = promisify(writeFile)

declare const exportScene: any

const getPath = (path: string): string => join(ROOT_PATH, path)

const bootstrap = async () => {
  const stopServer = await startServer()
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.goto("http://localhost:3000")
  await page.waitForTimeout(1000)

  const data = await page.evaluate(() => exportScene())

  await writeFileAsync(getPath("obj.json"), data)
  await page.screenshot({path: getPath("example.png")})
  await browser.close()
  stopServer()
}

bootstrap()
