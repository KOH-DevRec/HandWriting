import scipy.interpolate
import numpy as np
import matplotlib.pyplot as plt
import csv
import pandas as pd

def flatten(nested_list):
   return [e for inner_list in nested_list for e in inner_list]

lst1 = pd.read_csv('draw_a2.csv', header=None, usecols=[0]).values.tolist()
lst2 = pd.read_csv('draw_a2.csv', header=None, usecols=[1]).values.tolist()

print(flatten(lst1[1:]))
print(flatten(lst2[1:]))

x = np.array(flatten(lst1[1:]),dtype='float32')
y = np.array(flatten(lst2[1:]),dtype='float32')

#print(x)
#print(y)

xn = np.arange(231.0, 352.1, 0.1)
rp = scipy.interpolate.splrep(x, y, s=0)
yn = scipy.interpolate.splev(xn, rp, der=0)
plt.plot(x, y)
plt.plot(xn, yn)
plt.show()
