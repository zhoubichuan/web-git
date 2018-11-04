# 新建文件和文件夹

## 返回上一级

```
cd ..
```

## 新建文件夹

```
md [文件夹名称]
```

## d 盘下新建文件夹

```
md d:\[文件夹名称]
```

## 进入文件夹

```
cd [文件夹名称]
```

## 新建文件

```
cd.>[文件名称]
```

## 列出文件夹下所有文件及文件夹

```
dir
```

## 新建目录

```
mkdir [目录名称]
```

# 删除文件和文件夹

## 删除文件

```
del [文件夹名称]
```

## 删除所有后缀为.txt 的文件

```
del *.txt
```

## 删除空文件夹

```
rd [文件夹名称]
```

## 删除 D 盘里的 test 文件夹

```
rd /s D:\[文件夹名称]
```

## 删除此文件夹下所有文件

```
rd [文件夹名称]/s
```

## 删除目录

```
rm -rf [目录名称]
```

## 显示当前目录

```
pwd
```

## 查看目录

```
ls
```

## 查看目录（包括隐藏目录）

```
ls -al
```

# 配置列表部分

## 增加配置列表

```
git config --global zhou.name '123'
```

## 改配置列表

```
git config --global --replace-all user.email "输入你的邮箱"
git config --global --replace-all user.email "输入你的用户名"
```

## 删配置列表

```
git config --global --unset zhou.name
```

## 查看配置列表

```
git config --list/git config -l
```

## git 工作流程：工作区-->暂存区-->历史区

# echo 输出

## 清空并写入

```
echo [要写入的内容] > [要写入的文件]
```

## 文件尾部追加内容

```
echo [要写入的内容] >> [要写入的文件]
```

## 查看文件内容

```
cat [文件名称]
```

# git 提交流程

## 工作区-->暂存区

* 初始化 git 仓库

```
git init
```

* 将工作区修改的内容添加到暂存区(单个文件、整个目录、所有文件)

```
git add [文件名称]/git add ./git add *
```

## 暂存区-->历史区

* 将暂存区中修改的内容提交到历史区（单个文件、全部文件）

```
git commit [文件名称] -m '提交的注释'/git commit -m '提交注释'
```

* 没有添加 -m
  * i 进入编辑模式
  * :wq 保存并退出
  * ：ql！ 退出

## 创建文件

```
touch [文件名称]
```

## 查看内容状态

* 查看工作区和暂存区那些文件修改（红色），查看暂存区和历史区那些文件修改（绿色）

```
git status -s/git status
```

* 查看工作区和暂存区内容差异

```
git diff
```

* 查看工作区和历史区内容差异

```
git diff --cached
```

* 查看历史区

```
git log/git log --oneline
```

## 回退（git 没有关闭）

* 回退所有区域

```
git reset --hard
```

* 回退历史区和暂存区

```
git reset --mixed
```

* 回退历史区

```
git reset --soft
```

## 覆盖

* 把历史区重置到(上一个提交、上上个提交、指定编号)

```
git reset --hard HEAD^/git reset --hard HEAD^^/git reset --hard HEAD@{编号}
```

* 把历史区重置到指定版本

```
git reset --hard [编号]
```

* 查看历史区版本号

```
git reflog
```

* 用暂存区的内容覆盖本地工作区的内容（单个文件、所有文件）

```
git checkout -- [文件名称]/git checkout -- .
```

* 用历史区的内容覆盖暂存区的内容

```
git reset HEAD --[文件名称] /git reset HEAD -- .
```

# 分支

* 查看分支

```
git branch
```

* 创建分支

```
git branch [分支名称]
```

* 切换分支

```
git checkout [分支名称]
```

* 合并分支（master 分支没有改动）

```
git merge [分支名称]
```

* 删除分支

```
git branch -d [分支名称]
```

* 创建分支并切换分支

```
git checkout -b [切换的分支名称]
```

* 合并分支（master 分支有更改，和现有的分支冲突）

```
git merge [分支]//出现冲突，代码中去解决冲突
git commit -m '分支合并'
```

* 分支提交日志

```
git log --graph --oneline
```

## 暂存工作内容

* 把当前的工作区和暂存区保存到一个地方，并且用最新的历史区覆盖当前的工作区和暂存区

```
git stash
```

* 创建 bug 分支改 bug，提交后切换 master 分支合并

```
git merge bug
```

* 列出所有的储存区

```
git stash list
```

* 应用不删除

```
git stash apply
```

* 删除

```
git stash drop
```

* 应用删除

```
git stash pop
```
