# 言語指定
calectl set-locale LANG=en_US.utf8
sudo systemctl stop firewalld
# node.jsのインストール
sudo yum install -y epel-release
sudo yum install -y nodejs npm
#system update
sudo yum install -y nkf
sudo yum install -y git
sudo yum update
