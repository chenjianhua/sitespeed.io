./bin/sitespeed.js --preScript bi_login_script.js http://10.20.31.108:31670 --plugins.add analysisstorer --plugins.add /lighthouse -n 1 -b chrome --spa --multi


./bin/sitespeed.js --preScript bi_login_script.cjs http://10.20.31.108:31670 --plugins.add analysisstorer --plugins.add @sitespeed.io/plugin-lighthouse -n 1 -b chrome --spa --multi


docker run --shm-size=1g --env TZ="Asia/Shanghai" --rm -v "/Users/cjh/CODE/性能分析/数据可视化:/sitespeed.io" docker.io/library/my-custom-sitespeedio   --preScript bi_login_script.js http://10.20.31.108:31670 --plugins.add analysisstorer --plugins.add @sitespeed.io/plugin-lighthouse -n 1 -b chrome --cpu --spa --multi


docker run --shm-size=1g --env TZ="Asia/Shanghai" --rm -v "/Users/cjh/CODE/性能分析/数据可视化:/sitespeed.io" docker.io/library/my-custom-sitespeedio   --preScript bi_login_script.js http://10.20.31.108:31670 --plugins.add analysisstorer --plugins.add @sitespeed.io/plugin-lighthouse  --lighthouse.flags lighthouse.flag.json -n 1 -b chrome --cpu --spa --multi

