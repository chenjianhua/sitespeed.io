module.exports = async function (context, commands) {
  const By = context.selenium.webdriver.By
  const webdriver = context.selenium.driver
  
  // 未登录情况下跳转到sso地址页面Url
  await commands.navigate(
    "http://10.20.31.106:30005/OSPIam/oauth/v20/authorize?response_type=code&client_id=ecba9c840f54409185292746baa3d870&scope=read&state=PywQGnjWCsAoKhnwEIyUUWhX3pOuPBi09pI3KhH-77I%3D&redirect_uri=http://10.20.31.108:31670/login/oauth2/code/ospiam#/login"
  );
  try {
    // 截个图，截图名称取为login1
    await commands.screenshot.take("login1");
    // 填写用户名
    await commands.addText.byId('admin', 'username');
    // 填写密码
    await commands.addText.byId('123qweASD', 'password');

    //开始收集性能指标
    console.info("驾驶舱-分析");
    
    // await commands.measure.start("page1");
    // 截个图，截图名称取为login2
    await commands.screenshot.take("login2");

    await commands.click.byClassNameAndWait("login-form-button");

    await commands.screenshot.take("login2");

    //等待5秒
    await commands.wait.byTime(10000);

    //结束收集login
    // await commands.measure.stop();
    

    return;
  } catch (e) {
    // We try/catch so we will catch if the the input fields can't be found
    // The error is automatically logged in Browsertime an rethrown here
    // We could have an alternative flow ...
    // else we can just let it cascade since it caught later on and reported in
    // the HTML
    throw e;
  }
}