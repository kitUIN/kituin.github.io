#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo 'kulujun.cf' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:kitUIN/kitUIN.github.io.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://kitUIN:${GITHUB_TOKEN}@github.com/kitUIN.github.io.git
  git config --global user.name "kitUIN"
  git config --global user.email "kulujun@gmail.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f git@github.com:kitUIN/kitUIN.github.io.git master:gh-pages

cd - # 退回开始所在目录
rm -rf docs/.vuepress/diste
