import numpy as np
from matplotlib import pyplot as plt

x= np.linspace(-10,10,20)
y= x**3 +  2*x**2 + 3*x + 10+ np.random.randn(20)*50

print(y)
#近似式の係数
res1=np.polyfit(x, y, 1)
res2=np.polyfit(x, y, 2)
res3=np.polyfit(x, y, 3)
#近似式の計算
y1 = np.poly1d(res1)(x) #1次
y2 = np.poly1d(res2)(x) #2次
y3 = np.poly1d(res3)(x) #3次

#グラフ表示
plt.scatter(x, y, label='元データ')
plt.plot(x, y1, label='1次')
plt.plot(x, y2, label='2次')
plt.plot(x, y3, label='3次')
plt.legend()
plt.show()
