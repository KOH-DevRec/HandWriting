import pandas as pd
import numpy as np
from sklearn.cluster import KMeans

def main():
    # CSVファイルを取得
    data1 = pd.read_csv("hiragana.csv")
    data2 = data1.drop('CharID', axis=1)
    data2 = data2.dropna(how='all', axis=1)
    # Pandasデータフレームをnumpy配列に変換
    # k-means法でクラスタ分析（クラスタ数は3）
    result = KMeans(n_clusters=20).fit_predict(data2)
    data1['cluster_id'] = result
    data1.to_csv("hiragana2.csv")
if __name__ == "__main__":
    main()
