import numpy as np
from scipy import interpolate
import pandas as pd
import matplotlib.pyplot as plt
import csv
import glob
import os
def flatten(nested_list):
    return [e for inner_list in nested_list for e in inner_list]
i = 1
c = list()
h = list()
d = list()
char = 'a'
char_count =1;
k = 1

l = 1
kk=1
while k < 501:
    h.append('x{0}'.format(k))
    h.append('y{0}'.format(k))
    k = k + 1
h.append('\n')

h.insert(0,'CharID')
char_csv = pd.read_csv('Hiragana_dataset.csv', header=None, usecols=[1]).values.tolist()
char_count_csv = pd.read_csv('Hiragana_dataset.csv', header=None, usecols=[2]).values.tolist()
char = list(map(str,char_csv[kk]))
char_count = list(map(int, char_count_csv[kk]))
while kk < 46:
    i = 0
    while i < char_count[0]:
        #行読み取り
        print("start{0}".format(char[kk-1]),i)
        lst1 = pd.read_csv('csv/{0}/{1}_1_{2}.csv'.format(char[kk-1],char[kk-1],char_count[0]), header=None, usecols=[0]).values.tolist()
        lst2 = pd.read_csv('csv/{0}/{1}_1_{2}.csv'.format(char[kk-1],char[kk-1],char_count[0]), header=None, usecols=[1]).values.tolist()
        #ndarray処理によりx座標、y座標を格納（python標準リストに対する処理はできない）
        x = np.array(flatten(lst1[1:]),dtype='float32')
        y = np.array(flatten(lst2[1:]),dtype='float32')

        tck,u = interpolate.splprep([x,y],k=3,s=0)
        u=np.linspace(0,1,num=500,endpoint=True)
        out = interpolate.splev(u,tck)
        a = out[0]
        b = out[1]
        c.insert(0,'{0}{1}'.format(char,i))
        j = 0
        while j < len(a):
            c.append(a[j])
            c.append(b[j])
            j = j + 1

        d.insert(i-1,c)
        c = list()
        i = i + 1
    print("end",i)
    k = k + 1
    char_count = list(map(int, char_count_csv[kk]))

d.insert(0,h)

f = open('data.csv', 'w')
writer = csv.writer(f, lineterminator='\n')
writer.writerows(np.array(d))
f.close()

print('データ数ｗ = ',len(d))

#f = open('data.csv', 'a')
#writer = csv.writer(f, lineterminator=',')
#writer.writerows(map(lambda x: [x], np.array(c).T))
#f.close()
