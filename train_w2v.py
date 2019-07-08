import numpy as np
import pandas as pd
import gensim
import nltk
from utils import preprocess_articles

print("Dependencies downloaded successfully!")

file = pd.read_csv('./final_result.csv')
print("Csv read successfully!")

articles = preprocess_articles(file)

#Create Word2Vec Model
w2v = gensim.models.word2vec.Word2Vec(sentences=articles,workers=32)
print("Word2Vec Model finished training")

w2v.save('w2v_final')
w2v.wv.save_word2vec_format("w2v_final_word2vec_format")
print("Model saved successfully!")
