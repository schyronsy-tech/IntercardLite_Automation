// SignNewWaiver as pre-requisite
const {Builder, By, until, Key} = require("selenium-webdriver");

(async function addEmployee() {
    var driver = new Builder().forBrowser("chrome").build();
    try {

    // navigate to application
    await driver.get("https://phqatesting.intercardinc.com/IntercardLite/security");

    // add new employee
    await driver.findElement(By.id("btnAdd")).click();

    // general settings
    await driver.findElement(By.css("input[formcontrolname='firstName']")).sendKeys("Brian");
    await driver.findElement(By.css("input[formcontrolname='lastName']")).sendKeys("Navida");
    await driver.findElement(By.css("input[formcontrolname='email']")).sendKeys("bnavida@intercardinc.com");
    await driver.findElement(By.css("input[formcontrolname='phone']")).sendKeys("00325478");
    await driver.findElement(By.className("btn-green btn-mid")).click();

    // employee card
    // await driver.findElement(By.css("input[formcontrolname='card']")).sendKeys("5555");
    // await driver.findElement(By.id("frmBlockedAccess")).click();
    await driver.findElement(By.css("option[value='1']")).click();
    await driver.findElement(By.css("input[formcontrolname='playsAllowedPerPeriod']")).clear();
    await driver.findElement(By.css("input[formcontrolname='playsAllowedPerPeriod']")).sendKeys("5");
    await driver.findElement(By.css("input[formcontrolname='daysPeriod']")).clear();
    await driver.findElement(By.css("input[formcontrolname='daysPeriod']")).sendKeys("5");
    await driver.wait(until.elementLocated(By.css("label[for='aeg1']")), 10000).click();
    await driver.wait(until.elementLocated(By.css("label[for='arg1']")), 10000).click();
    await driver.findElement(By.className("btn-green btn-mid")).click();

    // security group
    await driver.wait(until.elementLocated(By.id("igx-checkbox-23-input")), 10000).click();
    // await driver.findElement(By.className("btn-green btn-mid")).click();

    // stores authorized
    // await driver.wait(until.elementLocated(By.className("igx-checkbox__composite")), 10000).click();

    // save
    // await driver.findElement(By.id("btnSave")).click();

    } finally {
    // await driver.quit();
    }
  })();